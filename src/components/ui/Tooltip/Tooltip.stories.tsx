import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Icon } from '../Icon';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip message',
    children: <Icon name="help-circle" size="sm" />,
  },
};

export const LongContent: Story = {
  args: {
    content: 'Net salary, bonuses, pension, parental benefit, state aid and other monthly net income.',
    children: <Icon name="help-circle" size="sm" />,
  },
};

export const BottomPosition: Story = {
  args: {
    content: 'This tooltip appears below',
    position: 'bottom',
    children: <Icon name="help-circle" size="sm" />,
  },
};
