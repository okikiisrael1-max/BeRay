
import { FaLinkedinIn } from "react-icons/fa6";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import logo from "../images/logo.png";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Social media management", href: "#services" },
      { label: "Digital marketing", href: "#services" },
      { label: "Data analysis", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Approach", href: "#approach" },
      { label: "Results", href: "#results" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/beray_innovation?utm_source=qr&stkn=MWN2eXl0cTZ3cnY3MA==",
    icon: SiInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elizabeth-oyinlola-onakomaya-8b420138b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575513160968",
    icon: SiFacebook,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@onakomayaelizabeth?_r=1&_t=ZS-99jq7eFHGB2",
    icon: SiTiktok,
  }
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16">
      <div className="mx-auto max-w-content px-6 pb-10 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="BeRay Innovation" className="h-32 w-42 object-contain object-left" />
            </div>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-paper/50">
              Social media management, digital marketing, and data analysis run as one strategy.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper/65 transition hover:border-coral hover:text-coral"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-paper">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-paper/55 transition hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-sm text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} beRay. All rights reserved.</p>
          <p>Built with care.</p>
        </div>
      </div>
    </footer>
  );
}