const STEPS = [
  {
    n: "1",
    title: "Discover",
    body: "We audit your channels, your competitors, and your last few campaigns to see what's actually working.",
  },
  {
    n: "2",
    title: "Strategize",
    body: "A content and marketing plan built around your specific audience not a generic monthly calendar.",
  },
  {
    n: "3",
    title: "Create & launch",
    body: "Posts, campaigns, and assets go out on a rhythm your audience can rely on.",
  },
  {
    n: "4",
    title: "Analyze",
    body: "We track what actually drove engagement and sales, not just what got likes.",
  },
  {
    n: "5",
    title: "Optimize",
    body: "Every cycle feeds the next one, so the strategy gets sharper, not just busier.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <h2 className="max-w-[40ch] font-display text-3xl font-bold text-ink sm:text-4xl">
          How a project actually runs.
        </h2>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-bold text-paper">
                  {step.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-ink/15 md:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}