import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      green: 'rgb(176, 205, 104)',
      purple: 'rgb(169, 134, 217)',
      background: 'rgb(12, 12, 12)'
    },
  },
});