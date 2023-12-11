import type { Meta, StoryObj } from '@storybook/react';

import PSelect from '.';

const meta = {
  title: 'Example/PSelect',
  component: PSelect,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { key: 'key0', label: 'label0', value: 'value0' }
    ]
  },
};
