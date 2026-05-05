import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work, Notisce Digital" },
      { name: "description", content: "Selected projects from Notisce Digital." },
      { property: "og:title", content: "Work, Notisce Digital" },
      { property: "og:description", content: "A look at recent Notisce Digital projects." },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <section className="container-narrow pt-16 md:pt-24 pb-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects."
          subtitle="A small selection of brands we've shaped, websites built to look beautiful and quietly bring in revenue."
        />
      </section>
      <section className="container-narrow pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.key} project={p} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-7 py-4 text-sm tracking-wide hover:bg-graphite transition-colors"
          >
            Start your project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
