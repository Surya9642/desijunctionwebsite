import { ORDER_URL } from "@/lib/constants";

export function FloatingOrder() {
  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Online"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-brick text-background shadow-warm hover:bg-brick/90 hover:shadow-lg transition-all hover:-translate-y-0.5"
      style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293A1 1 0 0 0 5.414 17H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      </svg>
      <span className="text-sm">Order Online</span>
    </a>
  );
}
