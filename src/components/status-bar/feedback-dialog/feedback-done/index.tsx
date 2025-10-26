import Image from "next/image";
import { Dialog } from "radix-ui";
import thanksImage from "@/assets/thanks.svg";
import { Button } from "@/components/button";
import dialogStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

type FeedbackDoneProps = {
  onClose: () => void;
};

export function FeedbackDone({ onClose }: FeedbackDoneProps) {
  return (
    <>
      <Dialog.Title className={dialogStyles.title}>
        Obrigado pelo feedback!
      </Dialog.Title>

      <Dialog.Description className={dialogStyles.description}>
        Espero vê-lo novamente em breve.
      </Dialog.Description>

      <div className={styles.content}>
        <Image src={thanksImage} alt="" />

        <Button type="button" onClick={onClose}>
          Finalizar
        </Button>
      </div>
    </>
  );
}
