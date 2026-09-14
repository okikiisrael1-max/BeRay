import MarketingCarousel from "./MarketingCarousel";

export default function ContentShowcase() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="min-w-0">
          <p className="text-sm text-teal">A sample from our playbook</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            This is the kind of thinking that goes into every post.
          </h2>
          <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-paper/65">
            Showcasing your product isn't the problem treating it as your
            entire strategy is. Swipe through to see how we'd reframe a
            typical "just post the product" brief into content that actually
            builds trust.
          </p>
        </div>

        <div className="min-w-0 max-w-full">
          <MarketingCarousel />
        </div>
      </div>
    </section>
  );
}