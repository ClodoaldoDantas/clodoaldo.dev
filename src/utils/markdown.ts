import fs from "node:fs";
import path from "node:path";

export const getDocument = (filename: string) => {
  const filePath = path.join(process.cwd(), "src", "content", `${filename}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const markdownContent = fs.readFileSync(filePath, "utf-8");
  return markdownContent;
};
