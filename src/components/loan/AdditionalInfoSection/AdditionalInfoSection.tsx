import { TextField } from "../../ui/TextField";
import { Icon } from "../../ui/Icon";
import { Tooltip } from "../../ui/Tooltip";
import styles from "./AdditionalInfoSection.module.css";

export interface AdditionalInfoSectionProps {
  monthlyIncome: string;
  monthlyObligations: string;
  onIncomeChange: (value: string) => void;
  onObligationsChange: (value: string) => void;
  onIncomeBlur?: () => void;
  onObligationsBlur?: () => void;
  errors?: {
    monthlyIncome?: string;
    monthlyObligations?: string;
  };
}

const INCOME_TOOLTIP =
  "Net salary, bonuses, pension, parental benefit, state aid and other monthly net income.";
const OBLIGATIONS_TOOLTIP =
  "Monthly loan and leasing payments outside Inbank Group. You can leave out your credit card limits.";

export function AdditionalInfoSection({
  monthlyIncome,
  monthlyObligations,
  onIncomeChange,
  onObligationsChange,
  onIncomeBlur,
  onObligationsBlur,
  errors,
}: AdditionalInfoSectionProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Additional information</h3>

      <div className={styles.fields}>
        <TextField
          label="Monthly net income"
          placeholder="0"
          value={monthlyIncome}
          onChange={(e) => onIncomeChange(e.target.value)}
          onBlur={onIncomeBlur}
          prefix="€"
          suffix={
            <Tooltip content={INCOME_TOOLTIP}>
              <Icon name="help-circle" size="sm" color="var(--color-grey-2)" />
            </Tooltip>
          }
          error={errors?.monthlyIncome}
          helperText={
            !errors?.monthlyIncome
              ? "Your total monthly income after taxes"
              : undefined
          }
          fullWidth
        />

        <TextField
          label="Monthly obligations"
          placeholder="0"
          value={monthlyObligations}
          onChange={(e) => onObligationsChange(e.target.value)}
          onBlur={onObligationsBlur}
          prefix="€"
          suffix={
            <Tooltip content={OBLIGATIONS_TOOLTIP}>
              <Icon name="help-circle" size="sm" color="var(--color-grey-2)" />
            </Tooltip>
          }
          error={errors?.monthlyObligations}
          helperText={
            !errors?.monthlyObligations
              ? "Enter 0 if you have no existing obligations"
              : undefined
          }
          fullWidth
        />
      </div>
    </div>
  );
}
