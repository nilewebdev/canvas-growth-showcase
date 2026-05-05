import logoFull from "@/assets/logo-full.png";
import logoMark from "@/assets/logo-mark.png";

export function Logo({
  className = "",
  height = 28,
  variant = "full",
}: {
  className?: string;
  height?: number;
  variant?: "full" | "mark";
}) {
  const src = variant === "mark" ? logoMark : logoFull;
  return (
    <img
      src={src}
      alt="Notisce Digital"
      height={height}
      style={{ height }}
      className={`w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
