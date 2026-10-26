import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, MinusCircle } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { SERVICES, TIERS, servicesByTier, type ServiceTier } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services — Neuxis Digital",
      },
      {
        name: "description",
        content:
          "Foundation, Growth and Systems: brand, web, content, performance marketing, search and local growth, AI automation and analytics — connected capabilities built to work together.",
      },
      {
        property: "og:title",
        content: "Services — Neuxis Digital",
      },
      {
        property: "og:description",
        content:
          "Explore Neuxis Digital's capability tiers: Foundation, Growth and Systems — with deliverables and the problems each solves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function PageHeader() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="tech-grid tech-grid-fade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Services
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Capabilities built to work together.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Neuxis Digital's capabilities are organised into three tiers —
            Foundation, Growth and Systems. Start where the need is greatest; each
            tier is designed to connect with the others as your business grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TierNavigation({
  active,
  onSelect,
}: {
  active: ServiceTier;
  onSelect: (tier: ServiceTier) => void;
}) {
  return (
    <div
      className="mt-14 flex flex-col gap-4"
      role="tablist"
      aria-label="Capability tiers"
    >
      <div className="flex flex-wrap gap-2" role="tab" aria-selected={undefined}>
        {TIERS.map((tier) => (
          <button
            key={tier.id}
            type="button"
            role="tab"
            aria-selected={active === tier.id}
            onClick={() => onSelect(tier.id)}
            className={cn(
              "rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all",
              active === tier.id
                ? "border-accent/60 bg-accent/10 text-accent"
                : "border-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground",
            )}
          >
            {tier.title}
            <span className="ml-2 text-xs font-normal opacity-70">
              ({servicesByTier(tier.id).length})
            </span>
          </button>
        ))}
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {TIERS.find((tier) => tier.id === active)?.description}
      </p>
    </div>
  );
}

function ServiceCard({
  service,
  open,
  onToggle,
}: {
  service: (typeof SERVICES)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border bg-card transition-colors",
        open ? "border-accent/40" : "border-border hover:border-accent/25",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-accent">
          <service.icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-lg font-semibold text-foreground">
            {service.name}
          </span>
          <span className="mt-0.5 block truncate text-sm text-muted-foreground">
            {service.summary}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-180 text-accent",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 border-t border-border p-5 sm:p-6 md:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                What we deliver
              </h4>
              <ul className="mt-4 space-y-2.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <MinusCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Problems this solves
              </h4>
              <ul className="mt-4 space-y-2.5">
                {service.problems.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function HowTiersConnect() {
  return (
    <section className="mt-20 border-t border-border pt-16 sm:pt-20">
      <Reveal>
        <div className="grid gap-8 rounded-2xl border border-border bg-surface p-6 sm:p-10 md:grid-cols-3">
          {[
            {
              title: "Foundation first",
              body: "A clear brand, a purposeful website and consistent content give every marketing and automation effort something solid to stand on.",
            },
            {
              title: "Growth on top",
              body: "Campaigns and search visibility perform better when they point to a coherent presence — and their data feeds back into strategy.",
            },
            {
              title: "Systems underneath",
              body: "Automation, AI and analytics connect the pieces: enquiries get followed up, performance gets measured, and decisions get easier.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function ServicesCta() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tell us which capability matters most right now.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every engagement starts with the business objective — not a fixed
            package. We'll help you identify the right scope.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Discuss a Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPage() {
  const [activeTier, setActiveTier] = useState<ServiceTier>("Foundation");
  const [openService, setOpenService] = useState<string>(
    servicesByTier("Foundation")[0]?.id ?? "",
  );

  const tierServices = servicesByTier(activeTier);

  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <PageHeader />
        <TierNavigation
          active={activeTier}
          onSelect={(tier) => {
            setActiveTier(tier);
            setOpenService(servicesByTier(tier)[0]?.id ?? "");
          }}
        />
        <div className="mt-8 flex flex-col gap-3">
          {tierServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              open={openService === service.id}
              onToggle={() =>
                setOpenService((current) => (current === service.id ? "" : service.id))
              }
            />
          ))}
        </div>
        <HowTiersConnect />
      </div>
      <ServicesCta />
    </main>
  );
}
