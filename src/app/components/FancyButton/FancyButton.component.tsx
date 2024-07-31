import React from 'react';
import CornerBox from '../CornerBox/CornerBox.component';
import { FancyButtonChildrenContainer, FancyButtonContainer, ScrambleTextContainer } from './FancyButton.styled';
import { BasicSize, FancyButtonProps } from './FancyButton.types';
import { getCornerConfig } from './FancyButton.helpers';
import ScrambleText from '../ScrambleText/ScrambleText';

const EyeSVG = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" className="button__cap">
  <g>
    <path d="M11.7657 0.5L5 12.161H18.5359L11.7657 0.5Z" strokeWidth="0.5" strokeMiterlimit="10"></path>
    <path d="M16.3306 8.2743C16.3306 8.2743 14.29 10.7758 11.7708 10.7758C9.25155 10.7758 7.21094 8.2743 7.21094 8.2743C7.21094 8.2743 9.25155 5.77234 11.7708 5.77234C14.29 5.77234 16.3306 8.2743 16.3306 8.2743Z" strokeWidth="0.5" strokeMiterlimit="10" className="button__cap-eye"></path>
    <path d="M11.7682 10.0661C12.763 10.0661 13.5696 9.26397 13.5696 8.27429C13.5696 7.28461 12.763 6.48204 11.7682 6.48204C10.7733 6.48204 9.9668 7.28461 9.9668 8.27429C9.9668 9.26397 10.7733 10.0661 11.7682 10.0661Z" strokeWidth="0.5" strokeMiterlimit="10" className="button__cap-eye"></path>
  </g>
</svg>

const FancyButton: React.FC<FancyButtonProps> = ({ variant, onClick, children, size = BasicSize.Medium }) => {
  const cornersConfig = getCornerConfig(size);

  return (
    <FancyButtonContainer variant={variant} onClick={onClick} size={size}>
      <CornerBox {...cornersConfig} animation={false} variant={variant} height='full'>
        <FancyButtonChildrenContainer size={size}>
          {typeof children === 'string' && <ScrambleTextContainer>
            <ScrambleText children={children} scrambleDuration={500} />
          </ScrambleTextContainer>}
          {typeof children != 'string' && children}
        </FancyButtonChildrenContainer>
      </CornerBox>
      <EyeSVG />
    </FancyButtonContainer>
  );
};

export default FancyButton;
