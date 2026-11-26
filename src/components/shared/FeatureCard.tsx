import type { Feature } from "@/types";
import { cn } from "@/lib/utils";
export default function FeatureCard({ title, description, icon: Icon, accent = "text-electric" }: Feature & { accent?: string }) {
  return (<article className="card"><Icon className={cn("mb-4 h-7 w-7", accent)} aria-hidden /><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p></article>);
}
