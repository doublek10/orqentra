import Section from "@/components/shared/Section";
import FeatureCard from "@/components/shared/FeatureCard";
import { CAPABILITIES } from "@/lib/constants";
export default function TechnologyOverview() {
  return (<Section eyebrow="What we build" title="Our technology capabilities"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{CAPABILITIES.map((c) => <FeatureCard key={c.title} title={c.title} description={c.description} icon={c.icon} />)}</div></Section>);
}
