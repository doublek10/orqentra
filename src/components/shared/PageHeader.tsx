import Container from "./Container";
export default function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (<header className="border-b border-white/10 bg-gradient-to-b from-ink-700 to-ink py-24"><Container>
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-electric">{eyebrow}</p>
    <h1 className="max-w-3xl text-4xl font-semibold sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl text-lg text-slate-400">{description}</p></Container></header>);
}
