import Container from "./Container";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
export default function Section({ eyebrow, title, description, children, id }: { eyebrow?: string; title: string; description?: string; children: React.ReactNode; id?: string }) {
  return (<AnimatedSection id={id} className="py-20"><Container><SectionHeading eyebrow={eyebrow} title={title} description={description} />{children}</Container></AnimatedSection>);
}
