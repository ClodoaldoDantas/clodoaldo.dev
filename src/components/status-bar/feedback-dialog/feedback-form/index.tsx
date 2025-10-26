import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import { Dialog } from "radix-ui";
import { type FormEvent, useState } from "react";
import amazingIcon from "@/assets/amazing-icon.svg";
import awefulIcon from "@/assets/aweful-icon.svg";
import badIcon from "@/assets/bad-icon.svg";
import goodIcon from "@/assets/good-icon.svg";
import okayIcon from "@/assets/okay-icon.svg";
import { Button } from "@/components/button";
import dialogStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

const options = [
  { label: "Péssima", value: "aweful", icon: awefulIcon },
  { label: "Ruim", value: "bad", icon: badIcon },
  { label: "Okay", value: "okay", icon: okayIcon },
  { label: "Bom", value: "good", icon: goodIcon },
  { label: "Incrível", value: "amazing", icon: amazingIcon },
];

type FeedbackFormProps = {
  onFeedbackSent: () => void;
};

export function FeedbackForm({ onFeedbackSent }: FeedbackFormProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        setError(error.message);
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
        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.options}>
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              className={`${styles.option} ${selectedOption === option.value ? styles.selected : ""}`}
              onClick={() => setSelectedOption(option.value)}
            >
              <div className={styles.optionIcon}>
                <Image src={option.icon} alt="" width={56} height={56} />
              </div>
              <span className={styles.optionLabel}>{option.label}</span>
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
