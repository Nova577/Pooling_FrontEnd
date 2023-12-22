import type { Meta, StoryObj } from '@storybook/react';

import QuestionnaireCreate from '.';

const meta = {
  title: 'Example/QuestionnaireCreate',
  component: QuestionnaireCreate,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionnaireCreate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { key: 'key0', label: 'label0', value: 'value0' }
    ]
  },
};
