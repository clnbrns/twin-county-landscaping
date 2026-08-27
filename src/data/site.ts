export const SITE = {
  name: 'Twin County Outdoor Services',
  shortName: 'Twin County',
  url: 'https://twincountyoutdoorservices.com',
  phone: '(817) 818-9028',
  phoneHref: 'tel:+18178189028',
  smsHref: 'sms:+18178189028',
  email: 'twincounty.os@gmail.com',
  city: 'Aledo',
  state: 'TX',
  region: 'Western DFW',
  owner: 'Lucas Bartholomew',
  builtBy: 'Burns Built',
  googleReviewsUrl: 'https://g.page/r/CfDUQXjHz84NEBM/review',
  // Set both once Lucas has the current Google review count and average
  // rating — leave null until then. Fabricated review schema is a Google
  // structured-data policy violation, so aggregateRating stays unrendered
  // (see Base.astro) until these are real numbers.
  reviewCount: null as number | null,
  ratingValue: null as number | null,
  // Set these once you have the IDs from Google. Empty = not rendered.
  gaMeasurementId: 'G-GRN9D34RB8', // Google Analytics 4 Measurement ID
  googleSiteVerification: 'JOkhY9tyjtifKszaE6SsxAF9h5zd0KCzRi7ZSZxRTo4', // GSC HTML meta tag value
  social: {
    facebook: '',
    instagram: '',
  },
};
