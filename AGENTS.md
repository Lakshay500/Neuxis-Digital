<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Neuxis Digital — project rules

- The site is dark-only by brand: all colors are semantic tokens in `src/styles.css` (deep black background, graphite surfaces, amber `--primary`/`--accent`). Never hardcode hex values or light-theme colors in components.
- Fonts are Space Grotesk (`--font-display`) + Manrope (`--font-sans`), loaded via `<link>` in `src/routes/__root.tsx` — never `@import` a font URL in CSS.
- Shared navigation and footer live in `src/routes/__root.tsx` around `<Outlet />`; page bodies live in route files under `src/routes/`.
- Service content is defined once in `src/lib/services-data.ts` and consumed by home, services, and footer — update it there, not inline.
- Contact enquiries insert directly from the browser into `public.enquiries` (anon INSERT RLS policy; no anon SELECT). Don't widen those grants or add read access without a purpose.
- Honesty constraint from the brand brief: never add fabricated clients, testimonials, performance figures, prices, or contact details. Concept work must stay labelled as concept. Contact details/social links only after the founder supplies verified ones.
- All animation respects `prefers-reduced-motion` (see the media query block at the end of `src/styles.css`); new animations should live in that system, not as one-off CSS.
