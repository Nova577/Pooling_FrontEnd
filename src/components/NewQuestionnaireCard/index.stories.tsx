import type { Meta, StoryObj } from '@storybook/react';

import NewQuestionnaireCard from '.';

const meta = {
  title: 'Business/NewQuestionnaireCard',
  component: NewQuestionnaireCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NewQuestionnaireCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullFunction: Story = {
  args: {
   
  },
};
