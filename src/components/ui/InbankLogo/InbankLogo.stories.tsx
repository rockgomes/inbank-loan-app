import type { Meta, StoryObj } from '@storybook/react-vite';
import { InbankLogo } from './InbankLogo';

const meta: Meta<typeof InbankLogo> = {
  title: 'UI/InbankLogo',
  component: InbankLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'small', 'responsive'],
      description: 'Which logo variant to display',
    },
    height: {
      control: 'number',
      description: 'Custom height in pixels (optional)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InbankLogo>;

export const Full: Story = {
  args: {
    variant: 'full',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
  },
};

export const Responsive: Story = {
  args: {
    variant: 'responsive',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows full logo on desktop, small logo on mobile. Resize the viewport to see the change.',
      },
    },
  },
};

export const CustomHeight: Story = {
  args: {
    variant: 'full',
    height: 60,
  },
};

export const SmallCustomHeight: Story = {
  args: {
    variant: 'small',
    height: 24,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', color: '#606060' }}>Full (desktop)</p>
        <InbankLogo variant="full" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', color: '#606060' }}>Small (mobile)</p>
        <InbankLogo variant="small" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px', color: '#606060' }}>Responsive (resize viewport)</p>
        <InbankLogo variant="responsive" />
      </div>
    </div>
  ),
};
