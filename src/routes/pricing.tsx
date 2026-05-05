import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard, tiers } from "@/components/PricingCard";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing, Notisce Digital" },
      { name: "description", content: "Premium websites, SEO and growth, with launch pricing for our first clients of 2026." },
      { property: "og:title", content: "Pricing, Notisce Digital" },
      { property: "og:description", content: "Transparent project pricing and monthly retainers for websites, SEO and growth." },
    ],
  }),
  component: Pricing,
});

const retainers = [
  { name: "Basic Care", price: "£30 – £80 / mo", body: "Hosting, security, monthly updates and small content edits to keep your site fresh." },
  { name: "SEO Retainer", price: "£200 – £800 / mo", body: "Ongoing keyword work, content, technical fixes and reporting to keep climbing Google." },
  { name: "Growth Partner", price: "£500 – £1,500 / mo", body: "A full marketing partner, SEO, conversion, analytics and quarterly strategy reviews." },
];

function Pricing() {
  return (
    <>
      <section className="container-narrow pt-16 md:pt-24">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] bg-[var(--color-sand)]/15 text-[var(--color-sand)] px-4 py-2 rounded-full">
            <span className="size-1.5 rounded-full bg-[var(--color-sand)] animate-pulse" />
            Limited Time, First Client Discounts
          </span>
        </div>
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Honest pricing. Quietly premium work."
          subtitle="Launch pricing for our first clients of 2026, locked in for the life of your project."
        />
      </section>

      <section className="container-narrow section">
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {tiers.map((t) => (
            <PricingCard key={t.name} tier={t} />
          ))}
        </div>
      </section>

      <section className="container-narrow section">
        <SectionHeading
          eyebrow="Monthly retainers"
          title="Care, growth and partnership."
          subtitle="Once your site is live, keep it sharp. Pick the level of partnership that fits where you are."
        />
        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {retainers.map((r) => (
            <div key={r.name} className="p-8 rounded-2xl bg-card border border-border/60 soft-shadow hover-lift">
              <h3 className="font-display text-xl mb-2">{r.name}</h3>
              <div className="font-display text-2xl font-light text-[var(--color-sand)] mb-4">{r.price}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
