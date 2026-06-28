import { Link } from "react-router-dom";
import { SiteLayout } from "../components/site/Layout";
import { HeroCarousel } from "../components/site/HeroCarousel";
import { SectionHeader } from "../components/site/Section";
import { OrderButton } from "../components/site/OrderButton";
import { useEffect, useRef, useState } from "react";

import catTandoori from "@/assets/cat-tandoori.jpg";
import catBiryani from "@/assets/cat-biryani.jpg";
import catVeg from "@/assets/cat-veg.jpg";
import catSouth from "@/assets/cat-south.jpg";

import hero1 from "@/assets/hero-butter-chicken.jpg";
import hero3 from "@/assets/hero-biryani.jpg";
import dishPaneer from "@/assets/dish-paneer-tikka.jpg";
import dishNaan from "@/assets/dish-naan.jpg";
import dishDosa from "@/assets/cat-south.jpg";
import dishGulab from "@/assets/dish-gulab.jpg";

import aboutImg from "@/assets/about-restaurant.jpg";
import gSamosa from "@/assets/g-samosa.jpg";
import gTandoor from "@/assets/g-tandoor.jpg";
import gCeleb from "@/assets/g-celebration.jpg";
import gLassi from "@/assets/g-lassi.jpg";
import gSpices from "@/assets/g-spices.jpg";
import gAmb from "@/assets/g-ambiance.jpg";


const categories = [
  { img: catTandoori, title: "Tandoori Specials", desc: "Charred, smoky, marinated to perfection.", cta: "Discover Tandoor" },
  { img: catBiryani, title: "Signature Biryanis", desc: "Slow-cooked dum biryanis layered with saffron.", cta: "Explore Biryanis" },
  { img: catVeg, title: "Vegetarian Delights", desc: "Paneer, dal, and seasonal vegetable curries.", cta: "Browse Veg" },
  { img: catSouth, title: "South Indian Classics", desc: "Crisp dosas, soft idlis, fiery chutneys.", cta: "Taste the South" },
];

const chefPicks = [
  { img: hero1, name: "Butter Chicken", desc: "Tandoor-grilled chicken in silky tomato cream gravy." },
  { img: hero3, name: "Chicken Dum Biryani", desc: "Long-grain basmati layered with marinated chicken and saffron." },
  { img: dishPaneer, name: "Paneer Tikka", desc: "Cubes of paneer marinated in yogurt and spices, grilled in the tandoor." },
  { img: dishNaan, name: "Garlic Naan", desc: "Pillowy clay-oven flatbread brushed with butter and fresh garlic." },
  { img: dishDosa, name: "Masala Dosa", desc: "Crisp rice crêpe filled with spiced potatoes, served with sambar." },
  { img: dishGulab, name: "Gulab Jamun", desc: "Warm milk-dumplings soaked in cardamom-rose syrup." },
];

const testimonials = [
  { name: "Priya S.", rating: 5, text: "The butter chicken transported me back to Delhi. Absolutely the most authentic Indian food in the area." },
  { name: "Michael R.", rating: 5, text: "Their biryani is in a league of its own — fragrant, perfectly cooked, generously portioned. We're regulars now." },
  { name: "Aisha K.", rating: 5, text: "Warm hospitality and bold flavors. Every dish feels handcrafted with care." },
  { name: "James T.", rating: 5, text: "The tandoori platter and garlic naan are unreal. A new favorite spot for date night." },
];

const galleryPreview = [gSamosa, gTandoor, gCeleb, gLassi, gSpices, gAmb];

export default function Home() {
  return (
    <SiteLayout>
      <HeroCarousel />

      {/* Signature categories */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <SectionHeader
            eyebrow="Signature categories"
            title={<>A journey across the regions of India</>}
            subtitle="Four distinct culinary traditions. One unforgettable table."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.title}
                to="/menu"
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
              >
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-background">
                  <h3 className="text-2xl heading-display !text-background">{c.title}</h3>
                  <p className="mt-2 text-sm text-background/80 max-w-[18rem]">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-saffron" style={{ fontFamily: "var(--font-button)" }}>
                    {c.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's picks */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeader
              eyebrow="Chef's picks"
              title={<>The dishes our<br />guests dream about</>}
            />
            <Link to="/menu" className="btn-outline">View Full Menu</Link>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {chefPicks.map((p, idx) => (
              <article key={p.name} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-espresso">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 grid place-items-center h-9 w-9 rounded-full bg-background/90 text-espresso text-xs" style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}>
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="mt-5 text-2xl heading-display">{p.name}</h3>
                <p className="mt-2 text-sm text-taupe leading-relaxed max-w-sm">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About preview - asymmetric */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={aboutImg} alt="Restaurant interior" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 lg:-right-12 bg-saffron text-espresso p-6 rounded-2xl max-w-[14rem] shadow-warm">
              <div className="text-5xl heading-display !text-espresso">15+</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}>Years of authentic recipes</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Our story"
              title={<>More than a restaurant — a celebration of Indian culture</>}
            />
            <div className="mt-6 space-y-4 text-taupe leading-relaxed">
              <p>Born from a love of home cooking and the bustling food stalls of India, Desi Junction is where family recipes meet modern hospitality.</p>
              <p>Every dish is rooted in tradition: hand-ground spice blends, slow-simmered curries, dough rested overnight, and tandoors stoked with care.</p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {["Authentic recipes", "Family traditions", "Warm hospitality", "Passion for quality"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-espresso">
                  <span className="mt-1 grid place-items-center h-5 w-5 rounded-full bg-brick text-background text-[10px]">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery preview - masonry */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeader eyebrow="Inside the eatery" title={<>Moments from our table</>} />
            <Link to="/gallery" className="btn-outline">Explore Gallery</Link>
          </div>
          <div className="mt-14 columns-2 md:columns-3 gap-5 [&>*]:mb-5">
            {galleryPreview.map((src, i) => (
              <Link to="/gallery" key={i} className="group relative block overflow-hidden rounded-2xl break-inside-avoid">
                <img src={src} alt="" loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-colors grid place-items-center">
                  <span className="opacity-0 group-hover:opacity-100 transition text-background text-xs uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-button)" }}>View Image</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-brick)" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px, 80px 80px" }} />
        <div className="relative container-x py-24 md:py-32 text-center">
          <span className="eyebrow !text-saffron">Hungry yet?</span>
          <h2 className="mt-5 text-4xl md:text-6xl heading-display !text-background max-w-3xl mx-auto">
            Ready to savor authentic Indian cuisine?
          </h2>
          <p className="mt-6 text-background/85 max-w-xl mx-auto">
            Order your favorite dishes online and enjoy the taste of India wherever you are.
          </p>
          <div className="mt-9 flex justify-center">
            <OrderButton variant="ghost" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const ref = useRef<number | undefined>(undefined);
  useEffect(() => {
    ref.current = window.setInterval(() => setI((p) => (p + 1) % testimonials.length), 5500);
    return () => window.clearInterval(ref.current);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-espresso text-background relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brick/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-saffron/20 blur-3xl" />
      <div className="container-x relative">
        <SectionHeader light eyebrow="Voices from our guests" title={<>What people are saying</>} align="center" />
        <div className="mt-14 max-w-3xl mx-auto text-center min-h-[180px]">
          <div key={i} className="animate-fade-up">
            <div className="flex justify-center gap-1 text-saffron mb-6">
              {Array.from({ length: testimonials[i].rating }).map((_, k) => (
                <svg key={k} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" /></svg>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl heading-display !text-background italic leading-snug">
              "{testimonials[i].text}"
            </blockquote>
            <div className="mt-6 text-sm tracking-[0.25em] uppercase text-saffron" style={{ fontFamily: "var(--font-button)" }}>
              — {testimonials[i].name}
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "bg-saffron w-8" : "bg-background/30 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
