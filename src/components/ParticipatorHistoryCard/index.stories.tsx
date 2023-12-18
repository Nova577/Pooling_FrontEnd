import type { Meta, StoryObj } from '@storybook/react';

import HistoryCard from '.';
import testPortraitImgSrc from '@/assets/portrait-dark-skinned.avif'

const meta = {
  title: 'Business/HistoryCard',
  component: HistoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HistoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullFunction: Story = {
  args: {
    imgSrc: testPortraitImgSrc,
    title: 'Daily Sugar Consumption',
    tags: ['Usability', 'High pay', 'Consumer Electronic'],
    status: 'In progress'
  },
};
