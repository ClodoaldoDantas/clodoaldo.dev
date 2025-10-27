"use client";

import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  stackoverflowDark,
  stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { usePreferencesStore } from "@/store/preferences";

type EditorProps = {
  content: string;
  language?: string;
};

export function Editor({ content, language = "markdown" }: EditorProps) {
  const theme = usePreferencesStore((state) => state.theme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === "system") {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(prefersDarkMode.matches);
    } else {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  return (
    <SyntaxHighlighter
      language={language}
      style={isDarkMode ? stackoverflowDark : stackoverflowLight}
      customStyle={{ fontSize: 18, background: "transparent" }}
      wrapLongLines
    >
      {content}
    </SyntaxHighlighter>
  );
}
