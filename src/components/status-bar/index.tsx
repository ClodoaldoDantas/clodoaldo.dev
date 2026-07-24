import { TerminalIcon } from "lucide-react";
import { FontToggle } from "./font-toggle";
import styles from "./styles.module.scss";
import { ThemeToggle } from "./theme-toggle";

export function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusBarContainer}>
        <a
          className={styles.statusBarLink}
          href="https://cli.clodoaldo.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TerminalIcon size={18} aria-hidden="true" />
          CLI
        </a>

        <div className={styles.statusBarActions}>
          <ThemeToggle />
          <FontToggle />
        </div>
      </div>
    </div>
  );
}
