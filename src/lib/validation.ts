import type { ContactPayload, FieldErrors, EnquiryType } from "@/types";
export const ENQUIRY_TYPES: { value: EnquiryType; label: string }[] = [
  { value: "general", label: "General enquiry" }, { value: "partnership", label: "Business partnership" },
  { value: "enterprise", label: "Enterprise enquiry" }, { value: "demo", label: "Product demonstration" }, { value: "technical", label: "Technical enquiry" }];
export function validateContact(d: Partial<Record<keyof ContactPayload, unknown>>): FieldErrors {
  const e: FieldErrors = {}; const s = (k: keyof ContactPayload) => (typeof d[k] === "string" ? (d[k] as string).trim() : "");
  if (s("fullName").length < 2) e.fullName = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s("email"))) e.email = "Please enter a valid business email.";
  if (s("company").length < 2) e.company = "Please enter your company name.";
  if (s("subject").length < 3) e.subject = "Please add a subject.";
  if (!ENQUIRY_TYPES.some((t) => t.value === s("enquiryType"))) e.enquiryType = "Please select an enquiry type.";
  if (s("message").length < 20) e.message = "Please write at least 20 characters.";
  if (s("message").length > 5000) e.message = "Message is too long (max 5000).";
  return e;
}
