type DocsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;

  return <div>Docs Page: {slug}</div>;
}
