import type { Metadata } from "next";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import { Content } from "@/components/content";
import { Explorer } from "@/components/explorer";
import { StatusBar } from "@/components/status-bar";
import { DEFAULT_FONT_FAMILY } from "@/store/preferences";
import "./globals.scss";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
      <body
        className={`${spaceMono.variable} ${jetBrainsMono.variable}`}
        data-font={DEFAULT_FONT_FAMILY}
      >
        <main>
          <Explorer />
          <Content>{children}</Content>
          <StatusBar />
        </main>
      </body>
    </html>
  );
}
