import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono", // Define CSS variable name
});

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
        className={`${jetbrainsMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}
      >
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
