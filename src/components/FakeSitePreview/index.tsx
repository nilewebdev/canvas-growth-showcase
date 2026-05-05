import type { ProjectKey } from "@/data/projects";

/* ============================================================
 * Each preview is its OWN visually distinct mini-site.
 * No images, all CSS, gradients, type, layout.
 * ============================================================ */

function HalfdenBarber() {
  return (
    <div className="min-h-full" style={{ background: "#1a1614", color: "#f1ebe1", fontFamily: "Georgia, serif" }}>
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xs tracking-[0.4em] uppercase">Halfden &amp; Co.</div>
          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            <span>Cuts</span><span>Shaves</span><span>Story</span><span>Visit</span>
          </nav>
          <div className="text-xs px-4 py-2 border border-[#c9a36a] text-[#c9a36a] tracking-widest">BOOK</div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <div className="text-[10px] tracking-[0.6em] text-[#c9a36a] mb-8">EST. 2017 · EAST LONDON</div>
        <h1 className="text-5xl md:text-8xl leading-[0.95] italic" style={{ fontWeight: 400 }}>
          Sharp cuts.<br/><span className="text-[#c9a36a]">Slow rituals.</span>
        </h1>
        <div className="mt-12 inline-flex items-center gap-6 text-xs tracking-[0.3em] uppercase">
          <span>40 min</span><span className="w-8 h-px bg-[#c9a36a]" /><span>£45</span><span className="w-8 h-px bg-[#c9a36a]" /><span>By appt.</span>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3">
          {["Signature Cut", "Hot Towel Shave", "Cut + Beard"].map((s, i) => (
            <div key={s} className={`p-12 ${i < 2 ? "md:border-r border-white/10" : ""} border-t md:border-t-0 border-white/10`}>
              <div className="text-5xl text-[#c9a36a] italic mb-6">0{i + 1}</div>
              <h3 className="text-2xl mb-3">{s}</h3>
              <p className="text-sm text-white/60 leading-relaxed">A measured ritual, finished with a hot towel and a small pour of something good.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#c9a36a] text-[#1a1614] py-20 text-center">
        <p className="text-2xl md:text-3xl italic max-w-2xl mx-auto px-6 leading-snug">
          "The kind of barbershop you tell your closest friends about, quietly."
        </p>
        <p className="mt-6 text-[10px] tracking-[0.4em]">, TIME OUT, 2025</p>
      </section>

      <footer className="text-center py-10 text-[10px] tracking-[0.4em] text-white/40">
        © HALFDEN &amp; CO. · 42 MARCHMONT ST, LONDON
      </footer>
    </div>
  );
}

function MaisonRestaurant() {
  return (
    <div className="min-h-full" style={{ background: "#faf6ee", color: "#2a1f12", fontFamily: "Georgia, serif" }}>
      <div className="text-center pt-10 px-6">
        <div className="text-[10px] tracking-[0.6em] text-[#7a5c3d]">MARYLEBONE · LONDON</div>
        <h1 className="mt-3 text-5xl md:text-7xl italic" style={{ fontWeight: 400 }}>Maison Verre</h1>
        <div className="mt-3 text-xs tracking-[0.3em]">MODERN FRENCH · SINCE 2024</div>
      </div>

      <nav className="mt-10 border-y border-[#2a1f12]/15">
        <div className="max-w-4xl mx-auto flex justify-center gap-10 py-4 text-xs tracking-[0.3em] uppercase">
          <span>Menu</span><span>Cellar</span><span>Reserve</span><span>Private</span>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="text-xs tracking-[0.4em] text-[#7a5c3d] mb-6">CHEF'S TABLE · 6 COURSES</div>
        <h2 className="text-3xl md:text-4xl italic mb-12 leading-tight">Written every Tuesday, sourced every Monday.</h2>
        <div className="space-y-8 text-left">
          {[
            ["I.", "Oyster", "cucumber, elderflower, frozen mignonette"],
            ["II.", "Beetroot", "aged comté, walnut, brown butter"],
            ["III.", "Halibut", "leek, mussel cream, lardo"],
            ["IV.", "Lamb", "salt-baked celeriac, anchovy, mint"],
            ["V.", "Tarte", "yellow plum, brown sugar, crème fraîche"],
          ].map(([n, dish, desc]) => (
            <div key={n} className="flex gap-6 border-b border-[#2a1f12]/10 pb-6">
              <div className="text-[#7a5c3d] italic text-2xl w-10">{n}</div>
              <div className="flex-1">
                <div className="text-xl italic mb-1">{dish}</div>
                <div className="text-sm text-[#2a1f12]/60">{desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-xs tracking-[0.3em] uppercase">£95 per guest · Wine pairing £55</div>
      </section>

      <section className="bg-[#2a1f12] text-[#faf6ee] py-16 text-center">
        <div className="text-xs tracking-[0.4em] mb-4">RESERVATIONS</div>
        <div className="text-3xl italic">+44 20 7946 0000</div>
        <div className="mt-6 text-xs tracking-[0.3em]">TUE, SAT · 6PM TIL LATE</div>
      </section>
    </div>
  );
}

function NorthstarDental() {
  return (
    <div className="min-h-full" style={{ background: "#f0f5fa", color: "#0c1929", fontFamily: "Inter, system-ui, sans-serif" }}>
      <header className="bg-white/70 backdrop-blur border-b border-[#0c1929]/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5e8fb3] to-[#7eb6d6]" />
            Northstar
          </div>
          <nav className="hidden md:flex gap-7 text-sm text-[#0c1929]/70">
            <span>Treatments</span><span>Team</span><span>Pricing</span><span>Contact</span>
          </nav>
          <button className="text-xs px-4 py-2 rounded-full bg-[#0c1929] text-white">Book online</button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-block text-xs px-3 py-1 rounded-full bg-[#5e8fb3]/15 text-[#5e8fb3] mb-6">Now welcoming new patients</div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Calm, modern dentistry in <span className="text-[#5e8fb3]">Manchester</span>.
          </h1>
          <p className="mt-6 text-[#0c1929]/65 leading-relaxed max-w-md">
            A fresh approach to dental care, gentle clinicians, fixed-fee plans and same-day appointments.
          </p>
          <div className="mt-8 flex gap-3">
            <span className="px-5 py-3 rounded-full bg-[#0c1929] text-white text-sm">Book a check-up</span>
            <span className="px-5 py-3 rounded-full border border-[#0c1929]/15 text-sm">View prices</span>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#5e8fb3] via-[#a3c8e0] to-white p-8 shadow-2xl shadow-[#5e8fb3]/30">
          <div className="absolute inset-6 rounded-2xl bg-white/80 backdrop-blur p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs text-[#5e8fb3] tracking-widest uppercase">Today</div>
              <div className="font-light text-2xl mt-1">3 slots open</div>
            </div>
            <div className="space-y-2 text-sm">
              {[["09:30", "Hygiene"], ["14:00", "Check-up"], ["16:30", "Whitening"]].map(([t, l]) => (
                <div key={t} className="flex justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                  <span className="font-medium">{t}</span>
                  <span className="text-[#0c1929]/60">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs tracking-widest uppercase text-[#5e8fb3] mb-6">Treatments</div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["General", "From £45", "Check-ups, hygiene, fillings"],
              ["Cosmetic", "From £180", "Whitening, bonding, alignment"],
              ["Implants", "From £1,800", "Long-term, fixed-fee plans"],
            ].map(([t, p, d]) => (
              <div key={t} className="p-8 rounded-2xl border border-[#0c1929]/8 hover:border-[#5e8fb3]/40 transition-colors">
                <div className="text-2xl font-light mb-1">{t}</div>
                <div className="text-[#5e8fb3] text-sm mb-4">{p}</div>
                <p className="text-sm text-[#0c1929]/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FormFitness() {
  return (
    <div className="min-h-full" style={{ background: "#0e0e0d", color: "#f4f3f0", fontFamily: "Inter, system-ui, sans-serif" }}>
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-medium tracking-[0.3em]">FORM</div>
          <nav className="hidden md:flex gap-7 text-xs uppercase tracking-[0.2em] text-white/60">
            <span>Train</span><span>Coaches</span><span>Membership</span><span>Studio</span>
          </nav>
          <span className="text-xs px-4 py-2 bg-[#a79c8e] text-[#0e0e0d] tracking-[0.2em] uppercase">Trial</span>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#a79c8e30,transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="text-xs uppercase tracking-[0.4em] text-[#a79c8e] mb-8">Small group · Strength &amp; conditioning</div>
          <h1 className="text-6xl md:text-9xl font-extralight leading-[0.9] tracking-tight">
            Train smarter.<br/>
            <span className="italic font-light text-[#a79c8e]">Move better.</span>
          </h1>
          <div className="mt-14 grid grid-cols-3 gap-4 md:gap-12 max-w-2xl">
            {[["6", "max per class"], ["45", "minutes"], ["12", "sessions / wk"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-4xl md:text-6xl font-extralight">{n}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="grid md:grid-cols-3">
          {[
            ["Strength", "Build progressive capacity over weeks, not days. Coached, programmed, and tracked."],
            ["Conditioning", "Forty-five minutes that fit your week. Designed to leave you sharp, not wrecked."],
            ["Recovery", "Mobility, sauna and contrast therapy. The work that keeps you training for decades."],
          ].map(([t, d], i) => (
            <div key={t} className={`p-10 ${i < 2 ? "md:border-r" : ""} border-t md:border-t-0 border-white/10 hover:bg-white/5 transition-colors`}>
              <div className="w-10 h-10 rounded-full border border-[#a79c8e] flex items-center justify-center text-xs text-[#a79c8e] mb-6">0{i + 1}</div>
              <h3 className="text-2xl font-light mb-3">{t}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center bg-[#a79c8e] text-[#0e0e0d]">
        <h2 className="text-4xl md:text-6xl font-extralight">£140 / month</h2>
        <p className="mt-4 text-sm tracking-[0.3em] uppercase">Unlimited classes · Cancel anytime</p>
      </section>
    </div>
  );
}

function MarenBoutique() {
  return (
    <div className="min-h-full" style={{ background: "#fbfaf7", color: "#15110e", fontFamily: "Georgia, serif" }}>
      <header className="border-b border-[#15110e]/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span>Search</span>
          <div className="text-base italic" style={{ fontFamily: "Georgia, serif" }}>Maren</div>
          <span>Bag (0)</span>
        </div>
        <nav className="border-t border-[#15110e]/10 flex justify-center gap-10 py-3 text-[10px] tracking-[0.4em] uppercase">
          <span>New</span><span>Knitwear</span><span>Tailoring</span><span>Atelier</span><span>Journal</span>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="text-[10px] tracking-[0.5em] text-[#9c8064] mb-6">AUTUMN / WINTER · 26</div>
        <h1 className="text-5xl md:text-7xl italic font-normal leading-tight">Quietly considered.</h1>
        <p className="mt-6 max-w-md mx-auto text-sm text-[#15110e]/65 leading-relaxed">
          Limited-run pieces made in small workshops across Italy and Portugal. Designed to be worn for years.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { name: "The Wool Coat", price: "£640", grad: "linear-gradient(160deg,#c9bca8,#8a7a64)" },
          { name: "Cashmere Knit", price: "£295", grad: "linear-gradient(160deg,#e8dfd0,#b8a994)" },
          { name: "Wide-Leg Trouser", price: "£220", grad: "linear-gradient(160deg,#3a342c,#15110e)" },
          { name: "Silk Blouse", price: "£175", grad: "linear-gradient(160deg,#f3ebd9,#d4c4a7)" },
        ].map((p) => (
          <div key={p.name} className="group">
            <div className="aspect-[3/4] mb-3 rounded-sm overflow-hidden relative" style={{ background: p.grad }}>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/15 to-transparent" />
              <div className="absolute top-3 left-3 text-[9px] tracking-[0.3em] uppercase text-white/80">New</div>
            </div>
            <div className="text-xs italic">{p.name}</div>
            <div className="text-xs text-[#9c8064] mt-1">{p.price}</div>
          </div>
        ))}
      </section>

      <section className="border-t border-[#15110e]/10 py-20 text-center">
        <div className="text-[10px] tracking-[0.5em] text-[#9c8064] mb-4">THE ATELIER</div>
        <h2 className="text-3xl md:text-5xl italic max-w-2xl mx-auto px-6 leading-tight">
          Made by hand, in places that take their time.
        </h2>
      </section>

      <footer className="bg-[#15110e] text-[#fbfaf7] py-10 text-center text-[10px] tracking-[0.4em] uppercase">
        © Maren the Label · Made in Europe
      </footer>
    </div>
  );
}

const previews: Record<ProjectKey, () => React.ReactElement> = {
  barber: HalfdenBarber,
  restaurant: MaisonRestaurant,
  dentist: NorthstarDental,
  fitness: FormFitness,
  boutique: MarenBoutique,
};

export function FakeSitePreview({ projectKey }: { projectKey: ProjectKey }) {
  const Component = previews[projectKey];
  return <Component />;
}
