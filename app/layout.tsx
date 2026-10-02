import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Vashishtha | Full-Stack Software Engineer & DSA Practitioner",
  description:
    "Portfolio of Kartik Vashishtha, a Full-Stack Software Engineer specializing in React, Next.js, Node.js, and AI integrations. View my projects, skills, and experience.",
  keywords: [
    "Kartik Vashishtha",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Delhi NCR",
    "AI Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Portfolio",
  ],
  metadataBase: new URL("https://portfolio-five-alpha-44.vercel.app"),
  authors: [{ name: "Kartik Vashishtha", url: "https://portfolio-five-alpha-44.vercel.app" }],
  creator: "Kartik Vashishtha",
  openGraph: {
    title: "Kartik Vashishtha | Full-Stack Software Engineer",
    description:
      "Explore the portfolio of Kartik Vashishtha, a passionate Full-Stack Software Engineer building scalable AI-integrated web applications.",
    url: "https://portfolio-five-alpha-44.vercel.app",
    siteName: "Kartik Vashishtha Portfolio",
    images: [
      {
        url: "https://portfolio-five-alpha-44.vercel.app/kartik.png",
        width: 1200,
        height: 630,
        alt: "Kartik Vashishtha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Vashishtha | Software Engineer",
    description: "Check out my full-stack projects, AI integrations, and professional experience.",
    creator: "@kartikvashishtha",
    images: ["https://portfolio-five-alpha-44.vercel.app/kartik.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://portfolio-five-alpha-44.vercel.app",
  },
  icons: {
    icon: "/guru.png",
    shortcut: "/guru.png",
    apple: "/guru.png",
  },
  verification: {
    google: "google3aca3a3d99cfeb49",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kartik Vashishtha",
    jobTitle: "Full-Stack Software Engineer",
    url: "https://portfolio-five-alpha-44.vercel.app",
    image: "https://portfolio-five-alpha-44.vercel.app/kartik.png",
    sameAs: [
      "https://linkedin.com/in/kartik-vashishtha-7514bb375",
      "https://github.com/PtKartikVashishtha",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Guru Gobind Singh Indraprastha University",
    },
    knowsAbout: ["Web Development", "Artificial Intelligence", "Next.js", "React", "Node.js", "TypeScript"],
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <ParticleBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
