import Section from "@/components/shared/Section";
import FeatureCard from "@/components/shared/FeatureCard";
import { VALUES } from "@/lib/constants";
export default function CoreValues() {
  return (<Section eyebrow="Values" title="What guides our work"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{VALUES.map((v) => <FeatureCard key={v.title} {...v} />)}</div></Section>);
}
