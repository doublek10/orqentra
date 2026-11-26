import Section from "@/components/shared/Section";
import { ORBIT_BENEFITS, ORBIT_USE_CASES, INDUSTRIES } from "@/lib/constants";
export default function OrbitBenefits() {
  const list = (h: string, items: string[]) => (<div className="card"><h3 className="mb-3 font-semibold text-white">{h}</h3><ul className="list-disc space-y-2 pl-5 text-sm">{items.map((i) => <li key={i}>{i}</li>)}</ul></div>);
  return (<Section eyebrow="Value" title="Use cases, industries and benefits"><div className="grid gap-5 md:grid-cols-3">{list("Example use cases", ORBIT_USE_CASES)}{list("Target industries", INDUSTRIES.map((i) => i.title))}{list("Benefits", ORBIT_BENEFITS)}</div></Section>);
}
