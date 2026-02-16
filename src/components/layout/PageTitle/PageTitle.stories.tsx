import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageTitle } from './PageTitle';

const meta: Meta<typeof PageTitle> = {
  title: 'Layout/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '540px', backgroundColor: '#F5F0FF', padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PageTitle>;

export const PayInParts: Story = {
  args: {
    titleItalic: 'Pay',
    title: ' in parts',
    subtitle: 'The smart way to pay for bigger purchases.',
  },
};

export const IdentifyYourself: Story = {
  args: {
    titleItalic: 'Identify',
    title: ' yourself',
    subtitle: 'Please select your preferred authentication method.',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    titleItalic: 'Your personal',
    title: ' credit offer',
  },
};

export const NoItalic: Story = {
  args: {
    title: 'Please wait',
    subtitle: "We're reviewing your application.",
  },
};
