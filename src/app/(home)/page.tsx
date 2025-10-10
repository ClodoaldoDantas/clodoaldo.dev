import { DogIcon } from "lucide-react";
import { FileBrowserButton } from "@/components/file-browser-button";
import { Shortcuts } from "@/components/shortcuts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <DogIcon size={200} className={styles.icon} />
      <Shortcuts />
      <FileBrowserButton />
    </div>
  );
}
