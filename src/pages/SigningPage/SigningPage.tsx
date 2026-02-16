import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageTitle } from "../../components/layout/PageTitle";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import styles from "./SigningPage.module.css";

export function SigningPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/end");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleCancel = () => {
    navigate("/loan-offer");
  };

  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle titleItalic="Sign" title=" contract" />

        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            <p className={styles.codeLabel}>Your control code is</p>
            <p className={styles.controlCode}>1234</p>
            <p className={styles.instructions}>
              We sent a request to your mobile device. Check the verification
              code and enter <strong>PIN2</strong>.
            </p>
            <Button variant="outlined" fullWidth onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
