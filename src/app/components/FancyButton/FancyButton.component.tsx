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
    <FancyButtonContainer variant={variant} onClick={onClick} size={size}>
      <CornerBox {...cornersConfig} animation={false} variant={variant}>
        <FancyButtonChildrenContainer size={size} style={{ width: `${textSize.width}px`, height: `${textSize.height}px` }}>
          <AbsoluteContainer ref={absoluteContainerRef}>
            <ScrambleText children={children} scrambleDuration={500} />
          </AbsoluteContainer>
        </FancyButtonChildrenContainer>
      </CornerBox>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" className="button__cap">
        <g>
          <path d="M11.7657 0.5L5 12.161H18.5359L11.7657 0.5Z" strokeWidth="0.5" strokeMiterlimit="10" className="button__cap-eye"></path>
          <path d="M16.3306 8.2743C16.3306 8.2743 14.29 10.7758 11.7708 10.7758C9.25155 10.7758 7.21094 8.2743 7.21094 8.2743C7.21094 8.2743 9.25155 5.77234 11.7708 5.77234C14.29 5.77234 16.3306 8.2743 16.3306 8.2743Z" strokeWidth="0.5" strokeMiterlimit="10" className="button__cap-eye"></path>
          <path d="M11.7682 10.0661C12.763 10.0661 13.5696 9.26397 13.5696 8.27429C13.5696 7.28461 12.763 6.48204 11.7682 6.48204C10.7733 6.48204 9.9668 7.28461 9.9668 8.27429C9.9668 9.26397 10.7733 10.0661 11.7682 10.0661Z" strokeWidth="0.5" strokeMiterlimit="10" className="button__cap-eye"></path>
        </g>
      </svg>
    </FancyButtonContainer>
  );
};

export default FancyButton;
