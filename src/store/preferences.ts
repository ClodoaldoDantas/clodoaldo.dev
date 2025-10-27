import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type FontFamily = "space-mono" | "jetbrains-mono";

const DEFAULT_THEME: Theme = "system";
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
