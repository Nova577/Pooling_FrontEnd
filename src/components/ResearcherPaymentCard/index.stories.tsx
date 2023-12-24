import type { Meta, StoryObj } from '@storybook/react';

import ResearcherPaymentCard from '.';

const meta = {
  title: 'Business/ResearcherPaymentCard',
  component: ResearcherPaymentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResearcherPaymentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullFunction: Story = {
  args: {
   
  },
};
