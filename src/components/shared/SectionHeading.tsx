export default function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (<div className="mb-12 max-w-2xl">
    {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-electric">{eyebrow}</p>}
    <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-lg text-slate-400">{description}</p>}</div>);
}
