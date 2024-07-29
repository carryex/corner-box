import type { Meta, StoryObj } from '@storybook/react';
import { DemoChildrenContainer } from './CornerBox.styled';
import { CornerType } from './CornerBox.types';
import CornerBox from './CornerBox.component';

const meta = {
  title: 'app/CornerBox',
  component: CornerBox,
  argTypes: {
    topLeft: {
      description: 'Corner type for the top-left corner',
      control: 'select',
      options: [CornerType.Square, CornerType.Angled, CornerType.Boxed, CornerType.Rounded],
      defaultValue: CornerType.Square,
      table: {
        type: { summary: 'square | angled | boxed | rounded' },
        defaultValue: { summary: 'square' },
      },
    },
    topRight: {
      description: 'Corner type for the top-right corner',
      control: 'select',
      options: [CornerType.Square, CornerType.Angled, CornerType.Boxed, CornerType.Rounded],
      defaultValue: CornerType.Square,
      table: {
        type: { summary: 'square | angled | boxed | rounded' },
        defaultValue: { summary: 'square' },
      },
    },
    bottomLeft: {
      description: 'Corner type for the bottom-left corner',
      control: 'select',
      options: [CornerType.Square, CornerType.Angled, CornerType.Boxed, CornerType.Rounded],
      defaultValue: CornerType.Square,
      table: {
        type: { summary: 'square | angled | boxed | rounded' },
        defaultValue: { summary: 'square' },
      },
    },
    bottomRight: {
      description: 'Corner type for the bottom-right corner',
      control: 'select',
      options: [CornerType.Square, CornerType.Angled, CornerType.Boxed, CornerType.Rounded],
      defaultValue: CornerType.Square,
      table: {
        type: { summary: 'square | angled | boxed | rounded' },
        defaultValue: { summary: 'square' },
      },
    },
    cornerSize: {
      description: 'Size of the corners. Should be specified in em units.',
      control: 'text',
      defaultValue: '0.75em',
      table: {
        type: { summary: 'string (em units)' },
        defaultValue: { summary: '0.75em' },
      },
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
  },
};

export const Color: Story = {
  args: {
    topLeft: CornerType.Square,
    topRight: CornerType.Boxed,
    bottomRight: CornerType.Angled,
    bottomLeft: CornerType.Square,
    borderColor: 'yellow',
    backgroundColor: 'lightblue',
    children: <DemoChildren />,
  },
};

export const Size: Story = {
  args: {
    topLeft: CornerType.Square,
    topRight: CornerType.Boxed,
    bottomRight: CornerType.Angled,
    bottomLeft: CornerType.Square,
    cornerSize: '1em',
    children: <DemoChildren />,
  },
};

export const Rounded: Story = {
  args: {
    topLeft: CornerType.Rounded,
    topRight: CornerType.Rounded,
    bottomRight: CornerType.Rounded,
    bottomLeft: CornerType.Rounded,
    cornerSize: '2em',
    children: <DemoChildren />,
  },
};
