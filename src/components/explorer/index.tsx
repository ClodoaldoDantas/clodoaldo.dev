import { getAllDocuments } from "@/utils/markdown";
import { CommandMenu } from "./command-menu";
import { File } from "./file";
import { Folder } from "./folder";
import { FullscreenButton } from "./fullscreen-button";
import styles from "./styles.module.scss";

export function Explorer() {
  const documents = getAllDocuments();

  return (
    <aside className={styles.explorer}>
      <div className={styles.header}>
        <span className={styles.label}>Explorer</span>

        <div className={styles.actions}>
          <CommandMenu items={documents} />
          <FullscreenButton />
        </div>
      </div>

      <div className={styles.content}>
        <Folder title="profile" defaultOpen>
          <File href="/docs/about">about.md</File>
        </Folder>

        <Folder title="work">
          <File href="/docs/experiences">experiences.md</File>
        </Folder>

        <Folder title="education">
          <File href="/docs/qualifications">qualifications.md</File>
          <File href="/docs/courses">courses.md</File>
        </Folder>
      </div>
    </aside>
  );
}
