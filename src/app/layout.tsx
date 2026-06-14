import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tsabita Khoirunnisa — Software Developer",
  description:
    "Portfolio of Tsabita Khoirunnisa, an Information System and Technology student who builds web apps and IoT systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
