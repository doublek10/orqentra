import Link from "next/link";
import { NAV, SITE } from "@/lib/constants";
import Logo from "@/components/shared/Logo";
import Container from "@/components/shared/Container";
export default function Footer() {
  return (<footer className="border-t border-white/10 py-12"><Container className="flex flex-col gap-8 md:flex-row md:justify-between">
    <div><Logo size={44} /><p className="mt-2 max-w-xs text-sm text-slate-400">{SITE.tagline}</p></div>
    <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">{NAV.map((n) => <Link key={n.href} href={n.href} className="text-slate-400 hover:text-white">{n.label}</Link>)}</nav></Container>
    <Container><p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Orqentra Technologies. All rights reserved.</p></Container></footer>);
}
