import type { Meta, StoryObj } from '@storybook/react';

import PRadioGroupItem from '.';

const meta = {
  title: 'Example/PRadioGroup',
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
    options: [
      { label: 'item0', value: 'value0' },
      { label: 'item1', value: 'value1' },
      { label: 'item2', value: 'value2' },
      { label: 'item3', value: 'value3' },
    ],
  },
};
