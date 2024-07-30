import { styled } from "@stitches/react";

export const FancyButtonContainer = styled('button', {
  border: 'none',
  padding: '0',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'inline-block',
  color: '#0c0c0c',
  variants: {
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export const FancyButtonChildrenContainer = styled('div', {
  padding: '2em'
});
