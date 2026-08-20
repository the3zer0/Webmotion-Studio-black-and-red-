import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  "VIDEO EDITING",
  "WEB DEVELOPMENT",
  "GRAPHIC DESIGN",
];

export function HeroDevice() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: .9,
        delay: .4,
      }}
      className="relative mx-auto w-full max-w-[700px]"
    >
      {/* Ambient */}

      <div className="absolute inset-0 rounded-full bg-[#ff2b2b]/10 blur-[160px]" />

      {/* Device */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0a0a0a]/95 shadow-[0_60px_140px_rgba(0,0,0,.6)] backdrop-blur-2xl"
      >
        {/* Browser */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <div className="flex gap-2">

            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />

            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />

            <span className="h-3 w-3 rounded-full bg-[#28c840]" />

          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.3em] text-gray-400">

            webmotion.studio

          </div>

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-[#ff2b2b]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">

              LIVE

            </span>

          </div>

        </div>

        {/* Screen */}

        <div className="relative p-8">

          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#ff2b2b]/15 blur-[140px]" />

          <div className="relative z-10">

            <span className="text-[11px] uppercase tracking-[0.35em] text-gray-500">

              PREMIUM DIGITAL EXPERIENCE

            </span>

            <h2 className="mt-5 font-display text-5xl font-semibold leading-none text-white">

              We Build
              <br />

              <span className="text-[#ff2b2b]">
                Brands</span>

               That
              <br />

              Stand Out.

            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">

              Strategy, motion and development combined into one
              premium creative experience.

            </p>
                        {/* Website Preview */}

            <div className="mt-10 overflow-hidden rounded-[26px] border border-white/10 bg-[#050505]/80">

              {/* Preview Navbar */}

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#ff2b2b] to-[#7f1d1d]" />

                  <div>

                    <h4 className="font-display text-sm text-white">
                      WEBMOTION.
                    </h4>

                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                      STUDIO
                    </p>

                  </div>

                </div>

                <div className="flex gap-6 text-[11px] uppercase tracking-[0.25em] text-gray-500">

                  <span>Home</span>
                  <span>Services</span>
                  <span>Contact</span>

                </div>

              </div>

              {/* Landing Preview */}

              <div className="grid gap-8 p-8 lg:grid-cols-[1fr_180px]">

                {/* Left */}

                <div>

                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#ff2b2b]">
                    BUILT TO MOVE
                  </span>

                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white">

                    Design.
                    <br />
                    Motion.
                    <br />
                    Development.

                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">

                    Premium websites and cinematic visuals
                    crafted to elevate modern brands.

                  </p>

                  <a
  href="#projects"
  className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#ff2b2b] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#ff4545]"
>
  View Project

  <ArrowUpRight
    size={16}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>

                </div>

                {/* Right */}

                <div className="relative flex items-center justify-center">

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    className="relative h-[180px] w-[150px] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-[#181818] to-[#090909]"
                  >

                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#ff2b2b]/20 to-transparent" />

                    <div className="mt-12 flex flex-col items-center">

                      <div className="h-12 w-12 rounded-full bg-[#ff2b2b]/20" />

                      <div className="mt-5 h-2 w-20 rounded-full bg-white/10" />

                      <div className="mt-3 h-2 w-14 rounded-full bg-white/5" />

                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

            {/* Services */}

            <div className="mt-8 flex flex-wrap gap-3">

              {services.map((service) => (

                <span
                  key={service}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-gray-300"
                >
                  {service}
                </span>

              ))}

            </div>
                        {/* Bottom Showcase */}

            <div className="mt-10 grid grid-cols-3 gap-4">

              {[
                {
                  title: "Website",
                  subtitle: "Modern UI",
                },
                {
                  title: "Motion",
                  subtitle: "Storytelling",
                },
                {
                  title: "Brand",
                  subtitle: "Identity",
                },
              ].map((item) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: .25,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#ff2b2b]/40"
                >

                  <div className="flex items-center justify-between">

                    <div className="h-3 w-3 rounded-full bg-[#ff2b2b]" />

                    <ArrowUpRight
                      size={16}
                      className="text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                    />

                  </div>

                  <h4 className="mt-8 font-display text-xl text-white">

                    {item.title}

                  </h4>

                  <p className="mt-2 text-sm text-gray-500">

                    {item.subtitle}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>
        </div>

        {/* Reflection */}

        <motion.div
          animate={{
            x: ["-120%", "160%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
          className="pointer-events-none absolute inset-y-0 w-28 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
        />

      </motion.div>

      {/* Floating Badges */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-10 top-24 rounded-full border border-white/10 bg-[#0f0f0f]/90 px-5 py-3 backdrop-blur-xl"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-white">
          VIDEO
        </span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-12 top-48 rounded-full border border-white/10 bg-[#0f0f0f]/90 px-5 py-3 backdrop-blur-xl"
      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-white">
          WEB
        </span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
className="absolute left-1/2 -bottom-10 -translate-x-1/2 rounded-full border border-white/10 bg-[#0f0f0f]/90 px-5 py-3 backdrop-blur-xl"      >
        <span className="text-[11px] uppercase tracking-[0.35em] text-white">
          BRANDING
        </span>
      </motion.div>
               {/* Bottom Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff2b2b]/20 blur-[150px]" />

      {/* Corner Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ff2b2b]/20 blur-[140px]" />

      {/* Decorative Ring */}
      <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full border border-white/5" />

    </motion.div>
  );
}  