import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  id: string;
  title: string;
  short: string;
  description: string;
  active?: boolean;
}

export function ServiceItem({
  id,
  title,
  short,
  description,
  active = false,
}: Props) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      className={`relative group cursor-pointer border-b py-12 transition-all duration-500 ${
  active
    ? "border-[#ff2b2b]/40 bg-[#ff2b2b]/[0.03]"
    : "border-white/10"
}`}
    >
      {/* Hover Glow */}

      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl blur-[120px] transition-opacity duration-500 ${
          active
            ? "opacity-15"
            : "opacity-0"
        } bg-[#ff2b2b]`}
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[110px_1fr_60px]">
        
        {/* Number */}

        <span
          className={`font-display text-3xl transition-all duration-300 ${
            active
              ? "text-[#ff2b2b]"
              : "text-gray-500"
          }`}
        >
          {id}
        </span>

        {/* Content */}

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gray-500">
            {short}
          </p>

          <h3
            className={`font-display text-4xl transition-all duration-300 ${
              active
                ? "text-white"
                : "text-gray-300"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-5 max-w-xl leading-8 transition-all duration-300 ${
              active
                ? "text-gray-300"
                : "text-gray-500"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Arrow */}

        <div className="flex items-start justify-end">
          <ArrowUpRight
            size={28}
            className={`transition-all duration-300 ${
              active
                ? "translate-x-2 text-[#ff2b2b]"
                : "text-gray-500"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}