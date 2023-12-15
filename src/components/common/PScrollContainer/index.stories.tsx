import type { Meta, StoryObj } from '@storybook/react';

import PScrollContainer from '.';

const meta = {
  title: 'Example/PScrollContainer',
  component: PScrollContainer,
  parameters: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PScrollContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
