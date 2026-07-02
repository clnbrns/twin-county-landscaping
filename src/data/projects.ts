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
    hero: '/images/projects/benbrook-terraced-garden-walls/img-1999-gallery.webp',
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
    gallery: [
      '/images/projects/benbrook-terraced-garden-walls/img-1999-gallery.webp',
      '/images/projects/benbrook-terraced-garden-walls/img-2002-gallery.webp',
      '/images/projects/benbrook-terraced-garden-walls/img-2003-gallery.webp',
      '/images/projects/benbrook-terraced-garden-walls/img-2005-gallery.webp',
    ],
  },
  {
    slug: 'benbrook-flagstone-patio',
    title: 'Benbrook Flagstone Patio with Steps',
    city: 'Benbrook',
    services: ['hardscaping', 'leveling-grading'],
    hero: '/images/projects/benbrook-flagstone-patio/img-2230-gallery.webp',
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
    gallery: [
      '/images/projects/benbrook-flagstone-patio/img-2230-gallery.webp',
      '/images/projects/benbrook-flagstone-patio/img-2232-gallery.webp',
      '/images/projects/benbrook-flagstone-patio/img-2234-gallery.webp',
      '/images/projects/benbrook-flagstone-patio/img-2235-gallery.webp',
    ],
  },
  {
    slug: 'aledo-pool-walkway',
    title: 'Aledo Pool Walkway - Concrete Pavers & Tajas Black Gravel',
    city: 'Aledo',
    services: ['rock-beds', 'hardscaping'],
    hero: '/images/projects/aledo-pool-walkway/img-2441-gallery.webp',
    summary:
      'Concrete pavers and Tajas black gravel turned an inaccessible strip behind a pool into a clean, walkable space a couple can actually use.',
    story: [
      'A couple in Aledo called us about the area behind their pool. Getting back there meant stepping around the edge or cutting through the yard — there was no real path, just dead space that went unused. They wanted something that would let them walk behind the pool easily and actually enjoy that part of the yard.',
      'We designed the walkway using two materials that work well together: concrete pavers for the walking surface and Tajas black gravel to fill the bed around them. The pavers give you a solid, defined path that holds up through North Texas summers. The black gravel keeps the space clean and low-maintenance — no mowing, no edging, just a sharp finished look that stays that way.',
      'The Tajas gravel in particular is one of our go-to materials for jobs like this. It is a dark, angular crushed stone that drains well and compacts just enough to stay in place. Next to concrete pavers, the contrast reads as intentional — it looks like a designed space, not just rocks filling a gap.',
      'The finished walkway gives the couple easy access around the entire pool perimeter and turns what was essentially wasted footage into usable outdoor space. Projects like this are straightforward in scope but make a real difference in how a backyard actually functions day to day.',
    ],
    beforeImage: '/images/projects/aledo-pool-walkway/img-2344-gallery.webp',
    afterImage: '/images/projects/aledo-pool-walkway/img-2441-gallery.webp',
    gallery: [
      '/images/projects/aledo-pool-walkway/img-2441-gallery.webp',
      '/images/projects/aledo-pool-walkway/img-2438-gallery.webp',
      '/images/projects/aledo-pool-walkway/img-2442-gallery.webp',
      '/images/projects/aledo-pool-walkway/img-2443-gallery.webp',
      '/images/projects/aledo-pool-walkway/img-2344-gallery.webp',
    ],
  },
];

export const PROJECT_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));
