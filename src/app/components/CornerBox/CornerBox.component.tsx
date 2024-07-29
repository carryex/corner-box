import React from 'react';
import { dynamicBorderColor, generateDynamicStyles, OuterBox } from './CornerBox.styled';
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

type InnerBoxProps = {
  topLeft: CornerType;
  topRight: CornerType;
  bottomLeft: CornerType;
  bottomRight: CornerType;
  cornerSize: string;
  backgroundColor: string;
  children: React.ReactNode;
};

type DynamicOuterBoxProps = {
  borderColor: string;
  children: React.ReactNode;
};


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
