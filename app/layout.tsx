import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi, I'm Gareth.",
  description: "This is my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/monospace_g_cropped.png" />
      <body>{children}</body>
    </html>
  );
}
