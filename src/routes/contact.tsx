import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import neuxisEmblem from "@/assets/neuxis-emblem.png";
import { Reveal } from "@/components/site/reveal";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact — Neuxis Digital",
      },
      {
        name: "description",
        content:
          "Tell us what you're building. Whether you're improving an existing digital presence or starting something new, tell us about your goals and challenges.",
      },
      {
        property: "og:title",
        content: "Contact — Neuxis Digital",
      },
      {
        property: "og:description",
        content:
          "Start a conversation with Neuxis Digital about your digital presence, growth and systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const GOAL_OPTIONS = [
  "Brand & Creative",
  "Web & Digital Products",
  "Content & Social",
  "Performance Marketing",
  "Search & Local Growth",
  "AI & Business Automation",
  "Analytics & Strategy",
  "Not sure yet",
] as const;

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Just exploring",
] as const;

const BUDGET_OPTIONS = [
  "To be discussed",
  "Fixed-scope project",
  "Monthly retainer",
] as const;

interface FormState {
  name: string;
  organization: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", organization: "", email: "", message: "" };

type FieldErrors = Partial<Record<"name" | "email" | "goals" | "message", string>>;

function validate(form: FormState, goals: string[]): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (goals.length === 0) errors.goals = "Select at least one goal.";
  if (!form.message.trim()) {
    errors.message = "Tell us briefly about your project or challenge.";
  } else if (form.message.trim().length < 10) {
    errors.message = "A little more detail helps — at least 10 characters.";
  }
  return errors;
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="tech-grid tech-grid-fade absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tell us what you're building.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Whether you're improving an existing digital presence or starting
            something new, tell us about your goals and challenges. We'll review
            your requirements and determine the most appropriate next step.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ChipGroup({
  legend,
  options,
  selected,
  onToggle,
  multiSelect,
  error,
}: {
  legend: string;
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
  multiSelect?: boolean | undefined;
  error?: string | undefined;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-foreground">
        {legend}
        {multiSelect && (
          <span className="ml-2 text-xs font-normal text-muted-foreground">
            (select all that apply)
          </span>
        )}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggle(option)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                isSelected
                  ? "border-accent/60 bg-accent/10 text-accent"
                  : "border-border bg-card text-muted-foreground hover:border-accent/30 hover:text-foreground",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </fieldset>
  );
}

const inputClasses =
  "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-ring";

function WhatHappensNext() {
  return (
    <aside className="h-fit rounded-xl border border-border bg-card p-6 sm:p-8 lg:sticky lg:top-24">
      <h2 className="font-display text-lg font-semibold text-foreground">
        What happens next
      </h2>
      <ol className="mt-6 space-y-6">
        {[
          {
            title: "We review your enquiry",
            body: "We read every submission and look at the context you share — no automated replies.",
          },
          {
            title: "We diagnose the problem",
            body: "Where useful, we'll ask a few clarifying questions to understand the real objective behind the request.",
          },
          {
            title: "We suggest a next step",
            body: "A conversation, a scoped proposal, or an honest sign that a different approach would serve you better.",
          },
        ].map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 font-display text-xs font-bold text-accent">
              {i + 1}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
        Your details are used only to respond to your enquiry. We collect only the
        information needed, and we don't share it.
      </p>
    </aside>
  );
}

function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [goals, setGoals] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>(TIMELINE_OPTIONS[2]);
  const [budget, setBudget] = useState<string>(BUDGET_OPTIONS[0]);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleGoal = (option: string) =>
    setGoals((current) =>
      current.includes(option)
        ? current.filter((g) => g !== option)
        : [...current, option],
    );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    // Honeypot: bots fill hidden fields. Show success without storing anything.
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const fieldErrors = validate(form, goals);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);
    const { error } = await supabase.from("enquiries").insert({
      name: form.name.trim(),
      organization: form.organization.trim() || null,
      email: form.email.trim(),
      goals: goals.join(", "),
      timeline,
      budget,
      message: form.message.trim(),
    });
    setSubmitting(false);

    if (error) {
      setSubmitError(
        "Your enquiry couldn't be sent right now. Please try again in a moment.",
      );
      return;
    }
    setSubmitted(true);
  }

  return (
    <main className="page-enter">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <PageHeader />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-accent/40 bg-card p-8 text-center">
                <img
                  src={neuxisEmblem}
                  alt=""
                  className="h-20 w-20 object-contain"
                />
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                  Enquiry received.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thank you — your details are with us. We'll review what you've
                  shared and respond with the most appropriate next step.
                </p>
              </div>
            ) : (
              <form id="enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-9 scroll-mt-24">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      className={cn(inputClasses, "mt-2")}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="text-sm font-semibold text-foreground"
                    >
                      Business or organisation{" "}
                      <span className="text-xs font-normal text-muted-foreground">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      maxLength={120}
                      className={cn(inputClasses, "mt-2")}
                      placeholder="Company name"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    className={cn(inputClasses, "mt-2")}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <ChipGroup
                  legend="What would you like to work on? *"
                  options={GOAL_OPTIONS}
                  selected={goals}
                  onToggle={toggleGoal}
                  multiSelect
                  error={errors.goals}
                />

                <div className="grid gap-9 sm:grid-cols-2">
                  <ChipGroup
                    legend="Timeline"
                    options={TIMELINE_OPTIONS}
                    selected={[timeline]}
                    onToggle={setTimeline}
                  />
                  <ChipGroup
                    legend="Engagement"
                    options={BUDGET_OPTIONS}
                    selected={[budget]}
                    onToggle={setBudget}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Project or challenge <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    className={cn(inputClasses, "mt-2 resize-y")}
                    placeholder="Where is your business today, what do you want to improve, and where would you like to go?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot — hidden from humans, catches bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {submitError && (
                  <p role="alert" className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  By sending this enquiry you agree that Neuxis Digital may use your
                  details to respond to it. Nothing else — no newsletters, no
                  sharing.
                </p>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <WhatHappensNext />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
