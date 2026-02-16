import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'selected'],
      description: 'The visual style of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'default', 'large'],
      description: 'The padding inside the card',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px', backgroundColor: '#FBFAF9', padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '8px' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#606060' }}>This is the default card with a subtle shadow.</p>
      </div>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '8px' }}>Bordered Card</h3>
        <p style={{ margin: 0, color: '#606060' }}>This card has a lavender border, used for loan details.</p>
      </div>
    ),
  },
};

export const Selected: Story = {
  args: {
    variant: 'selected',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '8px' }}>Selected Option</h3>
        <p style={{ margin: 0, color: '#606060' }}>This card style indicates a selected state.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div style={{ padding: '20px', backgroundColor: '#F5F0FF' }}>
        <p style={{ margin: 0 }}>Card with no padding - content handles its own spacing.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'large',
    children: (
      <div>
        <h3 style={{ margin: 0, marginBottom: '8px' }}>Large Padding</h3>
        <p style={{ margin: 0, color: '#606060' }}>This card has extra padding for main content areas.</p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Card variant="default">
        <p style={{ margin: 0 }}>Default (shadow)</p>
      </Card>
      <Card variant="bordered">
        <p style={{ margin: 0 }}>Bordered (lavender)</p>
      </Card>
      <Card variant="selected">
        <p style={{ margin: 0 }}>Selected (green)</p>
      </Card>
    </div>
  ),
};
