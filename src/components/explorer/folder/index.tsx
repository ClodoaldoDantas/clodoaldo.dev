"use client";

import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { Collapsible } from "radix-ui";
import { type ReactNode, useState } from "react";
import folderIcon from "@/assets/folder.svg";
import folderOpenIcon from "@/assets/folder-open.svg";
import styles from "./styles.module.scss";

type FolderProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function Folder({ title, children, defaultOpen = false }: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className={styles.trigger}>
        {isOpen ? (
          <>
            <ChevronDownIcon size={16} />
            <Image src={folderOpenIcon} alt="" width={28} height={28} />
          </>
        ) : (
          <>
            <ChevronRightIcon size={16} />
            <Image src={folderIcon} alt="" width={28} height={28} />
          </>
        )}
        {title}
      </Collapsible.Trigger>

      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
