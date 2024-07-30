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
  width: 'fit-content',
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
        height: '38px',
        '.button__cap': {
          width: '16px',
          top: 0,
          right: 0,
          transition: 'fill 0.3s ease, stroke 0.3s ease',
          position: 'absolute'
        }
      },
      medium: {
        height: '50px',
        '.button__cap': {
          width: '20px',
          top: 0,
          right: 0,
          transition: 'fill 0.3s ease, stroke 0.3s ease',
          position: 'absolute'
        }
      },
      large: {
        height: '68px',
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
  height: '100%',
  variants: {
    size: {
      small: {
        padding: '0 0.75em',
        fontSize: '0.81em',
      },
      medium: {
        padding: '0 1.5em',
        fontSize: '1.08em',
      },
      large: {
        padding: '0 2.25em',
        fontSize: '1.44em',
      }
    }
  }
});

export const ScrambleTextContainer = styled('div', {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  width: 'fit-content'
})