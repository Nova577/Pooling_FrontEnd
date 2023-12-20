import type { Meta, StoryObj } from '@storybook/react';

import ParticipatorProfileEditCard from '.';

const meta = {
  title: 'Business/ParticipatorProfileEditCard',
  component: ParticipatorProfileEditCard,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParticipatorProfileEditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
