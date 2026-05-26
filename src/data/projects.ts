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
    slug: 'benbrook-terraced-garden-walls',
    title: 'Benbrook Terraced Garden Retaining Walls',
    city: 'Benbrook',
    services: ['retaining-walls', 'plant-installation', 'leveling-grading'],
    hero: '/images/placeholder-project-hero.svg',
    summary:
      'A 3-level terraced retaining wall system that turned an unusable sloped backyard into productive raised garden beds for an avid-gardener couple.',
    story: [
      'An older couple in Benbrook called us about their backyard slope. They love to plant and garden, but the grade behind the house was steep enough that they had basically written off the entire back portion of the yard. Nothing they planted held, nothing they built lasted, and the slope made it impossible to actually work the soil.',
      'They were not looking for a decorative wall. They wanted growing space. Real, level, productive garden beds where they could plant tomatoes, flowers, and whatever else they felt like that season — without fighting the hill every time.',
      'We designed a 3-level terraced retaining wall system that climbs the slope in stages. Each tier holds back the grade above it and creates a flat bed for planting. Three levels gave them three distinct zones to work with, which lets them rotate crops, separate sun and shade plantings, and reach every bed without crouching or climbing.',
      'The walls are built from gray retaining wall block, set on a compacted base and locked together with construction adhesive between courses for long-term stability. Gray reads clean and modern against the planting — it disappears once the beds fill in, which is what you want from a retaining wall.',
      'For the growing medium we filled each tier with a custom soil blend: Zoo Poo composted bedding soil mixed with the Bella Flora flower-bed mix. The Zoo Poo brings rich, well-aged organic matter that holds moisture and feeds plants. The Bella Flora mix gives it the drainage and texture you need so roots can actually breathe. Together, it is one of the best beds you can put in for a serious gardener in North Texas clay country.',
      'The build took 3 days on site — wall layout and base prep, block setting and adhesive cure, then soil import and finish work. By the end of week the couple had three new garden beds ready to plant, and a backyard that finally worked the way they wanted it to.',
      'If you have a slope that\'s eating up part of your yard, a terraced retaining wall is one of the highest-leverage things you can build. You stop losing soil to erosion, you gain real usable square footage, and you end up with something genuinely better than a flat lot would have given you.',
    ],
    gallery: [],
  },
  {
    slug: 'benbrook-flagstone-patio',
    title: 'Benbrook Flagstone Patio with Steps',
    city: 'Benbrook',
    services: ['hardscaping', 'leveling-grading'],
    hero: '/images/placeholder-project-hero.svg',
    summary:
      '1,000 sq ft SilverMist flagstone patio with integrated steps down a backyard slope — safe, durable, and built for grandkids to play on.',
    story: [
      'An older couple in Benbrook called us about their backyard. They had grandchildren coming over often, and they wanted a patio space the kids could actually run around on and reach the rest of the yard from — safely.',
      'The existing setup was a sloped section of yard with loose landscape rock laid down as a makeshift walking surface. It looked rough, shifted underfoot, and was not something grandparents wanted little ones running across. They wanted to fix it the right way, one time.',
      'We walked the property and talked through three options: poured concrete, pavers, and natural flagstone. Concrete would have been the cheapest, but it reads industrial against an established backyard. Pavers were a strong middle option but felt too uniform for what they wanted. They kept coming back to flagstone — natural, irregular, and the most aesthetic fit for the way they actually use the space.',
      'We went with SilverMist flagstone — a cool-toned natural stone with enough variation to feel organic but tight enough in color range to read as a finished patio. The masonry joints were set in a matching gray mortar to keep the eye on the stone itself rather than on grid lines.',
      'The build took a single day. We excavated the entire loose-rock area down to a proper compacted base, set the steps to handle the grade change cleanly, and laid roughly 1,000 square feet of SilverMist on top. By the end of the day the family had a real patio they could walk across without thinking about it — and a set of steps the grandkids can take without anyone holding their breath.',
      'If you have a slope in your yard that\'s been on the "we\'ll figure it out someday" list, this is exactly the kind of job we love. One day on site, decades of use out of it.',
    ],
    gallery: [],
  },
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
