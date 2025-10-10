import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.scss";
import { Explorer } from "@/components/explorer";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clodoaldo Dantas | Desenvolvedor Front-End",
  description:
    "Desenvolvedor front-end com foco em tecnologias modernas e soluções com alto desempenho.",
  keywords: [
    "desenvolvedor front-end",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "desenvolvimento web",
    "programador",
    "análise e desenvolvimento de sistemas",
  ],
  authors: [
    {
      name: "Clodoaldo Dantas",
      url: "https://clodoaldo.dev",
    },
  ],
  themeColor: "#111827",
  robots: {
    index: true,
    follow: true,
  },
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
