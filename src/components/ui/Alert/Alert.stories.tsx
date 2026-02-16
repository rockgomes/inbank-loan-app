import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'The visual style of the alert',
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
type Story = StoryObj<typeof Alert>;

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'To continue with the application, confirm that no one has influenced you to apply for credit.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please review your information before continuing.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Your application is being processed. This may take a few moments.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Your application has been approved!',
  },
};

export const WithLink: Story = {
  args: {
    variant: 'error',
    children: (
      <>
        To continue with the application, agree to the{' '}
        <a href="#" onClick={(e) => e.preventDefault()}>
          terms and conditions
        </a>
        .
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="error">Error: Something went wrong.</Alert>
      <Alert variant="warning">Warning: Please check your input.</Alert>
      <Alert variant="info">Info: Processing your request.</Alert>
      <Alert variant="success">Success: Operation completed.</Alert>
    </div>
  ),
};
