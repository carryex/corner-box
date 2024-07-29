import styled, { css, keyframes } from 'styled-components';
import { CornerType } from './CornerBox.types';
import { cornerStyle } from './CornerBox.helpers';


export const createClipPathAnimation = (finalClipPath: string, initialClipPath: string) => keyframes`
  from {
    clip-path: ${initialClipPath};
  }
  to {
    clip-path: ${finalClipPath};
  }
`;


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
   ${({ topLeft, topRight, bottomLeft, bottomRight, cornerSize }) => {
    const { finalClipPath, initialClipPath } = cornerStyle(topLeft, topRight, bottomRight, bottomLeft, cornerSize);
    const animation = createClipPathAnimation(finalClipPath, initialClipPath);
    return css`
      clip-path: ${finalClipPath};
      animation: ${animation} 3s forwards;
    `;
  }}
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
`;

export const DemoChildrenContainer = styled.div`
  padding: 0.5em 2em;
`;

export const MobileContainer = styled.div`
  width: 375px;
  height: 667px;
  border: 1px solid #ccc;
  overflow: hidden;
  position: relative;
  display: flex;
  padding-top: 3em;
  justify-content: center;
`;

export const DesktopContainer = styled(MobileContainer)`
  width: 1024px;
`
