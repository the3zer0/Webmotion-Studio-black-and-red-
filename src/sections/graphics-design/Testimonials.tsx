'use client'

const testimonials = [
  {
    quote:
      'The branding completely transformed how customers perceived our business. Everything feels more premium and professional.',
    author: 'IstitionBD',
    role: 'Brand Identity Project',
  },
  {
    quote:
      'The social media creatives helped us achieve higher engagement and a much stronger visual presence online.',
    author: 'Outfit Istition',
    role: 'Social Media Design',
  },
  {
    quote:
      'The advertising visuals delivered a polished and trustworthy look that significantly improved campaign performance.',
    author: 'MD. Tanbir Ahmmed',
    role: 'Marketing Campaign',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trusted By Brands
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            We help brands create visuals that build trust,
            improve recognition, and drive growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="
                relative
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-[#ff2b2b]/40
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(255,107,53,0.12)]
                transition-all
                duration-300
              "
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2b2b]/10 blur-3xl rounded-full" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className="text-[#ff2b2b] text-lg"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-8">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-gradient-to-br
                    from-[#ff2b2b]
                    to-[#ff2b2b]
                    flex
                    items-center
                    justify-center
                    text-black
                    font-bold
                  "
                >
                  {item.author.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    {item.author}
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              120+
            </h3>

            <p className="text-zinc-500">
              Design Projects Delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              35+
            </h3>

            <p className="text-zinc-500">
              Brands Served
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              98%
            </h3>

            <p className="text-zinc-500">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}