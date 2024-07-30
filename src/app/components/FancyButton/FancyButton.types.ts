import { BaseCornerBoxProps } from "../CornerBox/CornerBox.types";

export enum BasicSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type FancyButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
  size?: BasicSize;
  onClick?: () => void;
};
