import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import neuxisEmblem from "@/assets/neuxis-emblem.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Neuxis Digital — home"
    >
      <img
        src={neuxisEmblem}
        alt=""
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="inline-flex items-baseline gap-1.5 font-display text-lg font-bold tracking-[0.18em]">
        <span className="text-foreground">NEUXIS</span>
        <span className="text-sm font-medium tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-accent">
          DIGITAL
        </span>
      </span>
      <span className="h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent" aria-hidden="true" />
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Primary"
      >
        <Wordmark />

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(link.to)
                  ? "text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
              aria-current={isActive(link.to) ? "page" : undefined}
            >
              <span className="relative">
                {link.label}
                {isActive(link.to) && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary ml-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            onClick={(event) => {
              // Already on the contact page: scroll to the form instead of a silent no-op.
              if (location.pathname === "/contact") {
                event.preventDefault();
                document
                  .getElementById("enquiry-form")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              setOpen(false);
            }}
          >
            Discuss a Project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive(link.to)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Discuss a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
