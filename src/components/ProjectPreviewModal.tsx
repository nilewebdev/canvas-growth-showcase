import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";
import { FakeSitePreview } from "./FakeSitePreview";

export function ProjectPreviewModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background animate-fade-in">
      <div className="sticky top-0 z-10 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="container-narrow h-16 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--color-sand)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Preview · {project.title}
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-4rem)] animate-scale-in">
        <FakeSitePreview projectKey={project.key} />
      </div>
    </div>
  );
}
