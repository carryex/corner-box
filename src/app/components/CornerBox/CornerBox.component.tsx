import React from 'react';
import { generateDynamicStyles, InnerBoxBlock, OuterBox } from './CornerBox.styled';
import { BaseCornerBoxProps, CornerType, DynamicOuterBoxProps, InnerBoxProps } from './CornerBox.types';


const CornerBox: React.FC<BaseCornerBoxProps> = ({
  topLeft = { type: CornerType.Square, size: '0.75em' },
  topRight = { type: CornerType.Square, size: '0.75em' },
  bottomLeft = { type: CornerType.Square, size: '0.75em' },
  bottomRight = { type: CornerType.Square, size: '0.75em' },
  children,
  animation = true,
  variant = 'primary',
  height = 'content'
}) => {
  return (
    <DynamicOuterBox variant={variant} height={height}>
      <InnerBox
        topLeft={topLeft}
        topRight={topRight}
        bottomLeft={bottomLeft}
        bottomRight={bottomRight}
        animation={animation}
        variant={variant}
      >
        {children}
      </InnerBox>
    </DynamicOuterBox>
  );
};

export const DynamicOuterBox: React.FC<DynamicOuterBoxProps> = ({ variant, children, height }) => {
  return (
    <OuterBox variant={variant} height={height}>
      {children}
    </OuterBox>
  );
};

export const InnerBox: React.FC<InnerBoxProps> = ({ topLeft, topRight, bottomLeft, bottomRight, variant, children, animation = true }) => {
  const dynamicClassName = generateDynamicStyles({ topLeft, topRight, bottomLeft, bottomRight, animation });

  return (
    <InnerBoxBlock className={dynamicClassName} variant={variant}>
      {children}
    </InnerBoxBlock>
  );
};


export default CornerBox;
