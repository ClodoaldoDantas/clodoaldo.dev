"use client";

import { FileIcon, FilesIcon } from "lucide-react";
import { Dialog, VisuallyHidden } from "radix-ui";
import { useCommandMenu } from "@/hooks/use-command-menu";
import explorerStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

export function CommandMenu({ items }: { items: string[] }) {
  const {
    isOpenDialog,
    setIsOpenDialog,
    searchTerm,
    setSearchTerm,
    selectedIndex,
    navigateToFile,
    filteredItems,
  } = useCommandMenu(items);

  return (
    <Dialog.Root open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <Dialog.Trigger
        className={explorerStyles.actionButton}
        aria-label="Ir para um arquivo"
        title="Clique para buscar um arquivo"
      >
        <FilesIcon size={18} />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className={`dialog-content ${styles.content}`}>
          <VisuallyHidden.Root>
            <Dialog.Title>Buscar Arquivo</Dialog.Title>
            <Dialog.Description>
              Use este menu para buscar arquivos pelo nome.
            </Dialog.Description>
          </VisuallyHidden.Root>

          <input
            type="text"
            placeholder="Buscar arquivo pelo nome"
            className={styles.search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredItems.length === 0 && (
            <p className={styles.noResults}>Nenhum resultado encontrado.</p>
          )}

          <div className={styles.results}>
            {filteredItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ""}`}
                onClick={() => navigateToFile(item)}
              >
                <FileIcon size={16} />
                {item}
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
