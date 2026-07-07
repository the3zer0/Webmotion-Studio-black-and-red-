'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'The website completely transformed our online presence. The design feels premium, loads fast, and converts visitors into inquiries.',
    author: 'IstitionBD',
    role: 'Business Website',
  },
  {
    quote:
      'The portfolio website perfectly showcases our work and gives clients confidence before they even contact us.',
    author: 'Outfit Istition',
    role: 'Portfolio Website',
  },
  {
    quote:
      'A modern landing page with strong visuals, smooth animations, and clear conversion paths that improved our campaign results.',
    author: 'MD. Tanbir Ahmmed',
    role: 'Landing Page Project',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Clients Say
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Trusted by businesses, creators, and brands looking for
            websites that perform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                relative
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#ff2b2b]/40
                hover:shadow-[0_0_50px_rgba(255,107,53,0.18)]
              "
            >

              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-[#ff2b2b]/5
                  to-[#ff2b2b]/5
                  pointer-events-none
                "
              />

              {/* Stars */}
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex gap-1 mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#ff2b2b] text-lg"
                  >
                    ★
                  </span>
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-zinc-300 leading-relaxed mb-8 relative z-10">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
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

            </motion.div>
          ))}

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              30+
            </h3>

            <p className="text-zinc-500">
              Websites Delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              99%
            </h3>

            <p className="text-zinc-500">
              Client Satisfaction
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              12+
            </h3>

            <p className="text-zinc-500">
              Industries Served
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}