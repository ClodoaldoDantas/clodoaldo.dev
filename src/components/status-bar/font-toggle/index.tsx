"use client";

import { CaseSensitiveIcon } from "lucide-react";
import { useEffect } from "react";
import { usePreferencesStore } from "@/store/preferences";
import statusBarStyles from "../styles.module.scss";
import styles from "./styles.module.scss";

export function FontToggle() {
  const fontFamily = usePreferencesStore((state) => state.fontFamily);
  const setFontFamily = usePreferencesStore((state) => state.setFontFamily);

  const handleToggleFont = () => {
    const newFont =
      fontFamily === "space-mono" ? "jetbrains-mono" : "space-mono";

    setFontFamily(newFont);
  };

  useEffect(() => {
    document.body.setAttribute("data-font", fontFamily);
  }, [fontFamily]);

  const fontFamilyFormatted = fontFamily.replace(/-/g, " ");

  return (
    <button
      title="Clique para alternar a fonte do editor"
      type="button"
      className={statusBarStyles.statusBarTrigger}
      onClick={handleToggleFont}
    >
      <CaseSensitiveIcon size={18} />
      <span className={styles.label}>Fonte: {fontFamilyFormatted}</span>
    </button>
  );
}
