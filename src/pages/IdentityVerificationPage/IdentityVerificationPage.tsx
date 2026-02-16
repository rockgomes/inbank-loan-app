import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageTitle } from "../../components/layout/PageTitle";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { TextField } from "../../components/ui/TextField";
import { Icon } from "../../components/ui/Icon";
import { RadioCard } from "../../components/ui/RadioCard";
import { AuthMethodTabs } from "../../components/auth/AuthMethodTabs";
import { useLoanFlow } from "../../contexts/LoanFlowContext";
import { IdCardIcon } from "../../components/ui/Icon/icons";
import styles from "./IdentityVerificationPage.module.css";

const AUTH_METHODS = ["Smart-ID", "Mobile-ID", "ID-card"];

export function IdentityVerificationPage() {
  const navigate = useNavigate();
  const { state, setAuthMethod, setPersonalIdCode } = useLoanFlow();

  const [selectedMethod, setSelectedMethod] = useState(
    state.authMethod || AUTH_METHODS[0],
  );
  const [personalCode, setPersonalCode] = useState(state.personalIdCode || "");
  const [mobilePhone, setMobilePhone] = useState("");
  const [idCardType, setIdCardType] = useState("estonia");
  const [isVerifying, setIsVerifying] = useState(false);
  const [controlCode, setControlCode] = useState("");

  const handleContinue = () => {
    setAuthMethod(selectedMethod);
    setPersonalIdCode(personalCode);

    if (selectedMethod === "Mobile-ID") {
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      setControlCode(code);
      setIsVerifying(true);
    } else {
      navigate("/personal-details");
    }
  };

  const handleCancel = () => {
    setIsVerifying(false);
    setControlCode("");
  };

  const handleBack = () => {
    navigate("/loan-offer");
  };

  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle
          titleItalic="Identify"
          title=" yourself"
          subtitle="Please select your preferred authentication method."
        />

        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            {!isVerifying ? (
              <>
                <AuthMethodTabs
                  methods={AUTH_METHODS}
                  activeMethod={selectedMethod}
                  onSelect={setSelectedMethod}
                />

                <TextField
                  label="Personal identification code"
                  placeholder="12345678900"
                  value={personalCode}
                  onChange={(e) => setPersonalCode(e.target.value)}
                  fullWidth
                />

                {selectedMethod === "Mobile-ID" && (
                  <TextField
                    label="Mobile phone"
                    placeholder="5551234"
                    value={mobilePhone}
                    onChange={(e) => setMobilePhone(e.target.value)}
                    prefix="+372"
                    fullWidth
                  />
                )}

                {selectedMethod === "ID-card" && (
                  <div className={styles.idCardSection}>
                    <p className={styles.idCardMessage}>
                      Insert your ID-card into the card reader.
                    </p>
                    <div className={styles.radioCardGroup}>
                      <RadioCard
                        name="idCardType"
                        value="estonia"
                        label="Estonia"
                        icon={<IdCardIcon />}
                        selected={idCardType === "estonia"}
                        onChange={setIdCardType}
                      />
                      <RadioCard
                        name="idCardType"
                        value="e-residency"
                        label="E-residency"
                        icon={<IdCardIcon />}
                        selected={idCardType === "e-residency"}
                        onChange={setIdCardType}
                      />
                    </div>
                  </div>
                )}

                <Button
                  variant="filled"
                  fullWidth
                  onClick={handleContinue}
                  disabled={
                    !personalCode.trim() ||
                    (selectedMethod === "Mobile-ID" && !mobilePhone.trim())
                  }
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <div className={styles.controlCodeSection}>
                  <p className={styles.controlCodeLabel}>
                    Your control code is
                  </p>
                  <p className={styles.controlCode}>{controlCode}</p>
                  <p className={styles.controlCodeMessage}>
                    We sent a request to your mobile device. Check the
                    verification code and enter PIN1.
                  </p>
                </div>

                <Button variant="outlined" fullWidth onClick={handleCancel}>
                  Cancel
                </Button>
              </>
            )}
          </div>
        </Card>

        <div className={styles.footer}>
          <button className={styles.backLink} onClick={handleBack}>
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
