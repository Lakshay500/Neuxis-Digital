import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, Link2, Ruler, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About & Philosophy — Neuxis Digital",
      },
      {
        name: "description",
        content:
          "One partner. Connected execution. Measurable digital progress. The Neuxis thesis, operating principles and long-term direction.",
      },
      {
        property: "og:title",
        content: "About & Philosophy — Neuxis Digital",
      },
      {
        property: "og:description",
        content:
          "Technology, creativity and strategy — working as one. Learn how Neuxis Digital thinks about digital growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function PageHeader() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="tech-grid tech-grid-fade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            About Neuxis Digital
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Technology, creativity and strategy — working as one.
          </h1>
          <p className="mt-6 border-l-2 border-accent/50 pl-5 font-display text-lg font-medium text-foreground sm:text-xl">
            One partner. Connected execution. Measurable digital progress.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Neuxis Digital is being built to address a practical challenge:
                businesses need their digital presence, communication, technology
                and growth activities to work together — but usually have to get
                them from separate providers who never talk to each other.
              </p>
              <p>
                We are an early-stage company developing an integrated approach
                rather than focusing on a single isolated service. That means
                strategy, design, development, content, marketing, data, AI and
                automation are treated as parts of one system, planned around the
                business's objectives.
              </p>
              <p>
                We're honest about our stage. We don't claim decades of experience
                or hundreds of clients. What we offer is a clear way of thinking,
                careful execution, and a partner relationship designed to grow.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid h-fit gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-base font-semibold text-foreground">
                  Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Help businesses solve digital challenges through connected
                  strategy, creative execution, technology and practical growth
                  capabilities.
                </p>
              </div>
              <div className="rounded-xl border border-accent/30 bg-card p-6">
                <h3 className="font-display text-base font-semibold text-foreground">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Build a technology-enabled digital growth company that can evolve
                  from service delivery into connected systems and products.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 sm:col-span-2">
                <h3 className="font-display text-base font-semibold text-foreground">
                  How we think
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Understand the problem before recommending a solution. Choose the
                  appropriate tools rather than the fashionable ones. Measure
                  progress against objectives, and improve through iteration. The
                  sequence we follow: Discover → Diagnose → Build → Launch →
                  Measure → Optimize → Scale.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PRINCIPLES = [
  {
    icon: Link2,
    title: "Connected capabilities",
    body: "Brand, web, content, marketing, analytics and automation work together rather than in isolation.",
  },
  {
    icon: Compass,
    title: "Business-first thinking",
    body: "Solutions begin with the business's objectives and problems — never with a fixed package looking for a customer.",
  },
  {
    icon: TrendingUp,
    title: "Technology-enabled execution",
    body: "Technology, AI, data and automation are used where they genuinely improve how work gets done.",
  },
  {
    icon: Eye,
    title: "Long-term orientation",
    body: "The relationship should have room to grow beyond a one-time deliverable.",
  },
  {
    icon: Ruler,
    title: "Measurable progress",
    body: "Work is evaluated against appropriate objectives rather than appearance alone.",
  },
] as const;

function Principles() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Operating principles
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Five ideas that shape every engagement. They describe how we work — not
            awards, certifications or performance claims.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 80}>
              <article className="h-full rounded-xl border border-border bg-card p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
                  <principle.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const DIRECTION_STAGES = [
  {
    stage: "Service company",
    body: "Delivering creative, digital, marketing and technology services with care and clarity.",
  },
  {
    stage: "Growth partner",
    body: "Developing ongoing relationships and supporting each business's digital progress over time.",
  },
  {
    stage: "Technology-enabled operating system",
    body: "Connecting services, workflows, data and automation into a more integrated operating model.",
  },
  {
    stage: "Productized digital infrastructure",
    body: "Developing repeatable solutions, dashboards, tools, templates and potentially software products.",
  },
] as const;

function Direction() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our direction
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            This describes the direction we are building towards — not a claim that
            every capability or product already exists today.
          </p>
        </Reveal>
        <ol className="mt-10 space-y-0">
          {DIRECTION_STAGES.map((item, i) => (
            <Reveal key={item.stage} delay={i * 80}>
              <li className="relative flex gap-5 pb-8 last:pb-0">
                {i < DIRECTION_STAGES.length - 1 && (
                  <span
                    className="absolute left-[15px] top-8 h-full w-px bg-border"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-card font-display text-xs font-bold text-accent">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.stage}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Want to see how this becomes work?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore the capabilities, or start a conversation about your business
            directly.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
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

function AboutPage() {
  return (
    <main>
      <PageHeader />
      <Thesis />
      <Principles />
      <Direction />
      <AboutCta />
    </main>
  );
}
