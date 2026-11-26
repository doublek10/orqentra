import type { LucideIcon } from "lucide-react";
export interface NavItem { label: string; href: string }
export interface Feature { title: string; description: string; icon: LucideIcon }
export interface Capability extends Feature { problems: string[]; applications: string[] }
export type EnquiryType = "general" | "partnership" | "enterprise" | "demo" | "technical";
export interface ContactPayload { fullName: string; email: string; company: string; subject: string; enquiryType: EnquiryType; message: string }
export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;
export interface Article { slug: string; title: string; excerpt: string; category: string; publishedAt: string }
