// Before/after slider pairs. Add more as Lucas captures them.
export type BeforeAfterPair = {
  before: string;
  after: string;
  caption?: string;
};

export const BEFORE_AFTER: Record<string, BeforeAfterPair[]> = {
  'sod-installation': [
    {
      before: '/images/before-after/sod-1-before.webp',
      after: '/images/before-after/sod-1-after.webp',
      caption: 'Bare soil → fresh sod, prepped and laid in a single visit.',
    },
    {
      before: '/images/before-after/sod-2-before.webp',
      after: '/images/before-after/sod-2-after.webp',
      caption: 'Patchy lawn → uniform turf with tight seams.',
    },
  ],
};

// Featured pair for the homepage hero/proof block.
export const FEATURED_BEFORE_AFTER: BeforeAfterPair = BEFORE_AFTER['sod-installation'][0];
