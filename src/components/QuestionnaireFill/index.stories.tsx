import type { Meta, StoryObj } from '@storybook/react';

import QuestionnaireFill from '.';

const meta = {
  title: 'Example/QuestionnaireFill',
  component: QuestionnaireFill,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionnaireFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { key: 'key0', label: 'label0', value: 'value0' }
    ]
  },
};
