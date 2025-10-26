import { FeedbackDialog } from "./feedback-dialog";
import styles from "./styles.module.scss";

export function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusBarContainer}>
        <FeedbackDialog />
      </div>
    </div>
  );
}
