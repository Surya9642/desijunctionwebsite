import { useEffect, useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { OrderButton } from "@/components/site/OrderButton";
import { PHONES, ADDRESS_LINE1, ADDRESS_LINE2, ORDER_URL, MAP_EMBED_URL, MAP_LINK } from "@/lib/constants";


export default function Contact() {
    useEffect(() => {
  document.title = "Contact — Desi Junction Eatery | Bellevue, WA";

  const meta = document.querySelector(
    'meta[name="description"]'
  );

  if (meta) {
    meta.setAttribute(
      "content",
      "Call 425-588-8829 or visit Desi Junction Eatery at 1624 145th Pl SE, Bellevue, WA 98007. Order online or send us a message."
    );
  }
}, []);

  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <SiteLayout>
      <section className="pt-44 md:pt-52 pb-12 bg-surface">
        <div className="container-x">
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-4 text-5xl md:text-7xl heading-display max-w-3xl">We'd love to hear from you</h1>
          <p className="mt-6 text-lg text-taupe max-w-2xl">Reservations, large parties, catering inquiries, or just a hello — we read every message.</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-background">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Call Us */}
          <div className="p-7 rounded-2xl bg-surface border border-border/60 hover:shadow-soft transition">
            <div className="grid place-items-center h-12 w-12 rounded-full bg-brick text-background">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A18 18 0 0 1 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 1.9z" /></svg>
            </div>
            <h3 className="mt-5 text-lg">Call Us</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {PHONES.map((p) => (
                <li key={p}>
                  <a href={`tel:${p.replace(/[^0-9]/g, "")}`} className="text-espresso hover:text-brick transition-colors font-medium">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Us */}
          <div className="p-7 rounded-2xl bg-surface border border-border/60 hover:shadow-soft transition">
            <div className="grid place-items-center h-12 w-12 rounded-full bg-olive text-background">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
            </div>
            <h3 className="mt-5 text-lg">Visit Us</h3>
            <p className="mt-3 text-sm text-taupe leading-relaxed">
              {ADDRESS_LINE1}<br />{ADDRESS_LINE2}
            </p>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-brick hover:text-saffron transition-colors font-semibold">
              Get directions →
            </a>
          </div>

          {/* Order Online */}
          <div className="p-7 rounded-2xl bg-brick text-background hover:shadow-warm transition">
            <div className="grid place-items-center h-12 w-12 rounded-full bg-background/15 text-background">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M17 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg>
            </div>
            <h3 className="mt-5 text-lg">Order Online</h3>
            <p className="mt-3 text-sm text-background/85 leading-relaxed">
              Fast delivery & pickup through our partner Clover. Browse the full menu and check out in minutes.
            </p>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-saffron hover:text-background transition-colors font-semibold">
              Start your order →
            </a>
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="pb-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="bg-surface rounded-2xl p-8 md:p-10 border border-border/60">
            <h2 className="text-3xl md:text-4xl heading-display">Send us a message</h2>
            <p className="mt-2 text-taupe text-sm">We'll get back to you within 24 hours.</p>

            <div className="mt-8 grid gap-5">
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", required: false },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-xs uppercase tracking-[0.2em] text-espresso/70" style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}>{f.label}{f.required && " *"}</label>
                  <input
                    id={f.id} name={f.id} type={f.type} required={f.required}
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-brick focus:outline-none focus:ring-2 focus:ring-saffron/40 transition"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-espresso/70" style={{ fontFamily: "var(--font-button)", fontWeight: 600 }}>Message *</label>
                <textarea
                  id="message" name="message" rows={5} required
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-brick focus:outline-none focus:ring-2 focus:ring-saffron/40 transition resize-none"
                />
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <button type="submit" className="btn-primary">Send Message</button>
                <OrderButton variant="outline" />
              </div>
              {sent && (
                <div className="mt-2 p-4 rounded-lg bg-olive/15 border border-olive/30 text-espresso text-sm animate-fade-up">
                  ✓ Thank you! Your message has been sent. We'll be in touch shortly.
                </div>
              )}
            </div>
          </form>

          <div className="rounded-2xl overflow-hidden border border-border/60 min-h-[480px]">
            <iframe
              title="Map to Desi Junction Eatery — 1624 145th Pl SE, Bellevue, WA 98007"
              src={MAP_EMBED_URL}
              className="w-full h-full min-h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
