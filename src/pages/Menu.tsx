import { useEffect, useMemo, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { OrderButton } from "@/components/site/OrderButton";
import { MENU, type MenuCategory, type MenuItem } from "@/lib/menu-data";

import butterChicken from "@/assets/hero-butter-chicken.jpg";
import biryani from "@/assets/hero-biryani.jpg";
import paneer from "@/assets/dish-paneer-tikka.jpg";
import naan from "@/assets/dish-naan.jpg";
import tandoori from "@/assets/cat-tandoori.jpg";
import veg from "@/assets/cat-veg.jpg";
import gulab from "@/assets/dish-gulab.jpg";
import samosa from "@/assets/g-samosa.jpg";
import lassi from "@/assets/g-lassi.jpg";



function fallbackImage(catSlug: string): string {
  if (catSlug.includes("biryani") || catSlug.includes("pulav")) return biryani;
  if (catSlug.includes("tandoori-non") || catSlug.includes("non-veg") || catSlug === "lamb-items" || catSlug === "goat-item" || catSlug.includes("rolls")) return butterChicken;
  if (catSlug.includes("tandoori")) return tandoori;
  if (catSlug.includes("bread")) return naan;
  if (catSlug.includes("dessert")) return gulab;
  if (catSlug.includes("drink")) return lassi;
  if (catSlug === "samosa" || catSlug.includes("snack") || catSlug.includes("appetizers-veg") || catSlug.includes("appetizer-non")) return samosa;
  if (catSlug.includes("indo-chinese")) return veg;
  if (catSlug.includes("curr") || catSlug.includes("veg")) return veg;
  if (catSlug.includes("side") || catSlug.includes("weekend") || catSlug === "soup") return paneer;
  return tandoori;
}

function formatPrice(price: number | null, available: boolean) {
  if (!available) return "Unavailable";
  if (price == null) return "—";
  return `$${price.toFixed(2)}`;
}

export default function MenuPage() {
    useEffect(() => {
  document.title = "Menu — Desi Junction Eatery | Authentic Indian in Bellevue";

  const meta = document.querySelector(
    'meta[name="description"]'
  );

  if (meta) {
    meta.setAttribute(
      "content",
      "Explore our full menu of biryanis, tandoori, curries, Indo-Chinese, breads, and more. Order online for delivery and pickup in Bellevue, WA."
    );
  }
}, []);

  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState<string>(MENU[0]?.slug ?? "");
  const navScrollerRef = useRef<HTMLDivElement | null>(null);

  // Filtered categories based on search
  const filtered: MenuCategory[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MENU;
    return MENU
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (it) =>
            it.name.toLowerCase().includes(q) ||
            (it.description ?? "").toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  // Scroll-spy to highlight current category in sticky nav
  useEffect(() => {
    if (query) return; // disable spy in search mode
    const sections = MENU.map((c) => document.getElementById(`cat-${c.slug}`)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))[0];
        if (visible) {
          const slug = visible.target.id.replace("cat-", "");
          setActiveSlug(slug);
        }
      },
      { rootMargin: "-200px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [query]);

  // Auto-scroll the sticky nav so the active chip stays visible
  useEffect(() => {
    const scroller = navScrollerRef.current;
    if (!scroller) return;
    const chip = scroller.querySelector<HTMLElement>(`[data-slug="${activeSlug}"]`);
    if (!chip) return;
    const target = chip.offsetLeft - scroller.clientWidth / 2 + chip.clientWidth / 2;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  }, [activeSlug]);

  function scrollToCategory(slug: string) {
    const el = document.getElementById(`cat-${slug}`);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 200;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSlug(slug);
  }

  const totalItems = MENU.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-44 md:pt-52 pb-10 bg-surface">
        <div className="container-x">
          <span className="eyebrow">Our Menu</span>
          <h1 className="mt-4 text-5xl md:text-7xl heading-display max-w-3xl">A taste of every corner of India</h1>
          <p className="mt-6 text-lg text-taupe max-w-2xl">
            {totalItems}+ dishes — from slow-cooked biryanis and fiery tandoori bites to comforting Indo-Chinese classics. Crafted fresh every day in Bellevue.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-xl">
            <label htmlFor="menu-search" className="sr-only">Search menu</label>
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                id="menu-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes, ingredients, or categories…"
                className="w-full pl-12 pr-4 py-4 rounded-full bg-background border border-border focus:border-brick focus:outline-none focus:ring-2 focus:ring-saffron/40 transition text-base"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-taupe hover:text-brick"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6" /></svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="sticky top-[7.25rem] md:top-[7.5rem] z-30 bg-background/95 backdrop-blur border-y border-border">
        <div className="container-x py-3">
          <div ref={navScrollerRef} className="flex gap-2 overflow-x-auto no-scrollbar">
            {MENU.map((m) => (
              <button
                key={m.slug}
                data-slug={m.slug}
                onClick={() => scrollToCategory(m.slug)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap border ${
                  activeSlug === m.slug && !query
                    ? "bg-brick text-background border-brick shadow-warm"
                    : "bg-surface text-espresso border-border hover:bg-saffron/30 hover:border-saffron/50"
                }`}
                style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu sections */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-x space-y-16 md:space-y-20">
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-2xl heading-display text-espresso">No dishes match "{query}"</p>
              <p className="mt-3 text-taupe">Try a different keyword, or clear your search to see the full menu.</p>
              <button onClick={() => setQuery("")} className="btn-outline mt-6">Clear search</button>
            </div>
          )}

          {filtered.map((cat) => (
            <CategorySection key={cat.slug} category={cat} fallback={fallbackImage(cat.slug)} query={query} />
          ))}
        </div>
      </section>

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}`}</style>
    </SiteLayout>
  );
}

function CategorySection({ category, fallback, query }: { category: MenuCategory; fallback: string; query: string }) {
  return (
    <section id={`cat-${category.slug}`} className="scroll-mt-[10rem]">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 pb-5 border-b border-border/70">
        <div>
          <span className="eyebrow text-saffron">{category.items.length} item{category.items.length === 1 ? "" : "s"}</span>
          <h2 className="mt-2 text-3xl md:text-5xl heading-display capitalize">{category.name.toLowerCase()}</h2>
        </div>
        <OrderButton variant="outline" label="Order this section" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((it) => (
          <ItemCard key={`${category.slug}-${it.name}-${it.url}`} item={it} fallback={fallback} highlight={query} />
        ))}
      </div>
    </section>
  );
}

function ItemCard({ item, fallback, highlight }: { item: MenuItem; fallback: string; highlight: string }) {
  const img = item.image ?? fallback;
  return (
    <article
      className={`group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border/60 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300 ${
        !item.available ? "opacity-70" : ""
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={img}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {!item.available && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-espresso/85 text-background text-[11px] uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-button)" }}>
            Sold out
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg leading-snug">
            <Highlighted text={item.name} query={highlight} />
          </h3>
          <span
            className={`shrink-0 text-sm font-semibold tabular-nums ${item.available ? "text-brick" : "text-taupe"}`}
            style={{ fontFamily: "var(--font-button)" }}
          >
            {formatPrice(item.price, item.available)}
          </span>
        </div>
        {item.description && (
          <p className="mt-2 text-sm text-taupe leading-relaxed line-clamp-3">
            <Highlighted text={item.description} query={highlight} />
          </p>
        )}
        {item.available && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs text-brick hover:text-saffron transition-colors font-semibold self-start"
            style={{ fontFamily: "var(--font-button)" }}
          >
            Add to order →
          </a>
        )}
      </div>
    </article>
  );
}

function Highlighted({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const lower = text.toLowerCase();
  const lq = q.toLowerCase();
  const idx = lower.indexOf(lq);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-saffron/40 text-espresso rounded px-0.5">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}
