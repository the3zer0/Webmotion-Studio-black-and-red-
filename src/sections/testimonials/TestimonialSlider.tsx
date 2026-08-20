import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

import { testimonials } from "../../data/testimonials";

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  /* ================= SAFETY ================= */

  if (!total) {
    return null;
  }

  const testimonial = testimonials[active];

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-[#090909]
        p-8
        md:p-14
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-[#ff2b2b]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-56
          w-56
          rounded-full
          bg-[#ff2b2b]/5
          blur-[120px]
        "
      />

      <div className="relative">

        {/* ================= TOP ================= */}

        <div className="mb-8 flex items-center justify-between">

          {/* Stars */}

          <div className="flex gap-1 text-sm tracking-widest text-[#ff2b2b]">
            ★★★★★
          </div>

          {/* Counter */}

          <div className="text-xs tracking-[0.3em] text-gray-600">
            {String(active + 1).padStart(2, "0")}
            {" / "}
            {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* ================= PROGRESS ================= */}

        <div className="mb-12 h-[2px] w-full overflow-hidden bg-white/10">
          {!isPaused && (
            <motion.div
              key={active}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
              className="
                h-full
                bg-gradient-to-r
                from-[#ff2b2b]
                to-[#ff6b6b]
              "
            />
          )}
        </div>

        {/* ================= TESTIMONIAL ================= */}

        <AnimatePresence mode="wait">

          <motion.div
            key={`${active}-${testimonial.name}`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >

            {/* Quote Icon */}

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
              "
            >
              <Quote
                size={21}
                className="text-[#ff2b2b]"
              />
            </div>

            {/* Review */}

            <blockquote
              className="
                max-w-5xl
                text-2xl
                font-medium
                leading-relaxed
                tracking-tight
                text-white
                md:text-4xl
                lg:text-5xl
              "
            >
              "{testimonial.review}"
            </blockquote>

            {/* Author */}

            <div className="mt-12">

              <h4 className="text-lg font-semibold text-white">
                {testimonial.name}
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                {testimonial.role}
              </p>

            </div>

          </motion.div>

        </AnimatePresence>

        {/* ================= BOTTOM CONTROLS ================= */}

        <div className="mt-12 flex items-center justify-between">

          {/* Navigation Buttons */}

          <div className="flex gap-3">

            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-gray-400
                transition-all
                duration-300
                hover:border-[#ff2b2b]/50
                hover:bg-[#ff2b2b]/10
                hover:text-white
              "
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-gray-400
                transition-all
                duration-300
                hover:border-[#ff2b2b]/50
                hover:bg-[#ff2b2b]/10
                hover:text-white
              "
            >
              <ChevronRight size={19} />
            </button>

          </div>

          {/* Dot Navigation */}

          <div className="hidden items-center gap-2 sm:flex">

            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    active === index
                      ? "w-8 bg-[#ff2b2b]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }
                `}
              />
            ))}

          </div>

          {/* Current Number */}

          <div className="text-xs uppercase tracking-[0.25em] text-gray-600">
            Client Stories
          </div>

        </div>

      </div>
    </div>
  );
}