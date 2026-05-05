import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isLight = project.key === "restaurant" || project.key === "boutique" || project.key === "dentist";
  return (
    <div className="group block w-full hover-lift rounded-2xl bg-card border border-border/60 overflow-hidden soft-shadow">
      <div
        className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
        style={{ background: project.thumb }}
      >
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative text-center px-6 transition-transform duration-700 group-hover:scale-[1.03]">
          <div className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: project.accent }}>
            Case Study
          </div>
          <div
            className="font-display font-light text-2xl md:text-3xl italic leading-tight"
            style={{ color: isLight ? "#15110e" : "#f4f3f0" }}
          >
            {project.display}
          </div>
          <div className="mt-4 inline-block h-px w-10" style={{ backgroundColor: project.accent }} />
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-sand)] mb-2">
          {project.category}
        </div>
        <h3 className="text-lg font-display font-light">{project.title}</h3>
      </div>
    </div>
  );
}
