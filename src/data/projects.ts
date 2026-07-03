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
  {
    slug: 'aledo-retaining-wall-slope',
    title: 'Aledo Backyard Retaining Wall - Slope Stabilization',
    city: 'Aledo',
    services: ['retaining-walls', 'leveling-grading'],
    hero: '/images/services/retaining-walls/img-1033-gallery.webp',
    summary: 'Block retaining wall that stopped an eroding backyard slope and gave a family a flat, usable lawn behind the house.',
    story: [
      'A family in Aledo had been watching their backyard slope erode a little more every rainy season. What started as a gradual grade was washing out into channels, and the usable flat area behind the house kept shrinking. They wanted to stop the erosion and actually get some yard back.',
      'The fix was a structural block retaining wall at the base of the slope, engineered with proper drainage behind it so we were not just moving the water problem somewhere else. We cut into the hill, set a compacted crushed-rock base, and built the wall in courses with a gravel drainage envelope and perforated pipe running behind the full length.',
      'The wall holds the grade in place and gives the yard a clean, defined lower level that stays flat through heavy rain. With the slope locked in, the family now has real lawn space that does not wash out — and no more watching topsoil disappear toward the fence line every time it storms.',
    ],
    gallery: [
      '/images/services/retaining-walls/img-1033-gallery.webp',
      '/images/services/retaining-walls/img-1081-gallery.webp',
      '/images/services/retaining-walls/img-1085-gallery.webp',
    ],
  },
  {
    slug: 'weatherford-retaining-wall-driveway',
    title: 'Weatherford Driveway Retaining Wall',
    city: 'Weatherford',
    services: ['retaining-walls'],
    hero: '/images/services/retaining-walls/img-1429-gallery.webp',
    summary: 'Long-run retaining wall along a Weatherford driveway approach that stopped slope erosion and cleaned up a rough entry.',
    story: [
      'A homeowner in Weatherford had a driveway cut into a hillside where the grade on one side had been eroding for years. The soil kept slumping toward the pavement, and after every heavy rain they were moving dirt off the driveway. They needed a wall that could hold the hill back permanently — not another patch.',
      'We ran a block retaining wall along the full length of the driveway slope, set on a compacted base with a drainage envelope behind it. The wall batter, drainage, and backfill compaction are done to structural specs — this is not a cosmetic wall that will tip forward in five years.',
      'The result is a clean driveway edge that stays in place. No more soil creeping onto the pavement, no more erosion trenches forming after rain. The entry to the property reads as finished instead of managed.',
    ],
    gallery: [
      '/images/services/retaining-walls/img-1429-gallery.webp',
      '/images/services/retaining-walls/img-1430-gallery.webp',
      '/images/services/retaining-walls/favorite-gallery.webp',
    ],
  },
  {
    slug: 'fort-worth-flower-bed-installation',
    title: 'Fort Worth Front Yard Flower Bed Installation',
    city: 'Fort Worth',
    services: ['plant-installation', 'mulch-installation', 'stone-borders'],
    hero: '/images/services/flower-beds/favorite-gallery.webp',
    summary: 'Full front yard bed renovation with new plantings, fresh mulch, and clean stone borders that hold the edge through North Texas summers.',
    story: [
      'A homeowner in Fort Worth wanted their front yard to actually match the house — good curb appeal, low maintenance, and plants that would survive North Texas heat without constant attention. The existing beds were overgrown, the mulch was years old, and there was no real edging keeping lawn from creeping in.',
      'We cleared the existing beds, regraded the soil for drainage, and installed a full plant package selected for the sun exposure and soil conditions on the property. Stone borders went in along the entire bed perimeter to give a clean separation between lawn and bed that holds its line season after season.',
      'Fresh hardwood mulch finished the beds with a clean, dark look that keeps moisture in the soil and slows weed pressure. The combination of right-plant selection, stone borders, and quality mulch means the beds will look this good with minimal intervention — water them, pull the occasional weed, and they take care of themselves.',
    ],
    gallery: [
      '/images/services/flower-beds/favorite-gallery.webp',
      '/images/services/flower-beds/img-0267-gallery.webp',
      '/images/services/flower-beds/img-0268-gallery.webp',
      '/images/services/flower-beds/img-0269-gallery.webp',
    ],
  },
  {
    slug: 'aledo-french-drain-foundation',
    title: 'Aledo French Drain - Foundation Drainage Fix',
    city: 'Aledo',
    services: ['french-drains', 'leveling-grading'],
    hero: '/images/services/french-drains/french-drain-gallery.webp',
    summary: 'French drain system that intercepted water pooling against a foundation and routed it to a safe discharge point — permanently.',
    story: [
      'A homeowner in Aledo had water sitting against the foundation after every significant rain. The original builder grading sloped slightly toward the house rather than away from it, and downspout discharge was dumping directly into the beds against the foundation slab. They had already seen some moisture in the garage and were worried about long-term foundation movement.',
      'The fix combined two elements: buried downspout extensions that carried roof water out past the foundation perimeter, and a French drain running along the back and side of the house to intercept any additional subsurface water before it reached the slab. Everything discharges to the street through a pop-up emitter.',
      'The system has handled multiple heavy rain events without any water reaching the foundation. This is one of those projects where the payoff is invisible — you stop worrying about something that was slowly working against the most expensive thing you own.',
    ],
    gallery: [
      '/images/services/french-drains/french-drain-gallery.webp',
      '/images/services/french-drains/img-1484-gallery.webp',
      '/images/services/french-drains/favorite-gallery.webp',
    ],
  },
  {
    slug: 'benbrook-hardscape-walkway',
    title: 'Benbrook Paver Walkway & Side-Yard Hardscape',
    city: 'Benbrook',
    services: ['hardscaping'],
    hero: '/images/services/hardscaping/img-1158-gallery.webp',
    summary: 'Concrete paver walkway that turned a muddy side yard into a clean, all-weather path from the driveway to the backyard gate.',
    story: [
      'Side yards are one of the most overlooked spaces in a suburban home — and one of the most aggravating when they are just bare soil that turns to mud every time it rains. A homeowner in Benbrook had exactly that situation: a narrow path from the driveway to the back gate that became unusable for days after any rain.',
      'We installed a concrete paver walkway the full length of the side yard, set on a properly compacted base with a slight cross-slope so water drains off the surface rather than pooling on it. The pavers are a neutral tone that reads clean against the house without competing with anything.',
      'The finished path stays dry, holds its grade, and requires nothing to maintain. The homeowner can walk to the backyard in any weather without thinking about it — which is exactly what a side yard path should do.',
    ],
    gallery: [
      '/images/services/hardscaping/img-1158-gallery.webp',
      '/images/services/hardscaping/img-1160-gallery.webp',
      '/images/services/hardscaping/img-1164-gallery.webp',
    ],
  },
  {
    slug: 'aledo-hardscape-patio',
    title: 'Aledo Backyard Paver Patio',
    city: 'Aledo',
    services: ['hardscaping', 'leveling-grading'],
    hero: '/images/services/hardscaping/img-0040-gallery.webp',
    summary: 'Large paver patio that replaced a deteriorating concrete pad and gave a family a real outdoor living space built for the long term.',
    story: [
      'A family in Aledo had an old poured concrete patio that had been cracking and settling for years. Parts of it had heaved from tree roots, the surface was staining, and the whole thing just looked tired. They wanted something that would last and actually look good — not another pour that would go the same way.',
      'We removed the existing concrete, re-graded the sub-base, and installed a concrete paver patio in its place. Pavers handle the Texas clay soil expansion and contraction much better than poured concrete — if a section ever shifts or a single paver cracks, you can fix it without jackhammering the whole thing.',
      'The finished patio is level, well-drained, and large enough to hold a full outdoor seating arrangement with room to move around. It looks better than the original concrete did on its first day, and it will still look that way in twenty years.',
    ],
    gallery: [
      '/images/services/hardscaping/img-0040-gallery.webp',
      '/images/services/hardscaping/img-0041-gallery.webp',
      '/images/services/hardscaping/img-1058-gallery.webp',
    ],
  },
  {
    slug: 'aledo-sod-installation-bermuda',
    title: 'Aledo Full Yard Sod Installation - Bermuda',
    city: 'Aledo',
    services: ['sod-installation', 'leveling-grading'],
    hero: '/images/services/sod-installation/after-1-gallery.webp',
    summary: 'Full front and back yard Bermuda sod install on a newly built Aledo home — graded, prepped, and laid in a single day.',
    beforeImage: '/images/services/sod-installation/before-1-gallery.webp',
    afterImage: '/images/services/sod-installation/after-1-gallery.webp',
    story: [
      'A new construction home in Aledo came with what most new builds deliver: a yard full of bare soil, construction debris, and rough grade from the builder. The homeowners wanted Bermuda sod in before the summer heat hit, which meant getting the prep done right first.',
      'We graded the entire yard to drain away from the foundation, cleared out any remaining debris, and brought the surface to a consistent level before the sod went down. Bermuda needs a solid, well-prepped bed to establish properly — if you just lay it on rough builder grade, you get an uneven lawn that never fully knits together.',
      'The sod went down in a single day. Bermuda is our first recommendation for sun-exposed Western DFW yards — it handles the heat, goes dormant gracefully in winter, and comes back aggressive in spring. This yard was green wall-to-wall within two weeks of install.',
    ],
    gallery: [
      '/images/services/sod-installation/after-1-gallery.webp',
      '/images/services/sod-installation/after-2-gallery.webp',
      '/images/services/sod-installation/img-0991-gallery.webp',
      '/images/services/sod-installation/before-1-gallery.webp',
    ],
  },
  {
    slug: 'fort-worth-landscape-design',
    title: 'Fort Worth Full Backyard Landscape Design & Install',
    city: 'Fort Worth',
    services: ['landscape-design', 'plant-installation', 'mulch-installation'],
    hero: '/images/services/landscape-design/favorite-gallery.webp',
    summary: 'CAD-designed backyard transformation with tiered plantings, updated beds, and a cohesive design that pulled an overgrown yard together.',
    story: [
      'A homeowner in Fort Worth had a backyard that had grown in every direction over the years with no real plan behind it. There were plants in the wrong spots, beds with no clear edge, and a general feeling that the yard had happened to them rather than been designed. They wanted a fresh start — a cohesive plan they could actually see before anything was planted.',
      'We started with a CAD layout of the full yard, showing plant placement, bed shapes, and material choices before a single shovel hit the dirt. This is how we do every landscape design project: you know exactly what you are getting, and you can make changes on paper instead of in the ground.',
      'Installation covered new bed preparation, a full plant package selected for the light and soil conditions on that lot, mulch, and clean borders throughout. The plants are sized to fill in naturally over two growing seasons rather than looking sparse for years or overcrowded in three.',
    ],
    gallery: [
      '/images/services/landscape-design/favorite-gallery.webp',
      '/images/services/landscape-design/favorite-1-gallery.webp',
      '/images/services/landscape-design/favorite-2-gallery.webp',
      '/images/services/landscape-design/img-0041-gallery.webp',
    ],
  },
  {
    slug: 'aledo-stone-borders-tree-rings',
    title: 'Aledo Stone Borders & Tree Ring Edging',
    city: 'Aledo',
    services: ['stone-borders', 'mulch-installation'],
    hero: '/images/services/stone-borders/favorite-gallery.webp',
    summary: 'Natural stone bed borders and tree rings that gave a mature Aledo yard clean, defined edges that hold their line season after season.',
    story: [
      'A homeowner in Aledo had a yard full of mature trees and established beds, but no real edging holding any of it in place. Lawn was creeping into the beds, the tree rings were undefined rings of bare dirt, and after every mow the beds looked worse than they did before. They wanted a fix that would last more than one season.',
      'We set natural stone borders along all the bed perimeters and built defined rings around the mature trees. Stone stays in place through freeze-thaw cycles and mower contact in a way that plastic edging never does — it is also the right aesthetic scale for established yards with large trees.',
      'Fresh mulch went in across all beds after the borders were set. The combination is immediate: the yard looks intentional. Clean lines, clear separation between lawn and beds, and tree rings that actually enhance the mature trees rather than making them look neglected.',
    ],
    gallery: [
      '/images/services/stone-borders/favorite-gallery.webp',
      '/images/services/stone-borders/img-1034-gallery.webp',
      '/images/services/stone-borders/img-1038-gallery.webp',
      '/images/services/stone-borders/img-1040-gallery.webp',
    ],
  },
  {
    slug: 'weatherford-mulch-installation',
    title: 'Weatherford Mulch Installation - Full Property',
    city: 'Weatherford',
    services: ['mulch-installation', 'plant-installation'],
    hero: '/images/services/mulch-installation/img-5500-gallery.webp',
    summary: 'Full-property hardwood mulch refresh that cut weed pressure, held soil moisture, and made established beds look maintained again.',
    story: [
      'A homeowner in Weatherford had well-established beds around the property but had not done a mulch refresh in a couple of years. Weed pressure was up, some areas were starting to show bare soil, and the beds just looked tired even though the plants themselves were healthy.',
      'We cleared the existing beds of weeds and debris, then installed fresh hardwood mulch across all beds to a proper 3-inch depth. Depth matters more than most people realize — too thin and you lose the moisture retention and weed suppression benefits that make mulch worth putting in.',
      'Quality mulch at the right depth is one of the highest-return things you can do for an established landscape. It reduces watering needs through summer, slows weed germination, and keeps the beds looking maintained without constant attention. This property went from looking neglected to looking cared-for in a single day.',
    ],
    gallery: [
      '/images/services/mulch-installation/img-5500-gallery.webp',
      '/images/services/mulch-installation/img-5503-gallery.webp',
      '/images/services/mulch-installation/img-5461-gallery.webp',
    ],
  },
  {
    slug: 'aledo-grading-drainage',
    title: 'Aledo Yard Regrading & Drainage Correction',
    city: 'Aledo',
    services: ['leveling-grading', 'french-drains'],
    hero: '/images/services/leveling-grading/img-2457-gallery.webp',
    summary: 'Yard regrading and drainage correction that fixed standing water and reversed builder-grade slope pointing water toward the house.',
    story: [
      'The builder grade on many Aledo homes in newer subdivisions has one chronic problem: the yard slopes toward the house instead of away from it. It is subtle — sometimes just a few inches over thirty feet — but it is enough to pool water against the foundation after every significant rain. A homeowner in Aledo called us after their third straight season of dealing with it.',
      'We regraded the back yard to establish a positive slope away from the house on all sides, then tied a French drain into the low areas that could not be corrected with grade alone. The two systems work together: the grade moves surface water away, and the drain handles anything that moves through the soil.',
      'The yard has handled multiple heavy rain events since without any accumulation against the foundation. Regrading is one of the less glamorous projects we do, but when a yard has a drainage problem baked into its original construction, this is what actually fixes it.',
    ],
    gallery: [
      '/images/services/leveling-grading/img-2457-gallery.webp',
      '/images/services/leveling-grading/img-0402-gallery.webp',
      '/images/services/leveling-grading/img-0430-gallery.webp',
    ],
  },
  {
    slug: 'aledo-rock-bed-renovation',
    title: 'Aledo Rock Bed Renovation with Stone Borders',
    city: 'Aledo',
    services: ['rock-beds', 'stone-borders'],
    hero: '/images/services/rock-beds/img-1059-gallery.webp',
    summary: 'Rock bed renovation that replaced faded, weed-choked gravel with fresh decomposed granite and clean stone borders throughout.',
    story: [
      'Rock beds look great when they are new. A few years later — without the right fabric underneath and with the wrong gravel choice — they become weed beds with rocks on top. A homeowner in Aledo had exactly that situation: faded gray gravel, weeds pushing through everywhere, and plastic edging that had long since given up.',
      'We pulled everything out, installed heavy-duty woven landscape fabric underneath, and replaced the gravel with fresh decomposed granite. DG compacts slightly to a firm surface, drains well, and does not shift around or float out of the bed the way smaller pea gravel can.',
      'Natural stone borders went in around the full perimeter to replace the plastic edging. Stone holds its position through freeze-thaw cycles and mower contact, and it reads as a permanent installation rather than something temporary. The beds came out clean, well-defined, and set up to stay that way for years.',
    ],
    gallery: [
      '/images/services/rock-beds/img-1059-gallery.webp',
      '/images/services/rock-beds/img-1064-gallery.webp',
      '/images/services/rock-beds/img-0655-gallery.webp',
      '/images/services/rock-beds/img-0718-gallery.webp',
    ],
  },
];

export const PROJECT_BY_SLUG = Object.fromEntries(PROJECTS.map((p) => [p.slug, p]));
