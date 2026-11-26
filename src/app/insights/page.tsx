import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import { getArticles, INSIGHT_CATEGORIES } from "@/lib/insights";
export const metadata: Metadata = { title: "Insights", description: "Articles and updates from Orqentra Technologies on business automation, fintech, AI and enterprise systems.", openGraph: { url: "/insights" } };
export default async function Insights() {
  const articles = await getArticles();
  return (<><PageHeader eyebrow="Insights" title="Perspectives on intelligent business technology" description="Technology articles, product announcements and company updates." />
    <Container className="py-16"><ul className="mb-12 flex flex-wrap gap-3">{INSIGHT_CATEGORIES.map((c) => <li key={c} className="rounded-full border border-white/15 px-4 py-1.5 text-sm">{c}</li>)}</ul>
      {articles.length === 0 ? <p className="card text-slate-400">Our first articles are on the way. Check back soon.</p> :
        <div className="grid gap-5 md:grid-cols-3">{articles.map((a) => <article key={a.slug} className="card"><p className="text-xs text-electric">{a.category}</p><h2 className="mt-2 font-semibold text-white">{a.title}</h2><p className="mt-2 text-sm text-slate-400">{a.excerpt}</p></article>)}</div>}</Container></>);
}
