import { styled } from "@stitches/react";

export const FancyButtonContainer = styled('button', {
  border: 'none',
  padding: '0',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'block',
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
        fontSize: '0.875em',
      },
      medium: {
        padding: '0.5em 1.5em',
        fontSize: '1em',
      },
      large: {
        padding: '0.75em 2.25em',
        fontSize: '1.25em',
      }
    }
  }
});