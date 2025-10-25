import type { ComponentProps } from "react";
import styles from "./styles.module.scss";

export function Button(props: ComponentProps<"button">) {
  return <button className={styles.button} {...props} />;
}
