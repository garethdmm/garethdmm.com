import type { Metadata } from "next";

import "./globals.css";
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

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
      <PHProvider>
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <body>
        <PostHogPageView />
        {children}
        </body>
      </PHProvider>
    </html>
  );
}
