import type { Metadata } from "next";
import "./globals.css";


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
