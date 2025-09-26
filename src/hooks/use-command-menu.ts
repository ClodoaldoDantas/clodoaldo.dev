import { getSlug } from "@/utils/get-slug";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useCommandMenu(documents: string[]) {
  const router = useRouter();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      doc.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [documents, searchTerm]);

  const navigateToFile = useCallback(
    (path: string) => {
      const slug = getSlug(path);
      router.push(`/docs/${slug}`);
      setIsOpenDialog(false);
    },
    [router.push],
  );

  /** Listen for Ctrl + P or Cmd + P */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpenDialog((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  /** Handle arrow key navigation and enter key selection */
  useEffect(() => {
    if (!isOpenDialog) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setSelectedIndex((state) =>
            state < filteredDocuments.length - 1 ? state + 1 : 0,
          );
          break;

        case "ArrowUp":
          event.preventDefault();
          setSelectedIndex((state) =>
            state > 0 ? state - 1 : filteredDocuments.length - 1,
          );
          break;

        case "Enter":
          event.preventDefault();
          if (filteredDocuments[selectedIndex]) {
            navigateToFile(filteredDocuments[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpenDialog, filteredDocuments, navigateToFile, selectedIndex]);

  /** Reset search term and selected index when dialog is closed */
  useEffect(() => {
    if (!isOpenDialog) {
      setSearchTerm("");
      setSelectedIndex(0);
    }
  }, [isOpenDialog]);

  return {
    isOpenDialog,
    setIsOpenDialog,
    searchTerm,
    setSearchTerm,
    navigateToFile,
    selectedIndex,
    filteredDocuments,
  };
}
