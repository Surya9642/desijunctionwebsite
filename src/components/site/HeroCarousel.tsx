import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { OrderButton } from "./OrderButton";
import hero1 from "@/assets/hero-butter-chicken.jpg";
import hero2 from "@/assets/hero-family.jpg";
import hero3 from "@/assets/hero-biryani.jpg";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  sub: string;
  ctas: Array<{ label: string; to?: string; href?: string; variant?: "primary" | "ghost" }>;
};

const slides: Slide[] = [
  {
    image: hero1,
    eyebrow: "Crafted with passion",
    title: "Authentic Flavors.\nTimeless Traditions.",
    sub: "Experience India's most beloved dishes crafted with passion and served with heartfelt hospitality.",
    ctas: [{ label: "Order Online", variant: "primary" }, { label: "Explore Menu", to: "/menu", variant: "ghost" }],
  },
  {
    image: hero2,
    eyebrow: "Gather around the table",
    title: "Bringing Families\nTogether Through Food",
    sub: "Celebrate life's moments with rich flavors and unforgettable dining experiences.",
    ctas: [{ label: "About Us", to: "/about", variant: "primary" }, { label: "Gallery", to: "/gallery", variant: "ghost" }],
  },
  {
    image: hero3,
    eyebrow: "Slow-cooked. Fresh daily.",
    title: "Crafted Fresh.\nServed with Love.",
    sub: "From aromatic biryanis to sizzling tandoori delights, discover authentic Indian comfort food.",
    ctas: [{ label: "Order Online", variant: "primary" }, { label: "View Menu", to: "/menu", variant: "ghost" }],
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused]);

  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-espresso select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStart.current == null) return;
        const d = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1));
        touchStart.current = null;
      }}
      aria-roledescription="carousel"
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            className={`h-full w-full object-cover object-center ${idx === i ? "animate-slow-zoom" : ""}`}
            {...(idx === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/60 to-espresso/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent hidden md:block" />
        </div>
      ))}

      {/* Content wrapper handles clear mobile-to-desktop responsiveness */}
      <div className="relative z-10 h-full container-x flex items-center justify-center text-center md:text-left md:items-center md:justify-start pt-24 pb-20 px-4 sm:px-6 md:px-8">
        <div key={i} className="max-w-2xl text-background animate-fade-up w-full">
          <span className="eyebrow !text-saffron block tracking-widest uppercase text-xs font-semibold sm:text-sm">
            {slides[i].eyebrow}
          </span>
          <h1 className="mt-3 whitespace-pre-line heading-display text-background text-4xl leading-[1.1] sm:text-6xl sm:leading-[1.05] md:text-7xl lg:text-[5.5rem]">
            {slides[i].title}
          </h1>
          <p className="mt-4 mx-auto md:mx-0 max-w-lg md:max-w-xl text-sm leading-relaxed text-background/80 sm:text-lg sm:leading-8">
            {slides[i].sub}
          </p>
          
          {/* Stacks full-width links/buttons on small screens, adjusts inline on tablets/desktops */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3.5 sm:gap-4">
            {slides[i].ctas.map((c, k) =>
              c.to ? (
                <Link 
                  key={k} 
                  to={c.to} 
                  className={`py-3 px-6 text-center text-sm font-medium tracking-wide transition rounded-xl ${
                    c.variant === "ghost" ? "btn-ghost border border-white/30 text-white" : "btn-primary bg-saffron text-espresso"
                  }`}
                >
                  {c.label}
                </Link>
              ) : (
                <div key={k} className="w-full sm:w-auto [&>button]:w-full">
                  <OrderButton variant={c.variant ?? "primary"} label={c.label} />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Touch-safe desktop direction controls */}
      <button
        onClick={() => go(i - 1)}
        aria-label="Previous slide"
        className="hidden md:grid absolute left-6 top-1/2 -translate-y-1/2 z-20 place-items-center h-12 w-12 rounded-full bg-background/10 border border-white/20 text-background backdrop-blur-md hover:bg-background/20 transition active:scale-95"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Next slide"
        className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 z-20 place-items-center h-12 w-12 rounded-full bg-background/10 border border-white/20 text-background backdrop-blur-md hover:bg-background/20 transition active:scale-95"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      {/* Bottom Progress Bars Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 max-w-[90%] w-auto">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="group relative h-1 w-8 sm:w-12 overflow-hidden rounded-full bg-background/25 transition-all"
          >
            <span
              className={`absolute inset-y-0 left-0 bg-saffron rounded-full transition-all duration-[6000ms] ease-linear ${
                idx < i ? "w-full" : idx === i && !paused ? "w-full" : "w-0"
              }`}
              style={idx === i && !paused ? { animation: "none" } : undefined}
            />
            {idx === i && !paused && (
              <span
                className="absolute inset-y-0 left-0 bg-saffron rounded-full"
                style={{ animation: "carouselProgress 6s linear forwards" }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`@keyframes carouselProgress { from { width: 0% } to { width: 100% } }`}</style>
    </section>
  );
}