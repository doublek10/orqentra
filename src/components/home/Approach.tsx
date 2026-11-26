import Section from "@/components/shared/Section";
import { APPROACH } from "@/lib/constants";
export default function Approach() {
  return (<Section eyebrow="Our approach" title="From problem to production"><ol className="grid gap-5 md:grid-cols-5">{APPROACH.map(([t, d], i) => <li key={t} className="card"><span className="grad-text text-3xl font-bold">0{i + 1}</span><h3 className="mt-2 font-semibold">{t}</h3><p className="mt-1 text-sm text-slate-400">{d}</p></li>)}</ol></Section>);
}
