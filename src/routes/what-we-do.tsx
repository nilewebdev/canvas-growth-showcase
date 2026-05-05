import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Notisce Digital" },
      { name: "description", content: "Premium website design, SEO and conversion optimisation for modern businesses." },
      { property: "og:title", content: "What We Do — Notisce Digital" },
      { property: "og:description", content: "Three quiet specialisms — websites, SEO and conversion — built for one outcome: more customers." },
    ],
  }),
  component: WhatWeDo,
});

const blocks = [
  {
    eyebrow: "01 — Website Design",
    title: "Conversion-focused websites that earn their place.",
    body: "Every page is designed around one question: will this turn a visitor into a customer? Beautiful is the floor, not the ceiling.",
    points: ["Custom-designed, never templated", "Mobile-first, lightning fast", "Built around your offer, not ours", "Clear next steps on every page"],
  },
  {
    eyebrow: "02 — SEO & Google Growth",
    title: "Get found by the customers actively looking.",
    body: "Technical SEO, on-page optimisation and local search strategy that puts you at the top of the page where it matters.",
    points: ["Local SEO & Google Business Profile", "Keyword & competitor research", "Technical audits & schema", "Monthly reporting that's actually readable"],
  },
  {
    eyebrow: "03 — Conversion Optimisation",
    title: "Turn the visitors you already have into revenue.",
    body: "Most sites don't need more traffic. They need a smarter route from visit to enquiry. We find it, test it, and lock it in.",
    points: ["Heatmaps & user-session analysis", "Funnel & form optimisation", "A/B testing of key pages", "Booking & CRM integrations"],
  },
];

function Block({ b, reverse }: { b: (typeof blocks)[number]; reverse?: boolean }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal grid md:grid-cols-2 gap-12 items-center section ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-sand)] mb-4">{b.eyebrow}</div>
        <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1]">{b.title}</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">{b.body}</p>
        <ul className="mt-8 space-y-3">
          {b.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm">
              <Check size={16} className="text-[var(--color-sand)] mt-0.5" /> {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="aspect-[4/3] rounded-2xl bg-[oklch(0.94_0.005_85)] soft-shadow border border-border/60 overflow-hidden flex items-center justify-center">
        <div className="font-display text-[10rem] font-light text-[var(--color-sand)]/30">{b.eyebrow.split(" ")[0]}</div>
      </div>
    </div>
  );
}

function WhatWeDo() {
  return (
    <>
      <section className="container-narrow pt-16 md:pt-24">
        <SectionHeading
          eyebrow="What we do"
          title="Three quiet specialisms — one outcome."
          subtitle="We don't do everything. We do three things very well, and they all lead to the same place: more of the right customers, more often."
        />
      </section>
      <div className="container-narrow">
        {blocks.map((b, i) => (
          <Block key={b.title} b={b} reverse={i % 2 === 1} />
        ))}
      </div>

      <section className="container-narrow pb-24">
        <div className="rounded-3xl bg-foreground text-primary-foreground p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-light max-w-xl mx-auto leading-tight">
            Ready to see what's possible?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-sand)] text-foreground px-7 py-4 text-sm tracking-wide hover:bg-primary-foreground transition-colors"
          >
            Get your free audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
