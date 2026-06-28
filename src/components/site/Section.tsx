import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={`eyebrow ${light ? "!text-saffron" : ""}`}>{eyebrow}</span>}
      <h2 className={`mt-4 text-4xl md:text-5xl lg:text-6xl heading-display ${light ? "!text-background" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-background/75" : "text-taupe"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
