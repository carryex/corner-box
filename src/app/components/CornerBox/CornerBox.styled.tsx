import { styled, keyframes, css } from '@stitches/react';
import { CornerConfig } from './CornerBox.types';
import { cornerStyle } from './CornerBox.helpers';

export const createClipPathAnimation = (finalClipPath: string, initialClipPath: string) => {
  return keyframes({
    '0%': { clipPath: initialClipPath },
    '100%': { clipPath: finalClipPath },
  });
};

export const dynamicBorderColor = (borderColor: string) => css({
  '--pseudo-border': `drop-shadow(0px 1px 0px ${borderColor}) drop-shadow(0px -1px 0px ${borderColor}) drop-shadow(-1px 0px 0px ${borderColor}) drop-shadow(1px 0px 0px ${borderColor})`,
})();

export const generateDynamicStyles = ({ topLeft, topRight, bottomLeft, bottomRight }: {
  topLeft: CornerConfig;
  topRight: CornerConfig;
  bottomLeft: CornerConfig;
  bottomRight: CornerConfig;
}) => {
  const { finalClipPath, initialClipPath } = cornerStyle(topLeft, topRight, bottomRight, bottomLeft);
  const animation = createClipPathAnimation(finalClipPath, initialClipPath);

  return css({
    clipPath: finalClipPath,
    animation: `${animation} 3s forwards`,
  })();
};

export const DemoChildrenContainer = styled('div', {
  padding: '0.5em 2em',
  color: '#4A4A4A',
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
  display: 'inline-block',
  filter: 'var(--pseudo-border)',
});
