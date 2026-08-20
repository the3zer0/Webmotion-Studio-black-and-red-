import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  description?: string;
  items: FAQItem[];
}

export default function Accordion({
  title = "Frequently Asked Questions",
  description = "Everything you need to know before starting your project.",
  items,
}: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#111111] px-6 py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff2b2b]/5 blur-[180px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#ff2b2b]">
            FAQ
          </p>

          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            {description}
          </p>
        </div>

        {/* FAQ Items */}

        <div className="space-y-4">
          {items.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#ff2b2b]/40 bg-[#ff2b2b]/[0.03]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {/* Question */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-7"
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 md:text-xl ${
                      isOpen
                        ? "text-white"
                        : "text-gray-200"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#ff2b2b]/40 bg-[#ff2b2b]/10 text-[#ff2b2b]"
                        : "border-white/10 text-gray-400"
                    }`}
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-white/10 px-6 pb-7 pt-5 text-base leading-8 text-gray-400 md:px-7">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}