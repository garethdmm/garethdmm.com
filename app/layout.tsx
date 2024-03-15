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
    <html className="" lang="en">
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
