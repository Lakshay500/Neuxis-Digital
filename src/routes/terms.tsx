import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Neuxis Digital" },
      {
        name: "description",
        content: "Terms governing the use of the Neuxis Digital website.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        Legal
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground">
        Terms of Use
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          The content of this website describes the capabilities and direction of
          Neuxis Digital. Service descriptions explain what we can do; they are not
          offers, guarantees of results, or commitments to specific timelines or
          outcomes. Commercial terms are agreed per engagement.
        </p>
        <p>
          Concept projects shown on this website are clearly labelled as
          illustrative and were not commissioned by clients. Case studies will only
          be published where the work and the client's permission are genuine.
        </p>
        <p>
          These terms are being finalised with the complete legal details of the
          business. Questions about the use of this website can be sent through the
          project enquiry form.
        </p>
        <p className="text-xs">Last reviewed: October 2026.</p>
      </div>
    </main>
  );
}
