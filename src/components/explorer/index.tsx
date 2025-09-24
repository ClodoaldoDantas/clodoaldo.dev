import { FileIcon } from "lucide-react";
import Link from "next/link";
import { Folder } from "../folder";
import styles from "./styles.module.css";

export function Explorer() {
  return (
    <aside className={styles.explorer}>
      <span className={styles.label}>Explorer</span>

      <div className={styles.content}>
        <Folder title="about" defaultOpen>
          <Link href="/" className={styles.file}>
            <FileIcon size={18} />
            index.md
          </Link>
        </Folder>

        <Folder title="experiences">
          <Link href="/" className={styles.file}>
            <FileIcon size={18} />
            index.md
          </Link>
        </Folder>

        <Folder title="education">
          <Link href="/" className={styles.file}>
            <FileIcon size={18} />
            qualifications.md
          </Link>

          <Link href="/" className={styles.file}>
            <FileIcon size={18} />
            courses.md
          </Link>
        </Folder>
      </div>
    </aside>
  );
}
