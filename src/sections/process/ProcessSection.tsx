import { ProcessGrid } from "./ProcessGrid";

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden px-6 py-40 lg:px-12">
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#ff2b2b]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            OUR PROCESS
          </p>

          <h2 className="font-display text-5xl leading-none text-white md:text-7xl">
            Precision is not
            <br />
            an accident.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            A proven framework designed to reduce friction,
            eliminate guesswork and transform ideas into
            exceptional digital experiences.
          </p>
        </div>

        <ProcessGrid />
      </div>
    </section>
  );
}