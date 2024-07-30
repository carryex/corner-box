// TODO add different border sizes
// TODO add purple-primary and green-secondary variants
// TODO add small, medium, large
// TODO add effect
// TODO test with icon/text/largetext
// TODO add triangle eye
// TODO add font

import React from 'react';
import CornerBox from '../CornerBox/CornerBox.component';
import { FancyButtonChildrenContainer, FancyButtonContainer } from './FancyButton.styled';
import { BasicSize, FancyButtonProps } from './FancyButton.types';
import { getCornerConfig } from './FancyButton.helpers';

const FancyButton: React.FC<FancyButtonProps> = ({ variant, onClick, children, size = BasicSize.Medium }) => {
  const color = variant === 'primary' ? '#b0cd68' : '#a986d9';
  const cornersConfig = getCornerConfig(size);

  return (
    <FancyButtonContainer variant={variant} onClick={onClick}>
      <CornerBox {...cornersConfig} backgroundColor={color} borderColor={color} animation={false}>
        <FancyButtonChildrenContainer size={size}>
          {children}
        </FancyButtonChildrenContainer>
      </CornerBox>
    </FancyButtonContainer>
  );
};

export default FancyButton;
