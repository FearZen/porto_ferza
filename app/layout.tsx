import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernanda Wawang Azraqi | Fullstack Developer",
  description: "Computer Science Graduate & Fullstack Developer specializing in building high-performance SaaS solutions, enterprise banking infrastructure, and data-driven applications.",
  openGraph: {
    title: "Fernanda Wawang Azraqi | Fullstack Developer",
    description: "Computer Science Graduate & Fullstack Developer specializing in building high-performance SaaS solutions, enterprise banking infrastructure, and data-driven applications.",
    url: "https://porto-ferza.vercel.app", // Replace with actual domain 
    siteName: "Ferza Portfolio",
    images: [
      {
        url: "/foto_ferza.png", 
        width: 1200,
        height: 630,
        alt: "Fernanda Wawang Azraqi - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernanda Wawang Azraqi | Fullstack Developer",
    description: "Computer Science Graduate & Fullstack Developer specializing in building high-performance SaaS solutions.",
    images: ["/foto_ferza.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased font-sans`}
      >
        <SmoothScroll>
          <Preloader />
          <ThemeSwitcher />
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}

