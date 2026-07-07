'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const whatsappNumber = '8801805768267'

const pricingData = {
  creative: [
    {
      name: 'Basic',
      price: '$69',

      features: [
        '5 Social Media Designs',
        '2 Promotional Creatives',
        '1 Poster Design',
        'Unlimited Revisions',
        'Source Files',
      ],
    },

    {
      name: 'Standard',

      price: '$149',

      popular: true,

      features: [
        '10 Social Media Designs',
        '5 Promotional Creatives',
        '2 Posters',
        'Brand Color Palette',
        'Source Files',
      ],
    },

    {
      name: 'Premium',

      price: '$299',

      features: [
        '20 Social Media Designs',
        'Campaign Creatives',
        'Marketing Assets',
        'Priority Support',
        'All Source Files',
      ],
    },
  ],

  logo: [
    {
      name: 'Basic',

      price: '$69',

      features: [
        '2 Logo Concepts',
        'PNG + JPG',
        'Unlimited Revisions',
        'Commercial Use',
      ],
    },

    {
      name: 'Standard',

      price: '$149',

      popular: true,

      features: [
        '4 Logo Concepts',
        'Vector Files',
        'Source Files',
        'Brand Color Palette',
      ],
    },

    {
      name: 'Premium',

      price: '$299',

      features: [
        '5 Logo Concepts',
        'Brand Identity',
        'Business Card Design',
        'Social Media Kit',
      ],
    },
  ],

  stationery: [
    {
      name: 'Basic',

      price: '$39',

      features: [
        'Double-Sided Business Card',
        'Print Ready Files',
        'Unlimited Revisions',
      ],
    },

    {
      name: 'Standard',

      price: '$79',

      popular: true,

      features: [
        'Business Card',
        'Letterhead',
        'Email Signature',
        'Source Files',
      ],
    },

    {
      name: 'Premium',

      price: '$149',

      features: [
        'Business Card',
        'Letterhead',
        'Envelope Design',
        'Priority Support',
      ],
    },
  ],
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<
    'creative' | 'logo' | 'stationery'
  >('creative')

  return (
    <section
      id="pricing"
      className="py-32 px-6 bg-[#151515]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            PRICING
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Flexible design solutions for brands,
            businesses, and creators.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {[
            {
              id: 'creative',
              label: 'Creative Design',
            },

            {
              id: 'logo',
              label: 'Logo Design',
            },

            {
              id: 'stationery',
              label: 'Business Card',
            },
          ].map((tab) => (

            <button
              key={tab.id}

              onClick={() =>
                setActiveTab(
                  tab.id as
                    | 'creative'
                    | 'logo'
                    | 'stationery'
                )
              }

              className="relative px-6 py-3"
            >

              {activeTab === tab.id && (

                <motion.div

                  layoutId="activeTab"

                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#ff2b2b]
                  "

                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                  }}
                />

              )}

              <span
                className={`relative z-10 ${
                  activeTab === tab.id
                    ? 'text-white font-semibold'
                    : 'text-zinc-400'
                }`}
              >

                {tab.label}

              </span>

            </button>

          ))}

        </div>

        {/* Cards */}

        <AnimatePresence mode="wait">

          <motion.div

            key={activeTab}

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.4,
            }}

            className="grid lg:grid-cols-3 gap-8"
          >

            {pricingData[activeTab].map(
              (pkg, index) => (

                <motion.div

                  key={pkg.name}

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay: index * 0.08,
                  }}

                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}

                  className={`
                    group
                    relative
                    rounded-[2rem]
                    p-8
                    border
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      pkg.popular
                        ? 'border-[#ff2b2b]'
                        : 'border-white/10'
                    }

                    bg-white/[0.03]

                    hover:border-[#ff2b2b]/60

                    hover:shadow-[0_0_50px_rgba(255,107,53,0.15)]
                  `}
                >

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      bg-gradient-to-br
                      from-[#ff2b2b]/10
                      via-transparent
                      to-[#ff2b2b]/5
                    "
                  />

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
                        bg-[#ff2b2b]
                        text-white
                        text-xs
                        font-bold
                      "
                    >

                      MOST POPULAR

                    </motion.div>

                  )}

                  <div className="relative z-10">

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {pkg.name}
                    </h3>

                    <div className="text-5xl font-bold text-[#ff2b2b] mb-8">
                      {pkg.price}
                    </div>

                    <ul className="space-y-4 mb-10">

                      {pkg.features.map(
                        (feature) => (

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

                        )
                      )}

                    </ul>

                    <a

                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hello, I'm interested in your ${activeTab} ${pkg.name} design package and I'd like to discuss my project.`
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
                        hover:scale-[1.03]
                        transition-all
                        duration-300
                      "
                    >

                      Start Your Project →

                    </a>

                  </div>

                </motion.div>

              )
            )}

          </motion.div>

        </AnimatePresence>

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
            border-white/10
            overflow-hidden
            bg-gradient-to-r
            from-[#0a1f1f]
            via-[#102a2a]
            to-[#111827]
            p-10
            md:p-14
          "
        >

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
                Custom Package
              </p>

              <h3 className="text-4xl font-bold text-white mb-4">
                Need a Custom Plan?
              </h3>

              <p className="text-zinc-400 max-w-xl">

                Have a unique project that doesn't fit our standard packages?

                Let's create a personalized solution tailored to your goals.

              </p>

            </div>

            <div className="flex justify-start lg:justify-end">

              <a

                href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20need%20a%20custom%20graphics%20design%20package%20for%20my%20business.`}

                target="_blank"

                rel="noopener noreferrer"

                className="
                  inline-flex
                  items-center
                  gap-3
                  px-10
                  py-5
                  rounded-xl
                  bg-gradient-to-r
                  from-[#ff2b2b]
                  to-[#ff2b2b]
                  text-white
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
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