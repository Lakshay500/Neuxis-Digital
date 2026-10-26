import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Neuxis Digital" },
      {
        name: "description",
        content:
          "How Neuxis Digital handles the personal information collected through this website.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Legal
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground">
        Privacy Policy
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Neuxis Digital collects only the personal information submitted through
          the project enquiry form on this website: your name, organisation (if
          provided), email address, selected goals, timeline preference, and your
          description of the project or challenge.
        </p>
        <p>
          This information is used for one purpose only: to review and respond to
          your enquiry. It is not used for marketing, not sold, and not shared with
          third parties.
        </p>
        <p>
          This policy is being finalised with the complete legal details of the
          business. If you have questions about your data or wish to have your
          enquiry removed, contact us through the project enquiry form and we will
          action your request.
        </p>
        <p className="text-xs">Last reviewed: October 2026.</p>
      </div>
    </main>
  );
}
