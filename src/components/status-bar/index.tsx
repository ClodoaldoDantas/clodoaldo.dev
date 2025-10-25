import styles from "./styles.module.scss";

export function StatusBar({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusBarContainer}>{children}</div>
    </div>
  );
}
