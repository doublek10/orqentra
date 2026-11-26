import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
const nodes: Array<[number, number]> = [[80, 70], [250, 40], [430, 90], [120, 220], [330, 180], [470, 270], [210, 330]];
const links: Array<[number, number]> = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4], [4, 5], [3, 6], [4, 6], [2, 5]];
export default function Hero() {
  return (<section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.18),transparent_55%)] py-24 lg:py-32"><Container className="grid items-center gap-12 lg:grid-cols-2">
    <div><h1 className="text-4xl font-semibold leading-tight sm:text-6xl">Engineering Intelligence. <span className="grad-text">Connecting Possibilities.</span></h1>
      <p className="mt-6 max-w-xl text-lg text-slate-400">We build intelligent technology platforms and digital infrastructure that help businesses operate smarter, connect their systems and unlock new opportunities.</p>
      <div className="mt-8 flex flex-wrap gap-4"><Button href="/contact?type=general">Get Started</Button><Button href="/technology" variant="secondary">Explore Our Technology</Button><Button href="/orbit" variant="orbit">Discover Orbit</Button></div></div>
    <svg viewBox="0 0 540 380" role="img" aria-label="Abstract network of connected systems and data flows" className="w-full">
      <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient></defs>
      {links.map(([a, b], i) => <line key={i} x1={nodes[a]![0]} y1={nodes[a]![1]} x2={nodes[b]![0]} y2={nodes[b]![1]} stroke="url(#g)" strokeOpacity="0.5" strokeDasharray="4 6" />)}
      {nodes.map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r={i === 4 ? 22 : 11} fill="#0a0f1f" stroke="url(#g)" strokeWidth="2" /><circle cx={x} cy={y} r={i === 4 ? 8 : 4} fill="#22d3ee" /></g>)}</svg></Container></section>);
}
