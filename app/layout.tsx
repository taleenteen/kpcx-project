import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Foot from "./components/Foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KPCX",
  description: "Your solution for commerce",
  // Open Graph Metadata
  openGraph: {
    title: "KPCX",
    description: "Your solution for commerce",
    siteName: "KPCX",
    images: [
      {
        url: "/web-preview.png", // Path to your image in the public folder
        width: 1200,
        height: 630,
        alt: "KPCX Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "KPCX",
    description: "Your solution for commerce",
    images: ["/web-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="KPCX" />
        <meta property="og:description" content="Your solution for commerce" />
        <meta property="og:image" content="/web-preview.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KPCX" />
        <meta name="twitter:description" content="Your solution for commerce" />
        <meta name="twitter:image" content="/web-preview.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Foot />
      </body>
    </html>
  );
}
