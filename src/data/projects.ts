export type Project = {
  slug: string;
  title: string;
  city: string;
  neighborhood?: string;
  services: string[]; // service slugs
  hero: string; // /images/...
  summary: string;
  story: string[];
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'weatherford-retaining-wall-system',
    title: 'Weatherford Retaining Wall System',
    city: 'Weatherford',
    neighborhood: 'Parker County',
    services: ['retaining-walls', 'hardscaping', 'sod-installation', 'irrigation'],
    hero: '/images/placeholder-project-hero.svg',
    summary:
      'Two retaining walls, integrated staircase, landscape lighting, 10,000 sq ft of fresh sod, and a full irrigation extension.',
    story: [
      '[PLACEHOLDER] Family with significant grade change in the backyard wanted to reclaim the slope as usable space.',
      '[PLACEHOLDER] Designed and built two tiered retaining walls connected by a custom staircase, integrated low-voltage landscape lighting, and laid 10,000 sq ft of fresh sod.',
      '[PLACEHOLDER] Drone footage coming when the job wraps.',
    ],
    gallery: [],
  },
  {
    slug: 'aledo-post-office-house',
    title: 'Aledo Post Office House',
    city: 'Aledo',
    neighborhood: 'Old Town Aledo',
    services: ['landscape-design', 'plant-installation', 'flower-beds'],
    hero: '/images/placeholder-project-hero.svg',
    summary: 'A full front-yard refresh on a historic Aledo property.',
    story: [
      '[PLACEHOLDER] Client wanted a fresh front-yard look that fit the character of the home and the neighborhood.',
      '[PLACEHOLDER] New beds, plant design, and finish work.',
    ],
    gallery: [],
  },
];

export const PROJECT_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));
