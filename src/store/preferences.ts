import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";
export type FontFamily = "space-mono" | "jetbrains-mono";

const DEFAULT_THEME: Theme = "light";
export const DEFAULT_FONT_FAMILY: FontFamily = "space-mono";

interface PreferencesState {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
  fontFamily: FontFamily;
  setFontFamily: (newFontFamily: FontFamily) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: DEFAULT_THEME,
      setTheme: (newTheme) => set({ theme: newTheme }),
      fontFamily: DEFAULT_FONT_FAMILY,
      setFontFamily: (newFontFamily) => set({ fontFamily: newFontFamily }),
    }),
    {
      name: "@clodoaldo.dev/preferences",
    },
  ),
);
