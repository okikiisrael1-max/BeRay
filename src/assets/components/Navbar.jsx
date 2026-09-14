import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-paper/10 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 shadow-[0_16px_40px_-28px_rgba(255,242,0,0.45)] backdrop-blur-xl"
          : "bg-ink"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-3 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="BeRay Innovation home">
          <img
            src={logo}
            alt="BeRay Innovation"
            className="h-12 w-32 object-contain object-left"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/70 transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-18px_rgba(255,242,0,0.9)] transition hover:bg-paper md:inline-block"
        >
          Book a call
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-paper/10 text-paper md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-paper/10 bg-ink px-6 pb-6 pt-4 shadow-2xl">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-paper/80 hover:bg-paper/5 hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
