import type { Meta, StoryObj } from '@storybook/react';

import PTag from '.';

const meta = {
  title: 'Components/PTag',
  component: PTag,
  parameters: {
    backgrounds: {
      default: 'gray-100',
      values: [
        { name: 'gray-100', value: 'rgb(243, 244, 246)' }
      ]
    }
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '# Cat'
  },
};
