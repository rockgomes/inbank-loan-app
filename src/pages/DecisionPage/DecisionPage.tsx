import { PageLayout } from '../../components/layout/PageLayout';
import { PageTitle } from '../../components/layout/PageTitle';
import { Card } from '../../components/ui/Card';
import styles from './DecisionPage.module.css';

export function DecisionPage() {
  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle
          title="Processing your application"
          subtitle="Please wait while we review your information."
        />

        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            <div className={styles.spinner}>
              <div className={styles.spinnerCircle} />
            </div>
            <p className={styles.message}>
              We're analyzing your application. This usually takes just a few moments.
            </p>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
