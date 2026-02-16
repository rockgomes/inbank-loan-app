import { PageLayout } from "../../components/layout/PageLayout";
import { PageTitle } from "../../components/layout/PageTitle";
import { Card } from "../../components/ui/Card";
import styles from "./DecisionPage.module.css";

export function DecisionPage() {
  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle
          titleItalic="Please"
          title=" wait"
          subtitle="We're reviewing your application."
        />

        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            <div className={styles.loader}>
              <p className={styles.loaderText}>One moment…</p>
              <div className={styles.dots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}
