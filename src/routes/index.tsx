import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Search, MousePointerClick } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingCard, tiers } from "@/components/PricingCard";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Notisce Digital, Premium Websites & Google Growth" },
      { name: "description", content: "We help businesses get more customers through better websites and Google visibility. Free audit available." },
      { property: "og:title", content: "Notisce Digital, Premium Websites & Google Growth" },
      { property: "og:description", content: "Conversion-focused websites, SEO and growth for modern businesses." },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="container-narrow pt-16 md:pt-28 pb-16 md:pb-24">
      <div ref={ref} className="reveal max-w-4xl">
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-sand)] mb-6 flex items-center gap-2">
          <span className="inline-block w-8 h-px bg-[var(--color-sand)]" />
          Notisce Digital
        </div>
        <h1 className="font-display font-light text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
          We help businesses get more customers through{" "}
          <span className="italic text-[var(--color-sand)]">better websites</span> & Google visibility.
        </h1>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A premium agency for ambitious brands. We design, build and grow sites that look beautiful, and quietly bring in revenue.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-6 py-3.5 text-sm tracking-wide hover:bg-graphite transition-colors"
          >
            Get Free Audit
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm tracking-wide hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

const services = [
  { Icon: Sparkles, title: "Website Design", body: "Premium, conversion-focused websites that look as good as the brands they sell." },
  { Icon: Search, title: "SEO & Google Growth", body: "Get found by the right customers with technical SEO and local search strategy." },
  { Icon: MousePointerClick, title: "Conversion Optimisation", body: "Turn the visitors you already have into bookings, leads and revenue." },
];

function WhatWeDo() {
  return (
    <section className="container-narrow section">
      <SectionHeading eyebrow="What we do" title="Three quiet specialisms, one outcome." />
      <div className="grid gap-6 md:grid-cols-3 mt-12">
        {services.map(({ Icon, title, body }) => (
          <Link
            key={title}
            to="/what-we-do"
            className="group p-8 rounded-2xl bg-card border border-border/60 hover-lift soft-shadow"
          >
            <div className="size-12 rounded-full bg-background flex items-center justify-center mb-6 text-[var(--color-sand)]">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-xl mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            <div className="mt-6 text-sm text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn more <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { v: "+120%", l: "More leads on average" },
    { v: "2x", l: "Faster page load times" },
    { v: "Top 3", l: "Google rankings achieved" },
  ];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-primary-foreground">
      <div ref={ref} className="reveal container-narrow section grid gap-10 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.l} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl font-light text-[var(--color-sand)]">{s.v}</div>
            <div className="mt-3 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingPreview() {
  return (
    <section className="container-narrow section">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] bg-[var(--color-sand)]/15 text-[var(--color-sand)] px-4 py-2 rounded-full">
          <span className="size-1.5 rounded-full bg-[var(--color-sand)] animate-pulse" />
          Limited Time, First Client Discounts
        </span>
      </div>
      <SectionHeading
        align="center"
        title="Pricing built around your growth."
        subtitle="Launch offers for our first clients in 2026, locked in for life."
      />
      <div className="grid gap-6 md:grid-cols-3 mt-14 items-stretch">
        {tiers.map((t) => (
          <PricingCard key={t.name} tier={t} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/pricing" className="text-sm text-foreground/80 hover:text-foreground inline-flex items-center gap-1">
          See full pricing <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-narrow section">
      <div className="rounded-3xl bg-card border border-border/60 soft-shadow p-12 md:p-20 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-light max-w-2xl mx-auto leading-tight">
          Get your free website audit.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
          A 10-minute video review of your site, your competitors, and the three quickest wins for more customers.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-graphite transition-colors"
        >
          Request your audit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Results />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
