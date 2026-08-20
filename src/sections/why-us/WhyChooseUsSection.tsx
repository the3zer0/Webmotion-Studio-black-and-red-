import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Award,
  Lightbulb,
} from "lucide-react";

const studioValues = [
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work closely with our clients to understand their vision, goals, and audience — then turn that vision into something meaningful.",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    description:
      "We combine strategy, creativity, and modern visual thinking to create work that feels fresh, memorable, and purposeful.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "From the smallest detail to the final delivery, we focus on quality, consistency, and work that represents your brand professionally.",
  },
  {
    icon: Globe,
    title: "Global",
    description:
      "We work with creators, businesses, and brands across different markets, bringing a flexible and international perspective to every project.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080808] px-4 sm:px-6 py-16 md:py-32 lg:px-12"
    >
      {/* Background Glows */}

      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ff2b2b]/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#ff2b2b]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-4xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            WHY WEBMOTION
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl">
            More Than a Service.
            <br />
            <span className="text-[#ff2b2b]">
              A Creative Partner.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Webmotion Studio helps creators, businesses, and brands build
            stronger digital identities through strategic design, modern web
            development, and engaging video content that drives real results.
          </p>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mb-24
            grid
            grid-cols-2
            gap-y-12
            border-y
            border-white/10
            py-12
            md:grid-cols-4
            md:gap-0
          "
        >
          {/* Stat 1 */}

          <div className="border-white/10 md:border-r md:px-8 first:md:pl-0">
            <h3 className="text-4xl font-bold text-[#ff2b2b] md:text-5xl">
              410+
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-gray-500">
              Projects Delivered
            </p>
          </div>

          {/* Stat 2 */}

          <div className="md:border-r md:px-8">
            <h3 className="text-4xl font-bold text-white md:text-5xl">
              100+
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-gray-500">
              Happy Clients Worldwide
            </p>
          </div>

          {/* Stat 3 */}

          <div className="border-white/10 md:border-r md:px-8">
            <h3 className="text-4xl font-bold text-[#ff2b2b] md:text-5xl">
              5+
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-gray-500">
              Years of Experience
            </p>
          </div>

          {/* Stat 4 */}

          <div className="md:px-8 md:pr-0">
            <h3 className="text-4xl font-bold text-white md:text-5xl">
              98%
            </h3>

            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-gray-500">
              Client Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Studio Introduction */}

        <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
              OUR APPROACH
            </p>

            <h3 className="text-3xl sm:text-4xl font-semibold leading-tight text-white md:text-5xl">
              Built around your
              <br />
              <span className="text-gray-500">
                vision and goals.
              </span>
            </h3>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400">
              We don't believe in one-size-fits-all creative solutions.
              Every project starts with understanding what you're trying to
              achieve, who you're trying to reach, and what makes your brand
              different.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-500">
              From the first idea to the final delivery, we focus on creating
              work that looks exceptional and serves a real purpose.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.15em] text-gray-400">
                Strategy
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.15em] text-gray-400">
                Design
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.15em] text-gray-400">
                Motion
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs uppercase tracking-[0.15em] text-gray-400">
                Development
              </span>
            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="
                group
                relative
                w-full
                max-w-[390px]
                overflow-hidden
                rounded-[32px]
                border
                border-[#ff2b2b]/20
                bg-white/[0.02]
                shadow-[0_0_60px_rgba(255,43,43,0.08)]
              "
            >
              {/* Image Glow */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <img
                src="/resume/gm.png"
                alt="Webmotion Studio Team"
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.03]
                "
              />

              {/* Image Label */}

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#ff2b2b]">
                  WEBMOTION STUDIO
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Creative minds. Digital impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
              WHAT DRIVES US
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {studioValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#ff2b2b]/40
                    hover:bg-[#ff2b2b]/[0.03]
                    hover:shadow-[0_20px_60px_rgba(255,43,43,0.08)]
                  "
                >
                  <div
                    className="
                      mb-7
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#ff2b2b]/20
                      bg-[#ff2b2b]/10
                      transition-all
                      duration-300
                      group-hover:border-[#ff2b2b]/50
                      group-hover:bg-[#ff2b2b]
                    "
                  >
                    <Icon
                      size={21}
                      className="text-[#ff2b2b] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h4 className="mb-3 text-xl font-semibold text-white">
                    {value.title}
                  </h4>

                  <p className="text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}