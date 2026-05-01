export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  included: string[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'landscape-design',
    name: 'Landscape Design & Installation',
    short: 'Complete yard makeovers designed in CAD and built in-house.',
    intro:
      'Full landscape design and installation across Aledo and Western DFW. We use CAD and design software to lay out your entire yard before a shovel hits dirt — so you know exactly what you are getting. From plant selection to grading to final install, we handle the whole transformation.',
    included: [
      'In-person property walk and consultation',
      'Custom CAD design and 3D renderings',
      'Plant selection suited for North Texas climate',
      'Grading, prep, and full installation by our crew',
      'Written proposal with detailed scope of work',
    ],
    related: ['plant-installation', 'hardscaping', 'sod-installation'],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    short: 'Engineered walls that hold up — built to last decades.',
    intro:
      'Retaining walls are our highest-volume service for a reason: we build them right. From small garden walls to multi-tier systems with staircases and integrated lighting, we engineer for drainage, frost, and load so your wall is still standing in 30 years.',
    included: [
      'Site evaluation and grade analysis',
      'Block, stone, or poured wall options',
      'Proper base prep and drainage behind the wall',
      'Multi-tier and integrated staircase capability',
      'Optional landscape lighting integration',
    ],
    related: ['hardscaping', 'french-drains', 'landscape-design'],
  },
  {
    slug: 'hardscaping',
    name: 'Hardscaping',
    short: 'Paver patios, concrete, and walkways built for daily use.',
    intro:
      'Patios, walkways, concrete pads, and outdoor living surfaces. In Aledo neighborhoods like Walsh and Morningstar, side-yard walkways are especially popular — they solve the mud and dead-grass problem between houses for good. We do the prep right so your hardscape stays level and crack-free.',
    included: [
      'Paver patios and walkways',
      'Poured concrete pads and surfaces',
      'Side-yard and connector walkways',
      'Proper base prep and drainage',
      'Edge restraints and polymeric joint sand',
    ],
    related: ['retaining-walls', 'french-drains', 'landscape-design'],
  },
  {
    slug: 'sod-installation',
    name: 'Sod Installation',
    short: 'Fresh sod on a prepped, graded yard — up to 10,000+ sq ft.',
    intro:
      'New sod, properly installed. We grade, prep the soil, and lay the sod so it takes root and stays green. We have done jobs as large as 10,000 sq ft in a single install. ($3,000 minimum.)',
    included: [
      'Site grading and soil prep',
      'Bermuda, Zoysia, and St. Augustine options',
      'Tight seam installation',
      'Initial watering instructions',
      'Cleanup and haul-off',
    ],
    related: ['landscape-design', 'irrigation', 'french-drains'],
  },
  {
    slug: 'french-drains',
    name: 'French Drains & Drainage',
    short: 'If your yard pools water, we fix it permanently.',
    intro:
      'Standing water, soggy spots, or runoff that erodes your beds — we solve drainage problems for good. Proper French drain systems, surface drains, regrading, and downspout extensions, designed for your specific lot and the heavy clay soils common across Western DFW.',
    included: [
      'Drainage assessment and grade analysis',
      'French drains with proper fabric and stone',
      'Catch basins and surface drains',
      'Downspout tie-ins and extensions',
      'Regrading where needed',
    ],
    related: ['retaining-walls', 'hardscaping', 'sod-installation'],
  },
  {
    slug: 'plant-installation',
    name: 'Plant Design & Installation',
    short: 'The right plants in the right place — designed for North Texas.',
    intro:
      'Trees, shrubs, perennials, and ornamentals selected and installed for our climate. We design for year-round interest, water efficiency, and the realities of Texas heat and clay soil.',
    included: [
      'Plant selection suited for the site',
      'Soil amendment and proper planting depth',
      'Mulching and initial irrigation setup',
      'Plant placement design',
    ],
    related: ['flower-beds', 'landscape-design', 'tree-services'],
  },
  {
    slug: 'tree-services',
    name: 'Tree Services',
    short: 'Trimming, health care, and removals — handled by pros.',
    intro:
      'Tree trimming, shaping, and health care. We also handle larger removals and new tree installations as part of full landscape projects.',
    included: [
      'Trimming and shaping for health and form',
      'Deadwood removal',
      'Larger removals available',
      'New tree installation',
    ],
    related: ['plant-installation', 'landscape-design'],
  },
  {
    slug: 'irrigation',
    name: 'Irrigation',
    short: 'Sprinkler installs, extensions, and repairs.',
    intro:
      'We install and extend irrigation systems as part of our landscape projects. For full new system design and complex repairs, we work with licensed irrigators to make sure the job is done right. We are upfront about it because the work matters more than the ego.',
    included: [
      'System extensions and zone additions',
      'Drip irrigation for beds',
      'Repairs and head replacements',
      'Licensed partner for complex new installs',
    ],
    related: ['sod-installation', 'plant-installation', 'flower-beds'],
  },
  {
    slug: 'stone-borders',
    name: 'Stone Borders',
    short: 'Clean stone edging that defines beds and lasts.',
    intro:
      'Natural stone borders for flower beds, tree rings, and landscape edging. We set the stone properly so it stays put through Texas freeze-thaw cycles and heavy rains.',
    included: [
      'Natural stone selection',
      'Bed and tree-ring borders',
      'Proper base set so stones stay level',
      'Clean transitions to lawn or hardscape',
    ],
    related: ['flower-beds', 'plant-installation', 'landscape-design'],
  },
  {
    slug: 'rock-beds',
    name: 'Rock Beds',
    short: 'Low-maintenance rock beds done right — no weed bloom in year two.',
    intro:
      'Decorative rock beds installed with proper weed barrier, edging, and the right rock for the look you want. We do the prep so you are not pulling weeds out of your river rock next summer.',
    included: [
      'Bed layout and edging',
      'Quality landscape fabric',
      'Decorative rock selection (river rock, lava, granite, etc.)',
      'Clean install around plantings',
    ],
    related: ['flower-beds', 'mulch-installation', 'landscape-design'],
  },
  {
    slug: 'mulch-installation',
    name: 'Mulch Installation',
    short: 'Fresh mulch refresh — beds reset, weeds suppressed.',
    intro:
      'Mulch refresh and full bed reset. We clean out the existing beds, edge them clean, and lay fresh mulch at the right depth for weed suppression and moisture retention.',
    included: [
      'Bed cleanup and edging',
      'Hardwood, cedar, or dyed mulch options',
      'Proper depth (2-3 inches)',
      'Tree rings and bed coverage',
    ],
    related: ['flower-beds', 'plant-installation', 'rock-beds'],
  },
  {
    slug: 'leveling-grading',
    name: 'Leveling & Grading',
    short: 'Yards graded for drainage and a clean finish surface.',
    intro:
      'Yard leveling and grading — for new sod, drainage correction, or just to get rid of the bumps and low spots. We grade with drainage in mind so water moves where it should.',
    included: [
      'Site evaluation and grade plan',
      'Soil import or removal as needed',
      'Drainage-aware finish grade',
      'Prep for sod, seed, or hardscape',
    ],
    related: ['sod-installation', 'french-drains', 'landscape-design'],
  },
  {
    slug: 'residential-concrete',
    name: 'Residential Concrete',
    short: 'Poured concrete pads, walks, and slabs for your home.',
    intro:
      'Poured residential concrete — pads, walkways, slabs, and small-scale flatwork. We form, pour, and finish concrete that looks clean and holds up to North Texas weather.',
    included: [
      'Concrete pads and slabs',
      'Walkways and connector paths',
      'Proper base prep and reinforcement',
      'Clean broom or smooth finish options',
    ],
    related: ['hardscaping', 'retaining-walls', 'leveling-grading'],
  },
  {
    slug: 'flower-beds',
    name: 'Flower Bed Installation',
    short: 'New beds, edged clean and built to thrive.',
    intro:
      'New flower beds designed and installed — from edging and soil prep to plant selection and mulching. We build beds that look intentional and stay healthy.',
    included: [
      'Bed layout and edging',
      'Soil amendment for North Texas clay',
      'Plant selection and installation',
      'Mulching and finish',
    ],
    related: ['plant-installation', 'landscape-design'],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
