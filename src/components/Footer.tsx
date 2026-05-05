import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

function TikTok({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 8.5a7.5 7.5 0 0 1-4.4-1.4v7.7a6.3 6.3 0 1 1-6.3-6.3c.3 0 .6 0 .9.1v3.2a3.2 3.2 0 1 0 2.2 3V2h3.1a4.4 4.4 0 0 0 4.5 4.4v2.1z" />
    </svg>
  );
}

const socials = [
  { Icon: Instagram, href: "https://instagram.com/notisce.digital", label: "Instagram" },
  { Icon: TikTok, href: "https://tiktok.com/@notisce.digital", label: "TikTok" },
  { Icon: Twitter, href: "https://x.com/notisce.digital", label: "Twitter / X" },
  { Icon: Linkedin, href: "https://linkedin.com/in/notisce.digital", label: "LinkedIn" },
];

const links = [
  { to: "/", label: "Home" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[oklch(0.94_0.005_85)] mt-24">
      <div className="container-narrow pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-3 text-left items-start">
          <div className="flex flex-col items-start gap-4">
            <Logo height={36} />
            <p className="text-sm text-muted-foreground max-w-xs">
              Helping businesses grow through better websites and Google visibility.
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:items-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start md:items-end gap-5">
            <a
              href="mailto:contact@notisce.co.uk"
              className="text-sm text-foreground hover:text-[var(--color-sand)] transition-colors"
            >
              contact@notisce.co.uk
            </a>
            <div className="flex items-center gap-5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[var(--color-sand)] hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-sand)]/40 flex flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 Notisce Digital</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
