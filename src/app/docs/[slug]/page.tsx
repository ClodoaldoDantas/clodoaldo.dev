import { notFound } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getMarkdown } from "@/utils/markdown";

type DocsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const content = getMarkdown(slug);

  if (!content) {
    notFound();
  }

  return (
    <SyntaxHighlighter
      language="markdown"
      style={githubGist}
      customStyle={{ fontSize: 18 }}
      wrapLongLines
    >
      {content}
    </SyntaxHighlighter>
  );
}
