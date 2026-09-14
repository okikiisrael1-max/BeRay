import { Mail, MessageCircle } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email the team",
    href: "mailto:onakomayaelizabethoyinlola0106@gmail.com",
    icon: Mail,
  },
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/+2349137464960?text=Hello%20beRay%2C%20I%27d%20like%20to%20discuss%20my%20brand.",
    icon: MessageCircle,
  },
];

export default function CTA() {
  return (
    <section id="contact" className="bg-coral py-20 lg:py-24">
      <div className="mx-auto max-w-content px-6 text-center lg:px-10">
        <h2 className="mx-auto max-w-[24ch] font-display text-3xl font-bold text-ink sm:text-4xl">
          Let's build content that gives people a reason to buy.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-lg text-ink/70">
          Tell us about your brand and we&apos;ll put together a focused plan for
          your social, marketing, and reporting, with no obligation.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition hover:brightness-110"
            >
              <Icon size={17} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}