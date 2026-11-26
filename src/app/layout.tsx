import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const TITLE = "Orqentra Technologies | Engineering Intelligent Technology";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070f",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: "%s | Orqentra Technologies" },
  description: SITE.description,
  applicationName: SITE.name,
  generator: "Next.js",
  keywords: [
    "Orqentra Technologies", "Orbit", "business automation", "financial technology", "fintech infrastructure",
    "AI business software", "systems integration", "API integration", "enterprise software", "workflow automation",
    "financial orchestration platform",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "./" }, // each page canonicalises to its own URL
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: SITE.description },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  manifest: "/manifest.webmanifest",
  verification: googleVerification ? { google: googleVerification } : undefined,
};

// Structured data (JSON-LD) helps Google understand who the company is.
// Only facts that are verified are included: no address, phone or social profiles are invented.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/branding/logo.png`,
      description: SITE.description,
      slogan: SITE.tagline,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // Server-rendered static JSON, no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
