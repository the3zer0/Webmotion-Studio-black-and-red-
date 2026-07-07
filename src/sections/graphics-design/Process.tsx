'use client'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Understanding your business, audience, goals, and visual direction.',
  },
  {
    number: '02',
    title: 'Research',
    description:
      'Analyzing competitors, trends, and opportunities to create a strong foundation.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Transforming ideas into high-quality visual concepts and creative assets.',
  },
  {
    number: '04',
    title: 'Refinement',
    description:
      'Reviewing feedback and polishing every detail until everything feels right.',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'Providing final assets ready for digital, social, advertising, and print use.',
  },
]

export default function Process() {
  return (
    <section className="py-32 px-6 bg-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How We Work
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A simple process focused on strategy, creativity, and delivering
            visuals that help brands grow.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-white/10" />

          <div className="grid lg:grid-cols-5 gap-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Circle */}
                <div
                  className="
                    relative
                    z-10
                    w-24
                    h-24
                    mx-auto
                    rounded-full
                    bg-gradient-to-br
                    from-[#ff2b2b]
                    to-[#ff2b2b]
                    flex
                    items-center
                    justify-center
                    text-black
                    text-2xl
                    font-bold
                    shadow-[0_0_40px_rgba(255,107,53,0.25)]
                  "
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-24">
          <p className="text-zinc-500 text-lg">
            Every project is built with clarity, collaboration,
            and attention to detail.
          </p>
        </div>
      </div>
    </section>
  )
}