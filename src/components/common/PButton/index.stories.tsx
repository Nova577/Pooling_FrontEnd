import type { Meta, StoryObj } from '@storybook/react';

import PButton from '.';

const meta = {
  title: 'Components/PButton',
  component: PButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me'
  },
};

export const Primary: Story = {
  args: {
    children: 'Click me',
    type: 'primary'
  },
};

export const Ghost: Story = {
  args: {
    children: 'Click me',
    type: 'ghost'
  },
};
