import { BaseCornerBoxProps } from "../CornerBox/CornerBox.types";

export enum BasicSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type FancyButtonProps = Pick<BaseCornerBoxProps, 'children'> & {
  variant: 'primary' | 'secondary';
  size?: BasicSize;
  onClick?: () => void;
};
