import type { Meta, StoryObj } from '@storybook/react';
import CornerBox from '.';

const meta = {
  title: 'app/CornerBox',
  component: CornerBox,
} satisfies Meta<typeof CornerBox>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}