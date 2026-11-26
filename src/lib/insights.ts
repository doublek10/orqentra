import type { Article } from "@/types";
export const INSIGHT_CATEGORIES = ["Technology Articles", "Business Automation", "Financial Technology", "AI & Enterprise Systems", "Product Announcements", "Company Updates"];
/** Swap this function's body for a CMS call (Sanity, Contentful, etc.). */
export async function getArticles(): Promise<Article[]> { return []; }
