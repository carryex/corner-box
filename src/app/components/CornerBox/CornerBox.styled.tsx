import styled, { css } from 'styled-components';
import { CornerType, CornerPosition } from './CornerBox.types';

const getCornerShape = (cornerType: CornerType, size: string, position: CornerPosition) => {
  switch (cornerType) {
    case CornerType.Angled:
      switch (position) {
        case CornerPosition.LeftTop:
          return `${size} 0, 0 ${size}`;
        case CornerPosition.LeftBottom:
          return `0 calc(100% - ${size}), ${size} 100%`;
        case CornerPosition.RightBottom:
          return `calc(100% - ${size}) 100%, 100% calc(100% - ${size})`;
        case CornerPosition.RightTop:
          return `100% ${size}, calc(100% - ${size}) 0`;
      }
    case CornerType.Boxed:
      switch (position) {
        case CornerPosition.LeftTop:
          return `${size} 0, ${size} ${size}, 0 ${size}`;
        case CornerPosition.LeftBottom:
          return `0 calc(100% - ${size}), ${size} calc(100% - ${size}), ${size} 100%`;
        case CornerPosition.RightBottom:
          return `calc(100% - ${size}) 100%, calc(100% - ${size}) calc(100% - ${size}), 100% calc(100% - ${size})`;
        case CornerPosition.RightTop:
          return `100% ${size}, calc(100% - ${size}) ${size}, calc(100% - ${size}) 0`;
      }
    case CornerType.Square:
    default:
      switch (position) {
        case CornerPosition.LeftTop:
          return `0 0`;
        case CornerPosition.LeftBottom:
          return `0 100%`;
        case CornerPosition.RightBottom:
          return `100% 100%`;
        case CornerPosition.RightTop:
          return `100% 0`;
      }
  }
};

const cornerStyle = (topLeft: CornerType, topRight: CornerType, bottomRight: CornerType, bottomLeft: CornerType, size: string) => {
  return `polygon(
    ${getCornerShape(topLeft, size, CornerPosition.LeftTop)},
    ${getCornerShape(bottomLeft, size, CornerPosition.LeftBottom)},
    ${getCornerShape(bottomRight, size, CornerPosition.RightBottom)},
    ${getCornerShape(topRight, size, CornerPosition.RightTop)}
  )`;
};

export const OuterBox = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['borderColor'].includes(prop)
}) <{ borderColor: string }>`
  --psuedo-border: drop-shadow(0px 1px 0px ${({ borderColor }) => borderColor})
    drop-shadow(0px -1px 0px ${({ borderColor }) => borderColor})
    drop-shadow(-1px 0px 0px ${({ borderColor }) => borderColor})
    drop-shadow(1px 0px 0px ${({ borderColor }) => borderColor});
  filter: var(--psuedo-border);
  display: inline-block;
`;

export const InnerBox = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'cornerSize', 'backgroundColor'].includes(prop)
}) <{
  topLeft: CornerType;
  topRight: CornerType;
  bottomLeft: CornerType;
  bottomRight: CornerType;
  cornerSize: string;
  backgroundColor: string;
}>`
  ${({ topLeft, topRight, bottomLeft, bottomRight, cornerSize }) => css`
    clip-path: ${cornerStyle(topLeft, topRight, bottomRight, bottomLeft, cornerSize)};
  `}
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 100%;
`;

export const DemoChildrenContainer = styled.div`
  padding: 20px;
`;
