import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { OrderButton } from "./OrderButton";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
const location = useLocation();
const pathname = location.pathname;
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-9 md:top-10 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Desi Junction Eatery home">
          <img
            src={logo}
            alt="Desi Junction Eatery"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <span className={`hidden sm:block font-display text-lg leading-tight tracking-tight ${solid ? "text-espresso" : "text-background drop-shadow-md"}`}
            style={{ fontFamily: "var(--font-display)" }}>
            Desi Junction
            <span className="block text-xs tracking-[0.3em] uppercase opacity-70" style={{ fontFamily: "var(--font-button)" }}>Eatery</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  solid
                    ? active ? "text-brick" : "text-espresso/80 hover:text-brick"
                    : active ? "text-background" : "text-background/85 hover:text-background"
                }`}
                style={{ fontFamily: "var(--font-button)" }}
              >
                {n.label}
                {active && (
                  <span className={`absolute left-1/2 -bottom-0.5 h-0.5 w-6 -translate-x-1/2 rounded-full ${solid ? "bg-saffron" : "bg-background"}`} />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <OrderButton />
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden grid place-items-center h-11 w-11 rounded-full border ${solid ? "border-border text-espresso" : "border-white/40 text-background"}`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in-slow">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="py-3 text-base font-medium text-espresso hover:text-brick"
                style={{ fontFamily: "var(--font-button)" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 sm:hidden">
              <OrderButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
