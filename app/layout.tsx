import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Foot from "./components/Foot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KPCX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar></Navbar> */}
        {children}
        <Foot />
      </body>
    </html>
  );
}
