'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'The edits matched our brand style perfectly and helped our content feel more modern and engaging across social platforms.',
    author: 'IstitionBD',
    role: 'Brand Collaboration',
  },
  {
    quote:
      'Creative visuals, smooth transitions, and strong attention to detail made our promotional content stand out.',
    author: 'Outfit Istition',
    role: 'Brand Collaboration',
  },
  {
    quote:
      'A fully AI-generated promotional ad with clean editing, engaging pacing, and professional visuals that made our platform more impactful and trustworthy.',
    author: 'MD. Tanbir Ahmmed',
    role: 'CEO, Tuition Hub Mymensingh',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
            Trusted by brands, creators, and businesses looking for cinematic content that performs.
          </p>
        </motion.div>

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
              whileHover={{ y: -10 }}
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
                hover:shadow-[0_0_50px_rgba(255,43,43,0.18)]
              "
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff2b2b]/5 to-[#ff2b2b]/5 opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />

              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 mb-6 flex gap-1"
              >
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff2b2b] text-lg">
                    ★
                  </span>
                ))}
              </motion.div>

              <p className="relative z-10 mb-8 leading-relaxed text-zinc-300">
                "{item.quote}"
              </p>

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff2b2b] to-[#ff2b2b] font-bold text-white">
                  {item.author.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{item.author}</h4>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
