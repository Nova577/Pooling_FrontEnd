import type { Meta, StoryObj } from '@storybook/react';

import ProfileEdit from '.';

const meta = {
  title: 'Example/ProfileEdit',
  component: ProfileEdit,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { key: 'key0', label: 'label0', value: 'value0' }
    ]
  },
};
