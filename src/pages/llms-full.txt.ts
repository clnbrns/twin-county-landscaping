import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { AREAS } from '../data/areas';
import { PROJECTS } from '../data/projects';

export const GET: APIRoute = () => {
  const lines: string[] = [];
  lines.push(`# ${SITE.name} — Full Site Content`);
  lines.push('');
  lines.push(`> Owner-operated landscape and hardscape contractor based in ${SITE.city}, ${SITE.state}. Owner: ${SITE.owner}. Phone: ${SITE.phone} (call or text). Free in-person quotes; detailed written proposals.`);
  lines.push('');
  lines.push(`Site: ${SITE.url}`);
  lines.push('');

  lines.push('## Services');
  lines.push('');
  for (const s of SERVICES) {
    lines.push(`### ${s.name}`);
    lines.push(`URL: ${SITE.url}/services/${s.slug}`);
    lines.push('');
    lines.push(s.intro);
    lines.push('');
    lines.push("What's included:");
    for (const item of s.included) lines.push(`- ${item}`);
    lines.push('');
    if (s.related.length) {
      lines.push(`Related services: ${s.related.join(', ')}`);
      lines.push('');
    }
  }

  lines.push('## Service Areas');
  lines.push('');
  for (const a of AREAS) {
    lines.push(`### ${a.city}, ${a.state}`);
    lines.push(`URL: ${SITE.url}/areas/${a.slug}`);
    lines.push('');
    lines.push(a.intro);
    lines.push('');
    if (a.neighborhoods.length) {
      lines.push(`Neighborhoods served: ${a.neighborhoods.join(', ')}`);
      lines.push('');
    }
  }

  lines.push('## Recent Projects');
  lines.push('');
  for (const p of PROJECTS) {
    lines.push(`### ${p.title}`);
    lines.push(`URL: ${SITE.url}/projects/${p.slug}`);
    lines.push(`Location: ${p.neighborhood ? p.neighborhood + ', ' : ''}${p.city}, TX`);
    lines.push(`Services: ${p.services.join(', ')}`);
    lines.push('');
    lines.push(p.summary);
    lines.push('');
    for (const para of p.story) lines.push(para);
    lines.push('');
  }

  lines.push('## Contact');
  lines.push('');
  lines.push(`Phone (call or text): ${SITE.phone}`);
  lines.push(`Quote request form: ${SITE.url}/contact`);
  lines.push(`Response time: within 24 hours`);
  lines.push(`Process: in-person property walkthrough, then a written proposal with full scope of work.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
