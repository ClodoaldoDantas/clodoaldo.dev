import { DogIcon } from "lucide-react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <DogIcon size={200} className={styles.icon} />

      <div className={styles.commands}>
        <p className={styles.command}>
          Ir para o arquivo <kbd>Ctrl</kbd> + <kbd>P</kbd>
        </p>
      </div>
    </div>
  );
}
