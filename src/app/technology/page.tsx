import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Approach from "@/components/home/Approach";
import { CAPABILITIES } from "@/lib/constants";
export const metadata: Metadata = { title: "Our Technology", description: "Orqentra Technologies’ capabilities: intelligent business systems, fintech infrastructure, automation, integration, AI and enterprise engineering.", openGraph: { url: "/technology" } };
export default function Technology() {
  return (<><PageHeader eyebrow="Our technology" title="Capabilities engineered for connected business" description="Technology capabilities we develop and apply, not a list of launched products." />
    <Container className="space-y-6 py-20">{CAPABILITIES.map(({ title, description, icon: Icon, problems, applications }) => (
      <AnimatedSection key={title}><article className="card grid gap-6 md:grid-cols-3"><div><Icon className="mb-3 h-8 w-8 text-electric" aria-hidden /><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-sm text-slate-400">{description}</p></div>
        <div><h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Problems addressed</h3><ul className="list-disc space-y-1 pl-5 text-sm">{problems.map((p) => <li key={p}>{p}</li>)}</ul></div>
        <div><h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Potential applications</h3><ul className="list-disc space-y-1 pl-5 text-sm">{applications.map((p) => <li key={p}>{p}</li>)}</ul></div></article></AnimatedSection>))}</Container><Approach /></>);
}
