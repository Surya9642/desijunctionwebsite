import { useEffect } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/Section";
import { OrderButton } from "@/components/site/OrderButton";
import aboutImg from "@/assets/about-restaurant.jpg";
import spices from "@/assets/g-spices.jpg";
import tandoor from "@/assets/g-tandoor.jpg";

const pillars = [
  { t: "Authenticity", d: "Time-tested recipes passed down through generations, prepared with the same care as a home kitchen." },
  { t: "Freshness", d: "Spices ground in-house. Dough made daily. Vegetables and meats sourced from trusted local suppliers." },
  { t: "Family", d: "We treat every guest like family — because a great meal is best shared around a welcoming table." },
  { t: "Excellence", d: "From plating to service, every detail is crafted to make your dining experience memorable." },
];

export default function About() {

  useEffect(() => {
    document.title = "About Us — Desi Junction Eatery";

    const meta = document.querySelector(
      'meta[name="description"]'
    );

    if (meta) {
      meta.setAttribute(
        "content",
        "Rooted in tradition. Inspired by community. Discover the story, philosophy and hospitality behind Desi Junction Eatery."
      );
    }
  }, []);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 10% 0%, var(--saffron) 0%, transparent 40%), radial-gradient(circle at 90% 100%, var(--brick) 0%, transparent 40%)" }} />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="eyebrow">About Desi Junction</span>
            <h1 className="mt-5 text-5xl md:text-7xl heading-display">
              Rooted in tradition.<br />Inspired by community.
            </h1>
            <p className="mt-7 text-lg text-taupe leading-relaxed max-w-2xl">
              Desi Junction Eatery began with a simple idea — to share the soul of Indian cooking with our neighbors. What you taste today is the result of years of curiosity, family kitchens, and an unwavering devotion to authentic flavor.
            </p>
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={aboutImg} alt="Inside the restaurant" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-8 w-40 md:w-56 aspect-square rounded-2xl overflow-hidden border-8 border-background shadow-soft">
              <img src={spices} alt="Hand-ground spices" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-5 text-4xl md:text-5xl heading-display">A journey from grandmother's kitchen to yours</h2>
            <div className="mt-6 space-y-4 text-taupe leading-relaxed">
              <p>Our founders grew up watching their grandmothers stir simmering pots of dal, fold parathas at dawn, and bargain in spice markets for the freshest cardamom. Those memories became our menu.</p>
              <p>Every recipe here has been tested in family kitchens before it ever reached our restaurant. We believe authentic Indian food is more than seasoning — it's a story of place, people, and patience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">Culinary philosophy</span>
            <h2 className="mt-5 text-4xl md:text-5xl heading-display">Slow food, served warm</h2>
            <div className="mt-6 space-y-4 text-taupe leading-relaxed">
              <p>We refuse shortcuts. Our biryanis are dum-cooked over hours, our curries simmered low and slow, our naans rolled by hand and slapped fresh against a roaring tandoor.</p>
              <p>Hospitality, to us, is an art. We want you to leave full — but also seen, welcomed, and uplifted.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={tandoor} alt="Tandoor kitchen" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-x">
          <SectionHeader eyebrow="Our four pillars" title={<>What we stand for</>} align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.t} className="relative p-8 rounded-2xl bg-surface border border-border/60 hover:shadow-soft transition group">
                <div className="text-saffron text-5xl heading-display !text-saffron mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  0{i + 1}
                </div>
                <h3 className="text-xl">{p.t}</h3>
                <p className="mt-3 text-sm text-taupe leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive text-background">
        <div className="container-x py-20 grid md:grid-cols-2 gap-8 items-center">
          <h2 className="text-3xl md:text-4xl heading-display !text-background">Come share a meal with us.</h2>
          <div className="md:justify-self-end"><OrderButton variant="ghost" /></div>
        </div>
      </section>
    </SiteLayout>
  );
}
