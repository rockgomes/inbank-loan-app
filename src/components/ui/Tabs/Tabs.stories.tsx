import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
import type { Tab } from './Tabs';

const sampleTabs: Tab[] = [
  {
    id: 'smart-id',
    label: 'Smart-ID',
    content: (
      <div style={{ padding: '16px 0' }}>
        <p style={{ margin: 0, color: '#606060' }}>
          Enter your personal identification code to authenticate with Smart-ID.
        </p>
      </div>
    ),
  },
  {
    id: 'mobile-id',
    label: 'Mobile-ID',
    content: (
      <div style={{ padding: '16px 0' }}>
        <p style={{ margin: 0, color: '#606060' }}>
          Enter your phone number and personal code to authenticate with Mobile-ID.
        </p>
      </div>
    ),
  },
  {
    id: 'id-card',
    label: 'ID-card',
    content: (
      <div style={{ padding: '16px 0' }}>
        <p style={{ margin: 0, color: '#606060' }}>
          Insert your ID-card and enter PIN1 to authenticate.
        </p>
      </div>
    ),
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '396px', backgroundColor: '#fff', padding: '24px', borderRadius: '18px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveId: 'smart-id',
  },
};

export const SecondTabActive: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveId: 'mobile-id',
  },
};

export const Controlled: Story = {
  render: function ControlledTabs() {
    const [activeId, setActiveId] = useState('smart-id');
    return (
      <div>
        <Tabs tabs={sampleTabs} activeId={activeId} onChange={setActiveId} />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#9C9C9C' }}>
          Active tab: {activeId}
        </p>
      </div>
    );
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: sampleTabs.slice(0, 2),
    defaultActiveId: 'smart-id',
  },
};
