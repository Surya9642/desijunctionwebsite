import { ORDER_URL } from "@/lib/constants";

type Props = { variant?: "primary" | "ghost" | "outline"; className?: string; label?: string };

export function OrderButton({ variant = "primary", className = "", label = "Order Online" }: Props) {
  const cls = variant === "ghost" ? "btn-ghost" : variant === "outline" ? "btn-outline" : "btn-primary";
  return (
    <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className={`${cls} ${className}`}>
      {label}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  );
}
