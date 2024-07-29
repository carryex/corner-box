import type { Meta, StoryObj } from '@storybook/react';
import { DemoChildrenContainer, DesktopContainer, MobileContainer } from './CornerBox.styled';
import { CornerType } from './CornerBox.types';
import CornerBox from './CornerBox.component';
import styled from 'styled-components';

const meta = {
  title: 'app/CornerBox',
  component: CornerBox,
  argTypes: {
    topLeft: {
      description: 'Corner type for the top-left corner',
      control: 'select',
      options: Object.values(CornerType),
      defaultValue: CornerType.Square,
    },
    topRight: {
      description: 'Corner type for the top-right corner',
      control: 'select',
      options: Object.values(CornerType),
      defaultValue: CornerType.Square,
    },
    bottomLeft: {
      description: 'Corner type for the bottom-left corner',
      control: 'select',
      options: Object.values(CornerType),
      defaultValue: CornerType.Square,
    },
    bottomRight: {
      description: 'Corner type for the bottom-right corner',
      control: 'select',
      options: Object.values(CornerType),
      defaultValue: CornerType.Square,
    },
    cornerSize: {
      description: 'Size of the corners. Should be specified in em units.',
      control: 'text',
      defaultValue: '0.75em',
    },
  },
} satisfies Meta<typeof CornerBox>;
export default meta;

type Story = StoryObj<typeof meta>;

const DemoChildren = () => (
  <DemoChildrenContainer>
    <h1>Demo CornerBox</h1>
    <p>Feel free to change the params</p>
  </DemoChildrenContainer>
);


export const Default: Story = {
  args: {
    topLeft: CornerType.Square,
    topRight: CornerType.Boxed,
    bottomRight: CornerType.Angled,
    bottomLeft: CornerType.Rounded,
    children: <DemoChildren />,
    cornerSize: '0.75em',
    backgroundColor: '#F5F5F5',
    borderColor: '#A8A8A8'
  },
};

export const Color: Story = {
  args: {
    ...Default.args,
    borderColor: '#FFE5D9',
    backgroundColor: '#9E7676',
  },
};

export const Size: Story = {
  args: {
    ...Default.args,
    cornerSize: '2.5em',
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    topLeft: CornerType.Rounded,
    topRight: CornerType.Rounded,
    bottomRight: CornerType.Rounded,
    bottomLeft: CornerType.Rounded,
  },
};

export const MobileView: Story = {
  render: (args) => (
    <MobileContainer>
      <CornerBox {...args} />
    </MobileContainer>
  ),
  args: {
    ...Default.args,
  },
};

export const DesktopView: Story = {
  render: (args) => (
    <DesktopContainer>
      <CornerBox {...args} />
    </DesktopContainer>
  ),
  args: {
    ...Default.args,
  },
};