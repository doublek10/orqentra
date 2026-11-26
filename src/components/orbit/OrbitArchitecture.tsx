import Section from "@/components/shared/Section";
const cols: Array<[string, string[]]> = [["Your systems", ["Banks & mobile money", "Accounting & payroll", "ERP & POS"]], ["Orbit Kernel", ["Company Blueprints", "Rules & permissions", "Workflow Engine"]], ["Outcomes", ["Orbit Lens insights", "Automated workflows", "Orbit Replay traceability"]]];
export default function OrbitArchitecture() {
  return (<Section eyebrow="Architecture" title="How Orbit fits around your systems"><div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]" role="img" aria-label="Diagram: business systems connect to the Orbit Kernel, which produces insights, workflows and traceability">
    {cols.flatMap(([t, items], i) => [
      <div key={t} className={`card ${i === 1 ? "border-orbit/50 bg-orbit/5" : ""}`}><h3 className={`font-semibold ${i === 1 ? "text-orbit" : "text-white"}`}>{t}</h3><ul className="mt-3 space-y-2 text-sm">{items.map((x) => <li key={x}>{x}</li>)}</ul></div>,
      ...(i < 2 ? [<div key={t + "a"} className="flex items-center justify-center text-2xl text-orbit" aria-hidden>→</div>] : [])])}</div></Section>);
}
