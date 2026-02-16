import { PageLayout } from "../../components/layout/PageLayout";
import { PageTitle } from "../../components/layout/PageTitle";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Icon } from "../../components/ui/Icon";
import styles from "./CompletionPage.module.css";

const illustrationImage =
  "https://www.figma.com/api/mcp/asset/96eed0cf-1345-4462-b876-250d23ae6b06";

export function CompletionPage() {
  const handleDownloadContract = () => {
    // Placeholder - no action needed for now
  };

  const handleBackToMerchant = () => {
    // Placeholder - no action needed for now
  };

  return (
    <PageLayout>
      <div className={styles.content}>
        <PageTitle
          titleItalic="You're"
          title=" all set!"
          subtitle="Thank you for shopping with Inbank."
        />
        <Card variant="default" padding="small" radius="lg" gap>
          <div className={styles.cardContent}>
            <p className={styles.instructions}>
              Download a copy of your signed contract to access it at any time
              or view it on our{" "}
              <a href="#self-service" className={styles.link}>
                self-service
              </a>
              .
            </p>

            <Button
              variant="filledLight"
              fullWidth
              onClick={handleDownloadContract}
            >
              <Icon name="file-text" size="md" />
              Download signed contract
            </Button>

            <Button variant="filled" fullWidth onClick={handleBackToMerchant}>
              Back to merchant
            </Button>
          </div>
        </Card>

        <div className={styles.illustration}>
          <img
            src={illustrationImage}
            alt="Success illustration"
            className={styles.illustrationImage}
          />
        </div>
      </div>
    </PageLayout>
  );
}
