import { PHONES, ADDRESS_FULL, ORDER_URL, MAP_LINK } from "@/lib/constants";

export function TopBar() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] bg-espresso text-background/95 text-[12px] md:text-[13px] border-b border-background/10"
      style={{ fontFamily: "var(--font-button)" }}
    >
      <div className="container-x h-9 md:h-10 flex items-center justify-between gap-4">
        {/* Left: phones */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-saffron">
            <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A18 18 0 0 1 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 1.9z" />
          </svg>
          <a href={`tel:${PHONES[0].replace(/[^0-9]/g, "")}`} className="hover:text-saffron transition-colors whitespace-nowrap">{PHONES[0]}</a>
          <span className="hidden sm:inline opacity-40">|</span>
          <a href={`tel:${PHONES[1].replace(/[^0-9]/g, "")}`} className="hidden sm:inline hover:text-saffron transition-colors whitespace-nowrap">{PHONES[1]}</a>
        </div>

        {/* Middle: address - hide on small */}
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 hover:text-saffron transition-colors truncate"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0 text-saffron">
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span className="truncate">{ADDRESS_FULL}</span>
        </a>

        {/* Right: order */}
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-saffron hover:text-background transition-colors font-semibold whitespace-nowrap"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
          </svg>
          <span className="hidden xs:inline">Order Online</span>
          <span className="xs:hidden">Order</span>
        </a>
      </div>
    </div>
  );
}
