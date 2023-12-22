import type { Meta, StoryObj } from '@storybook/react';

import QuestionnaireCreateItem from '.';

const meta = {
  title: 'Example/QuestionnaireCreateItem',
  component: QuestionnaireCreateItem,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QuestionnaireCreateItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
