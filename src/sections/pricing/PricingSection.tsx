import { motion } from "framer-motion";

const pricingPlans = [
  {
    service: "Graphics Design",
    price: "39",
    description:
      "Professional branding, social media creatives, posters, and marketing assets.",
  },
  {
    service: "Video Editing",
    price: "19",
    description:
      "High-retention edits for social media, YouTube, podcasts, and brands.",
    featured: true,
  },
  {
    service: "Web Development",
    price: "69",
    description:
      "Modern responsive websites built with performance and user experience in mind.",
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0f0f0f] px-6 py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#ff2b2b]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#ff2b2b]">
            Pricing
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Transparent Pricing
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Flexible starting packages designed for creators,
            brands, and businesses.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group relative rounded-[2rem] border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-[#ff2b2b]/50 bg-[#ff2b2b]/[0.04] shadow-[0_0_50px_rgba(255,43,43,0.08)]"
                  : "border-white/10 bg-white/[0.02] hover:border-[#ff2b2b]/30"
              }`}
            >
              {/* Featured Badge */}

              {plan.featured && (
                <div className="absolute -top-4 left-8 rounded-full bg-[#ff2b2b] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}

              <h3 className="mb-3 text-2xl font-bold text-white">
                {plan.service}
              </h3>

              <div className="mb-6 flex items-end gap-2">
                <span className="text-5xl font-bold text-[#ff2b2b]">
                  ${plan.price}
                </span>

                <span className="mb-1 text-sm text-zinc-500">
                  starting from
                </span>
              </div>

              <p className="mb-8 min-h-[72px] leading-relaxed text-zinc-400">
                {plan.description}
              </p>

              <a
                href="#contact"
                className="block w-full rounded-xl bg-gradient-to-r from-[#ff2b2b] to-[#8b1717] py-4 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,43,43,0.2)]"
              >
                Get Started →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom Project */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 text-center md:flex md:items-center md:justify-between md:text-left"
        >
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#ff2b2b]">
              Need Something Custom?
            </p>

            <h3 className="text-2xl font-semibold text-white">
              Let&apos;s build a package around your goals.
            </h3>

            <p className="mt-2 text-zinc-500">
              Custom projects are quoted based on scope, timeline, and requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full border border-[#ff2b2b]/40 px-6 py-3 font-medium text-[#ff2b2b] transition-all hover:bg-[#ff2b2b]/10 md:mt-0"
          >
            Discuss Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}