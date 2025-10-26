import styles from "./styles.module.scss";

export function Shortcuts() {
  return (
    <div className={styles.shortcuts}>
      <p className={styles.command}>
        Ir para o arquivo <kbd>Ctrl</kbd> + <kbd>P</kbd>
      </p>
    </div>
  );
}
