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
  topLeft: CornerType;
  topRight: CornerType;
  bottomLeft: CornerType;
  bottomRight: CornerType;
}
export interface BaseCornerBoxProps extends InnerBoxProps {
  borderColor: string;
}

export interface InnerBoxProps extends BaseCornerPosition {
  cornerSize: string;
  backgroundColor: string;
  children: React.ReactNode;
};

export type DynamicOuterBoxProps = {
  borderColor: string;
  children: React.ReactNode;
};