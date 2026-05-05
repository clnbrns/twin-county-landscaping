export type Area = {
  slug: string;
  city: string;
  state: string;
  intro: string;
  neighborhoods: string[];
};

export const AREAS: Area[] = [
  {
    slug: 'aledo-tx',
    city: 'Aledo',
    state: 'TX',
    intro:
      'Aledo is home. Lucas was born and raised here, and Twin County Outdoor Services is built on Aledo work — from Walsh and Morningstar to the Parks of Aledo, Bella Ranch, and beyond. If you have driven past our truck on a job site, you already know us.',
    neighborhoods: [
      'Walsh',
      'Walsh Ranch',
      'Morningstar',
      'Parks of Aledo',
      'Bella Ranch',
      'Bella Crossing',
      'Bella Flora',
      'La Madera',
      'McDavid Springs',
      'Annetta',
      'Annetta North',
      'Annetta South',
    ],
  },
  {
    slug: 'benbrook-tx',
    city: 'Benbrook',
    state: 'TX',
    intro:
      'Benbrook is just down the road from Aledo and a regular stop for our crew. We work residential properties throughout the city and the neighborhoods bordering Fort Worth — from full landscape installs to drainage and retaining walls.',
    neighborhoods: ['Whitestone Ranch', 'Westpark', 'Timbercreek', 'Ridglea Hills (border)'],
  },
  {
    slug: 'weatherford-tx',
    city: 'Weatherford',
    state: 'TX',
    intro:
      'We serve Weatherford and the broader Parker County area — including some of our largest projects. Big lots and acreage properties out here mean we get to do the kind of work we love: full retaining wall systems, large sod installs, drainage, and complete landscape design.',
    neighborhoods: ['Silverado', 'Ranches at Parker Heights', 'Greenwood', 'Downtown Weatherford'],
  },
  {
    slug: 'fort-worth-tx',
    city: 'Fort Worth',
    state: 'TX',
    intro:
      'We work the western side of Fort Worth regularly — Monticello, University West, Bella Vista, and the neighborhoods bordering Benbrook. Our crew is set up for both established homes that need a refresh and new builds that need everything.',
    neighborhoods: ['Monticello', 'University West', 'Bella Vista', 'TCU Area', 'Walsh Ranch'],
  },
  {
    slug: 'brock-tx',
    city: 'Brock',
    state: 'TX',
    intro:
      'Brock is a regular service area for us — close enough to Aledo that we are out there often. Acreage properties, drainage challenges, and full landscape builds are common requests.',
    neighborhoods: ['Brock ISD area', 'Surrounding Parker County'],
  },
  {
    slug: 'possum-kingdom-lake-tx',
    city: 'Possum Kingdom Lake',
    state: 'TX',
    intro:
      'We work lake homes and weekend properties around Possum Kingdom Lake — from full landscape installs and retaining walls on sloped lakefront lots to drainage and hardscape work that holds up to the elements out there.',
    neighborhoods: ['The Cliffs', 'Hells Gate', 'Costello Island', 'Sportsmans World'],
  },
  {
    slug: 'hudson-oaks-tx',
    city: 'Hudson Oaks',
    state: 'TX',
    intro:
      'Hudson Oaks sits right between Aledo and Weatherford on I-20 — a regular service area for us. Newer subdivisions and a mix of established homes give us a steady mix of full landscape installs, drainage corrections, and hardscape projects.',
    neighborhoods: ['Hudson Oaks proper', 'Lakes of Aledo (border)', 'I-20 corridor'],
  },
  {
    slug: 'willow-park-tx',
    city: 'Willow Park',
    state: 'TX',
    intro:
      'Willow Park is just east of Weatherford and an easy drive from our Aledo base. We work everything from front-yard refreshes to full backyard builds — retaining walls, paver patios, sod, drainage, and the rest.',
    neighborhoods: ['Crown Pointe', 'Trinity Meadows', 'Squaw Creek Park area'],
  },
  {
    slug: 'springtown-tx',
    city: 'Springtown',
    state: 'TX',
    intro:
      'Springtown and northern Parker County are part of our regular service area. Acreage properties are common out here, which means bigger sod jobs, longer drainage runs, and full landscape design work — exactly the kind of project we are built for.',
    neighborhoods: ['Springtown proper', 'Reno (border)', 'Northern Parker County'],
  },
  {
    slug: 'graford-tx',
    city: 'Graford',
    state: 'TX',
    intro:
      'Graford and the surrounding Palo Pinto County area are a regular drive for us. Acreage homes, ranch entrances, and lakeside properties around PK get the same in-person quote and detailed proposal as our Aledo work.',
    neighborhoods: ['Graford', 'Surrounding Palo Pinto County'],
  },
];

export const AREA_BY_SLUG = Object.fromEntries(AREAS.map((a) => [a.slug, a]));
