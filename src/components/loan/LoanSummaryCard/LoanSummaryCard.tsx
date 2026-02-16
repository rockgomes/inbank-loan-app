import type { HTMLAttributes } from "react";
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { Separator } from "../../ui/Separator";
import { Icon } from "../../ui/Icon";
import { InfoRow } from "../../ui/InfoRow";
import styles from "./LoanSummaryCard.module.css";

export interface LoanSummaryCardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> {
  monthlyPayment: number;
  loanPeriodMonths: number;
  downPayment?: number;
  downPaymentPercentage?: number;
  minDownPaymentPercentage?: number;
  paymentDay: number;
  onEditConditions?: () => void;
}

export function LoanSummaryCard({
  monthlyPayment,
  loanPeriodMonths,
  downPayment,
  downPaymentPercentage,
  minDownPaymentPercentage,
  paymentDay,
  onEditConditions,
  className,
  ...props
}: LoanSummaryCardProps) {
  const classNames = [styles.loanSummaryCard, className]
    .filter(Boolean)
    .join(" ");

  const hasDownPayment = downPayment !== undefined && downPayment > 0;

  return (
    <Card
      variant="bordered"
      padding="large"
      radius="md"
      className={classNames}
      {...props}
    >
      <div className={styles.content}>
        {/* Monthly Payment - Priority Section */}
        <div className={styles.monthlyPaymentSection}>
          <InfoRow
            label="Monthly payment"
            value={
              <div className={styles.monthlyPaymentValue}>
                <span className={styles.amount}>
                  {monthlyPayment.toFixed(2)} €
                </span>
                <span className={styles.multiplier}>×</span>
                <span className={styles.period}>
                  <strong>{loanPeriodMonths}</strong> months
                </span>
              </div>
            }
            helperText="Exact calculation in the offer"
          />
        </div>

        <Separator />

        {/* Down Payment & Payment Day Row */}
        <div className={styles.detailsRow}>
          {hasDownPayment && (
            <InfoRow
              label="Down payment"
              value={
                <div className={styles.downPaymentValue}>
                  <span className={styles.amount}>
                    {downPayment!.toFixed(2)} €
                  </span>
                  <span className={styles.percentage}>
                    ({downPaymentPercentage}%)
                  </span>
                </div>
              }
              helperText={
                minDownPaymentPercentage
                  ? `Minimum ${minDownPaymentPercentage}%`
                  : undefined
              }
            />
          )}
          <InfoRow
            label="Payment day"
            value={<span className={styles.amount}>{paymentDay}th</span>}
            helperText="each month"
          />
        </div>

        {/* Edit Button */}
        <Button
          variant="filledLight"
          icon={<Icon name="edit" />}
          fullWidth
          onClick={onEditConditions}
        >
          Edit conditions
        </Button>
      </div>
    </Card>
  );
}
