import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageTitle } from "../../components/layout/PageTitle";
import { LoanSummaryCard } from "../../components/loan/LoanSummaryCard";
import { OrderInfoSection } from "../../components/loan/OrderInfoSection";
import { LegalConsent } from "../../components/loan/LegalConsent";
import { Button } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import styles from "./LoanDetailsPage.module.css";
import { Card } from "../../components";

export interface LoanDetailsData {
  monthlyPayment: number;
  loanPeriodMonths: number;
  downPayment?: number;
  downPaymentPercentage?: number;
  minDownPaymentPercentage?: number;
  paymentDay: number;
  amount: number;
  merchant: string;
  paymentMethod: string;
}

const mockLoanData: LoanDetailsData = {
  monthlyPayment: 12.64,
  loanPeriodMonths: 48,
  paymentDay: 15,
  amount: 450.12,
  merchant: "Euronics",
  paymentMethod: "Inbank hire purchase",
};

export function LoanDetailsPage() {
  const navigate = useNavigate();
  const [loanData] = useState<LoanDetailsData>(mockLoanData);

  const handleEditConditions = () => {
    console.log("Edit conditions clicked");
  };

  const handleContinue = () => {
    navigate("/identity");
  };

  const handleBackToOverview = () => {
    console.log("Back to overview clicked");
  };

  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle
          titleItalic="Pay"
          title=" in parts"
          subtitle="The smart way to pay for bigger purchases."
        />
        <Card variant="default" padding="small" radius="lg" gap>
          <LoanSummaryCard
            monthlyPayment={loanData.monthlyPayment}
            loanPeriodMonths={loanData.loanPeriodMonths}
            downPayment={loanData.downPayment}
            downPaymentPercentage={loanData.downPaymentPercentage}
            minDownPaymentPercentage={loanData.minDownPaymentPercentage}
            paymentDay={loanData.paymentDay}
            onEditConditions={handleEditConditions}
          />

          <OrderInfoSection
            amount={loanData.amount}
            merchant={loanData.merchant}
            paymentMethod={loanData.paymentMethod}
          />

          <LegalConsent />

          <Button variant="filled" fullWidth onClick={handleContinue}>
            Continue
          </Button>
        </Card>

        <div className={styles.footer}>
          <button className={styles.backLink} onClick={handleBackToOverview}>
            <Icon name="arrow-left" size="sm" />
            <span>Back to overview</span>
          </button>

          <div className={styles.disclaimers}>
            <p className={styles.disclaimer}>
              The financial service is offered by AS Inbank. Before signing the
              contract, read the terms and conditions carefully and, if needed,
              consult an employee of Inbank or another specialist. More
              information at{" "}
              <a
                href="https://inbank.ee"
                target="_blank"
                rel="noopener noreferrer"
              >
                inbank.ee
              </a>
            </p>
            <p className={styles.disclaimer}>
              Manage your cookie preferences in{" "}
              <a href="#cookie-settings">cookie settings</a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
