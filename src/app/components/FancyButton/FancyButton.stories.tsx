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
const ArrowIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="button__arrow">
    <path d="M11 9.59L4.41 3H11V1H1V11H3V4.41L9.59 11L11 9.59Z" fill="currentColor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H11.5V3.5H5.61711L11.7071 9.59L9.59 11.7071L3.5 5.61711V11.5H0.5V0.5ZM1.5 1.5V10.5H2.5V3.20289L9.59 10.2929L10.2929 9.59L3.20289 2.5H10.5V1.5H1.5Z" fill="currentColor">
    </path>
  </svg>
}

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: <ArrowIcon />,
    size: BasicSize.Large
  }
}

