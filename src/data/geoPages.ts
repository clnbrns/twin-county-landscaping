// Central registry of every standalone geo+service landing page.
// Drives internal linking: area pages, service pages, and sibling links
// on the geo pages themselves. Add every new geo page here — pages
// missing from this list get no internal links and won't rank.
export type GeoPage = {
  href: string; // e.g. '/french-drains-saginaw-tx'
  citySlug: string; // matches AREAS slug
  city: string;
  serviceSlug: string; // matches SERVICES slug
  serviceName: string; // display name for link text
  title: string; // card/link title
  blurb: string; // one-line description for cards
};

export const GEO_PAGES: GeoPage[] = [
  // French drains & drainage
  {
    href: '/drainage-aledo-tx',
    citySlug: 'aledo-tx',
    city: 'Aledo',
    serviceSlug: 'french-drains',
    serviceName: 'Drainage',
    title: 'Stormwater Drainage in Aledo',
    blurb: 'French drains, downspout extensions, and regrading for Aledo clay soil.',
  },
  {
    href: '/french-drains-azle-tx',
    citySlug: 'azle-tx',
    city: 'Azle',
    serviceSlug: 'french-drains',
    serviceName: 'French Drains',
    title: 'French Drains in Azle',
    blurb: 'Standing water and acreage drainage fixed for good on western Tarrant County lots.',
  },
  {
    href: '/french-drains-benbrook-tx',
    citySlug: 'benbrook-tx',
    city: 'Benbrook',
    serviceSlug: 'french-drains',
    serviceName: 'French Drains',
    title: 'French Drains in Benbrook',
    blurb: 'Foundation drainage and soggy-yard fixes for southwest Tarrant County clay.',
  },
  {
    href: '/french-drains-fort-worth-tx',
    citySlug: 'fort-worth-tx',
    city: 'Fort Worth',
    serviceSlug: 'french-drains',
    serviceName: 'French Drains',
    title: 'French Drains in Fort Worth',
    blurb: 'Standing water and foundation drainage fixed across west Fort Worth.',
  },
  {
    href: '/french-drains-saginaw-tx',
    citySlug: 'saginaw-tx',
    city: 'Saginaw',
    serviceSlug: 'french-drains',
    serviceName: 'French Drains',
    title: 'French Drains in Saginaw',
    blurb: 'Neighbor runoff, downspout overflow, and standing water solved permanently.',
  },
  {
    href: '/french-drains-weatherford-tx',
    citySlug: 'weatherford-tx',
    city: 'Weatherford',
    serviceSlug: 'french-drains',
    serviceName: 'French Drains',
    title: 'French Drains in Weatherford',
    blurb: 'Drainage systems sized to Parker County clay soil and acreage properties.',
  },
  // Retaining walls
  {
    href: '/retaining-walls-azle-tx',
    citySlug: 'azle-tx',
    city: 'Azle',
    serviceSlug: 'retaining-walls',
    serviceName: 'Retaining Walls',
    title: 'Retaining Walls in Azle',
    blurb: 'Block and stone walls for slope lots and acreage — drainage-engineered on every job.',
  },
  {
    href: '/retaining-walls-benbrook-tx',
    citySlug: 'benbrook-tx',
    city: 'Benbrook',
    serviceSlug: 'retaining-walls',
    serviceName: 'Retaining Walls',
    title: 'Retaining Walls in Benbrook',
    blurb: 'Terraced and structural walls — including our Benbrook garden-tier project.',
  },
  {
    href: '/retaining-walls-keller-tx',
    citySlug: 'keller-tx',
    city: 'Keller',
    serviceSlug: 'retaining-walls',
    serviceName: 'Retaining Walls',
    title: 'Retaining Walls in Keller',
    blurb: 'Engineered walls for Keller slope lots — Hidden Lakes, Marshall Ridge, and beyond.',
  },
  {
    href: '/retaining-walls-weatherford-tx',
    citySlug: 'weatherford-tx',
    city: 'Weatherford',
    serviceSlug: 'retaining-walls',
    serviceName: 'Retaining Walls',
    title: 'Retaining Walls in Weatherford',
    blurb: 'Block, stone, and timber walls engineered for drainage and built to last.',
  },
  // Hardscaping & paver patios
  {
    href: '/hardscaping-aledo-tx',
    citySlug: 'aledo-tx',
    city: 'Aledo',
    serviceSlug: 'hardscaping',
    serviceName: 'Hardscaping',
    title: 'Hardscaping in Aledo',
    blurb: 'Patios, side-yard walkways, and outdoor living for Walsh, Morningstar, and beyond.',
  },
  {
    href: '/hardscaping-benbrook-tx',
    citySlug: 'benbrook-tx',
    city: 'Benbrook',
    serviceSlug: 'hardscaping',
    serviceName: 'Hardscaping',
    title: 'Hardscaping in Benbrook',
    blurb: 'Paver patios, flagstone, walls — see our real Benbrook projects in the gallery.',
  },
  {
    href: '/hardscaping-fort-worth-tx',
    citySlug: 'fort-worth-tx',
    city: 'Fort Worth',
    serviceSlug: 'hardscaping',
    serviceName: 'Hardscaping',
    title: 'Hardscaping in Fort Worth',
    blurb: 'Patios, walkways, walls, outdoor living across Fort Worth and Western DFW.',
  },
  {
    href: '/hardscaping-north-richland-hills-tx',
    citySlug: 'north-richland-hills-tx',
    city: 'North Richland Hills',
    serviceSlug: 'hardscaping',
    serviceName: 'Hardscaping',
    title: 'Hardscaping in North Richland Hills',
    blurb: 'Paver patios, flagstone, walls, and full backyard remodels across NRH.',
  },
  {
    href: '/paver-patios-aledo-tx',
    citySlug: 'aledo-tx',
    city: 'Aledo',
    serviceSlug: 'hardscaping',
    serviceName: 'Paver Patios',
    title: 'Paver Patios in Aledo',
    blurb: 'Belgard, Pavestone, and flagstone patios with the base prep that makes them last.',
  },
  {
    href: '/paver-patios-benbrook-tx',
    citySlug: 'benbrook-tx',
    city: 'Benbrook',
    serviceSlug: 'hardscaping',
    serviceName: 'Paver Patios',
    title: 'Paver Patios in Benbrook',
    blurb: 'Flagstone and paver patios built for Benbrook slopes — our home terrain.',
  },
  {
    href: '/paver-patios-fort-worth-tx',
    citySlug: 'fort-worth-tx',
    city: 'Fort Worth',
    serviceSlug: 'hardscaping',
    serviceName: 'Paver Patios',
    title: 'Paver Patios in Fort Worth',
    blurb: 'Paver and flagstone patios for west and southwest Fort Worth.',
  },
  {
    href: '/paver-patios-weatherford-tx',
    citySlug: 'weatherford-tx',
    city: 'Weatherford',
    serviceSlug: 'hardscaping',
    serviceName: 'Paver Patios',
    title: 'Paver Patios in Weatherford',
    blurb: 'Patios engineered for Parker County clay — pavers and flagstone done right.',
  },
  // Landscape design
  {
    href: '/landscape-design-aledo-tx',
    citySlug: 'aledo-tx',
    city: 'Aledo',
    serviceSlug: 'landscape-design',
    serviceName: 'Landscape Design',
    title: 'Landscape Design in Aledo',
    blurb: 'Full design, plant selection, hardscape, and drainage — installed by one Aledo crew.',
  },
  {
    href: '/landscape-design-weatherford-tx',
    citySlug: 'weatherford-tx',
    city: 'Weatherford',
    serviceSlug: 'landscape-design',
    serviceName: 'Landscape Design',
    title: 'Landscape Design in Weatherford',
    blurb: 'Full landscape design and backyard transformations across Parker County.',
  },
  // Sod installation
  {
    href: '/sod-installation-aledo-tx',
    citySlug: 'aledo-tx',
    city: 'Aledo',
    serviceSlug: 'sod-installation',
    serviceName: 'Sod Installation',
    title: 'Sod Installation in Aledo',
    blurb: 'Bermuda, Zoysia, St. Augustine — graded, prepped, and laid right. $3K minimum.',
  },
  {
    href: '/sod-installation-weatherford-tx',
    citySlug: 'weatherford-tx',
    city: 'Weatherford',
    serviceSlug: 'sod-installation',
    serviceName: 'Sod Installation',
    title: 'Sod Installation in Weatherford',
    blurb: 'New lawns on properly graded Parker County soil — Bermuda, Zoysia, St. Augustine.',
  },
];

export const GEO_PAGES_BY_CITY = GEO_PAGES.reduce<Record<string, GeoPage[]>>((acc, p) => {
  (acc[p.citySlug] ??= []).push(p);
  return acc;
}, {});

export const GEO_PAGES_BY_SERVICE = GEO_PAGES.reduce<Record<string, GeoPage[]>>((acc, p) => {
  (acc[p.serviceSlug] ??= []).push(p);
  return acc;
}, {});
