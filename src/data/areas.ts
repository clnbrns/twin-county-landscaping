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
  {
    slug: 'cresson-tx',
    city: 'Cresson',
    state: 'TX',
    intro:
      'Cresson sits at the corner of Parker, Hood, and Johnson counties — a short hop south of Aledo. Acreage homes and ranch properties out here are exactly the kind of work we love: big sod jobs, long drainage runs, retaining walls, and entrance landscaping.',
    neighborhoods: ['Cresson proper', 'Tri-county area', 'Acreage properties'],
  },
  {
    slug: 'granbury-tx',
    city: 'Granbury',
    state: 'TX',
    intro:
      'Granbury and the Lake Granbury area are a regular service zone for us. Lakefront homes, sloped lots, retaining walls, and complete landscape design — we bring the same in-person quote and detailed written proposal Aledo customers get.',
    neighborhoods: ['Lake Granbury', 'DeCordova', 'Pecan Plantation', 'Historic Granbury'],
  },
  {
    slug: 'mineral-wells-tx',
    city: 'Mineral Wells',
    state: 'TX',
    intro:
      'Mineral Wells and western Palo Pinto County are a regular drive for our team. Acreage properties, drainage challenges on rocky soil, and full landscape builds are common requests — and the kind of project we are built for.',
    neighborhoods: ['Mineral Wells proper', 'Lake Mineral Wells area', 'Palo Pinto County'],
  },
  {
    slug: 'azle-tx',
    city: 'Azle',
    state: 'TX',
    intro:
      'Azle and the Eagle Mountain Lake area are part of our regular Western DFW route. Lakefront landscape projects, retaining walls on sloped lots, and full backyard builds are common requests out here.',
    neighborhoods: ['Eagle Mountain Lake', 'Pelican Bay', 'Cross Timbers', 'Lakeside (border)'],
  },
  {
    slug: 'dallas-tx',
    city: 'Dallas',
    state: 'TX',
    intro:
      'We take on landscape and hardscape projects in the Dallas area for the right job — generally larger backyard builds, retaining wall systems, and full landscape designs where the scope justifies the drive. Lucas still walks every property in person.',
    neighborhoods: ['West Dallas', 'Oak Cliff', 'Park Cities (border)', 'Project-based scope'],
  },
  {
    slug: 'north-richland-hills-tx',
    city: 'North Richland Hills',
    state: 'TX',
    intro:
      'North Richland Hills is part of our broader Tarrant County coverage. Established neighborhoods that need a refresh and newer builds that need everything — we do landscape design, retaining walls, paver patios, drainage, and sod.',
    neighborhoods: ['Smithfield', 'Glenview', 'Iron Horse', 'Northeast Tarrant'],
  },
  {
    slug: 'white-settlement-tx',
    city: 'White Settlement',
    state: 'TX',
    intro:
      'White Settlement is right next door to our Western Fort Worth service area. Front-yard refreshes, full backyard builds, drainage corrections, and hardscape installations — we handle the whole yard.',
    neighborhoods: ['White Settlement proper', 'Westworth Village (border)', 'West Fort Worth corridor'],
  },
  {
    slug: 'lake-worth-tx',
    city: 'Lake Worth',
    state: 'TX',
    intro:
      'Lake Worth properties — both on the water and inland — are part of our regular Tarrant County service. Lakefront landscaping, sloped-lot retaining walls, drainage, and full landscape design are what we do best.',
    neighborhoods: ['Lake Worth proper', 'Lakeside (border)', 'Northwest Tarrant County'],
  },
  {
    slug: 'arlington-tx',
    city: 'Arlington',
    state: 'TX',
    intro:
      'We serve Arlington for project-scope work — full backyard transformations, multi-tier retaining walls, paver patios, and complete landscape design. If the job warrants the drive, Lucas is there in person with a detailed written proposal.',
    neighborhoods: ['West Arlington', 'Pantego (border)', 'Dalworthington Gardens (border)', 'Project-based scope'],
  },
  {
    slug: 'irving-tx',
    city: 'Irving',
    state: 'TX',
    intro:
      'Irving projects are part of our extended service area. We take on landscape design, hardscape, and drainage work for clients in Irving when the project scope justifies the drive — same in-person quote and detailed proposal, every time.',
    neighborhoods: ['Las Colinas', 'Valley Ranch', 'Irving proper', 'Project-based scope'],
  },
  {
    slug: 'saginaw-tx',
    city: 'Saginaw',
    state: 'TX',
    intro:
      'Saginaw is part of our north Fort Worth route. We work full landscape projects, retaining walls, paver patios, drainage, and sod across the Saginaw and Blue Mound area — both established homes and newer builds.',
    neighborhoods: ['Saginaw proper', 'Blue Mound (border)', 'North Fort Worth corridor'],
  },
  {
    slug: 'alliance-tx',
    city: 'Alliance',
    state: 'TX',
    intro:
      'The Alliance Texas corridor — including the surrounding north Fort Worth neighborhoods — is a regular service area for us. Newer master-planned communities and acreage properties alike get full landscape design, hardscape, and drainage work.',
    neighborhoods: ['Alliance Town Center', 'Heritage', 'Roanoke (border)', 'North Fort Worth'],
  },
  {
    slug: 'keller-tx',
    city: 'Keller',
    state: 'TX',
    intro:
      'Keller is part of our broader Northeast Tarrant service. Established and newer neighborhoods alike — we handle full landscape design, retaining walls, paver patios, drainage corrections, and complete backyard makeovers.',
    neighborhoods: ['Keller proper', 'Hidden Lakes', 'Marshall Ridge', 'Northeast Tarrant'],
  },
  {
    slug: 'colleyville-tx',
    city: 'Colleyville',
    state: 'TX',
    intro:
      'Colleyville projects fit our wheelhouse — larger lots, established neighborhoods, and clients who want premium landscape design and hardscape work done right the first time. Lucas walks every property in person with a detailed written proposal.',
    neighborhoods: ['Colleyville proper', 'Whittier Heights', 'Creekside', 'Northeast Tarrant'],
  },
  {
    slug: 'stephenville-tx',
    city: 'Stephenville',
    state: 'TX',
    intro:
      'Stephenville and Erath County are a regular drive for our crew. Acreage homes, ranch entrances, and full landscape builds out here get the same in-person quote and detailed written proposal as our Aledo work — big sod jobs, retaining walls, drainage, and complete landscape design.',
    neighborhoods: ['Stephenville proper', 'Tarleton area', 'Erath County acreage'],
  },
  {
    slug: 'ranger-tx',
    city: 'Ranger',
    state: 'TX',
    intro:
      'Ranger and Eastland County are part of our regular service area. Acreage homes, ranch entrances, and full landscape builds out here get the same in-person quote and detailed written proposal as our Aledo work — sod, retaining walls, drainage, and complete landscape design.',
    neighborhoods: ['Ranger proper', 'Lake Leon area', 'Eastland County'],
  },
  {
    slug: 'breckenridge-tx',
    city: 'Breckenridge',
    state: 'TX',
    intro:
      'Breckenridge and Stephens County are part of our extended service area. Ranch properties, fence and wall systems, sod, drainage, and full landscape design — Lucas walks every property in person and brings the same detailed written proposal regardless of the drive.',
    neighborhoods: ['Breckenridge proper', 'Lake Daniel area', 'Stephens County'],
  },
  {
    slug: 'grapevine-tx',
    city: 'Grapevine',
    state: 'TX',
    intro:
      'Grapevine and the surrounding Northeast Tarrant area are part of our extended service zone. We take on landscape design, hardscape, retaining walls, and drainage projects across Grapevine and the neighborhoods bordering Colleyville and Southlake.',
    neighborhoods: ['Grapevine proper', 'Silver Lake', 'Southlake (border)', 'DFW corridor'],
  },
];

export const AREA_BY_SLUG = Object.fromEntries(AREAS.map((a) => [a.slug, a]));
