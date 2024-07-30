export interface CornerConfig {
  type: CornerType;
  size: string;
}

export enum CornerType {
  Square = 'square',
  Angled = 'angled',
  Boxed = 'boxed',
  Rounded = 'rounded',
}

export enum CornerPosition {
  LeftTop = 'leftTop',
  LeftBottom = 'leftBottom',
  RightBottom = 'rightBottom',
  RightTop = 'rightTop',
}

export interface BaseCornerPosition {
  topLeft: CornerConfig;
  topRight: CornerConfig;
  bottomLeft: CornerConfig;
  bottomRight: CornerConfig;
  animation: boolean;
}
export interface BaseCornerBoxProps extends InnerBoxProps {
  borderColor: string;
}

export interface InnerBoxProps extends BaseCornerPosition {
  backgroundColor: string;
  children: React.ReactNode;
};

export type DynamicOuterBoxProps = {
  borderColor: string;
  children: React.ReactNode;
};