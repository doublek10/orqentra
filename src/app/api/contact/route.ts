import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
const hits = new Map<string, number[]>();
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown"; const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  hits.set(ip, [...recent, now]);
  let body: unknown; try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }
  if ((body as { website?: string } | null)?.website) return NextResponse.json({ ok: true }); // honeypot
  const errors = validateContact((body ?? {}) as Record<string, unknown>);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });
  // TODO: deliver via your email/CRM provider using server-side env vars (e.g. Resend, SendGrid, HubSpot).
  console.info("Contact enquiry received", { enquiryType: (body as { enquiryType: string }).enquiryType });
  return NextResponse.json({ ok: true });
}
