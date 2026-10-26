import { Link } from "@tanstack/react-router";
import neuxisLogo from "@/assets/neuxis-logo.png";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const CAPABILITIES = [
  "Brand & Creative",
  "Web & Digital Products",
  "Content & Social",
  "Performance Marketing",
  "Search & Local Growth",
  "AI & Business Automation",
  "Analytics & Strategy",
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={neuxisLogo}
              alt="Neuxis Digital — A Photon Helper Company"
              className="h-28 w-auto"
            />
            <p className="mt-4 font-display text-sm font-medium text-foreground">
              Build the presence. Create the system. Move the business forward.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Neuxis Digital is a technology-driven digital growth company. We bring
              strategy, creative, technology, marketing and automation together so a
              business's digital presence works as one connected system.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Capabilities
            </h2>
            <ul className="mt-4 space-y-2.5">
              {CAPABILITIES.map((capability) => (
                <li key={capability}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {capability}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Neuxis Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
