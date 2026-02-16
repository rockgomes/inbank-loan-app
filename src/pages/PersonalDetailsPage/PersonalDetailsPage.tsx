import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../../components/layout/PageLayout';
import { PageTitle } from '../../components/layout/PageTitle';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { ContactDetailsCard } from '../../components/loan/ContactDetailsCard';
import { AdditionalInfoSection } from '../../components/loan/AdditionalInfoSection';
import { ComplianceCheckboxes } from '../../components/loan/ComplianceCheckboxes';
import { useLoanFlow } from '../../contexts/LoanFlowContext';
import styles from './PersonalDetailsPage.module.css';

const MOCK_CONTACT_DATA = {
  name: 'Roque Gomes Paes de Brito',
  email: 'emailnamehere@email.com',
  phone: '+372 12345678',
  address: 'Otsa tee 7-6, Rae vald RAE VALD 75304, HARJU MAAKOND',
};

export function PersonalDetailsPage() {
  const navigate = useNavigate();
  const { state, setFinancialDetails, setComplianceConsents } = useLoanFlow();

  const [monthlyIncome, setMonthlyIncome] = useState(
    state.financialDetails?.monthlyIncome || '',
  );
  const [monthlyObligations, setMonthlyObligations] = useState(
    state.financialDetails?.monthlyObligations || '',
  );
  const [complianceValues, setComplianceValues] = useState({
    noInfluence: state.complianceConsents?.noInfluence || false,
    termsAccepted: state.complianceConsents?.termsAccepted || false,
    marketingConsent: state.complianceConsents?.marketingConsent || false,
  });

  const [financialErrors, setFinancialErrors] = useState<{
    monthlyIncome?: string;
    monthlyObligations?: string;
  }>({});
  const [showComplianceErrors, setShowComplianceErrors] = useState(false);
  const [touched, setTouched] = useState({
    monthlyIncome: false,
    monthlyObligations: false,
  });

  const validateFinancialField = (field: 'monthlyIncome' | 'monthlyObligations', value: string) => {
    if (!value.trim()) {
      return field === 'monthlyIncome' 
        ? 'Monthly income is required' 
        : 'Monthly obligations is required';
    }
    if (isNaN(Number(value)) || Number(value) < 0) {
      return 'Please enter a valid number';
    }
    return undefined;
  };

  const handleIncomeBlur = () => {
    setTouched((prev) => ({ ...prev, monthlyIncome: true }));
    const error = validateFinancialField('monthlyIncome', monthlyIncome);
    setFinancialErrors((prev) => ({ ...prev, monthlyIncome: error }));
  };

  const handleObligationsBlur = () => {
    setTouched((prev) => ({ ...prev, monthlyObligations: true }));
    const error = validateFinancialField('monthlyObligations', monthlyObligations);
    setFinancialErrors((prev) => ({ ...prev, monthlyObligations: error }));
  };

  const handleComplianceChange = (
    field: keyof typeof complianceValues,
    value: boolean,
  ) => {
    setComplianceValues((prev) => ({ ...prev, [field]: value }));
    if (showComplianceErrors) {
      setShowComplianceErrors(false);
    }
  };

  const isFormValid = () => {
    const incomeError = validateFinancialField('monthlyIncome', monthlyIncome);
    const obligationsError = validateFinancialField('monthlyObligations', monthlyObligations);
    const complianceValid = complianceValues.noInfluence && complianceValues.termsAccepted;

    return !incomeError && !obligationsError && complianceValid;
  };

  const handleContinue = () => {
    const incomeError = validateFinancialField('monthlyIncome', monthlyIncome);
    const obligationsError = validateFinancialField('monthlyObligations', monthlyObligations);

    setFinancialErrors({
      monthlyIncome: incomeError,
      monthlyObligations: obligationsError,
    });
    setTouched({
      monthlyIncome: true,
      monthlyObligations: true,
    });

    if (!complianceValues.noInfluence || !complianceValues.termsAccepted) {
      setShowComplianceErrors(true);
      return;
    }

    if (incomeError || obligationsError) {
      return;
    }

    setFinancialDetails({
      monthlyIncome,
      monthlyObligations,
    });

    setComplianceConsents(complianceValues);

    navigate('/decision');
  };

  const handleBack = () => {
    navigate('/identity');
  };

  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle
          title="Hello!"
          subtitle="Please fill out your financial data and review your contact details."
        />

        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            <ContactDetailsCard
              name={MOCK_CONTACT_DATA.name}
              email={MOCK_CONTACT_DATA.email}
              phone={MOCK_CONTACT_DATA.phone}
              address={MOCK_CONTACT_DATA.address}
              showEditButton={false}
            />

            <AdditionalInfoSection
              monthlyIncome={monthlyIncome}
              monthlyObligations={monthlyObligations}
              onIncomeChange={setMonthlyIncome}
              onObligationsChange={setMonthlyObligations}
              onIncomeBlur={handleIncomeBlur}
              onObligationsBlur={handleObligationsBlur}
              errors={touched.monthlyIncome || touched.monthlyObligations ? financialErrors : {}}
            />

            <ComplianceCheckboxes
              values={complianceValues}
              onChange={handleComplianceChange}
              showErrors={showComplianceErrors}
            />

            <Button
              variant="filled"
              fullWidth
              onClick={handleContinue}
              disabled={!isFormValid()}
            >
              Confirm and continue
            </Button>
          </div>
        </Card>

        <div className={styles.footer}>
          <button className={styles.backLink} onClick={handleBack}>
            <Icon name="arrow-left" size="sm" />
            <span>Back</span>
          </button>

          <div className={styles.disclaimers}>
            <p className={styles.disclaimer}>
              The financial service is offered by AS Inbank. Before signing the
              contract, read the terms and conditions carefully and, if needed,
              consult an employee of Inbank or another specialist. More
              information at{' '}
              <a
                href="https://inbank.ee"
                target="_blank"
                rel="noopener noreferrer"
              >
                inbank.ee
              </a>
            </p>
            <p className={styles.disclaimer}>
              Manage your cookie preferences in{' '}
              <a href="#cookie-settings">cookie settings</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
