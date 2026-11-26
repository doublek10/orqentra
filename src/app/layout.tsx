import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const viewport: Viewport = { themeColor: "#05070f" };
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Orqentra Technologies | Engineering Intelligent Technology", template: "%s | Orqentra Technologies" },
  description: SITE.description,
  openGraph: { type: "website", siteName: SITE.name, title: "Orqentra Technologies | Engineering Intelligent Technology", description: SITE.description, url: "/" },
  twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={inter.variable}><body className="font-sans">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
    <Header /><main id="main">{children}</main><Footer /></body></html>);
}
