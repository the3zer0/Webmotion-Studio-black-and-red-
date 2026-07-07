import { Award, Globe, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every project is crafted with attention to detail and a focus on long-term value.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description:
      "We combine creativity with strategy to create work that performs.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "We collaborate closely with clients to turn ideas into impactful results.",
  },
  {
    icon: Globe,
    title: "Worldwide Service",
    description:
      "Working with creators and businesses globally through a fully remote workflow.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#ff2b2b]/40
              hover:bg-white/[0.05]
            "
          >
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#ff2b2b]/10
                text-[#ff2b2b]
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              <Icon size={28} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="leading-relaxed text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}