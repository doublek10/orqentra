import Section from "@/components/shared/Section";
import { ORBIT_PROBLEMS } from "@/lib/constants";
export default function OrbitOverview() {
  return (<Section eyebrow="Overview" title="The problems Orbit addresses"><div className="grid gap-8 md:grid-cols-2">
    <ul className="space-y-3">{ORBIT_PROBLEMS.map((p) => <li key={p} className="card !p-4 text-sm">{p}</li>)}</ul>
    <div className="card h-fit border-orbit/30"><h3 className="font-semibold text-white">What Orbit is — and is not</h3><p className="mt-3 text-sm text-slate-400">Orbit is not a bank, an exchange or an accounting system, and it does not hold customer funds. It connects and orchestrates existing business systems, complementing your ERP, HR, accounting and payment tools rather than replacing them.</p></div></div></Section>);
}
