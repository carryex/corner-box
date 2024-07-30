import { keyframes, css } from '@stitches/react';
import { CornerConfig } from './CornerBox.types';
import { cornerStyle } from './CornerBox.helpers';
import { styled } from '../../../../stitches.config';

export const createClipPathAnimation = (finalClipPath: string, initialClipPath: string) => {
  return keyframes({
    '0%': { clipPath: initialClipPath },
    '100%': { clipPath: finalClipPath },
  });
};


export const generateDynamicStyles = ({ topLeft, topRight, bottomLeft, bottomRight, animation }: {
  topLeft: CornerConfig;
  topRight: CornerConfig;
  bottomLeft: CornerConfig;
  bottomRight: CornerConfig;
  animation: boolean;
}) => {
  const { finalClipPath, initialClipPath } = cornerStyle(topLeft, topRight, bottomRight, bottomLeft);
  const clipPathAnimation = createClipPathAnimation(finalClipPath, initialClipPath);

  if (animation) {
    return css({
      clipPath: finalClipPath,
      animation: `${clipPathAnimation} 3s forwards`,
    })();
  }

  return css({
    clipPath: finalClipPath
  })()
};

export const DemoChildrenContainer = styled('div', {
  padding: '0.5em 2em',
});

export const MobileContainer = styled('div', {
  width: '375px',
  height: '667px',
  border: '1px solid #ccc',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  paddingTop: '3em',
  justifyContent: 'center',
});

export const DesktopContainer = styled(MobileContainer, {
  width: '1024px',
});


export const OuterBox = styled('div', {
  display: 'block',
  height: '100%',
  filter: 'var(--pseudo-border)',
  variants: {
    variant: {
      primary: {
        '--pseudo-border': `drop-shadow(0px 1px 0px $colors$green) drop-shadow(0px -1px 0px $colors$green) drop-shadow(-1px 0px 0px $colors$green) drop-shadow(1px 0px 0px $colors$green)`,
      },
      secondary: {
        '--pseudo-border': `drop-shadow(0px 1px 0px $colors$purple) drop-shadow(0px -1px 0px $colors$purple) drop-shadow(-1px 0px 0px $colors$purple) drop-shadow(1px 0px 0px $colors$purple)`,
      },
    },
  },
});
export const InnerBoxBlock = styled('div', {
  transition: 'background-color 0.3s ease, color 0.3s ease',
  height: '100%',
  variants: {
    variant: {
      primary: {
        backgroundColor: "$green",
        color: "$background",
        '&:hover': {
          backgroundColor: '$background',
          color: "$green",
        },
      },
      secondary: {
        backgroundColor: "$purple",
        color: "$background",
        '&:hover': {
          backgroundColor: '$background',
          color: "$purple",
        },
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})