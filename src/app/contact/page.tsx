import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import { ENQUIRY_TYPES } from "@/lib/validation";
import type { EnquiryType } from "@/types";
export const metadata: Metadata = { title: "Contact Us", description: "Contact Orqentra Technologies for general, partnership, enterprise, demonstration or technical enquiries.", openGraph: { url: "/contact" } };
export default function Contact({ searchParams }: { searchParams: { type?: string } }) {
  const t = ENQUIRY_TYPES.find((x) => x.value === searchParams.type)?.value as EnquiryType | undefined;
  return (<><PageHeader eyebrow="Contact" title="Start a conversation" description="General enquiries, partnerships, enterprise enquiries, product demonstrations and technical questions." /><Container className="max-w-3xl py-16"><ContactForm initialType={t} /></Container></>);
}
