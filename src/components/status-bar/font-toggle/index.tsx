"use client";

import { CaseSensitiveIcon, CheckIcon } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { useEffect } from "react";
import { type FontFamily, usePreferencesStore } from "@/store/preferences";
import statusBarStyles from "../styles.module.scss";

export function FontToggle() {
  const fontFamily = usePreferencesStore((state) => state.fontFamily);
  const setFontFamily = usePreferencesStore((state) => state.setFontFamily);

  const handleToggleFont = () => {
    const fonts: FontFamily[] = [
      "space-mono",
      "jetbrains-mono",
      "source-code-pro",
    ];
    const currentIndex = fonts.indexOf(fontFamily);
    const newFont = fonts[(currentIndex + 1) % fonts.length];

    setFontFamily(newFont);
  };

  useEffect(() => {
    document.body.setAttribute("data-font", fontFamily);
  }, [fontFamily]);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          title="Troque a fonte do site"
          aria-label="Trocar fonte"
          className={statusBarStyles.statusBarTrigger}
          onClick={handleToggleFont}
        >
          <CaseSensitiveIcon size={18} aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="top"
          className="popover-content"
          sideOffset={4}
        >
          <DropdownMenu.RadioGroup
            value={fontFamily}
            onValueChange={(value) => setFontFamily(value as FontFamily)}
          >
            <DropdownMenu.RadioItem
              className="popover-radio-item"
              value="space-mono"
            >
              <DropdownMenu.ItemIndicator className="popover-item-indicator">
                <CheckIcon size={14} />
              </DropdownMenu.ItemIndicator>
              Space Mono
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              className="popover-radio-item"
              value="jetbrains-mono"
            >
              <DropdownMenu.ItemIndicator className="popover-item-indicator">
                <CheckIcon size={14} />
              </DropdownMenu.ItemIndicator>
              JetBrains Mono
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem
              className="popover-radio-item"
              value="source-code-pro"
            >
              <DropdownMenu.ItemIndicator className="popover-item-indicator">
                <CheckIcon size={14} />
              </DropdownMenu.ItemIndicator>
              Source Code Pro
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="popover-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
