import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html lang="en" className="scroll-smooth bg-amber-50">
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <body>{children}</body>
      <GoogleAnalytics gaId="G-LDRSXQJLG0" />
    </html>
  );
}
