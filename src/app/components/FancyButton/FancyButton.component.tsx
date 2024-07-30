// TODO add different border sizes
// TODO add purple-primary and green-secondary variants
// TODO add small, medium, large
// TODO add effect
// TODO test with icon/text/largetext
// TODO add triangle eye
// TODO add font

import React from 'react';
import { BaseCornerBoxProps, CornerType } from '../CornerBox/CornerBox.types';
import CornerBox from '../CornerBox/CornerBox.component';
import { FancyButtonChildrenContainer, FancyButtonContainer } from './FancyButton.styled';

type FancyButtonProps = Pick<BaseCornerBoxProps, 'children'> & {
  variant: 'primary' | 'secondary';
  onClick?: () => void;
};

const FancyButton: React.FC<FancyButtonProps> = ({ variant, onClick, children }) => {
  const color = variant === 'primary' ? '#b0cd68' : '#a986d9';
  const cornersConfig = {
    topLeft: { type: CornerType.Angled, size: '0.75em' },
    topRight: { type: CornerType.Angled, size: '2.75em' },
    bottomRight: { type: CornerType.Angled, size: '0.75em' },
    bottomLeft: { type: CornerType.Angled, size: '2.75em' },
  }

  return (
    <FancyButtonContainer variant={variant} onClick={onClick}>
      <CornerBox {...cornersConfig} backgroundColor={color} borderColor={color} animation={false}>
        <FancyButtonChildrenContainer>
          {children}
        </FancyButtonChildrenContainer>
      </CornerBox>
    </FancyButtonContainer>
  );
};

export default FancyButton;
