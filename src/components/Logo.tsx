export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
        <polygon points="8,6 22,6 22,58 14,58" fill="currentColor" />
        <polygon points="42,6 56,6 50,58 42,58" fill="currentColor" />
        <circle cx="32" cy="32" r="5" fill="var(--color-sand)" />
      </svg>
      <span className="font-display text-lg tracking-display">
        notisce <span className="text-[var(--color-sand)]">digital</span>
      </span>
    </div>
  );
}
