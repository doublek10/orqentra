import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";
export default function FeaturedProduct() {
  return (<Section eyebrow="Flagship product" title="ORBIT"><div className="rounded-3xl border border-orbit/30 bg-gradient-to-br from-orbit/10 to-violet/10 p-8 sm:p-12">
    <p className="text-sm font-semibold uppercase tracking-widest text-orbit">AI-assisted Business &amp; Financial Orchestration Platform</p>
    <p className="mt-4 max-w-2xl text-xl text-white">Google Analytics for Business Money.</p>
    <p className="mt-4 max-w-2xl text-slate-300">Orbit connects disconnected business systems, organises operational and financial information, automates workflows and gives businesses a unified view of their operations.</p>
    <Button href="/orbit" variant="orbit" className="mt-8">Discover Orbit</Button></div></Section>);
}
