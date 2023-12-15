import type { Meta, StoryObj } from '@storybook/react';

import QuestionnaireResult from '.';

const meta = {
  title: 'Example/QuestionnaireResult',
  component: QuestionnaireResult,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionnaireResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
