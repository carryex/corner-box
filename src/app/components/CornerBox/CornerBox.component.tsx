import React from 'react';
import { dynamicBorderColor, generateDynamicStyles, OuterBox } from './CornerBox.styled';
import { BaseCornerBoxProps, CornerType, DynamicOuterBoxProps, InnerBoxProps } from './CornerBox.types';


const CornerBox: React.FC<BaseCornerBoxProps> = ({
  topLeft = CornerType.Square,
  topRight = CornerType.Square,
  bottomLeft = CornerType.Square,
  bottomRight = CornerType.Square,
  cornerSize = '0.75em',
  backgroundColor = '#F5F5F5',
  borderColor = '#A8A8A8',
  children,
}) => {
  return (
    <DynamicOuterBox borderColor={borderColor}>
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
    </DynamicOuterBox>
  );
};

const DynamicOuterBox: React.FC<DynamicOuterBoxProps> = ({ borderColor, children }) => {
  const dynamicClassName = dynamicBorderColor(borderColor);

  return (
    <OuterBox className={dynamicClassName}>
      {children}
    </OuterBox>
  );
};

export const InnerBox: React.FC<InnerBoxProps> = ({ topLeft, topRight, bottomLeft, bottomRight, cornerSize, backgroundColor, children }) => {
  const dynamicClassName = generateDynamicStyles({ topLeft, topRight, bottomLeft, bottomRight, cornerSize });

  return (
    <div className={dynamicClassName} style={{ backgroundColor }}>
      {children}
    </div>
  );
};


export default CornerBox;
