import { XIcon } from "lucide-react";
import Link from "next/link";
import styles from "./styles.module.scss";

type CurrentFileProps = {
  filename: string;
  extension?: string;
};

export function CurrentFile({ filename, extension = ".md" }: CurrentFileProps) {
  return (
    <div className={styles.tabBar}>
      <div className={styles.file}>
        <span className={styles.fileName}>
          {filename}
          {extension}
        </span>

        <Link
          href="/"
          className={styles.closeButton}
          aria-label="Fechar editor"
        >
          <XIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
