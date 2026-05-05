import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectPreviewModal } from "@/components/ProjectPreviewModal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work, Notisce Digital" },
      { name: "description", content: "Selected projects and full live previews from Notisce Digital." },
      { property: "og:title", content: "Work, Notisce Digital" },
      { property: "og:description", content: "Step inside full visual previews of recent Notisce Digital projects." },
    ],
  }),
  component: Work,
});

function Work() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <>
      <section className="container-narrow pt-16 md:pt-24 pb-12">
        <SectionHeading
          eyebrow="Selected work"
          title="Step inside the projects."
          subtitle="Click any card to open a full visual preview. These are designs only, no internal links, built to show how the real thing feels."
        />
      </section>
      <section className="container-narrow pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.key} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </section>
      <ProjectPreviewModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
