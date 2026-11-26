import Link from "next/link";
import { cn } from "@/lib/utils";
type Variant = "primary" | "secondary" | "orbit";
const styles: Record<Variant, string> = {
  primary: "bg-gradient-to-r from-electric to-violet text-white hover:opacity-90",
  secondary: "border border-white/20 text-white hover:bg-white/5",
  orbit: "bg-orbit text-ink hover:bg-orbit/90" };
export default function Button({ href, variant = "primary", children, className }: { href: string; variant?: Variant; children: React.ReactNode; className?: string }) {
  return <Link href={href} className={cn("inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition", styles[variant], className)}>{children}</Link>;
}
