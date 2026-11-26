import Image from "next/image";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
export default function OrbitHero() {
  return (<section className="bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)] py-24"><Container className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]"><div>
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orbit">An Orqentra Technologies product</p>
    <h1 className="mt-4 text-5xl font-bold sm:text-7xl">ORBIT</h1>
    <p className="mt-3 text-xl text-orbit">AI-assisted Business &amp; Financial Orchestration Platform</p>
    <p className="mt-2 text-lg text-white">Google Analytics for Business Money.</p>
    <p className="mt-6 max-w-2xl text-slate-400">Orbit is an intelligent business and financial orchestration platform designed to connect disconnected business systems, organize operational and financial information, automate workflows and provide businesses with a unified view of their operations.</p>
    <Button href="/contact?type=demo" variant="orbit" className="mt-8">Request a Demonstration</Button></div><Image src="/branding/logo.png" alt="Orqentra sphere and orbit ring emblem" width={420} height={420} className="mx-auto rounded-3xl" /></Container></section>);
}
