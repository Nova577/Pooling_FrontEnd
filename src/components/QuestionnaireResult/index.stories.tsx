import type { Meta, StoryObj } from '@storybook/react';

import QuestionnaireDetail from '.';

const meta = {
  title: 'Example/QuestionnaireDetail',
  component: QuestionnaireDetail,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionnaireDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { key: 'key0', label: 'label0', value: 'value0' }
    ]
  },
};
