import type { Meta, StoryObj } from '@storybook/react';

import ResearchProfileEdit from '.';

const meta = {
  title: 'Example/ResearchProfileEdit',
  component: ResearchProfileEdit,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResearchProfileEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
