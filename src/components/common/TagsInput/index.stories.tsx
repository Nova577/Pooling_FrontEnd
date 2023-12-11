import type { Meta, StoryObj } from '@storybook/react';

import PTagsInput from '.';

const meta = {
  title: 'Example/PTagsInput',
  component: PTagsInput,
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
} satisfies Meta<typeof PTagsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: ['# test', '# test2']
  },
};
