import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SERVICES } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Neuxis Digital — Build the Presence. Create the System. Move the Business Forward.",
      },
      {
        name: "description",
        content:
          "Neuxis Digital brings together strategy, creative, technology, marketing and automation to help businesses build a digital presence that works as one connected system.",
      },
      {
        property: "og:title",
        content: "Neuxis Digital — Build the Presence. Create the System.",
      },
      {
        property: "og:description",
        content:
          "A technology-driven digital growth partner: brand, web, content, marketing, AI automation and analytics, connected around your business objectives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- Shared section heading ---------------- */

function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="tech-grid tech-grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-glow blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Technology-Driven Digital Growth
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            <span className="block text-foreground">Build the presence.</span>
            <span className="block text-foreground">Create the system.</span>
            <span className="block text-muted-foreground">
              Move the business{" "}
              <span className="text-accent">forward.</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Neuxis Digital brings together strategy, creative, technology, marketing
            and automation to help businesses build their digital presence and move
            forward with greater clarity.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 sm:w-auto"
            >
              Discuss a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-16 max-w-2xl">
          <HeroConstellation />
        </Reveal>
      </div>
    </section>
  );
}

/** Hero visual: capabilities orbiting one business — the connected-systems model. */
function HeroConstellation() {
  return (
    <svg
      viewBox="0 0 560 190"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of brand, web, content, marketing, data and automation connected to one central business"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="280" cy="95" rx="260" ry="90" fill="url(#heroGlow)" />
      {/* connector lines */}
      {([
        [280, 95, 90, 40],
        [280, 95, 200, 25],
        [280, 95, 360, 25],
        [280, 95, 470, 40],
        [280, 95, 60, 145],
        [280, 95, 185, 165],
        [280, 95, 375, 165],
        [280, 95, 500, 145],
      ] as [number, number, number, number][]).map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="var(--color-border)"
          strokeWidth="1.5"
          className="link-flow"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {/* satellites */}
      {[
        { x: 90, y: 40, label: "Brand" },
        { x: 200, y: 25, label: "Web" },
        { x: 360, y: 25, label: "Content" },
        { x: 470, y: 40, label: "Marketing" },
        { x: 60, y: 145, label: "Data" },
        { x: 185, y: 165, label: "AI" },
        { x: 375, y: 165, label: "Automation" },
        { x: 500, y: 145, label: "Analytics" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="5" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text
            x={n.x}
            y={n.y - 12}
            textAnchor="middle"
            className="fill-[var(--color-muted-foreground)]"
            fontSize="10"
            fontFamily="var(--font-sans)"
          >
            {n.label}
          </text>
        </g>
      ))}
      {/* hub */}
      <circle cx="280" cy="95" r="34" fill="var(--color-surface-raised)" stroke="var(--color-accent)" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="280" cy="95" r="4" fill="var(--color-accent)" className="node-pulse" />
      <text x="280" y="91" textAnchor="middle" className="fill-[var(--color-foreground)]" fontSize="10" fontWeight="600" fontFamily="var(--font-sans)">
        Your
      </text>
      <text x="280" y="104" textAnchor="middle" className="fill-[var(--color-foreground)]" fontSize="10" fontWeight="600" fontFamily="var(--font-sans)">
        Business
      </text>
    </svg>
  );
}

/* ---------------- Section 2: fragmented vs connected ---------------- */

function VisualModel() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="The Problem We Address"
            title="Digital growth shouldn't feel disconnected."
            lead="Businesses often manage their website, content, brand, advertising and operations separately. Disconnected efforts make it harder to stay consistent, understand performance and decide what to improve next. Neuxis connects the relevant capabilities around the needs of the business."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-xl border border-border bg-card p-6 sm:p-8">
              <header className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Fragmented agencies
                </h3>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                  Separate vendors
                </span>
              </header>
              <FragmentedDiagram />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Different providers, different tools, no shared picture. Brand,
                content, ads and data drift apart — and nobody sees the whole.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative h-full overflow-hidden rounded-xl border border-accent/30 bg-card p-6 sm:p-8">
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-glow blur-2xl"
                aria-hidden="true"
              />
              <header className="relative flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Connected execution
                </h3>
                <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  One partner
                </span>
              </header>
              <ConnectedDiagram />
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                Every capability works from the same understanding of the business.
                Creative, campaigns, data and automation reinforce each other — and
                progress becomes measurable.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FragmentedDiagram() {
  return (
    <svg
      viewBox="0 0 320 210"
      className="mt-6 h-auto w-full"
      role="img"
      aria-label="Scattered, disconnected service nodes with broken links"
    >
      {([
        [70, 55, 190, 80],
        [190, 80, 110, 150],
        [240, 45, 200, 145],
        [110, 150, 250, 160],
      ] as [number, number, number, number][]).map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="var(--color-border)"
          strokeWidth="1.5"
          strokeDasharray="4 10"
        />
      ))}
      {/* broken-link markers */}
      {([
        [130, 68],
        [150, 115],
        [220, 95],
        [180, 155],
      ] as [number, number][]).map(([x, y], i) => (
        <g key={i} stroke="var(--color-destructive)" strokeWidth="1.5" opacity="0.7">
          <line x1={x - 5} y1={y - 5} x2={x + 5} y2={y + 5} />
          <line x1={x + 5} y1={y - 5} x2={x - 5} y2={y + 5} />
        </g>
      ))}
      {[
        { x: 70, y: 55, label: "Web" },
        { x: 240, y: 45, label: "Ads" },
        { x: 110, y: 150, label: "Content" },
        { x: 190, y: 80, label: "Brand" },
        { x: 200, y: 145, label: "Data" },
        { x: 250, y: 160, label: "Ops" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="6" fill="var(--color-secondary)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x={n.x} y={n.y - 11} textAnchor="middle" className="fill-[var(--color-muted-foreground)]" fontSize="9" fontFamily="var(--font-sans)">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ConnectedDiagram() {
  return (
    <svg
      viewBox="0 0 320 210"
      className="mt-6 h-auto w-full"
      role="img"
      aria-label="All service nodes connected through one central business hub"
    >
      {([
        [160, 105, 50, 45],
        [160, 105, 160, 35],
        [160, 105, 270, 45],
        [160, 105, 45, 160],
        [160, 105, 160, 175],
        [160, 105, 275, 160],
      ] as [number, number, number, number][]).map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="var(--color-accent)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          className="link-flow"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
      {[
        { x: 50, y: 45, label: "Brand" },
        { x: 160, y: 35, label: "Web" },
        { x: 270, y: 45, label: "Content" },
        { x: 45, y: 160, label: "Marketing" },
        { x: 160, y: 175, label: "Automation" },
        { x: 275, y: 160, label: "Analytics" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="6" fill="var(--color-surface-raised)" stroke="var(--color-accent)" strokeOpacity="0.6" strokeWidth="1.5" />
          <text x={n.x} y={n.y - 11} textAnchor="middle" className="fill-[var(--color-muted-foreground)]" fontSize="9" fontFamily="var(--font-sans)">
            {n.label}
          </text>
        </g>
      ))}
      <circle cx="160" cy="105" r="26" fill="var(--color-surface-raised)" stroke="var(--color-accent)" strokeOpacity="0.7" strokeWidth="1.5" />
      <circle cx="160" cy="105" r="3.5" fill="var(--color-accent)" className="node-pulse" />
      <text x="160" y="102" textAnchor="middle" className="fill-[var(--color-foreground)]" fontSize="9" fontWeight="600" fontFamily="var(--font-sans)">
        Your
      </text>
      <text x="160" y="113" textAnchor="middle" className="fill-[var(--color-foreground)]" fontSize="9" fontWeight="600" fontFamily="var(--font-sans)">
        Business
      </text>
    </svg>
  );
}

/* ---------------- Section 3: capabilities ---------------- */

function Capabilities() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Capabilities built to work together."
            lead="Seven connected capability areas. Start where the need is greatest — the rest of the system can grow around it."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <Link
                to="/services"
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {service.tier}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Explore capability
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={420}>
            <Link
              to="/contact"
              className="group flex h-full flex-col justify-between rounded-xl border border-accent/30 bg-gradient-to-br from-secondary to-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60"
            >
              <div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  Not sure where to start?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Tell us where your business is today. We'll help identify the
                  capability that matters most right now.
                </p>
              </div>
              <span className="mt-4 text-sm font-semibold text-accent">
                Start a Conversation →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 4: three-phase process ---------------- */

const PHASES = [
  {
    number: "01",
    name: "Diagnose & Architect",
    steps: ["Discover", "Diagnose"],
    description:
      "We start by understanding the business, its audience and its existing digital presence — then identify the gaps, opportunities and priorities that matter most.",
  },
  {
    number: "02",
    name: "Build & Deploy",
    steps: ["Build", "Launch"],
    description:
      "We define the scope and develop the agreed solution — brand, website, campaign, content or workflow — then launch it with the right checks and handover.",
  },
  {
    number: "03",
    name: "Automate & Scale",
    steps: ["Measure", "Optimize", "Scale"],
    description:
      "We evaluate performance against relevant objectives, improve based on evidence, and extend what works when the business is ready.",
  },
] as const;

function Process() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="From understanding the problem to improving the outcome."
            lead="Our operating philosophy in three phases. Every engagement adapts to its scope — not every project includes every step."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.number} delay={i * 120}>
              <article className="relative h-full rounded-xl border border-border bg-card p-6 sm:p-8">
                <span
                  className="font-display text-4xl font-bold text-foreground/10"
                  aria-hidden="true"
                >
                  {phase.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                  {phase.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Stages: ${phase.steps.join(", ")}`}>
                  {phase.steps.map((step) => (
                    <li
                      key={step}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {step}
                    </li>
                  ))}
                </ul>
                {i < PHASES.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-raised text-xs text-accent md:flex"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 5: capabilities in action ---------------- */

const CONCEPTS = [
  {
    label: "Concept — Local Business",
    title: "A café's complete digital foundation",
    body: "Brand identity refresh, a one-page website with online menu and enquiry form, Google Business Profile optimisation, and a simple monthly content plan.",
  },
  {
    label: "Concept — Startup",
    title: "A product launch system",
    body: "Positioning and messaging, a conversion-focused landing page, launch content across channels, conversion tracking, and a lead follow-up workflow from day one.",
  },
  {
    label: "Concept — Professional Services",
    title: "An enquiry engine for a consultancy",
    body: "Credibility-focused website, lead-generation pages per service, an automated enquiry-routing and follow-up workflow, and a quarterly performance review.",
  },
] as const;

function ConceptShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities in Action"
            title="What we can build."
            lead="Early-stage companies don't have decades of case studies — so instead of inventing clients, here's how our capabilities combine. These are illustrative concept projects, not commissioned client work."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {CONCEPTS.map((concept, i) => (
            <Reveal key={concept.title} delay={i * 120}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                <span className="inline-flex w-fit items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {concept.label}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                  {concept.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {concept.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section 6: closing CTA ---------------- */

function ClosingCta() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card px-6 py-16 text-center sm:px-12">
          <div className="tech-grid tech-grid-fade absolute inset-0" aria-hidden="true" />
          <div
            className="absolute left-1/2 top-1/2 h-64 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's build what's next.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tell us where your business is today, what you want to improve, and
              where you'd like to go. We'll start by understanding the problem.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <VisualModel />
      <Capabilities />
      <Process />
      <ConceptShowcase />
      <ClosingCta />
    </main>
  );
}
