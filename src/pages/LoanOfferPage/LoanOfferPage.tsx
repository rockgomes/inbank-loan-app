import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageTitle } from "../../components/layout/PageTitle";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import { LoanOfferCard } from "../../components/loan/LoanOfferCard";
import styles from "./LoanOfferPage.module.css";

export function LoanOfferPage() {
  const navigate = useNavigate();

  // Mock data - will be replaced with actual data from context later
  const offerData = {
    monthlyPayment: 12.64,
    loanAmount: 500.0,
  };

  const loanDetails = [
    { label: "Interest rate", value: "9.90%" },
    { label: "Loan period", value: "48 months" },
    { label: "Total amount payable", value: "636.50 €" },
    { label: "Contract fee", value: "30.00 €" },
    { label: "Monthly admin fee", value: "1.50 €" },
    { label: "Financed amount", value: "500.00 €" },
    { label: "First payment", value: "15.04.2023" },
  ];

  const handleSignAndContinue = () => {
    navigate("/signing");
  };

  const handleContractPreview = () => {
    // Open contract preview
    console.log("Contract preview clicked");
  };

  const handleCancelApplication = () => {
    // Cancel and go back
    navigate("/");
  };

  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle titleItalic="Your personal" title=" credit offer" />

        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            <LoanOfferCard
              monthlyPayment={offerData.monthlyPayment}
              loanAmount={offerData.loanAmount}
            />

            <div className={styles.loanDetails}>
              <div className={styles.detailsGrid}>
                {loanDetails.map((detail, index) => (
                  <div key={index} className={styles.detailField}>
                    <span className={styles.detailLabel}>{detail.label}</span>
                    <span className={styles.detailValue}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.contractSection}>
              <p className={styles.contractMessage}>
                Before signing the contract, carefully read the terms and
                conditions and the European consumer credit standard.
              </p>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleContractPreview}
              >
                <Icon name="file-text" size="md" />
                Contract preview
              </Button>
            </div>

            <Button variant="filled" fullWidth onClick={handleSignAndContinue}>
              Sign and continue
            </Button>
          </div>
        </Card>

        <div className={styles.footer}>
          <button
            className={styles.cancelLink}
            onClick={handleCancelApplication}
          >
            <Icon name="x" size="sm" />
            <span>Cancel application</span>
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
