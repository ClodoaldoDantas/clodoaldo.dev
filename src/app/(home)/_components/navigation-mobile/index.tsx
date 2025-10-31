import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { getSlug } from "@/utils/get-slug";
import { getAllDocuments } from "@/utils/markdown";
import styles from "./styles.module.scss";

export async function NavigationMobile() {
  const documents = getAllDocuments();

  return (
    <nav className={styles.navigation}>
      {documents.map((doc) => {
        const slug = getSlug(doc);

        return (
          <Link
            key={doc}
            href={`/docs/${slug}`}
            className={styles.navigationItem}
          >
            <ArrowRightIcon size={20} />
            {doc}
          </Link>
        );
      })}
    </nav>
  );
}
