import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code, Antic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ["700"],
  subsets: ["latin"],
});

const antic = Antic({
  variable: "--font-antic",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Benjamin",
  description:
    "Building full-stack marketplaces where AI, code, and real-world logistics meet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${antic.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
