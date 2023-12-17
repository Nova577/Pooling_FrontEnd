import type { Meta, StoryObj } from '@storybook/react';
import PProgress from '.';

const meta = {
  title: 'Example/PProgress',
  component: PProgress,
  parameters: {
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 50,
    classNames: {
      track: 'bg-rose-50',
      indicator: 'bg-rose-100'
    }
  },
};
