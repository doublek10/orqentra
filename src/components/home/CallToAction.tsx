import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";
export default function CallToAction() {
  return (<Section title="Let’s build what connects your business next"><div className="flex flex-wrap gap-4"><Button href="/contact">Contact Us</Button><Button href="/contact" variant="secondary">Partner With Us</Button></div></Section>);
}
