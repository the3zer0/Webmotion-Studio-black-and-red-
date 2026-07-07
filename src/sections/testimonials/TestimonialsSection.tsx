import { TestimonialSlider } from "./TestimonialSlider";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-40 lg:px-12">
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#ff2b2b]/5 blur-[220px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            TESTIMONIALS
          </p>

          <h2 className="font-display text-5xl leading-none text-white md:text-7xl">
  Trusted by creators,
  <br />
  founders and brands.
</h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
  The best measure of our work isn't what we say —
  it's what our clients experience after working
  with us.
</p>
        </div>

        <div className="mt-24">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}