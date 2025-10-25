"use client";

import { MessageCircleIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { FeedbackDone } from "./feedback-done";
import { FeedbackForm } from "./feedback-form";
import styles from "./styles.module.scss";

export function FeedbackDialog() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={styles.trigger} type="button">
          <MessageCircleIcon size={16} />
          Avaliação
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />

        <Dialog.Content className={`dialog-content ${styles.content}`}>
          {submitted ? (
            <FeedbackDone onClose={() => setIsOpen(false)} />
          ) : (
            <FeedbackForm onFeedbackSent={() => setSubmitted(true)} />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
