// TODO add different border sizes
// TODO add purple-primary and green-secondary variants
// TODO add small, medium, large
// TODO add effect
// TODO test with icon/text/largetext
// TODO add triangle eye
// TODO add font

import React, { useCallback, useEffect, useRef, useState } from 'react';
import CornerBox from '../CornerBox/CornerBox.component';
import { FancyButtonChildrenContainer, FancyButtonContainer } from './FancyButton.styled';
import { BasicSize, FancyButtonProps } from './FancyButton.types';
import { getCornerConfig } from './FancyButton.helpers';
import ScrambleText from '../ScrambleText/ScrambleText';
import { styled } from '@stitches/react';

const AbsoluteContainer = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

const FancyButton: React.FC<FancyButtonProps> = ({ variant, onClick, children, size = BasicSize.Medium }) => {
  const color = variant === 'primary' ? '#b0cd68' : '#a986d9';
  const cornersConfig = getCornerConfig(size);

  const [textSize, setTextSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const absoluteContainerRef = useRef<HTMLDivElement | null>(null);

  const updateWidth = useCallback(() => {
    if (absoluteContainerRef.current) {
      setTextSize({ width: absoluteContainerRef.current.offsetWidth, height: absoluteContainerRef.current.offsetHeight });
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [updateWidth]);

  return (
    <FancyButtonContainer variant={variant} onClick={onClick}>
      <CornerBox {...cornersConfig} backgroundColor={color} borderColor={color} animation={false}>
        <FancyButtonChildrenContainer size={size} style={{ width: `${textSize.width}px`, height: `${textSize.height}px` }}>
          <AbsoluteContainer ref={absoluteContainerRef}>
            <ScrambleText children={children} />
          </AbsoluteContainer>
        </FancyButtonChildrenContainer>
      </CornerBox>
    </FancyButtonContainer>
  );
};

export default FancyButton;
