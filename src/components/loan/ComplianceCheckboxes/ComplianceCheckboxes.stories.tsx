import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ComplianceCheckboxes } from './ComplianceCheckboxes';

const meta = {
  title: 'Loan/ComplianceCheckboxes',
  component: ComplianceCheckboxes,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComplianceCheckboxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [values, setValues] = useState({
      noInfluence: false,
      termsAccepted: false,
      marketingConsent: false,
    });

    const handleChange = (field: keyof typeof values, value: boolean) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    };

    return (
      <ComplianceCheckboxes
        values={values}
        onChange={handleChange}
        showErrors={false}
      />
    );
  },
};

export const WithErrors: Story = {
  render: () => {
    const [values, setValues] = useState({
      noInfluence: false,
      termsAccepted: false,
      marketingConsent: false,
    });

    const handleChange = (field: keyof typeof values, value: boolean) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    };

    return (
      <ComplianceCheckboxes
        values={values}
        onChange={handleChange}
        showErrors={true}
      />
    );
  },
};

export const AllChecked: Story = {
  render: () => {
    const [values, setValues] = useState({
      noInfluence: true,
      termsAccepted: true,
      marketingConsent: true,
    });

    const handleChange = (field: keyof typeof values, value: boolean) => {
      setValues((prev) => ({ ...prev, [field]: value }));
    };

    return (
      <ComplianceCheckboxes
        values={values}
        onChange={handleChange}
        showErrors={false}
      />
    );
  },
};
