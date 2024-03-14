import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gareth MacLeod",
  description: "This is my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
