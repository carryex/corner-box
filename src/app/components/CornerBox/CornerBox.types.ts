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
  animation?: boolean;
}
export interface BaseCornerBoxProps extends InnerBoxProps {
  height?: 'content' | 'full',
}

export interface InnerBoxProps extends BaseCornerPosition {
  children: React.ReactNode;
  variant: 'primary' | 'secondary'
};

export type DynamicOuterBoxProps = {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  height?: 'content' | 'full';
};