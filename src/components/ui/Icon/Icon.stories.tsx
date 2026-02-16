import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['edit', 'arrow-left', 'file-text', 'download', 'x'],
      description: 'Icon name',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Icon size',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Edit: Story = {
  args: {
    name: 'edit',
  },
};

export const ArrowLeft: Story = {
  args: {
    name: 'arrow-left',
  },
};

export const FileText: Story = {
  args: {
    name: 'file-text',
  },
};

export const Download: Story = {
  args: {
    name: 'download',
  },
};

export const X: Story = {
  args: {
    name: 'x',
  },
};

export const Small: Story = {
  args: {
    name: 'edit',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    name: 'edit',
    size: 'lg',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'edit',
    color: '#10B981',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Icon name="edit" />
      <Icon name="arrow-left" />
      <Icon name="file-text" />
      <Icon name="download" />
      <Icon name="x" />
    </div>
  ),
};
