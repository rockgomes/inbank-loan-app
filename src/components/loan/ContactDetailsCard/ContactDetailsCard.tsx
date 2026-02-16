import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';
import styles from './ContactDetailsCard.module.css';

export interface ContactDetailsCardProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  onEdit?: () => void;
  showEditButton?: boolean;
}

export function ContactDetailsCard({
  name,
  email,
  phone,
  address,
  onEdit,
  showEditButton = false,
}: ContactDetailsCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <span className={styles.label}>Name</span>
        <span className={styles.value}>{name}</span>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>E-mail</span>
        <span className={styles.value}>{email}</span>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Mobile number</span>
        <span className={styles.value}>{phone}</span>
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Address</span>
        <span className={styles.value}>{address}</span>
      </div>

      {showEditButton && onEdit && (
        <Button
          variant="filledLight"
          size="default"
          icon={<Icon name="edit" size="sm" />}
          iconPosition="left"
          onClick={onEdit}
          className={styles.editButton}
        >
          Edit contact details
        </Button>
      )}
    </div>
  );
}
