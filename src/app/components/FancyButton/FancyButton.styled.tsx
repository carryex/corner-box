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
  position: 'relative',
  variants: {
    size: {
      small: {
        padding: '0.25em 0.75em',
      },
      medium: {
        padding: '0.75em 2em',
      },
      large: {
        padding: '1.5em 3.5em'
      }
    }
  }
});