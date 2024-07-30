import { createStitches } from '@stitches/react';
import localFont from "next/font/local";

export const ocra = localFont({
  src: '/assets/fonts/ocra.woff',
});

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      ocra: `${ocra.style.fontFamily}, sans-serif`
    },
    colors: {
      green: 'rgb(176, 205, 104)',
      purple: 'rgb(169, 134, 217)',
      background: 'rgb(12, 12, 12)'
    },
  },
});