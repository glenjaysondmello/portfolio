import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import SmoothScroll from "../components/patterns/smooth-scroll";
import Preloader from "../components/layout/Preloader";
import { Navbar } from "../components/layout/Navbar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono", // Define CSS variable name
});

export const metadata: Metadata = {
  title: "Glen Jayson Dmello | Full Stack & Mobile Developer",
  description:
    "Portfolio of Glen Jayson Dmello, a Full Stack Developer specializing in MERN, Next.js, NestJS, and Flutter.",
  keywords: [
    "Full Stack Developer",
    "MERN",
    "Flutter",
    "NestJS",
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Mobile Developer",
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
        className={`${jetbrainsMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}
      >
        <Preloader />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
