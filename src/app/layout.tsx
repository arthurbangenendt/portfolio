import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Benjamin — Full-stack developer",
  description:
    "Produtos digitais para operações complexas de climatização.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
