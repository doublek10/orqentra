"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";
export default function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return (<header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur"><Container className="flex h-16 items-center justify-between">
    <Logo />
    <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
      {NAV.map((n) => <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={cn("text-sm transition hover:text-white", path === n.href ? "text-white" : "text-slate-400")}>{n.label}</Link>)}
      <Button href="/orbit" variant="secondary" className="!py-2">Explore Orbit</Button><Button href="/contact?type=general" className="!py-2">Get Started</Button></nav>
    <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></Container>
    {open && <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-ink lg:hidden"><Container className="flex flex-col gap-1 py-4">
      {NAV.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">{n.label}</Link>)}
      <Button href="/orbit" variant="secondary" className="mt-2">Explore Orbit</Button><Button href="/contact?type=general">Get Started</Button></Container></nav>}</header>);
}
