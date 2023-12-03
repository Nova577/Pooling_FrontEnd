import type { Meta, StoryObj } from '@storybook/react';

import PCard from '.';

const meta = {
  title: 'Example/PCard',
  component: PCard,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'asdf'
  },
};
