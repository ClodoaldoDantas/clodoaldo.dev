"use client";

import { FileIcon, SearchCodeIcon } from "lucide-react";
import { Dialog, VisuallyHidden } from "radix-ui";
import { useCommandMenu } from "@/hooks/use-command-menu";
import styles from "./styles.module.scss";

export function CommandMenu({ documents }: { documents: string[] }) {
  const {
    isOpenDialog,
    setIsOpenDialog,
    searchTerm,
    setSearchTerm,
    selectedIndex,
    navigateToFile,
    filteredDocuments,
  } = useCommandMenu(documents);

  return (
    <Dialog.Root open={isOpenDialog} onOpenChange={setIsOpenDialog}>
      <Dialog.Trigger className={styles.openButton} asChild>
        <button type="button" aria-label="Ir para um arquivo">
          <SearchCodeIcon size={18} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
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

          {filteredDocuments.length === 0 && (
            <p className={styles.noResults}>Nenhum resultado encontrado.</p>
          )}

          <div className={styles.results}>
            {filteredDocuments.map((doc, index) => (
              <button
                key={doc}
                type="button"
                className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ""}`}
                onClick={() => navigateToFile(doc)}
              >
                <FileIcon size={16} />
                {doc}
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
