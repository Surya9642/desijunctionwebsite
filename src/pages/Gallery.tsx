import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";

import butter from "@/assets/hero-butter-chicken.jpg";
import family from "@/assets/hero-family.jpg";
import biryani from "@/assets/hero-biryani.jpg";
import tand from "@/assets/cat-tandoori.jpg";
import vegImg from "@/assets/cat-veg.jpg";
import dosa from "@/assets/cat-south.jpg";
import paneer from "@/assets/dish-paneer-tikka.jpg";
import naan from "@/assets/dish-naan.jpg";
import gulab from "@/assets/dish-gulab.jpg";
import samosa from "@/assets/g-samosa.jpg";
import tandoor from "@/assets/g-tandoor.jpg";
import celeb from "@/assets/g-celebration.jpg";
import lassi from "@/assets/g-lassi.jpg";
import spices from "@/assets/g-spices.jpg";
import ambiance from "@/assets/g-ambiance.jpg";
import restaurant from "@/assets/about-restaurant.jpg";


type Img = { src: string; alt: string; cat: "Food" | "Ambiance" | "Celebrations" | "Kitchen Moments" };

const images: Img[] = [
  { src: butter, alt: "Butter chicken", cat: "Food" },
  { src: biryani, alt: "Biryani", cat: "Food" },
  { src: paneer, alt: "Paneer tikka", cat: "Food" },
  { src: tand, alt: "Tandoori platter", cat: "Food" },
  { src: dosa, alt: "Masala dosa", cat: "Food" },
  { src: naan, alt: "Garlic naan", cat: "Food" },
  { src: gulab, alt: "Gulab jamun", cat: "Food" },
  { src: vegImg, alt: "Veg thali", cat: "Food" },
  { src: samosa, alt: "Samosa", cat: "Food" },
  { src: lassi, alt: "Mango lassi", cat: "Food" },
  { src: restaurant, alt: "Restaurant interior", cat: "Ambiance" },
  { src: ambiance, alt: "Dining room", cat: "Ambiance" },
  { src: family, alt: "Family gathering", cat: "Celebrations" },
  { src: celeb, alt: "Celebration table", cat: "Celebrations" },
  { src: tandoor, alt: "Chef at tandoor", cat: "Kitchen Moments" },
  { src: spices, alt: "Hand-ground spices", cat: "Kitchen Moments" },
];

const cats = ["All", "Food", "Ambiance", "Celebrations", "Kitchen Moments"] as const;

export default function Gallery() {
    useEffect(() => {
  document.title = "Gallery — Desi Junction Eatery";

  const meta = document.querySelector(
    'meta[name="description"]'
  );

  if (meta) {
    meta.setAttribute(
      "content",
      "A visual journey through our signature dishes, warm ambiance, celebrations, and behind-the-scenes kitchen moments."
    );
  }
}, []);

  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? images : images.filter((i) => i.cat === cat)),
    [cat]
  );

  return (
    <SiteLayout>
      <section className="pt-44 md:pt-52 pb-12 bg-surface">
        <div className="container-x">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-4 text-5xl md:text-7xl heading-display max-w-3xl">Glimpses from our table</h1>
          <p className="mt-5 text-lg text-taupe max-w-2xl">A visual journal of dishes, moments, and the people who make Desi Junction what it is.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm transition ${
                  cat === c ? "bg-brick text-background shadow-warm" : "bg-surface text-espresso hover:bg-saffron/30"
                }`}
                style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-xl break-inside-avoid"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/55 transition-colors grid place-items-center">
                  <span className="opacity-0 group-hover:opacity-100 transition text-background text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-button)" }}>View Image</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-espresso/95 backdrop-blur grid place-items-center p-6 animate-fade-in-slow"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background border border-white/30 hover:bg-background/20"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + filtered.length) % filtered.length); }}
            aria-label="Previous"
            className="absolute left-6 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background border border-white/30 hover:bg-background/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-warm" onClick={(e) => e.stopPropagation()} />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % filtered.length); }}
            aria-label="Next"
            className="absolute right-6 top-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-background/10 text-background border border-white/30 hover:bg-background/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </SiteLayout>
  );
}
