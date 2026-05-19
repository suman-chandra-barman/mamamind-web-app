/** @format */

import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mamamind",
  description: "A knowledge graph for the curious minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSans.variable} h-full antialiased `}>
      <body
        suppressHydrationWarning={true}
        className="min-h-full flex flex-col bg-background w-full mx-auto"
      >
        {children}
      </body>
    </html>
  );
}
