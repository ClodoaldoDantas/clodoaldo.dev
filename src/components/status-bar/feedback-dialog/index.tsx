"use client";

import { ThumbsUpIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import { useState } from "react";
import statusBarStyles from "../styles.module.scss";
import { FeedbackDone } from "./feedback-done";
import { FeedbackForm } from "./feedback-form";
import styles from "./styles.module.scss";

export function FeedbackDialog() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          title="Faça uma avalição do site"
          type="button"
          aria-label="Fazer avaliação"
          className={statusBarStyles.statusBarTrigger}
        >
          <ThumbsUpIcon size={16} aria-hidden="true" />
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
