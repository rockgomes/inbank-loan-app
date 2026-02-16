import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoanSummaryCard } from './LoanSummaryCard';

const meta: Meta<typeof LoanSummaryCard> = {
  title: 'Loan/LoanSummaryCard',
  component: LoanSummaryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '480px', backgroundColor: '#FBFAF9', padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoanSummaryCard>;

export const Default: Story = {
  args: {
    monthlyPayment: 12.64,
    loanPeriodMonths: 48,
    downPayment: 150.0,
    downPaymentPercentage: 30,
    minDownPaymentPercentage: 6,
    paymentDay: 15,
    onEditConditions: () => console.log('Edit conditions clicked'),
  },
};

export const ShortTerm: Story = {
  args: {
    monthlyPayment: 45.5,
    loanPeriodMonths: 12,
    downPayment: 100.0,
    downPaymentPercentage: 20,
    minDownPaymentPercentage: 6,
    paymentDay: 1,
    onEditConditions: () => console.log('Edit conditions clicked'),
  },
};

export const LargeAmount: Story = {
  args: {
    monthlyPayment: 125.99,
    loanPeriodMonths: 60,
    downPayment: 500.0,
    downPaymentPercentage: 15,
    minDownPaymentPercentage: 6,
    paymentDay: 28,
    onEditConditions: () => console.log('Edit conditions clicked'),
  },
};
