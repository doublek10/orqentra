import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import CompanyIntroduction from "@/components/home/CompanyIntroduction";
import TechnologyOverview from "@/components/home/TechnologyOverview";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import IndustriesSection from "@/components/home/IndustriesSection";
import Approach from "@/components/home/Approach";
import MissionVision from "@/components/about/MissionVision";
import CallToAction from "@/components/home/CallToAction";
export const metadata: Metadata = { title: { absolute: "Orqentra Technologies | Engineering Intelligent Technology" } };
export default function Home() { return (<><Hero /><CompanyIntroduction /><TechnologyOverview /><FeaturedProduct /><IndustriesSection /><Approach /><MissionVision /><CallToAction /></>); }
