import { motion } from "framer-motion";
import { FeatureGrid } from "./FeatureGrid";

export function WhyChooseUsSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 lg:px-12"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#ff2b2b]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ff2b2b]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#ff2b2b]">
            WHY WEBMOTION
          </p>

          <h2 className="mb-8 text-5xl font-bold text-white md:text-7xl">
            More Than a Service.
            <br />
            A Creative Partner.
          </h2>

          <p className="max-w-3xl text-lg leading-8 text-gray-400">
            Webmotion Studio helps creators, businesses, and brands build a
            powerful digital presence through strategic design, modern web
            development, and engaging video content that drives real results.
          </p>
        </motion.div>

        <div className="mb-24 grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold text-[#ff2b2b]">55+</h3>
            <p className="mt-3 text-gray-400">
              Projects Delivered
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">20+</h3>
            <p className="mt-3 text-gray-400">
              Brands Worked With
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#ff2b2b]">3M+</h3>
            <p className="mt-3 text-gray-400">
              Views Generated
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-white">98%</h3>
            <p className="mt-3 text-gray-400">
              Client Satisfaction
            </p>
          </div>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
}