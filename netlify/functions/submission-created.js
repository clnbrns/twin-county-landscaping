// Netlify Function: triggered automatically on every verified form submission.
// Sends Lucas an SMS via Twilio with the lead's details.
//
// Required Netlify environment variables (set in dashboard, NOT in .env):
//   TWILIO_ACCOUNT_SID    — starts with "AC..."
//   TWILIO_AUTH_TOKEN     — 32-char hex string
//   TWILIO_FROM_NUMBER    — your Twilio number in E.164 format, e.g. "+18175551234"
//   LUCAS_PHONE           — recipient in E.164 format, e.g. "+18178189028"
//
// Function name MUST be "submission-created.js" — Netlify auto-invokes this
// exact name on every form submission. No webhook config needed.

export const handler = async (event) => {
  try {
    const payload = JSON.parse(event.body).payload;
    const formName = payload.form_name || 'form';
    const data = payload.data || {};

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_FROM_NUMBER;
    const toNumber = process.env.LUCAS_PHONE;

    if (!accountSid || !authToken || !fromNumber || !toNumber) {
      console.error('[sms] Missing Twilio env vars — skipping send');
      return { statusCode: 200, body: 'Missing env vars; skipped' };
    }

    // Build the SMS body (160 chars is ideal for one segment, but we'll allow more)
    const lines = [`🌱 New TCOS lead (${formName})`];
    if (data.name) lines.push(`Name: ${data.name}`);
    if (data.phone) lines.push(`Phone: ${data.phone}`);
    if (data.email) lines.push(`Email: ${data.email}`);
    if (data.service) lines.push(`Service: ${data.service}`);
    if (data.services) {
      const list = Array.isArray(data.services) ? data.services.join(', ') : data.services;
      lines.push(`Services: ${list}`);
    }
    if (data.budget) lines.push(`Budget: ${data.budget}`);
    if (data.priority) lines.push(`Priority: ${data.priority}`);
    if (data.message) {
      const msg = data.message.length > 200 ? data.message.slice(0, 200) + '…' : data.message;
      lines.push(`Note: ${msg}`);
    }
    const body = lines.join('\n');

    // POST to Twilio's REST API (uses fetch, no SDK install needed)
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const params = new URLSearchParams({ From: fromNumber, To: toNumber, Body: body });
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const text = await res.text();
    if (!res.ok) {
      console.error(`[sms] Twilio ${res.status}: ${text}`);
      // Return 200 anyway so Netlify doesn't retry forever on permanent failures
      return { statusCode: 200, body: `Twilio error ${res.status}` };
    }

    console.log(`[sms] Sent to ${toNumber} for ${formName} from ${data.name || 'unknown'}`);
    return { statusCode: 200, body: 'SMS sent' };
  } catch (err) {
    console.error('[sms] Handler error:', err.message);
    return { statusCode: 200, body: `Error: ${err.message}` };
  }
};
