import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  description: string;
}

export function ProcessCard({
  number,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
       y: -8,
       scale: 1.01,
      }}
      className="group relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] p-10 transition-all duration-300 hover:border-[#ff2b2b]/40 hover:shadow-[0_0_40px_rgba(255,43,43,0.08)]"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ff2b2b]/10 blur-[80px]" />

      <span className="font-display text-[5rem] text-white/10 transition-colors duration-300 group-hover:text-[#ff2b2b]/20">
       {number}
      </span>

      <div className="mt-8 h-px w-16 bg-[#ff2b2b]" />

      <h3 className="mt-8 font-display text-3xl text-white">
        {title}
      </h3>

      <p className="mt-6 max-w-md leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}