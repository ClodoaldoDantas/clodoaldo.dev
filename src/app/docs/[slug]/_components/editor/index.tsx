"use client";

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

  return (
    <SyntaxHighlighter
      language={language}
      style={theme === "dark" ? stackoverflowDark : stackoverflowLight}
      customStyle={{ fontSize: 18, background: "transparent" }}
      wrapLongLines
    >
      {content}
    </SyntaxHighlighter>
  );
}
