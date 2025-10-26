import SyntaxHighlighter from "react-syntax-highlighter";
import {
  stackoverflowDark,
  stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

type EditorProps = {
  content: string;
  language?: string;
};

export function Editor({ content, language = "markdown" }: EditorProps) {
  const isDarkMode = false; // Replace with actual theme detection logic

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
