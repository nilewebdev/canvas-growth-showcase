import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export interface PricingTier {
  name: string;
  oldPrice: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative rounded-2xl p-8 hover-lift border transition-all flex flex-col ${
        tier.popular
          ? "bg-foreground text-primary-foreground border-foreground soft-shadow"
          : "bg-card border-border/60 soft-shadow"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] bg-[var(--color-sand)] text-foreground px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-xl mb-2">{tier.name}</h3>
      <p className={`text-sm mb-6 ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {tier.description}
      </p>
      <div className="mb-6">
        <div className={`text-sm line-through ${tier.popular ? "text-primary-foreground/50" : "text-muted-foreground/70"}`}>
          {tier.oldPrice}
        </div>
        <div className="font-display text-4xl font-light">{tier.price}</div>
      </div>
      <ul className="space-y-3 mb-8 text-sm flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check size={16} className={tier.popular ? "text-[var(--color-sand)] mt-0.5" : "text-[var(--color-sand)] mt-0.5"} />
            <span className={tier.popular ? "text-primary-foreground/85" : "text-foreground/85"}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`inline-flex justify-center rounded-full px-5 py-3 text-sm tracking-wide transition-colors ${
          tier.popular
            ? "bg-[var(--color-sand)] text-foreground hover:bg-primary-foreground"
            : "bg-foreground text-primary-foreground hover:bg-graphite"
        }`}
      >
        Get started
      </Link>
    </div>
  );
}

export const tiers: PricingTier[] = [
  {
    name: "Starter",
    oldPrice: "£600",
    price: "£399",
    description: "A clean, fast site for new businesses ready to look the part.",
    features: ["Up to 5 pages", "Mobile-first design", "Basic on-page SEO", "Contact form & analytics", "2 weeks delivery"],
  },
  {
    name: "Growth",
    oldPrice: "£1,200",
    price: "£799",
    description: "Our most-loved package — design, SEO and conversion in one.",
    popular: true,
    features: ["Up to 10 pages", "Conversion-focused design", "Local SEO setup", "Google Business Profile", "Speed optimisation", "30-day support"],
  },
  {
    name: "Pro",
    oldPrice: "£2,500",
    price: "£1,499",
    description: "For established businesses ready to dominate their market.",
    features: ["Custom design system", "Advanced SEO strategy", "Copywriting included", "CRM / booking integrations", "Performance audit", "60-day support"],
  },
];
