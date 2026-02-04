import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Glen Jayson Dmello | Full Stack & Mobile Developer",
  description:
    "Portfolio of Glen Jayson Dmello, a Full Stack Developer specializing in MERN, NestJS, and Flutter.",
  keywords: [
    "Full Stack Developer",
    "MERN",
    "Flutter",
    "NestJS",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
