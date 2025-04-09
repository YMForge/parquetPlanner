import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "parquetPlanner - Plan Your Perfect Floor With Precision",
  description: "parquetPlanner makes the planning of floor laying and patterns easy. Optimize your parquet flooring layout and save on materials.",
  keywords: "parquet, flooring, floor planning, floor layout, wood flooring, parquet planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
