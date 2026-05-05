import { useEffect } from "react";
import { ArrowLeft, X } from "lucide-react";
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
      {/* Top bar */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="container-narrow h-14 md:h-16 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[var(--color-sand)] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">Back to Projects</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground truncate">
            Preview · <span className="text-foreground">{project.title}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="size-9 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-foreground hover:text-primary-foreground hover:border-foreground transition-all"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Floating back FAB on mobile when scrolled */}
      <div className="overflow-y-auto h-[calc(100dvh-3.5rem)] md:h-[calc(100vh-4rem)] animate-fade-in">
        <div className="animate-scale-in origin-top">
          <FakeSitePreview projectKey={project.key} />
        </div>
      </div>
    </div>
  );
}
