import type { Meta, StoryObj } from '@storybook/react';

import PTimeline from '.';
import TimelineCard, { TimelineCardType } from '@/components/TimelineCard';

const meta = {
  title: 'Components/PTimeline',
  component: PTimeline,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        key: 'k0',
        right: <TimelineCard title='Daily Sugar Consumption' dateString='Dec 5th' type={TimelineCardType.APPOINTMENT} />,
        middle: <div className='h-[30px] w-[30px] rounded-full bg-[#D8C7BB]' />
      },
      { key: 'k1', left:  <TimelineCard title='Daily Sugar Consumption' dateString='Dec 5th' type={TimelineCardType.QUESTIONNAIRE} /> },
    ]
  },
};
