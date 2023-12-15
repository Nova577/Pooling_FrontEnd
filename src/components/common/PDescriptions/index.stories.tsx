import type { Meta, StoryObj } from '@storybook/react';
import walletIconSrc from '@/assets/wallet_icon.svg'

import PDescriptions from '.';

const meta = {
  title: 'Components/PDescriptions',
  component: PDescriptions,
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
} satisfies Meta<typeof PDescriptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { key: 'k0', label: <img src={walletIconSrc} />, children: 'child0' },
      { key: 'k1', label: <img src={walletIconSrc} />, children: 'child1' },
      { key: 'k2', label: <img src={walletIconSrc} />, children: 'child2' },
    ]
  },
};
