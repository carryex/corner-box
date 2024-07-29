import type { Meta, StoryObj } from '@storybook/react';
import { DemoChildrenContainer } from './CornerBox.styled';
import { CornerType } from './CornerBox.types';
import CornerBox from './CornerBox.component';

const meta = {
  title: 'app/CornerBox',
  component: CornerBox,
} satisfies Meta<typeof CornerBox>;
export default meta;

type Story = StoryObj<typeof meta>;

const DemoChildren = () => <DemoChildrenContainer>
  <h1>Demo CornerBox</h1>
  <p>Feel free to change the params</p>
</DemoChildrenContainer>

export const Default: Story = {
  args: {
    topLeft: CornerType.Square,
    topRight: CornerType.Boxed,
    bottomRight: CornerType.Angled,
    bottomLeft: CornerType.Square,
    children: <DemoChildren />
  },
}

export const Color: Story = {
  args: {
    topLeft: CornerType.Square,
    topRight: CornerType.Boxed,
    bottomRight: CornerType.Angled,
    bottomLeft: CornerType.Square,
    borderColor: 'yellow',
    backgroundColor: 'lightblue',
    children: <DemoChildren />
  },
}

export const Size: Story = {
  args: {
    topLeft: CornerType.Square,
    topRight: CornerType.Boxed,
    bottomRight: CornerType.Angled,
    bottomLeft: CornerType.Square,
    cornerSize: '40px',
    children: <DemoChildren />
  },
}