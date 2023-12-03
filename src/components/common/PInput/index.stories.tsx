import type { Meta, StoryObj } from '@storybook/react';

import PInput from '.';

const meta = {
  title: 'Example/PInput',
  component: PInput,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
