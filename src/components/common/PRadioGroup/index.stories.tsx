import type { Meta, StoryObj } from '@storybook/react';

import PRadioGroupItem from '.';

const meta = {
  title: 'Example/NewPRadioGroup',
  component: PRadioGroupItem,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PRadioGroupItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: ['item1', 'item2', 'item3', 'item4'],
  },
};
