"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function Shortcuts() {
  const [isMacOS, setIsMacOS] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    const isMacOS = /(Macintosh|Mac OS X)/i.test(ua);
    setIsMacOS(isMacOS);
  }, []);

  return (
    <div className={styles.shortcuts}>
      <p className={styles.command}>
        Ir para o arquivo <kbd>{isMacOS ? "⌘" : "Ctrl"}</kbd> + <kbd>P</kbd>
      </p>
    </div>
  );
}
