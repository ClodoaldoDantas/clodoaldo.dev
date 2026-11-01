import { SearchCode } from "lucide-react";
import { Shortcuts } from "@/app/(home)/_components/shortcuts";
import { NavigationMobile } from "./_components/navigation-mobile";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <SearchCode size={150} className={styles.icon} />
      <Shortcuts />
      <NavigationMobile />
    </div>
  );
}
