import type { ProjectKey } from "@/data/projects";
import barber from "@/assets/preview-barber.jpg";
import restaurant from "@/assets/preview-restaurant.jpg";
import dentist from "@/assets/preview-dentist.jpg";
import fitness from "@/assets/preview-fitness.jpg";
import boutique from "@/assets/preview-boutique.jpg";

interface Theme {
  brand: string;
  bg: string;
  fg: string;
  accent: string;
  font: string;
  hero: string;
  tagline: string;
  cta: string;
  image: string;
  sections: { title: string; body: string }[];
}

const themes: Record<ProjectKey, Theme> = {
  barber: {
    brand: "Halfden & Co.",
    bg: "#F7F4EE",
    fg: "#1A1816",
    accent: "#8A6B4B",
    font: "serif",
    hero: "Sharp cuts. Slow rituals.",
    tagline: "An East-London barbershop built around craft, not the clock.",
    cta: "Book a chair",
    image: barber,
    sections: [
      { title: "The cut", body: "Classic and contemporary cuts for men who care about the details — finished with a hot towel and a measured pour." },
      { title: "The shave", body: "Traditional straight-razor shaves performed by master barbers using small-batch British grooming oils." },
      { title: "The chair", body: "A quiet room, an honest mirror, and forty unhurried minutes that belong entirely to you." },
    ],
  },
  restaurant: {
    brand: "Maison Verre",
    bg: "#FAF7F2",
    fg: "#1B1A18",
    accent: "#7A5C3D",
    font: "serif",
    hero: "A new chapter in Modern French.",
    tagline: "Seasonal tasting menus by Chef Élodie Marchand, in the heart of Marylebone.",
    cta: "Reserve a table",
    image: restaurant,
    sections: [
      { title: "The menu", body: "Six courses written every Tuesday, sourced from British farms and finished with the precision of a Parisian kitchen." },
      { title: "The room", body: "Twenty-four covers, one open kitchen, and a quiet hum that lets the food do the talking." },
      { title: "The cellar", body: "A short, considered list of growers from the Loire, Burgundy and Sussex." },
    ],
  },
  dentist: {
    brand: "Northstar Dental",
    bg: "#F5F8FB",
    fg: "#0F1B2A",
    accent: "#5E8FB3",
    font: "sans",
    hero: "Calm, modern dentistry.",
    tagline: "A fresh approach to dental care in Manchester — gentle, transparent, beautifully equipped.",
    cta: "Book a consultation",
    image: dentist,
    sections: [
      { title: "General", body: "Routine check-ups, hygiene and same-day appointments with clinicians who actually listen." },
      { title: "Cosmetic", body: "Whitening, alignment and composite bonding designed around the smile you already have." },
      { title: "Implants", body: "Long-term tooth replacement with award-winning specialists and a clear, fixed-fee plan." },
    ],
  },
  fitness: {
    brand: "FORM Studio",
    bg: "#F4F3F0",
    fg: "#111214",
    accent: "#A79C8E",
    font: "sans",
    hero: "Train smarter. Move better.",
    tagline: "Small-group strength and conditioning in a studio that actually feels like one.",
    cta: "Start your trial",
    image: fitness,
    sections: [
      { title: "Strength", body: "Progressive programmes built around you — coached in groups of six, never more." },
      { title: "Conditioning", body: "45-minute sessions designed to build capacity without breaking your week." },
      { title: "Recovery", body: "Mobility, sauna and contrast therapy to keep you training for decades, not weeks." },
    ],
  },
  boutique: {
    brand: "Maren the Label",
    bg: "#FBFAF7",
    fg: "#15110E",
    accent: "#9C8064",
    font: "serif",
    hero: "Quietly considered womenswear.",
    tagline: "Limited-run pieces made in small workshops across Italy and Portugal.",
    cta: "Shop the new arrivals",
    image: boutique,
    sections: [
      { title: "New in", body: "This season's drop — soft tailoring, hand-finished knits and the perfect winter coat." },
      { title: "Atelier", body: "Meet the makers behind every piece, from a third-generation knitwear house in Biella to our Portuguese tailors." },
      { title: "Care", body: "Pieces designed to be worn for years — and instructions for keeping them that way." },
    ],
  },
};

export function FakeSitePreview({ projectKey }: { projectKey: ProjectKey }) {
  const t = themes[projectKey];
  const isSerif = t.font === "serif";
  return (
    <div
      style={{ backgroundColor: t.bg, color: t.fg, fontFamily: isSerif ? "Georgia, serif" : "Inter, system-ui, sans-serif" }}
      className="min-h-full"
    >
      {/* nav */}
      <div className="border-b" style={{ borderColor: `${t.fg}15` }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
          <div className="font-medium tracking-wider uppercase" style={{ letterSpacing: "0.15em" }}>{t.brand}</div>
          <div className="hidden md:flex gap-8 opacity-80">
            <span>Home</span><span>About</span><span>Services</span><span>Journal</span><span>Contact</span>
          </div>
          <div
            className="hidden md:inline-flex px-4 py-2 rounded-full text-xs"
            style={{ backgroundColor: t.fg, color: t.bg }}
          >
            {t.cta}
          </div>
        </div>
      </div>

      {/* hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs uppercase mb-6" style={{ letterSpacing: "0.3em", color: t.accent }}>
            Est. 2025 · {t.brand.split(" ")[0]}
          </div>
          <h1
            className="text-4xl md:text-6xl leading-[1.05] mb-6"
            style={{ fontWeight: isSerif ? 400 : 300 }}
          >
            {t.hero}
          </h1>
          <p className="text-base md:text-lg max-w-md opacity-75 leading-relaxed">{t.tagline}</p>
          <div className="mt-8 flex gap-3">
            <span
              className="inline-flex px-6 py-3 rounded-full text-sm"
              style={{ backgroundColor: t.fg, color: t.bg }}
            >
              {t.cta}
            </span>
            <span
              className="inline-flex px-6 py-3 rounded-full text-sm border"
              style={{ borderColor: `${t.fg}30` }}
            >
              Learn more
            </span>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl" style={{ boxShadow: `0 30px 60px -20px ${t.fg}30` }}>
          <img src={t.image} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* sections */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t" style={{ borderColor: `${t.fg}10` }}>
        <div className="text-xs uppercase mb-10" style={{ letterSpacing: "0.3em", color: t.accent }}>
          What we do
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {t.sections.map((s) => (
            <div key={s.title}>
              <div className="text-3xl mb-4" style={{ color: t.accent, fontWeight: 300 }}>—</div>
              <h3 className="text-xl mb-3" style={{ fontWeight: isSerif ? 500 : 400 }}>{s.title}</h3>
              <p className="text-sm opacity-75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* feature strip */}
      <section style={{ backgroundColor: t.fg, color: t.bg }} className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontWeight: isSerif ? 400 : 300 }}>
            “The kind of place you tell your friends about — quietly.”
          </h2>
          <p className="opacity-70 text-sm uppercase" style={{ letterSpacing: "0.25em" }}>
            — Time Out, 2025
          </p>
        </div>
      </section>

      {/* contact */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: isSerif ? 400 : 300 }}>
            Visit us
          </h2>
          <p className="opacity-75 max-w-sm leading-relaxed">
            42 Marchmont Street, London WC1 · Open Tuesday to Saturday, 9 — 7.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b py-3" style={{ borderColor: `${t.fg}15` }}>
            <span className="opacity-60">Email</span><span>hello@{t.brand.toLowerCase().replace(/[^a-z]/g, "")}.com</span>
          </div>
          <div className="flex justify-between border-b py-3" style={{ borderColor: `${t.fg}15` }}>
            <span className="opacity-60">Phone</span><span>+44 20 7946 0000</span>
          </div>
          <div className="flex justify-between border-b py-3" style={{ borderColor: `${t.fg}15` }}>
            <span className="opacity-60">Hours</span><span>Tue – Sat · 9am – 7pm</span>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t py-10 text-center text-xs opacity-60" style={{ borderColor: `${t.fg}15` }}>
        © 2026 {t.brand} · All rights reserved
      </footer>
    </div>
  );
}
