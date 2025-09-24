import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Explorer } from "@/components/explorer";

const spaceMono = Space_Mono({
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
      <body className={`${spaceMono.className}`}>
        <main>
          <Explorer />
          <section className="content">{children}</section>
        </main>
      </body>
    </html>
  );
}
