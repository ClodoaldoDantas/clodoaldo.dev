import { FeedbackDialog } from "./feedback-dialog";
import styles from "./styles.module.scss";
import { ThemeToggle } from "./theme-toggle";

export function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusBarContainer}>
        <FeedbackDialog />
        <ThemeToggle />
      </div>
    </div>
  );
}
