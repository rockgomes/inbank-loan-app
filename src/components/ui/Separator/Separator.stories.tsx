import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '396px' }}>
        <p style={{ margin: '0 0 16px 0' }}>Content above</p>
        <Story />
        <p style={{ margin: '16px 0 0 0' }}>Content below</p>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', height: '100px', gap: '16px' }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
};

export const InCard: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '396px', backgroundColor: '#fff', padding: '24px', borderRadius: '18px' }}>
        <div style={{ marginBottom: '24px' }}>
          <p style={{ margin: 0, fontWeight: 500 }}>Monthly payment</p>
          <p style={{ margin: '4px 0 0 0', fontSize: '28px', fontWeight: 500 }}>12.64 € × 48 months</p>
        </div>
        <Story />
        <div style={{ marginTop: '24px', display: 'flex', gap: '30px' }}>
          <div>
            <p style={{ margin: 0, fontWeight: 500 }}>Down payment</p>
            <p style={{ margin: '4px 0 0 0', fontSize: '28px', fontWeight: 500 }}>150.00 €</p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 500 }}>Payment day</p>
            <p style={{ margin: '4px 0 0 0', fontSize: '28px', fontWeight: 500 }}>15th</p>
          </div>
        </div>
      </div>
    ),
  ],
};
