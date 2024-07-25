import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fontsource/dm-sans';
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Core",
  description: "Open Core website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="w-full flex justify-center">
        {children}
        </div>
       
        </body>
    </html>
  );
}
