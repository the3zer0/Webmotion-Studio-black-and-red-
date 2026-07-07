import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  id: string;
  category: string;
  title: string;
  description: string;
  layout: "left" | "right";
}

export function FeaturedProject({
  id,
  category,
  title,
  description,
  layout,
}: Props) {
  const reverse = layout === "right";

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="border-b border-white/10 py-28"
    >
      <div
        className={`grid items-center gap-20 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Preview */}

        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909]"
        >
          {/* Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2b2b]/15 via-transparent to-transparent" />

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2b2b]/10 blur-[120px]" />

          <div className="relative h-[500px] p-8">
            {/* Browser Dots */}

            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            {/* Placeholder Preview */}

            <div className="mt-10 rounded-3xl border border-white/5 bg-white/[0.02] p-6">
              <div className="h-12 rounded-xl bg-white/[0.03]" />

              <div className="mt-6 h-52 rounded-2xl bg-[#ff2b2b]/10" />

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="h-12 rounded-xl bg-white/[0.03]" />
                <div className="h-12 rounded-xl bg-white/[0.03]" />
                <div className="h-12 rounded-xl bg-white/[0.03]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}

        <div className="relative">
          <span className="absolute -left-4 -top-16 font-display text-[8rem] leading-none text-white/[0.03]">
            {id}
          </span>

          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            {category}
          </p>

          <h3 className="font-display text-5xl leading-none text-white md:text-6xl">
            {title}
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            {description}
          </p>

          <button className="group mt-10 flex items-center gap-3 text-white transition-colors hover:text-[#ff2b2b]">
            View Case Study

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}