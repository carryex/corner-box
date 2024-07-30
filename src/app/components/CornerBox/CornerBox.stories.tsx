import type { Meta, StoryObj } from '@storybook/react';
import { DemoChildrenContainer, DesktopContainer, MobileContainer } from './CornerBox.styled';
import { CornerPosition, CornerType } from './CornerBox.types';
import CornerBox from './CornerBox.component';

const meta = {
  title: 'app/CornerBox',
  component: CornerBox,
  argTypes: {
    topLeft: {
      description: 'Configuration for the top-left corner',
      control: 'object',
      defaultValue: { type: CornerType.Square, size: '1em' },
    },
    topRight: {
      description: 'Configuration for the top-right corner',
      control: 'object',
      defaultValue: { type: CornerType.Square, size: '1em' },
    },
    bottomLeft: {
      description: 'Configuration for the bottom-left corner',
      control: 'object',
      defaultValue: { type: CornerType.Square, size: '1em' },
    },
    bottomRight: {
      description: 'Configuration for the bottom-right corner',
      control: 'object',
      defaultValue: { type: CornerType.Square, size: '1em' },
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
    topLeft: { type: CornerType.Square, size: '1em' },
    topRight: { type: CornerType.Boxed, size: '1.25em' },
    bottomRight: { type: CornerType.Angled, size: '1.5em' },
    bottomLeft: { type: CornerType.Rounded, size: '1.75em' },
    children: <DemoChildren />,
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
    topLeft: { type: CornerType.Angled, size: '0.75em' },
    topRight: { type: CornerType.Angled, size: '2.75em' },
    bottomRight: { type: CornerType.Angled, size: '0.75em' },
    bottomLeft: { type: CornerType.Angled, size: '2.75em' },
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    topLeft: { type: CornerType.Rounded, size: '1.75em' },
    topRight: { type: CornerType.Rounded, size: '1.75em' },
    bottomRight: { type: CornerType.Rounded, size: '1.75em' },
    bottomLeft: { type: CornerType.Rounded, size: '1.75em' },
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