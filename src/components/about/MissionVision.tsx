import Section from "@/components/shared/Section";
import { MISSION, VISION } from "@/lib/constants";
export default function MissionVision() {
  return (<Section eyebrow="Direction" title="Our vision and mission"><div className="grid gap-5 md:grid-cols-2">
    <div className="card"><h3 className="text-xl font-semibold">Vision</h3><p className="mt-3 text-slate-400">{VISION}</p></div>
    <div className="card"><h3 className="text-xl font-semibold">Mission</h3><p className="mt-3 text-slate-400">{MISSION}</p></div></div></Section>);
}
