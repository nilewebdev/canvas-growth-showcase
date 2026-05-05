import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group text-left block w-full hover-lift rounded-2xl bg-card border border-border/60 overflow-hidden soft-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-sand)] mb-2">
            {project.category}
          </div>
          <h3 className="text-lg font-display font-light">{project.title}</h3>
        </div>
        <div className="mt-1 size-9 rounded-full border border-border flex items-center justify-center text-foreground/70 group-hover:bg-foreground group-hover:text-primary-foreground group-hover:border-foreground transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </button>
  );
}
