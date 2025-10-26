"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect } from "react";
import { usePreferencesStore } from "@/store/preferences";
import styles from "./styles.module.scss";

export function ThemeToggle() {
  const theme = usePreferencesStore((state) => state.theme);
  const setTheme = usePreferencesStore((state) => state.setTheme);

  const isDarkTheme = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      className={styles.themeToggleButton}
      onClick={handleThemeChange}
    >
      {isDarkTheme ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </button>
  );
}
