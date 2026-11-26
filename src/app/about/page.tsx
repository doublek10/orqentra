import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
export const metadata: Metadata = { title: "About Us", description: "Learn about Orqentra Technologies: our story, vision, mission, values and technology philosophy.", openGraph: { url: "/about" } };
export default function About() { return (<><PageHeader eyebrow="About us" title="A technology company engineering intelligent, connected systems" description="Our vision, mission and values shape every platform we build." /><CompanyStory /><MissionVision /><CoreValues /></>); }
