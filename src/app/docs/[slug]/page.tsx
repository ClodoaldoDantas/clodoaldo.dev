import { notFound } from "next/navigation";
import { DocumentViewer } from "@/app/docs/[slug]/_components/document-viewer";
import { getSlug } from "@/utils/get-slug";
import { getAllDocuments, getDocument } from "@/utils/markdown";

export async function generateStaticParams() {
  const documents = getAllDocuments();

  return documents.map((doc) => ({
    slug: getSlug(doc),
  }));
}

type DocsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const content = getDocument(slug);

  if (!content) {
    notFound();
  }

  return <DocumentViewer key={slug} filename={slug} content={content} />;
}
