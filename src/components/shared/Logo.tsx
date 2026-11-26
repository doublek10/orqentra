import Image from "next/image";
import Link from "next/link";
export default function Logo({ size = 36, showText = true }: { size?: number; showText?: boolean }) {
  return (<Link href="/" className="flex items-center gap-3" aria-label="Orqentra Technologies home">
    <Image src="/branding/logo.png" alt="Orqentra Technologies logo: a dark sphere encircled by a blue ring" width={size} height={size} className="rounded-lg" priority />
    {showText && <span className="text-lg font-bold tracking-[0.2em] text-white">ORQENTRA</span>}</Link>);
}
