// NOTE: The quotes below are placeholder copy — swap in real client
// testimonials (with permission) before this goes live.
const QUOTES = [
  {
    quote:
      "Our posts finally feel like they're building toward something, instead of just filling the calendar.",
    name: "Founder",
    context: "Skincare brand",
  },
  {
    quote:
      "We stopped guessing which campaigns worked. Now we just look at the numbers.",
    name: "Marketing lead",
    context: "D2C retailer",
  },
  {
    quote:
      "Having one team handle content, campaigns, and reporting cut our back-and-forth in half.",
    name: "Operations manager",
    context: "Hospitality group",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          What it's like to work with us.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <figure
              key={i}
              className="rounded-3xl border border-ink/10 p-8"
            >
              <blockquote className="text-lg leading-relaxed text-ink/80">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-ink/50">
                {q.name} · {q.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}