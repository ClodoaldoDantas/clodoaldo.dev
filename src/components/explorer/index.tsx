import { File } from "./file";
import { Folder } from "./folder";
import styles from "./styles.module.scss";

export function Explorer() {
  return (
    <aside className={styles.explorer}>
      <span className={styles.label}>Explorer</span>

      <div className={styles.content}>
        <Folder title="about" defaultOpen>
          <File href="/docs/about">index.md</File>
        </Folder>

        <Folder title="experiences">
          <File href="/docs/experiences">index.md</File>
        </Folder>

        <Folder title="education">
          <File href="/docs/qualifications">qualifications.md</File>
          <File href="/docs/courses">courses.md</File>
        </Folder>
      </div>
    </aside>
  );
}
