import logoFull from "@/assets/logo-full.png";

export function Logo({ className = "", height = 28 }: { className?: string; height?: number }) {
  return (
    <img
      src={logoFull}
      alt="Notisce Digital"
      height={height}
      style={{ height }}
      className={`w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
