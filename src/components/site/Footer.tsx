import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { PHONES, ADDRESS_LINE1, ADDRESS_LINE2, ORDER_URL, MAP_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-olive text-background/90 mt-24">
      <div className="container-x py-16 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 object-contain bg-background/95 rounded-full p-1" />
            <div>
              <div className="font-display text-xl text-background" style={{ fontFamily: "var(--font-display)" }}>Desi Junction</div>
              <div className="text-xs tracking-[0.3em] uppercase opacity-70" style={{ fontFamily: "var(--font-button)" }}>Eatery</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-background/75 max-w-xs">
            Authentic Indian flavors crafted with passion. From tandoori delights to slow-cooked biryanis — served with heartfelt hospitality in Bellevue, WA.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-background text-sm uppercase tracking-[0.25em] mb-5" style={{ fontFamily: "var(--font-button)" }}>Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[["/", "Home"], ["/about", "About"], ["/menu", "Menu"], ["/gallery", "Gallery"], ["/contact", "Contact"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="text-background/75 hover:text-saffron transition-colors">{l}</Link></li>
            ))}
            <li className="pt-1">
              <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="text-saffron hover:text-background transition-colors font-semibold flex items-center gap-1">
                Order Online →
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-background text-sm uppercase tracking-[0.25em] mb-5" style={{ fontFamily: "var(--font-button)" }}>Contact</h4>
          <ul className="space-y-4 text-sm text-background/75">
            <li>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-saffron transition-colors block leading-relaxed">
                {ADDRESS_LINE1}<br />{ADDRESS_LINE2}
              </a>
            </li>
            <li className="space-y-1">
              <a href={`tel:${PHONES[0].replace(/[^0-9]/g, "")}`} className="block hover:text-saffron transition-colors">{PHONES[0]}</a>
              {PHONES[1] && (
                <a href={`tel:${PHONES[1].replace(/[^0-9]/g, "")}`} className="block hover:text-saffron transition-colors">{PHONES[1]}</a>
              )}
            </li>
          </ul>
        </div>

        {/* Hours Section (Properly Aligned Layout) */}
        <div>
          <h4 className="text-background text-sm uppercase tracking-[0.25em] mb-5" style={{ fontFamily: "var(--font-button)" }}>Hours</h4>
          <ul className="space-y-3.5 text-sm text-background/75">
            <li className="flex justify-between items-start gap-4">
              <span className="font-medium shrink-0">Sunday</span>
              <div className="flex flex-col items-end text-right">
                <span>11:00 am – 4:00 pm,</span>
                <span>6:00 pm – 12:00 am</span>
              </div>
            </li>
            <li className="flex justify-between items-start gap-4">
              <span className="font-medium shrink-0">Monday</span>
              <div className="flex flex-col items-end text-right">
                <span>11:00 am – 3:00 pm,</span>
                <span>5:00 pm – 9:00 pm</span>
              </div>
            </li>
            <li className="flex justify-between items-center gap-4">
              <span className="font-medium">Tuesday</span>
              <span>Closed</span>
            </li>
            <li className="flex justify-between items-start gap-4">
              <span className="font-medium shrink-0">Wed – Thu</span>
              <div className="flex flex-col items-end text-right">
                <span>11:00 am – 3:00 pm,</span>
                <span>5:00 pm – 10:00 pm</span>
              </div>
            </li>
            <li className="flex justify-between items-start gap-4">
              <span className="font-medium shrink-0">Fri – Sat</span>
              <div className="flex flex-col items-end text-right">
                <span>11:00 am – 4:00 pm,</span>
                <span>6:00 pm – 12:00 am</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub Footer Bottom Bar */}
      <div className="border-t border-background/15">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-background/60">
          <p>© {new Date().getFullYear()} Desi Junction Eatery. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              ["Instagram", "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"],
              ["Facebook", "M13 22v-8h3l1-4h-4V7.5C13 6.5 13.5 6 14.5 6H17V2h-3c-3 0-5 2-5 5v3H6v4h3v8h4z"],
            ].map(([name, d]) => (
              <a key={name} href="#" aria-label={name} className="grid place-items-center h-9 w-9 rounded-full bg-background/10 text-background hover:bg-saffron hover:text-espresso transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}