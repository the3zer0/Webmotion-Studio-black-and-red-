import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 sm:px-6 py-16 md:py-40 lg:px-12">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2b2b]/10 blur-[300px]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Hero Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="font-display text-[clamp(2.3rem,8vw,10rem)] leading-[0.95] text-white break-words"
        >
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          EXCEPTIONAL.
        </motion.h2>

        {/* Contact */}

        <div className="mt-24">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            CONTACT
          </p>

          <a
            href="mailto:webmotionstudio1@gmail.com"
            className="group inline-flex flex-wrap items-center gap-4 font-display text-xl sm:text-3xl text-white transition-colors duration-300 hover:text-[#ff2b2b] md:text-6xl break-all sm:break-normal"
          >
           webmotionstudio1@gmail.com

            <ArrowUpRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Social Links */}

<div className="mt-16 flex flex-wrap gap-4">
  <a
    href="https://www.instagram.com/webmotionstudio_/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-white transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
  >
    <FaInstagram
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <span>Instagram</span>
  </a>

  <a
    href="https://www.behance.net/webmotionstudio1"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-white transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
  >
    <FaBehance
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <span>Behance</span>
  </a>

  <a
    href="https://www.linkedin.com/in/webmotionstudio1/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-white transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
  >
    <FaLinkedin
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <span>LinkedIn</span>
  </a>

  <a
    href="https://github.com/webmotionstudio"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-white transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
  >
    <FaGithub
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />
    <span>GitHub</span>
  </a>
  <a
  href="https://www.youtube.com/@webmotionstudio1"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 rounded-full border border-[#ff2b2b]/30 bg-[#ff2b2b]/5 px-5 py-3 text-white transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
>
  <FaYoutube
    size={18}
    className="transition-transform duration-300 group-hover:scale-110"
  />

  <span>Webmotion Studio</span>
</a>
</div>

        {/* Watermark */}

        <div className="mt-32 overflow-hidden">
          <h3 className="font-display text-[clamp(2.5rem,14vw,14rem)] leading-none text-white/[0.03] select-none">
            WEBMOTION.
          </h3>
        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h4 className="font-display text-3xl text-white">
                WEBMOTION.
              </h4>

              <p className="mt-2 text-gray-500">
                Built to Move.
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-600">
                Remote • Worldwide
              </p>
            </div>

            <div className="text-sm uppercase tracking-[0.25em] text-gray-500">
              © 2026 Webmotion Studio
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}