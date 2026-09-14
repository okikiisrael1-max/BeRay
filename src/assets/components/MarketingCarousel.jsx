import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * MarketingCarousel
 * -------------------------------------------------------------------------
 * A self-contained, drop-in carousel for showcasing short-form marketing
 * content (Instagram-carousel style) on the agency's site.
 *
 * Setup notes:
 * 1. Requires "lucide-react" (npm install lucide-react) — swap the two
 *    icon imports for your own icons if you'd rather not add it.
 * 2. Uses the fonts "Sora" (headlines) and "Inter" (body). For best
 *    performance, add these to your <head> instead of the runtime
 *    @import below:
 *      <link rel="preconnect" href="https://fonts.googleapis.com">
 *      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
 *    If you do that, delete the <style> block near the bottom of this file.
 * 3. Just drop <MarketingCarousel /> anywhere — no props required.
 */

const SLIDES = [
  {
    kind: "hook",
    quote: "You shouldn’t just post or showcase your products.",
    support: "Sounds confusing, right?",
    question: "“Then what exactly am I supposed to post?”",
  },
  {
    kind: "list",
    title: "Let’s be clear.",
    intro: "You SHOULD showcase your products. Your audience needs to know:",
    items: [
      "What you sell",
      "What you offer",
      "What makes you different",
      "How they can buy from you",
    ],
    footer:
      "The problem isn’t showcasing your product — it’s making product showcasing your entire marketing strategy.",
  },
  {
    kind: "brands",
    title: "Look at the big brands.",
    body: "Apple. Samsung. Dangote Cement. The major beauty brands. None of them rely on “here’s our product, buy it.”",
    chips: ["Apple", "Samsung", "Dangote Cement", "Beauty brands"],
    footer:
      "They show you why it matters, how it improves your life, and why to choose them. They sell the value, not just the product.",
  },
  {
    kind: "list",
    title: "What should your content do?",
    items: [
      "Educate",
      "Create awareness",
      "Build trust",
      "Tell your brand story",
      "Solve problems",
      "Create desire",
    ],
    footer: "Don’t just show people your product — give them a reason to want it.",
  },
  {
    kind: "cta",
    title: "The takeaway.",
    body: "Don’t stop showcasing your products. Learn how to market them strategically.",
    support:
      "Visibility gets people to see your product. Strategic marketing gives them a reason to care, trust, and buy.",
    cta: "Need help making your brand more visible and strategic online? DM me.",
  },
];

export default function MarketingCarousel({ className = "" }) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const touchStartX = useRef(null);
  const trackRef = useRef(null);

  const count = SLIDES.length;

  const go = useCallback(
    (next) => setIndex(() => (next + count) % count),
    [count]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <div
      className={`mx-auto min-w-0 max-w-full select-none overflow-hidden ${className}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Runtime font import — remove if fonts are already linked in <head> */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500&display=swap');
      `}</style>

      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_rgba(20,19,31,0.45)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className={`flex h-full ${reduceMotion ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, i) => (
            <Slide key={i} slide={slide} position={i + 1} total={count} />
          ))}
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-[#F5F3EE]/90 text-[#14131F] backdrop-blur transition hover:bg-[#F5F3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3B7]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-[#F5F3EE]/90 text-[#14131F] backdrop-blur transition hover:bg-[#F5F3EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22D3B7]"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2" aria-hidden={false}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-[#FF5C77]" : "w-1.5 bg-[#14131F]/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Slide({ slide, position, total }) {
  const isCta = slide.kind === "cta";

  return (
    <div
      className={`h-full min-w-0 w-full shrink-0 grow-0 basis-full px-8 py-9 flex flex-col ${
        isCta ? "bg-[#FFC155] text-[#14131F]" : "bg-[#14131F] text-[#F5F3EE]"
      }`}
      aria-hidden={undefined}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-sm ${isCta ? "text-[#14131F]/60" : "text-[#22D3B7]"}`}
        >
          {position} of {total}
        </span>
      </div>

      <div className="mt-6 flex-1 flex flex-col justify-center">
        {slide.kind === "hook" && (
          <div className="space-y-5">
            <p
              className="text-[28px] leading-[1.15] font-semibold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {slide.quote}
            </p>
            <p className="text-base text-[#F5F3EE]/70">{slide.support}</p>
            <p className="text-lg italic text-[#F5F3EE]/90">{slide.question}</p>
          </div>
        )}

        {slide.kind === "list" && (
          <div className="space-y-5">
            <h3
              className="text-2xl font-semibold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {slide.title}
            </h3>
            {slide.intro && (
              <p className="text-base text-[#F5F3EE]/70">{slide.intro}</p>
            )}
            <ul className="space-y-2.5">
              {slide.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF5C77]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {slide.footer && (
              <p className="text-sm text-[#F5F3EE]/60 pt-1">{slide.footer}</p>
            )}
          </div>
        )}

        {slide.kind === "brands" && (
          <div className="space-y-5">
            <h3
              className="text-2xl font-semibold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {slide.title}
            </h3>
            <p className="text-base text-[#F5F3EE]/70">{slide.body}</p>
            <div className="flex flex-wrap gap-2">
              {slide.chips.map((chip, i) => (
                <span
                  key={i}
                  className="rounded-full border border-[#22D3B7]/40 px-3 py-1 text-sm text-[#22D3B7]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#F5F3EE]/60 pt-1">{slide.footer}</p>
          </div>
        )}

        {slide.kind === "cta" && (
          <div className="space-y-5">
            <h3
              className="text-2xl font-semibold"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {slide.title}
            </h3>
            <p className="text-base">{slide.body}</p>
            <p className="text-sm text-[#14131F]/70">{slide.support}</p>
            <p
              className="text-lg font-semibold pt-2"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {slide.cta}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}