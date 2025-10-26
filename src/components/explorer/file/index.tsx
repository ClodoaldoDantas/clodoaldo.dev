import Image from "next/image";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";
import markdownIcon from "@/assets/markdown-icon.svg";
import styles from "./styles.module.scss";

type FileProps = LinkProps & {
  children: ReactNode;
};

export function File({ children, ...props }: FileProps) {
  return (
    <Link className={styles.file} {...props}>
      <Image src={markdownIcon} alt="" width={28} height={28} />
      {children}
    </Link>
  );
}
