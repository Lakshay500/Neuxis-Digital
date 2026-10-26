import {
  BarChart3,
  Bot,
  Globe,
  Palette,
  PenLine,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";

export type ServiceTier = "Foundation" | "Growth" | "Systems";

export interface ServiceDef {
  id: string;
  name: string;
  tier: ServiceTier;
  icon: LucideIcon;
  summary: string;
  deliverables: string[];
  problems: string[];
}

export const TIERS: { id: ServiceTier; title: string; description: string }[] = [
  {
    id: "Foundation",
    title: "Foundation",
    description:
      "Establish a coherent digital identity: how the business looks, what it says, and where it lives online.",
  },
  {
    id: "Growth",
    title: "Growth",
    description:
      "Make the business discoverable and bring in enquiries through structured, measurable marketing.",
  },
  {
    id: "Systems",
    title: "Systems",
    description:
      "Connect the pieces with automation, data and AI so progress can be measured and repeated.",
  },
];

export const SERVICES: ServiceDef[] = [
  {
    id: "brand-creative",
    name: "Brand & Creative",
    tier: "Foundation",
    icon: Palette,
    summary:
      "A recognisable identity and clear messaging, consistent across every digital platform.",
    deliverables: [
      "Brand identity development and visual systems",
      "Logo design and brand guidelines",
      "Brand positioning and messaging support",
      "Marketing and campaign creatives",
      "Digital design assets and creative direction",
    ],
    problems: [
      "Inconsistent visual identity across platforms",
      "Unclear messaging about what makes the business different",
      "Outdated creative assets that no longer fit the brand",
    ],
  },
  {
    id: "web-digital-products",
    name: "Web & Digital Products",
    tier: "Foundation",
    icon: Globe,
    summary:
      "Purposeful websites and digital experiences built to communicate value and convert visitors into enquiries.",
    deliverables: [
      "Business websites, landing pages and redesigns",
      "UI/UX design and responsive development",
      "Conversion-oriented page structures",
      "Website content architecture",
      "Basic analytics integration",
    ],
    problems: [
      "No website, or an outdated one that undersells the business",
      "A site that displays information but doesn't support business goals",
      "Services that are hard for visitors to understand or act on",
    ],
  },
  {
    id: "content-social",
    name: "Content & Social",
    tier: "Foundation",
    icon: PenLine,
    summary:
      "Structured, consistent communication that reflects the brand and reaches the right audience.",
    deliverables: [
      "Content strategy and planning calendars",
      "Social media post design and copywriting",
      "Short-form video concepts",
      "Brand storytelling and campaign content",
      "Platform-specific content adaptation",
    ],
    problems: [
      "Irregular posting and an inactive digital presence",
      "Content that doesn't match the brand or its audience",
      "No plan behind what gets published and why",
    ],
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    tier: "Growth",
    icon: Target,
    summary:
      "Planned, measured and continuously improved digital advertising, evaluated against agreed objectives.",
    deliverables: [
      "Paid campaign planning, setup and management",
      "Audience and targeting strategy",
      "Creative testing and landing-page alignment",
      "Conversion tracking support",
      "Campaign monitoring, optimisation and reporting",
    ],
    problems: [
      "Ad spend without a clear strategy or suitable measurement",
      "No structured way to test and improve campaigns",
      "Results that can't be evaluated against real objectives",
    ],
  },
  {
    id: "search-local-growth",
    name: "Search & Local Growth",
    tier: "Growth",
    icon: Search,
    summary:
      "A stronger foundation for organic and local discovery — built over time, not promised overnight.",
    deliverables: [
      "Search engine optimisation and content optimisation",
      "Technical SEO support",
      "Local SEO and Google Business Profile optimisation",
      "Business information consistency across listings",
      "Search visibility reviews and performance reporting",
    ],
    problems: [
      "The business is difficult to find in relevant search results",
      "Incomplete or inconsistent local business information",
      "No clear strategy for search visibility",
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Business Automation",
    tier: "Systems",
    icon: Bot,
    summary:
      "Practical automation and AI where they reduce repetitive work and improve workflows — with human review built in.",
    deliverables: [
      "Lead-management and enquiry-routing workflows",
      "Automated follow-up workflow design",
      "Reporting automation and integration between supported tools",
      "AI-assisted content workflows",
      "Business process mapping and internal workflow prototypes",
    ],
    problems: [
      "Excessive time spent on repetitive manual tasks",
      "Inconsistent or delayed lead follow-up",
      "Fragmented processes and manual reporting",
    ],
  },
  {
    id: "analytics-strategy",
    name: "Analytics & Strategy",
    tier: "Systems",
    icon: BarChart3,
    summary:
      "Understand the current position, measure what matters, and turn evidence into priorities.",
    deliverables: [
      "Digital presence audits and growth planning",
      "Performance dashboards and reporting systems",
      "KPI definition and conversion funnel reviews",
      "Customer journey analysis",
      "Experimentation planning and optimisation recommendations",
    ],
    problems: [
      "Collecting data without knowing what it means",
      "Unclear which metrics actually matter to the business",
      "Decisions made without evidence of what is working",
    ],
  },
];

export const servicesByTier = (tier: ServiceTier) =>
  SERVICES.filter((service) => service.tier === tier);
