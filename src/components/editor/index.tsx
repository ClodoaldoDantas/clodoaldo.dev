import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

type EditorProps = {
  content: string;
  language?: string;
};

export function Editor({ content, language = "markdown" }: EditorProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={stackoverflowLight}
      customStyle={{ fontSize: 18, backgroundColor: "transparent" }}
      wrapLongLines
    >
      {content}
    </SyntaxHighlighter>
  );
}
