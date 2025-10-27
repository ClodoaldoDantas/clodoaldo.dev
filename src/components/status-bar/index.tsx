import { FeedbackDialog } from "./feedback-dialog";
import { FontToggle } from "./font-toggle";
import styles from "./styles.module.scss";
import { ThemeToggle } from "./theme-toggle";

export function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusBarContainer}>
        <FeedbackDialog />
        <ThemeToggle />
        <FontToggle />
      </div>
    </div>
  );
}
