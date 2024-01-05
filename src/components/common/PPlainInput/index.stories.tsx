import type { Meta, StoryObj } from '@storybook/react';

import PPlainInput from '.';

const meta = {
  title: 'Components/PPlainInput',
  component: PPlainInput,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PPlainInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
