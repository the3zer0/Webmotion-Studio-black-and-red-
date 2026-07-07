'use client'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We understand your brand, audience, goals, and content strategy.',
  },
  {
    number: '02',
    title: 'Creative Strategy',
    description:
      'We plan storytelling, pacing, motion graphics, and retention hooks.',
  },
  {
    number: '03',
    title: 'Edit & Production',
    description:
      'Footage is transformed into engaging content with cinematic polish.',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Final assets are optimized and delivered for every platform.',
  },
]

export default function Process() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How We Work
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            A streamlined workflow designed to move from idea to delivery
            without unnecessary complexity.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-[#ff2b2b]/0 via-[#ff2b2b]/40 to-[#ff2b2b]/0" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative group"
              >
                <div
                  className="
                    w-24
                    h-24
                    rounded-full
                    border
                    border-[#ff2b2b]/30
                    bg-[#1f1f1f]
                    flex
                    items-center
                    justify-center
                    text-3xl
                    font-bold
                    text-[#ff2b2b]
                    mx-auto
                    mb-8
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-[0_0_40px_rgba(255,43,43,0.25)]
                  "
                >
                  {step.number}
                </div>

                <div
                  className="
                    p-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-sm
                    text-center
                    transition-all
                    duration-300
                    group-hover:border-[#ff2b2b]/40
                  "
                >
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
      </div>
    </section>
  )
}