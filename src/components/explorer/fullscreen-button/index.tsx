"use client";

import { MaximizeIcon, MinimizeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import explorerStyles from "../styles.module.scss";

export function FullscreenButton() {
  const [pageIsInFullscreen, setPageIsInFullscreen] = useState(false);

  useEffect(() => {
    const onFullscreenChange = () => {
      setPageIsInFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const handleFullscreen = async () => {
    if (!document.fullscreenEnabled) {
      window.alert("Seu navegador não suporta o modo de tela cheia.");
      return;
    }

    if (!pageIsInFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <button
      type="button"
      onClick={handleFullscreen}
      aria-label={
        !pageIsInFullscreen
          ? "Entrar em tela cheia"
          : "Sair do modo de tela cheia"
      }
      title={`Clique para ${!pageIsInFullscreen ? "entrar" : "sair"} do modo de tela cheia`}
      className={explorerStyles.actionButton}
    >
      {!pageIsInFullscreen ? (
        <MaximizeIcon size={18} />
      ) : (
        <MinimizeIcon size={18} />
      )}
    </button>
  );
}
