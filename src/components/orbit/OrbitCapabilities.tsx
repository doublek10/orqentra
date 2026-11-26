import Section from "@/components/shared/Section";
import FeatureCard from "@/components/shared/FeatureCard";
import { ORBIT_CAPABILITIES } from "@/lib/constants";
export default function OrbitCapabilities() {
  return (<Section eyebrow="Core capabilities" title="Ten capabilities, one orchestration platform" description="Describes the product’s design direction; availability of individual capabilities and integrations is confirmed during demonstration."><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{ORBIT_CAPABILITIES.map((c) => <FeatureCard key={c.title} {...c} accent="text-orbit" />)}</div></Section>);
}
