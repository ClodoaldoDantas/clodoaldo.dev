import { LoaderIcon } from "lucide-react";
import { Dialog } from "radix-ui";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/button";
import dialogStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

const options = [
  { label: "Péssima", value: "aweful", icon: "😢" },
  { label: "Ruim", value: "bad", icon: "😟" },
  { label: "Okay", value: "okay", icon: "😐" },
  { label: "Bom", value: "good", icon: "😊" },
  { label: "Incrível", value: "amazing", icon: "😍" },
];

type FeedbackFormProps = {
  onFeedbackSent: () => void;
};

export function FeedbackForm({ onFeedbackSent }: FeedbackFormProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();
    setIsPending(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: selectedOption,
            comment,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Ocorreu um erro ao enviar o feedback.");
      }

      onFeedbackSent();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        window.alert(error.message);
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <Dialog.Title className={dialogStyles.title}>
        Como você avalia sua experiência?
      </Dialog.Title>

      <Dialog.Description className={dialogStyles.description}>
        Seu feedback é muito importante para mim.
      </Dialog.Description>

      <form onSubmit={handleSubmitFeedback}>
        <div className={styles.options}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${styles.option} ${selectedOption === option.value ? styles.selected : ""}`}
              onClick={() => setSelectedOption(option.value)}
              title={option.label}
            >
              <span aria-hidden="true" role="img">
                {option.icon}
              </span>
              <span className="sr-only">{option.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="comment">
            Comentário <small>(opcional)</small>
          </label>
          <textarea
            id="comment"
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <Button type="submit" disabled={!selectedOption || isPending}>
          {isPending && <LoaderIcon className={styles.spinner} size={20} />}
          {isPending ? "Enviando..." : "Enviar Feedback"}
        </Button>
      </form>
    </>
  );
}
