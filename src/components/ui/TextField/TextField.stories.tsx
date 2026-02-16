import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Floating label for the input',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '396px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Personal identification code',
    placeholder: ' ',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Personal identification code',
    defaultValue: '12345678900',
    placeholder: ' ',
  },
};

export const WithError: Story = {
  args: {
    label: 'E-mail',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
    placeholder: ' ',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Monthly net income',
    helperText: 'Enter your income after taxes',
    placeholder: ' ',
  },
};

export const WithPrefix: Story = {
  args: {
    label: 'Monthly net income',
    prefix: '€',
    placeholder: ' ',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Phone number',
    prefix: '+372',
    placeholder: ' ',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Personal identification code',
    defaultValue: '12345678900',
    disabled: true,
    placeholder: ' ',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'E-mail',
    fullWidth: true,
    placeholder: ' ',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextField label="Default" placeholder=" " />
      <TextField label="With value" defaultValue="Some value" placeholder=" " />
      <TextField label="With error" defaultValue="Invalid" error="This field has an error" placeholder=" " />
      <TextField label="With helper" helperText="Some helpful text" placeholder=" " />
      <TextField label="With prefix" prefix="€" placeholder=" " />
      <TextField label="Disabled" defaultValue="Cannot edit" disabled placeholder=" " />
    </div>
  ),
};
