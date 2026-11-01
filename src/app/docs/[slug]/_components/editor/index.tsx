"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  stackoverflowDark,
  stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
import { usePreferencesStore } from "@/store/preferences";
import styles from "./styles.module.scss";

type EditorProps = {
  content: string;
  language?: string;
  isPreview: boolean;
};

export function Editor({
  content,
  language = "markdown",
  isPreview,
}: EditorProps) {
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
    <section className={styles.viewer}>
      {isPreview ? (
        <article className={styles.preview} data-testid="markdown-preview">
          <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </article>
      ) : (
        <div data-testid="markdown-source">
          <SyntaxHighlighter
            language={language}
            style={isDarkMode ? stackoverflowDark : stackoverflowLight}
            customStyle={{
              fontSize: 18,
              margin: 0,
              padding: 0,
              background: "transparent",
            }}
            wrapLongLines
          >
            {content}
          </SyntaxHighlighter>
        </div>
      )}
    </section>
  );
}
