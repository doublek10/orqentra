import type { Metadata } from "next";
import OrbitHero from "@/components/orbit/OrbitHero";
import OrbitOverview from "@/components/orbit/OrbitOverview";
import OrbitCapabilities from "@/components/orbit/OrbitCapabilities";
import OrbitArchitecture from "@/components/orbit/OrbitArchitecture";
import OrbitBenefits from "@/components/orbit/OrbitBenefits";
import OrbitCTA from "@/components/orbit/OrbitCTA";
export const metadata: Metadata = { title: "Orbit", description: "Orbit by Orqentra Technologies: an AI-assisted business and financial orchestration platform connecting your existing systems.", openGraph: { url: "/orbit" } };
export default function OrbitPage() { return (<><OrbitHero /><OrbitOverview /><OrbitCapabilities /><OrbitArchitecture /><OrbitBenefits /><OrbitCTA /></>); }
