export default function Hero() {
  return (
    <section id="top" className="bg-ink pb-20 pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-10">
        <div>
          <p className="text-sm text-teal">Social · Marketing · Data</p>
          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.08] text-paper sm:text-5xl lg:text-[3.4rem]">
            We don't just get you seen. We get you chosen.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-paper/70">
            BERAY runs your social channels, plans the marketing that
            surrounds them, and reads the numbers behind both so every post
            is working toward a reason to buy, not just a reason to scroll.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-coral px-7 py-3.5 text-center text-sm font-semibold text-ink transition hover:brightness-105"
            >
              Book a strategy call
            </a>
            <a
              href="#services"
              className="rounded-full border border-paper/25 px-7 py-3.5 text-center text-sm font-semibold text-paper transition hover:border-paper/60"
            >
              See what we do
            </a>
          </div>

          <div className="mt-12 flex gap-10 border-t border-paper/10 pt-8">
            <div>
              <p className="font-display text-2xl font-bold text-paper">3</p>
              <p className="mt-1 text-sm text-paper/50">disciplines, one strategy</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-paper">1</p>
              <p className="mt-1 text-sm text-paper/50">team across every channel</p>
            </div>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}

function HeroGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 420 420"
        className="w-full"
        role="img"
        aria-label="Abstract illustration combining a bar chart with connected social nodes"
      >
        <rect x="0" y="0" width="420" height="420" rx="28" fill="#1B1A29" />

        {/* bar chart, rising left to right */}
        <rect x="56" y="260" width="34" height="100" rx="6" fill="#22D3B7" opacity="0.9" />
        <rect x="104" y="220" width="34" height="140" rx="6" fill="#22D3B7" />
        <rect x="152" y="180" width="34" height="180" rx="6" fill="#FF5C77" opacity="0.9" />
        <rect x="200" y="140" width="34" height="220" rx="6" fill="#FF5C77" />

        {/* connective "social" nodes and lines */}
        <line x1="270" y1="330" x2="330" y2="270" stroke="#F5F3EE" strokeOpacity="0.25" strokeWidth="2" />
        <line x1="330" y1="270" x2="310" y2="190" stroke="#F5F3EE" strokeOpacity="0.25" strokeWidth="2" />
        <line x1="310" y1="190" x2="370" y2="130" stroke="#F5F3EE" strokeOpacity="0.25" strokeWidth="2" />
        <line x1="270" y1="330" x2="355" y2="345" stroke="#F5F3EE" strokeOpacity="0.25" strokeWidth="2" />

        <circle cx="270" cy="330" r="10" fill="#FFC155" />
        <circle cx="330" cy="270" r="7" fill="#F5F3EE" />
        <circle cx="310" cy="190" r="9" fill="#FF5C77" />
        <circle cx="370" cy="130" r="12" fill="#22D3B7" />
        <circle cx="355" cy="345" r="6" fill="#F5F3EE" opacity="0.8" />

        <path
          d="M50 120 Q 130 70 210 100 T 370 60"
          fill="none"
          stroke="#FFC155"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}