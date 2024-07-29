import React from 'react';
import { InnerBox, OuterBox } from './CornerBox.styled';
import { CornerType } from './CornerBox.types';

interface CornerBoxProps {
  topLeft?: CornerType;
  topRight?: CornerType;
  bottomLeft?: CornerType;
  bottomRight?: CornerType;
  cornerSize?: string;
  backgroundColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
}

const CornerBox: React.FC<CornerBoxProps> = ({
  topLeft = CornerType.Square,
  topRight = CornerType.Square,
  bottomLeft = CornerType.Square,
  bottomRight = CornerType.Square,
  cornerSize = '0.75em',
  backgroundColor = 'white',
  borderColor = 'black',
  children,
}) => {
  return (
    <OuterBox borderColor={borderColor}>
      <InnerBox
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
        cornerSize={cornerSize}
        backgroundColor={backgroundColor}
      >
        {children}
      </InnerBox>
    </OuterBox>
  );
};

export default CornerBox;
