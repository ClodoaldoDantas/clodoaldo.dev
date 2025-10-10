import { ArrowRightIcon, FilesIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import { CommandMenu } from "@/components/command-menu";
import { getAllDocuments } from "@/utils/markdown";
import styles from "./styles.module.scss";

export async function FileBrowserButton() {
  const documents = getAllDocuments();

  return (
    <CommandMenu items={documents}>
      <Dialog.Trigger className={styles.fileBrowserButton}>
        <div className={styles.fileBrowserButtonContent}>
          <FilesIcon size={20} />
          Acessar arquivos
        </div>

        <ArrowRightIcon size={20} />
      </Dialog.Trigger>
    </CommandMenu>
  );
}
