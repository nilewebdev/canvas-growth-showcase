import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Notisce Digital" },
      { name: "description", content: "Request your free website audit. Let's grow your business together." },
      { property: "og:title", content: "Contact, Notisce Digital" },
      { property: "og:description", content: "Let's grow your business, request your free audit today." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  business: z.string().trim().min(1, "Business name required").max(100),
  message: z.string().trim().min(1, "Tell us a little about your goals").max(1000),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      business: fd.get("business"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thanks, we'll be in touch within one business day.");
    (e.target as HTMLFormElement).reset();
  };

  const field = "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-sm placeholder:text-muted-foreground/60 transition-colors";

  return (
    <>
      <Toaster />
      <section className="container-narrow pt-16 md:pt-24 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's grow your business."
          subtitle="Tell us a little about where you are and where you want to be, we'll come back with a free audit and three quick wins."
        />
      </section>

      <section className="container-narrow pb-24 grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-8 md:sticky md:top-28">
          <a
            href="https://wa.me/447564607279"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 hover-lift soft-shadow"
          >
            <div className="size-10 rounded-full bg-[var(--color-sand)]/15 text-[var(--color-sand)] flex items-center justify-center shrink-0">
              <MessageCircle size={18} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)] mb-1">WhatsApp only</div>
              <div className="text-foreground font-medium">07564 607279</div>
              <div className="text-xs text-muted-foreground mt-1">Tap to message, fastest reply.</div>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="size-10 rounded-full bg-background border border-border/60 text-foreground flex items-center justify-center shrink-0">
              <Mail size={16} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)] mb-1">Email</div>
              <a href="mailto:contact@notisce.co.uk" className="text-foreground hover:text-[var(--color-sand)] transition-colors">
                contact@notisce.co.uk
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-10 rounded-full bg-background border border-border/60 text-foreground flex items-center justify-center shrink-0">
              <Clock size={16} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)] mb-1">Reply time</div>
              <p className="text-sm text-muted-foreground">Within one business day, every time.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-10 rounded-full bg-background border border-border/60 text-foreground flex items-center justify-center shrink-0">
              <MapPin size={16} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-sand)] mb-1">Based in</div>
              <p className="text-sm text-muted-foreground">United Kingdom, working with clients globally.</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border/60 soft-shadow p-8 md:p-10 space-y-6">
          {(["name", "email", "business"] as const).map((n) => (
            <div key={n}>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor={n}>
                {n === "business" ? "Business name" : n.charAt(0).toUpperCase() + n.slice(1)}
              </label>
              <input
                id={n}
                name={n}
                type={n === "email" ? "email" : "text"}
                className={field}
                placeholder={n === "email" ? "you@company.com" : ""}
                maxLength={n === "email" ? 255 : 100}
              />
              {errors[n] && <p className="text-xs text-destructive mt-1">{errors[n]}</p>}
            </div>
          ))}
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`${field} resize-none`}
              placeholder="What would you like to grow?"
              maxLength={1000}
            />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-graphite transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Request Free Audit"}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </section>
    </>
  );
}
