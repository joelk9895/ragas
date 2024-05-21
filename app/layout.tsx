import type { Metadata } from "next";
import "./globals.css";
import { Head } from "next/document";
export const metadata: Metadata = {
  title: "Ragas",
  description:
    "Ragas is an open source framework for testing and evaluating LLM applications. Ragas provides metrics , synthetic test data generation and workflows for ensuring the quality of your application while development and also monitoring it's quality in production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
