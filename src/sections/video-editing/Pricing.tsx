'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const packages = [
  {
    tier: 'Basic',
    price: 19,
    description:
      'Clean, high-retention short-form edits optimized for Reels, TikTok, and YouTube Shorts.',

    features: [
      'Color Grading',
      'Sound Design & Mixing',
      'Basic Motion Graphics',
      'Thumbnail Included',
      'Captions / Subtitles',
      'Up to 1 Minute Runtime',
      '1 Revision',
      '3 Day Delivery',
      '24 Hour Priority (+$10)',
    ],
  },

  {
    tier: 'Standard',
    price: 49,
    popular: true,

    description:
      'Enhanced editing with motion graphics, cinematic pacing, and audience-focused storytelling.',

    features: [
      'Color Grading',
      'Sound Design & Mixing',
      'Medium Motion Graphics',
      'Thumbnail Included',
      'Captions / Subtitles',
      'Up to 5 Minute Runtime',
      '3 Revisions',
      '4 Day Delivery',
      '48 Hour Priority (+$20)',
    ],
  },

  {
    tier: 'Premium',
    price: 109,

    description:
      'Premium cinematic editing with advanced motion design, branding, and high-end visual polish.',

    features: [
      'Color Grading',
      'Sound Design & Mixing',
      'Advanced Motion Graphics',
      'Thumbnail Included',
      'Captions / Subtitles',
      'Up to 10 Minute Runtime',
      '5 Revisions',
      '5 Day Delivery',
      '48 Hour Priority (+$40)',
    ],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6 bg-[#151515]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-20">

          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            VIDEO EDITING PACKAGES
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">

            Professional

            <span className="text-[#ff2b2b]">
              {' '}Video Editing
            </span>

          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">

            High-retention video editing packages designed for creators,
            brands, businesses, and agencies looking to grow through
            premium content.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (

            <motion.div
              key={pkg.tier}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -10,
              }}

              className={`
                relative
                rounded-[2rem]
                p-8
                border
                overflow-hidden
                transition-all
                duration-300

                ${
                  pkg.popular
                    ? 'border-[#ff2b2b] bg-[#ff2b2b]/5'
                    : 'border-white/10 bg-white/[0.03]'
                }

                hover:border-[#ff2b2b]/50
                hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]
              `}
            >

              {pkg.popular && (

                <motion.div

                  animate={{
                    scale: [1, 1.05, 1],
                  }}

                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}

                  className="
                    absolute
                    top-5
                    right-5
                    px-3
                    py-1
                    rounded-full
                    bg-gradient-to-r
                    from-[#ff2b2b]
                    to-[#ff2b2b]
                    text-black
                    text-xs
                    font-bold
                  "
                >

                  MOST POPULAR

                </motion.div>
              )}

              {/* Price */}

              <div className="mb-8">

                <div className="flex items-end gap-2 mb-4">

                  <span className="text-[#ff2b2b] text-2xl">
                    $
                  </span>

                  <span className="text-6xl font-bold text-white">
                    {pkg.price}
                  </span>

                  <span className="text-zinc-500">
                    /video
                  </span>

                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {pkg.tier}
                </h3>

                <p className="text-zinc-400">
                  {pkg.description}
                </p>

              </div>

              {/* Features */}

              <ul className="space-y-4 mb-10">

                {pkg.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex gap-3 text-zinc-300"
                  >

                    <Check
                      size={18}
                      className="text-[#ff2b2b] mt-1"
                    />

                    {feature}

                  </li>

                ))}

              </ul>

              {/* WhatsApp CTA */}

              <a

                href={`https://wa.me/8801805768267?text=${encodeURIComponent(
                  `Hello, I'm interested in your ${pkg.tier} video editing package and I'd like to discuss my project.`
                )}`}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  w-full
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-[#ff2b2b]
                  to-[#ff2b2b]
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >

                Start Your Project →

              </a>

            </motion.div>

          ))}

        </div>

        {/* Custom CTA */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            mt-20
            rounded-[2rem]
            border
            border-[#ff2b2b]/20
            bg-gradient-to-r
            from-[#0a0a0a]
            via-[#202020]
            to-[#111111]
            p-10
            md:p-14
            relative
            overflow-hidden
          "
        >

          <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff2b2b]/10 blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
                Custom Package
              </p>

              <h3 className="text-4xl font-bold text-white mb-4">
                Need a Custom Editing Package?
              </h3>

              <p className="text-zinc-400">

                Need ongoing content support,
                podcast editing, YouTube management,
                or a high-volume workflow?

                We'll build a custom solution.

              </p>

            </div>

            <div className="flex justify-start lg:justify-end">

              <a

                href="https://wa.me/8801805768267?text=Hello,%20I%20need%20a%20custom%20video%20editing%20package."

                target="_blank"

                rel="noopener noreferrer"

                className="
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-[#ff2b2b]
                  to-[#ff2b2b]
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >

                Let's Discuss Your Project →

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}