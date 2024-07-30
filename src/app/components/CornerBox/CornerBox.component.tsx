import React from 'react';
import { dynamicBorderColor, generateDynamicStyles, OuterBox } from './CornerBox.styled';
import { BaseCornerBoxProps, CornerPosition, CornerType, DynamicOuterBoxProps, InnerBoxProps } from './CornerBox.types';


const CornerBox: React.FC<BaseCornerBoxProps> = ({
  topLeft = { type: CornerType.Square, size: '0.75em' },
  topRight = { type: CornerType.Square, size: '0.75em'},
  bottomLeft = { type: CornerType.Square, size: '0.75em'},
  bottomRight = { type: CornerType.Square, size: '0.75em'},
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

export const InnerBox: React.FC<InnerBoxProps> = ({ topLeft, topRight, bottomLeft, bottomRight, backgroundColor, children }) => {
  const dynamicClassName = generateDynamicStyles({ topLeft, topRight, bottomLeft, bottomRight });

  return (
    <div className={dynamicClassName} style={{ backgroundColor }}>
      {children}
    </div>
  );
};


export default CornerBox;
