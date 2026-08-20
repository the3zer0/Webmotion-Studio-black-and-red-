import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  layout: "left" | "right";
}

export function FeaturedProject({
  id,
  category,
  title,
  description,
  image,
  tags,
  href,
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

        <Link to={href}>
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

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff2b2b]/15 via-transparent to-transparent" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff2b2b]/10 blur-[120px]" />

            {/* Browser Preview */}

            <div className="relative h-[500px] p-6">
              {/* Browser Dots */}

              <div className="flex gap-2 border-b border-white/10 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* Image */}

              <div className="relative mt-6 h-[405px] overflow-hidden rounded-3xl border border-white/10 bg-black">
                <img
                  src={image}
                  alt={`${title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Hover Icon */}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff2b2b] shadow-[0_0_40px_rgba(255,43,43,0.35)]">
                    <ExternalLink
                      size={26}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Content */}

        <div className="relative">
          {/* Project Number */}

          <span className="absolute -left-4 -top-16 font-display text-[8rem] leading-none text-white/[0.03]">
            {id}
          </span>

          {/* Category */}

          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            {category}
          </p>

          {/* Title */}

          <h3 className="font-display text-5xl leading-none text-white md:text-6xl">
            {title}
          </h3>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            {description}
          </p>

          {/* Tags */}

          <div className="mt-8 flex max-w-xl flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400 transition-colors duration-300 hover:border-[#ff2b2b]/30 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}

          <Link
            to={href}
            className="group mt-10 inline-flex items-center gap-3 text-white transition-colors hover:text-[#ff2b2b]"
          >
            View Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}