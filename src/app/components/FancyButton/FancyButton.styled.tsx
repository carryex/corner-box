import { styled } from "../../../../stitches.config";


export const FancyButtonContainer = styled('button', {
  border: 'none',
  padding: '0',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  display: 'block',
  color: '#0c0c0c',
  position: 'relative',
  fontFamily: '$ocra',
  textTransform: 'uppercase',
  variants: {
    variant: {
      primary: {
        '.button__cap': {
          fill: '$green',
          stroke: '$background',
        },
        '&:hover': {
          '.button__cap': {
            fill: '$background',
            stroke: '$green',
          }
        }
      },
      secondary: {
        '.button__cap': {
          fill: '$purple',
          stroke: '$background',
        },
        '&:hover': {
          '.button__cap': {
            fill: '$background',
            stroke: '$purple',
          }
        }
      },
    },
    size: {
      small: {
        '.button__cap': {
          width: '10px',
          top: 0,
          right: 0,
          transition: 'fill 0.3s ease, stroke 0.3s ease',
          position: 'absolute'
        }
      },
      medium: {
        '.button__cap': {
          width: '20px',
          top: 0,
          right: 0,
          transition: 'fill 0.3s ease, stroke 0.3s ease',
          position: 'absolute'
        }
      },
      large: {
        top: 0,
        right: 0,
        '.button__cap': {
          width: '25px',
          top: 0,
          right: 0,
          transition: 'fill 0.3s ease, stroke 0.3s ease',
          position: 'absolute'
        }
      }
    }
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