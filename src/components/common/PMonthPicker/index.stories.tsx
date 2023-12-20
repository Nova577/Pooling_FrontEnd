import type { Meta, StoryObj } from '@storybook/react';

import PMonthPicker from '.';

const meta = {
  title: 'Components/PMonthPicker',
  component: PMonthPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PMonthPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
