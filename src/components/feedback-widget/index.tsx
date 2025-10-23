import { MessageCircleIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import styles from "./styles.module.scss";

export function FeedbackWidget() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.trigger} type="button">
          <MessageCircleIcon size={16} />
          Avaliação
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />

        <Dialog.Content className="dialog-content">
          <Dialog.Title>O que você achou do site?</Dialog.Title>
          <Dialog.Description>
            Clique em like ou dislike para dar seu feedback
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
