import { notFound } from "next/navigation";
import { CurrentFile } from "@/app/docs/[slug]/_components/current-file";
import { Editor } from "@/app/docs/[slug]/_components/editor";
import { getSlug } from "@/utils/get-slug";
import { getAllDocuments, getDocument } from "@/utils/markdown";
import styles from "./page.module.scss";

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

  return (
    <>
      <CurrentFile filename={slug} />

      <div className={styles.container}>
        <Editor content={content} />
      </div>
    </>
  );
}
