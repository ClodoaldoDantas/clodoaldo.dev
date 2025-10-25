import styles from "./styles.module.scss";

export function Content({ children }: { children: React.ReactNode }) {
  return <section className={styles.content}>{children}</section>;
}
