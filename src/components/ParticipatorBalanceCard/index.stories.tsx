import type { Meta, StoryObj } from '@storybook/react';

import BalanceCard from '.';

const meta = {
  title: 'Business/BalanceCard',
  component: BalanceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullFunction: Story = {
  args: {
   
  },
};
