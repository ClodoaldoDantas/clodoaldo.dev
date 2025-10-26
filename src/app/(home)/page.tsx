import { HandMetalIcon } from "lucide-react";
import { FileBrowserButton } from "@/app/(home)/_components/file-browser-button";
import { Shortcuts } from "@/app/(home)/_components/shortcuts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <HandMetalIcon size={200} className={styles.icon} />
      <Shortcuts />
      <FileBrowserButton />
    </div>
  );
}
