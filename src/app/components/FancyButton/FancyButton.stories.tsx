import type { Meta, StoryObj } from '@storybook/react';
import FancyButton from './FancyButton.component';

const meta: Meta<typeof FancyButton> = {
  title: 'app/FancyButton',
  component: FancyButton,
  argTypes: {
    variant: {
      description: 'Variant of the button',
      control: 'select',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    children: {
      control: 'text',
      defaultValue: 'Fancy Button',
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Fancy Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Fancy Button',
  },
};
