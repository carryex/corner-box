import type { Meta, StoryObj } from '@storybook/react';
import FancyButton from './FancyButton.component';
import { BasicSize } from './FancyButton.types';

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
    size: {
      control: 'select',
      options: Object.values(BasicSize)
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    size: BasicSize.Medium,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
    size: BasicSize.Medium,
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    children: 'Small',
    size: BasicSize.Small
  }
}

export const Medium: Story = {
  args: {
    ...Primary.args,
    children: 'Medium',
    size: BasicSize.Medium
  }
}


export const Large: Story = {
  args: {
    ...Primary.args,
    children: 'Large',
    size: BasicSize.Large
  }
}

