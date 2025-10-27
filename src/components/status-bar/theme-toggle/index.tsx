"use client";

import { CheckIcon } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { useCallback, useEffect } from "react";
import { type Theme, usePreferencesStore } from "@/store/preferences";
import statusBarStyles from "../styles.module.scss";
import { ThemeToggleIcon } from "./theme-toggle-icon";

export function ThemeToggle() {
  const theme = usePreferencesStore((state) => state.theme);
  const setTheme = usePreferencesStore((state) => state.setTheme);

  const applyTheme = useCallback((newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
  }, []);

  useEffect(() => {
    if (theme === "system") {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(prefersDarkMode.matches ? "dark" : "light");
    } else {
      applyTheme(theme);
    }
  }, [theme, applyTheme]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Alternar tema"
          title="Troque o tema do site"
          type="button"
          className={statusBarStyles.statusBarTrigger}
        >
          <ThemeToggleIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="top"
          className="popover-content"
          sideOffset={4}
        >
          <DropdownMenu.RadioGroup
            value={theme}
            onValueChange={(value) => setTheme(value as Theme)}
          >
            <DropdownMenu.RadioItem
              className="popover-radio-item"
              value="system"
            >
              <DropdownMenu.ItemIndicator className="popover-item-indicator">
                <CheckIcon size={14} />
              </DropdownMenu.ItemIndicator>
              System
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              className="popover-radio-item"
              value="light"
            >
              <DropdownMenu.ItemIndicator className="popover-item-indicator">
                <CheckIcon size={14} />
              </DropdownMenu.ItemIndicator>
              Light
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem className="popover-radio-item" value="dark">
              <DropdownMenu.ItemIndicator className="popover-item-indicator">
                <CheckIcon size={14} />
              </DropdownMenu.ItemIndicator>
              Dark
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="popover-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
