import Section from "@/components/shared/Section";
import FeatureCard from "@/components/shared/FeatureCard";
import { INDUSTRIES } from "@/lib/constants";
export default function IndustriesSection({ id }: { id?: string }) {
  return (<Section id={id} eyebrow="Industries we serve" title="Connected technology for every sector"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{INDUSTRIES.map((i) => <FeatureCard key={i.title} {...i} accent="text-violet" />)}</div></Section>);
}
