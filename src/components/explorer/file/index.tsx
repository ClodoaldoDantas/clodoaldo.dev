import { FileIcon } from "lucide-react";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./styles.module.scss";

type FileProps = LinkProps & {
  children: ReactNode;
};

export function File({ children, ...props }: FileProps) {
  return (
    <Link className={styles.file} {...props}>
      <FileIcon size={18} />
      {children}
    </Link>
  );
}
