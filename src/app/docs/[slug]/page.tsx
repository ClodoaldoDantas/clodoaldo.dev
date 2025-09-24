import { notFound } from "next/navigation";
import { Editor } from "@/components/editor";
import { getDocument } from "@/utils/markdown";

type DocsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const content = getDocument(slug);

  if (!content) {
    notFound();
  }

  return <Editor content={content} />;
}
