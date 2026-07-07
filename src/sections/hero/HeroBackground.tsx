import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 -z-30 bg-[#050505]" />

      {/* Noise */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          backgroundSize: "220px",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Top Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[-280px] -translate-x-1/2 h-[760px] w-[760px] rounded-full bg-[#ff2b2b] blur-[180px]"
      />

      {/* Left Ambient */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-40 h-[520px] w-[520px] rounded-full bg-red-600 blur-[170px]"
      />

      {/* Right Ambient */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 bottom-0 h-[480px] w-[480px] rounded-full bg-red-500 blur-[170px]"
      />

      {/* Center Spotlight */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(5,5,5,.15) 40%, rgba(5,5,5,.92) 100%)",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 35%, rgba(0,0,0,.75) 100%)",
        }}
      />
    </>
  );
}