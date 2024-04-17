import type { Metadata } from "next";
import "./globals.css";
import { Tenor_Sans } from "next/font/google";

export const tenorsans = Tenor_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ragas",
  description: "Opensource LLM testing tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
