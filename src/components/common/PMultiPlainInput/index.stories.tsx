import type { Meta, StoryObj } from '@storybook/react';

import PMultiPlainInput from '.';

const meta = {
  title: 'Components/PMultiPlainInput',
  component: PMultiPlainInput,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PMultiPlainInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
