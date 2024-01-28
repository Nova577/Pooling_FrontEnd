import type { Meta, StoryObj } from '@storybook/react';

import PTimePicker from '.';

const meta = {
  title: 'Components/PTimePicker',
  component: PTimePicker,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
