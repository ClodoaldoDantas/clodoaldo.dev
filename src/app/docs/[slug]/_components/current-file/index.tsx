"use client";

import { CodeIcon, EyeIcon, XIcon } from "lucide-react";
import Link from "next/link";
import styles from "./styles.module.scss";

type CurrentFileProps = {
  filename: string;
  extension?: string;
  isPreview: boolean;
  onTogglePreview: () => void;
};

export function CurrentFile({
  filename,
  extension = ".md",
  isPreview,
  onTogglePreview,
}: CurrentFileProps) {
  const actionLabel = isPreview ? "Ver código" : "Abrir preview";

  return (
    <div className={styles.tabBar} data-testid="active-tab">
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

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.actionButton}
          aria-label={actionLabel}
          aria-pressed={isPreview}
          title={actionLabel}
          onClick={onTogglePreview}
        >
          {isPreview ? <CodeIcon size={18} /> : <EyeIcon size={18} />}
          <span>{isPreview ? "Código" : "Preview"}</span>
        </button>
      </div>
    </div>
  );
}
