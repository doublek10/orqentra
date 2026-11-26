import Section from "@/components/shared/Section";
export default function CompanyIntroduction() {
  return (<Section eyebrow="Who we are" title="A technology company built around connection and intelligence"><div className="grid gap-8 md:grid-cols-2">
    <p className="text-slate-400">Orqentra Technologies develops intelligent software systems, business technology infrastructure, automation solutions, integrations and digital platforms.</p>
    <div className="card"><h3 className="font-semibold">Our technology philosophy</h3><p className="mt-2 text-sm text-slate-400">Technology should simplify complexity. We connect existing systems rather than forcing businesses to replace them, and apply automation and AI where they improve decisions.</p></div></div></Section>);
}
