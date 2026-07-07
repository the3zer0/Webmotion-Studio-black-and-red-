import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setActive(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prev = () => {
    setActive(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const testimonial = testimonials[active];

  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#090909] p-10 md:p-14">
      {/* Glow */}

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ff2b2b]/10 blur-[140px]" />

      <div className="relative">
        {/* Stars */}

        <div className="mb-6 flex gap-1 text-[#ff2b2b]">
          ★★★★★
        </div>

        {/* Progress Bar */}

        <div className="mb-12 h-[3px] w-full overflow-hidden bg-white/10">
          <motion.div
            key={active}
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="h-full bg-gradient-to-r from-[#ff2b2b] to-[#ff6b6b]"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.4,
            }}
          >
            {/* Quote Mark */}

            <div className="mb-6 font-display text-[10rem] leading-none text-[#ff2b2b]/20">
              "
            </div>

            {/* Review */}

            <blockquote className="max-w-4xl font-display text-3xl leading-relaxed text-white md:text-6xl">
              {testimonial.review}
            </blockquote>

            {/* Author */}

            <div className="mt-14">
              <h4 className="text-xl font-medium text-white">
                {testimonial.name}
              </h4>

              <p className="mt-2 text-gray-500">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}

        <div className="mt-14 flex gap-3">
          <button
            onClick={prev}
            className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[#ff2b2b]/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Counter */}

        <div className="absolute bottom-0 right-0 text-sm tracking-[0.3em] text-gray-500">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}