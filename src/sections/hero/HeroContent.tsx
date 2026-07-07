import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GlowButton, GlowLink } from "../../components/buttons/GlowButton";

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
      >
        <span className="h-2 w-2 rounded-full bg-[#ff2b2b] animate-pulse" />

        <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
         BUILT TO MOVE
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15 }}
        className="mt-8 font-display text-[3.8rem] font-semibold leading-[0.9] tracking-tight text-white md:text-[5.5rem] xl:text-[7rem]"
      >
        We Create
        <br />

        <span className="text-[#ff2b2b]">
          Digital
        </span>

        <br />

        Experiences
        <br />

        That Move.
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
      >
        Webmotion Studio crafts cinematic videos, premium web experiences,
        and timeless visual identities that help ambitious brands stand
        out in the modern digital world.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <GlowLink href="#projects">
          View Work
          <ArrowUpRight
            size={18}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </GlowLink>

        <GlowButton
          onClick={() =>
            window.location.assign(
              "mailto:hello@webmotionstudio.com"
            )
          }
        >
          Start Project

          <ArrowUpRight
            size={18}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </GlowButton>
      </motion.div>

      {/* Trust */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-14 flex flex-wrap items-center gap-8"
      >
        <div>
          <h3 className="font-display text-3xl text-white">
            240+
          </h3>

          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gray-500">
            Projects
          </p>
        </div>

        <div className="h-10 w-px bg-white/10" />

        <div>
          <h3 className="font-display text-3xl text-white">
            96%
          </h3>

          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gray-500">
            Satisfaction
          </p>
        </div>

        <div className="h-10 w-px bg-white/10" />

        <div>
          <h3 className="font-display text-3xl text-white">
            3M+
          </h3>

          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gray-500">
            Views Generated
          </p>
        </div>
      </motion.div>

      {/* Scroll */}

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8 }}
        className="group mt-16 inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-gray-500"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#ff2b2b]">
          <ArrowDown
            size={16}
            className="animate-bounce"
          />
        </span>

        Scroll To Discover
      </motion.a>
    </div>
  );
}