"use client";
import { useState, type FormEvent } from "react";
import type { ContactPayload, EnquiryType, FieldErrors } from "@/types";
import { ENQUIRY_TYPES, validateContact } from "@/lib/validation";
type Status = "idle" | "sending" | "success" | "error";
const input = "mt-1 w-full rounded-lg border border-white/15 bg-ink-800 px-4 py-3 text-white placeholder:text-slate-500";
export default function ContactForm({ initialType = "general" }: { initialType?: EnquiryType }) {
  const [errors, setErrors] = useState<FieldErrors>({}); const [status, setStatus] = useState<Status>("idle");
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = new FormData(e.currentTarget);
    const data = { fullName: f.get("fullName"), email: f.get("email"), company: f.get("company"), subject: f.get("subject"), enquiryType: f.get("enquiryType"), message: f.get("message"), website: f.get("website") ?? "" } as ContactPayload;
    const errs = validateContact(data); setErrors(errs); if (Object.keys(errs).length) return;
    setStatus("sending");
    try { const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (r.status === 422) { const j = (await r.json()) as { errors?: FieldErrors }; setErrors(j.errors ?? {}); setStatus("idle"); return; }
      if (!r.ok) throw new Error(); setStatus("success"); e.currentTarget.reset(); } catch { setStatus("error"); }
  }
  const field = (name: keyof ContactPayload, label: string, type = "text") => (<div><label htmlFor={name} className="text-sm font-medium text-white">{label}</label>
    <input id={name} name={name} type={type} className={input} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
    {errors[name] && <p id={`${name}-err`} role="alert" className="mt-1 text-sm text-red-400">{errors[name]}</p>}</div>);
  return (<form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
    {field("fullName", "Full name")}{field("email", "Business email", "email")}{field("company", "Company name")}{field("subject", "Subject")}
    <div className="sm:col-span-2"><label htmlFor="enquiryType" className="text-sm font-medium text-white">Enquiry type</label>
      <select id="enquiryType" name="enquiryType" defaultValue={initialType} className={input}>{ENQUIRY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}</select></div>
    <div className="sm:col-span-2"><label htmlFor="message" className="text-sm font-medium text-white">Message</label>
      <textarea id="message" name="message" rows={6} className={input} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
      {errors.message && <p id="message-err" role="alert" className="mt-1 text-sm text-red-400">{errors.message}</p>}</div>
    <div className="sm:col-span-2"><button type="submit" disabled={status === "sending"} className="rounded-full bg-gradient-to-r from-electric to-violet px-8 py-3 font-semibold text-white disabled:opacity-60">{status === "sending" ? "Sending…" : "Send enquiry"}</button>
      <p aria-live="polite" className="mt-4 text-sm">{status === "success" && <span className="text-emerald-400">Thank you, your enquiry has been received.</span>}{status === "error" && <span className="text-red-400">Something went wrong. Please try again.</span>}</p></div></form>);
}
