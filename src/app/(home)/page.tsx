import { HandMetalIcon } from "lucide-react";
import { Shortcuts } from "@/app/(home)/_components/shortcuts";
import { NavigationMobile } from "./_components/navigation-mobile";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <HandMetalIcon size={200} className={styles.icon} />
      <Shortcuts />
      <NavigationMobile />
    </div>
  );
}
