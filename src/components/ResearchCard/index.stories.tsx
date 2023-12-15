import type { Meta, StoryObj } from '@storybook/react';

import ResearchCard from '.';
import testPortraitImgSrc from '@/assets/portrait-dark-skinned.avif'

const meta = {
  title: 'Business/ResearchCard',
  component: ResearchCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResearchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullFunction: Story = {
  args: {
    fee: '$10',
    imgSrc: testPortraitImgSrc,
    school: 'Harvard University',
    status: 'Online',
    tags: ['Usability', 'High pay', 'Consumer Electronic'],
    time: '20-25Minutes',
    title: 'Usability Research'
  },
};
