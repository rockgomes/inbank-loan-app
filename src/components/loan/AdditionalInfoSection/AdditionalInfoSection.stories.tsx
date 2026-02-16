import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { AdditionalInfoSection } from './AdditionalInfoSection';

const meta = {
  title: 'Loan/AdditionalInfoSection',
  component: AdditionalInfoSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AdditionalInfoSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [income, setIncome] = useState('');
    const [obligations, setObligations] = useState('');

    return (
      <AdditionalInfoSection
        monthlyIncome={income}
        monthlyObligations={obligations}
        onIncomeChange={setIncome}
        onObligationsChange={setObligations}
      />
    );
  },
};

export const WithValues: Story = {
  render: () => {
    const [income, setIncome] = useState('2500');
    const [obligations, setObligations] = useState('450');

    return (
      <AdditionalInfoSection
        monthlyIncome={income}
        monthlyObligations={obligations}
        onIncomeChange={setIncome}
        onObligationsChange={setObligations}
      />
    );
  },
};

export const WithErrors: Story = {
  render: () => {
    const [income, setIncome] = useState('');
    const [obligations, setObligations] = useState('');

    return (
      <AdditionalInfoSection
        monthlyIncome={income}
        monthlyObligations={obligations}
        onIncomeChange={setIncome}
        onObligationsChange={setObligations}
        errors={{
          monthlyIncome: 'Monthly income is required',
          monthlyObligations: 'Monthly obligations is required',
        }}
      />
    );
  },
};
