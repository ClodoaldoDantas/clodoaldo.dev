import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Explorer } from "@/components/explorer";

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clodoaldo Dantas",
  description: "Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jetBrainsMono.className}`}>
        <main>
          <Explorer />
          <section className="editor">{children}</section>
        </main>
      </body>
    </html>
  );
}
