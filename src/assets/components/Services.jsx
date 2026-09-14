import { Share2, Megaphone, BarChart3 } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="max-w-[54ch]">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Three disciplines. Run as one strategy.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/65">
            Most agencies hand you off between departments. We keep your
            content, your marketing, and your numbers in the same room, so
            nothing gets built on a guess.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Featured, larger card */}
          <div className="rounded-3xl bg-ink p-9 text-paper lg:col-span-2 lg:row-span-1">
            <Share2 className="text-teal" size={28} strokeWidth={1.75} />
            <h3 className="mt-6 font-display text-2xl font-bold">
              Social media management
            </h3>
            <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-paper/65">
              Content calendars, community replies, and a posting rhythm
              built around what your audience actually engages with not
              what's trending for everyone else this week.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm text-paper/70">
              {["Content planning", "Community management", "Platform strategy"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-paper/15 px-3.5 py-1.5"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-9">
            <Megaphone className="text-coral" size={28} strokeWidth={1.75} />
            <h3 className="mt-6 font-display text-xl font-bold text-ink">
              Digital marketing
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/60">
              Campaigns and messaging that turn attention into a reason to
              act across ads, email, and launches.
            </p>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-9">
            <BarChart3 className="text-amber" size={28} strokeWidth={1.75} />
            <h3 className="mt-6 font-display text-xl font-bold text-ink">
              Data analysis
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink/60">
              We read the performance behind every post and campaign, so the
              next one is built on evidence instead of a hunch.
            </p>
          </div>

          <div className="rounded-3xl bg-teal/10 p-9 lg:col-span-2">
            <p className="font-display text-lg font-semibold text-ink">
              The point of connecting all three
            </p>
            <p className="mt-2 max-w-[58ch] text-base leading-relaxed text-ink/65">
              Your content informs your campaigns. Your campaigns generate
              the data. The data tells your content what to do next. Split
              across three vendors, that loop breaks. Kept in one place, it
              compounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}