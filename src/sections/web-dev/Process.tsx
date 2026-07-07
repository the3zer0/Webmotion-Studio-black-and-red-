'use client'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We learn about your business, goals, audience, and project requirements before planning the solution.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Wireframes and modern UI concepts are created to ensure a clean and conversion-focused experience.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'The design is transformed into a fast, responsive, and scalable website using modern technologies.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'After testing and optimization, the website goes live and is ready to perform.',
  },
]

export default function Process() {
  return (
    <section className="py-32 px-6 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            From Idea To Launch
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A streamlined process designed to deliver modern websites
            efficiently without sacrificing quality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-white/10" />

          <div className="grid lg:grid-cols-4 gap-10">

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

        {/* Bottom Card */}
        <div
          className="
            mt-24
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            p-8
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Fast, Modern, Reliable
          </h3>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Every website is optimized for performance, responsiveness,
            SEO, and long-term scalability from day one.
          </p>
        </div>

      </div>
    </section>
  )
}