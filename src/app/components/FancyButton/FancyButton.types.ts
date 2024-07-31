export enum BasicSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type FancyButtonProps = {
  variant: 'primary' | 'secondary';
  children: string | React.ReactNode;
  size?: BasicSize;
  onClick?: () => void;
};
