import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import IndustriesSection from "@/components/home/IndustriesSection";
import CallToAction from "@/components/home/CallToAction";
export const metadata: Metadata = { title: "Solutions & Industries", description: "How connected technology and intelligent automation help retail, healthcare, education, hospitality, manufacturing, logistics and more.", openGraph: { url: "/solutions" } };
export default function Solutions() { return (<><PageHeader eyebrow="Solutions" title="Intelligent automation for the industries we serve" description="Connected systems and rule-based automation, applied to real operational needs." /><IndustriesSection /><CallToAction /></>); }
