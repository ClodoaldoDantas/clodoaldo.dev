"use client";

import { useState } from "react";
import { CurrentFile } from "@/app/docs/[slug]/_components/current-file";
import { Editor } from "@/app/docs/[slug]/_components/editor";
import pageStyles from "../../page.module.scss";

type DocumentViewerProps = {
  filename: string;
  content: string;
};

export function DocumentViewer({ filename, content }: DocumentViewerProps) {
  const [isPreview, setIsPreview] = useState(false);

  return (
    <>
      <CurrentFile
        filename={filename}
        isPreview={isPreview}
        onTogglePreview={() => setIsPreview((current) => !current)}
      />

      <div className={pageStyles.container}>
        <Editor content={content} isPreview={isPreview} />
      </div>
    </>
  );
}
