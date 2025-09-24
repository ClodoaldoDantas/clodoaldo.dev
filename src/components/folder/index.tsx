"use client";

import { ChevronDownIcon, ChevronRightIcon, FolderIcon } from "lucide-react";
import { Collapsible } from "radix-ui";
import { type ReactNode, useState } from "react";
import styles from "./styles.module.css";

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
          <ChevronDownIcon size={16} />
        ) : (
          <ChevronRightIcon size={16} />
        )}
        <FolderIcon size={18} />
        {title}
      </Collapsible.Trigger>

      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
