import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface PreferencesState {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "@clodoaldo.dev/preferences",
    },
  ),
);
