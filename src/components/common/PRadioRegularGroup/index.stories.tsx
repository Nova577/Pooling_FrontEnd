import type { Meta, StoryObj } from '@storybook/react';

import PRadioRegularGroup from '.';

const meta = {
  title: 'Components/PRadioRegularGroup',
  component: PRadioRegularGroup,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PRadioRegularGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '1',
    options: [
      {
        key: '1',value: '1', label: 'option 1'
      },
      {
        key: '2',value: '2', label: 'option 2'
      },
      {
        key: '3',value: '3', label: 'option 3'
      },
    ]
  },
};
