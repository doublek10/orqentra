import { Network, Landmark, Workflow, Plug, BrainCircuit, Code2, LayoutGrid, Share2, Cpu, BarChart3, Boxes, FileText, History, Globe2, Store, ShoppingCart, HeartPulse, GraduationCap, Hotel, Factory, Truck, Briefcase, TrendingUp } from "lucide-react";
import type { Capability, Feature, NavItem } from "@/types";
export const SITE = { name: "Orqentra Technologies", tagline: "Engineering Intelligence. Connecting Possibilities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
  description: "Orqentra Technologies develops intelligent software platforms, business automation solutions and interconnected digital infrastructure. Discover Orbit, our flagship business and financial orchestration platform." };
export const NAV: NavItem[] = [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" }, { label: "Orbit", href: "/orbit" }, { label: "Insights", href: "/insights" }, { label: "Contact", href: "/contact" }];
export const VISION = "To engineer intelligent technology that transforms how businesses and institutions operate, connect and grow.";
export const MISSION = "To develop innovative, interconnected and intelligent technology solutions that simplify complexity, improve decision-making and create sustainable business value.";
const V: Array<[string, string, Feature["icon"]]> = [["Innovation", "Pursuing better ways to solve real business problems.", Cpu], ["Integrity", "Honest about what our technology does and does not do.", Share2], ["Intelligence", "Applying data and AI where they create genuine value.", BrainCircuit],
  ["Simplicity", "Making complex systems easier to understand and operate.", LayoutGrid], ["Reliability", "Engineering systems businesses can depend on.", Landmark], ["Continuous improvement", "Always refining our products and practice.", TrendingUp]];
export const VALUES: Feature[] = V.map(([title, description, icon]) => ({ title, description, icon }));
export const CAPABILITIES: Capability[] = [
  { title: "Intelligent Business Systems", icon: Network, description: "Systems that unify operational data and apply rules and intelligence to support day-to-day management.", problems: ["Fragmented business information", "Lack of operational visibility"], applications: ["Unified operational dashboards", "Rule-driven business monitoring"] },
  { title: "Financial Technology Infrastructure", icon: Landmark, description: "Infrastructure that connects financial data sources and organises financial information, without holding funds.", problems: ["Manual financial reconciliation", "Delayed management reporting"], applications: ["Cross-system financial visibility", "Automated reconciliation workflows"] },
  { title: "Business Process Automation", icon: Workflow, description: "Event- and rule-based automation of repetitive administrative workflows.", problems: ["Repetitive administrative work", "Inconsistent process execution"], applications: ["Approval and notification flows", "Scheduled data processing"] },
  { title: "Systems Integration & API Infrastructure", icon: Plug, description: "Reliable connections between ERP, accounting, payroll, POS and payment systems.", problems: ["Disconnected systems", "Complex provider integrations"], applications: ["Provider connectors", "Internal and partner APIs"] },
  { title: "Artificial Intelligence Applications", icon: BrainCircuit, description: "AI that helps interpret information, identify patterns and support informed decisions.", problems: ["Information overload", "Slow analysis"], applications: ["Pattern detection", "Assisted reporting and insight"] },
  { title: "Enterprise Software Engineering", icon: Code2, description: "Secure, scalable software engineered for long-term maintainability.", problems: ["Brittle legacy tooling", "Scaling constraints"], applications: ["Custom platforms", "Modernisation of internal systems"] },
  { title: "Digital Platforms & Applications", icon: LayoutGrid, description: "Web and mobile platforms that deliver digital services to customers and teams.", problems: ["Limited digital reach", "Disjointed user experiences"], applications: ["Customer portals", "Operational web apps"] }];
export const ORBIT_CAPABILITIES: Feature[] = [
  { title: "Financial Graph", icon: Share2, description: "Connect financial and operational information across business systems." },
  { title: "Orbit Kernel", icon: Cpu, description: "The central orchestration engine: processes requests, applies company rules, manages permissions and coordinates workflows." },
  { title: "Orbit Lens", icon: BarChart3, description: "Business intelligence, financial visibility and analytical insights." },
  { title: "Workflow Engine", icon: Workflow, description: "Automate business processes based on defined rules and events." },
  { title: "Provider Integrations", icon: Plug, description: "Connect banks, mobile money, accounting, payroll, ERP, POS and other business systems." },
  { title: "Company Blueprints", icon: FileText, description: "Define operational rules, requirements, workflows and preferred automation behaviour." },
  { title: "AI Intelligence", icon: BrainCircuit, description: "Help interpret information, identify patterns and make informed decisions." },
  { title: "Orbit Replay", icon: History, description: "Traceability and examination of workflow and system activity." },
  { title: "Country Packages", icon: Globe2, description: "Country-specific business requirements, integrations and compliance workflows." },
  { title: "Marketplace", icon: Store, description: "An extensible ecosystem for integrations and additional capabilities." }];
export const ORBIT_PROBLEMS = ["Disconnected business systems", "Manual financial reconciliation", "Fragmented business information", "Delayed management reporting", "Complex integrations between providers", "Lack of centralised operational visibility", "Repetitive administrative workflows"];
export const ORBIT_USE_CASES = ["Reconcile payments from multiple providers against accounting records.", "Trigger approval workflows when defined financial events occur.", "Give management one view across POS, payroll and ERP data.", "Trace how a workflow ran, step by step, for review."];
export const ORBIT_BENEFITS = ["Unified view of operations", "Less manual administrative work", "Faster management reporting", "Complements existing ERP, HR, accounting and payment systems", "Clear traceability of activity", "Configurable to each company's rules"];
export const INDUSTRIES: Feature[] = [
  { title: "Retail & Wholesale", icon: ShoppingCart, description: "Connect POS, inventory, payments and accounting to see sales and cash position together." },
  { title: "Healthcare & Hospitals", icon: HeartPulse, description: "Streamline billing, administrative workflows and reporting across departments." },
  { title: "Education & Schools", icon: GraduationCap, description: "Automate fee tracking, payroll and administrative processes." },
  { title: "Hospitality", icon: Hotel, description: "Join bookings, point-of-sale and finance data for timely reporting." },
  { title: "Manufacturing", icon: Factory, description: "Coordinate procurement, production and finance systems with rule-based workflows." },
  { title: "Logistics & Transportation", icon: Truck, description: "Connect fleet, delivery and payment records for operational visibility." },
  { title: "Professional Services", icon: Briefcase, description: "Automate time, billing and approval workflows." },
  { title: "Growing SMEs & Enterprises", icon: Boxes, description: "Scale operations with integrated systems instead of manual processes." }];
export const APPROACH = [["Understand", "Identify the business problem."], ["Architect", "Design the appropriate technology."], ["Engineer", "Build reliable and scalable systems."], ["Integrate", "Connect platforms and services."], ["Optimize", "Improve performance and operational value."]] as const;
