import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
  
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/75 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-28">
        <Link to="/" className="text-foreground flex items-center" onClick={() => setOpen(false)} aria-label="Notisce Digital home">
          <Logo variant="mark" height={48} className="md:hidden" />
          <Logo variant="full" height={72} className="hidden md:block" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm tracking-wide hover:bg-graphite transition-colors"
          >
            Free Audit
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="container-narrow py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-foreground text-primary-foreground px-5 py-3 text-sm"
            >
              Free Audit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
