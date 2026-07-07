const services = [
  {
    title: "Brand Identity",
    description:
      "Logo systems, color palettes, typography, and visual guidelines that build memorable brands.",
    icon: "/brand.png",
  },
  {
    title: "Social Media Design",
    description:
      "High-performing social creatives designed to increase engagement and strengthen brand presence.",
    icon: "/social.png",
  },
  {
    title: "Advertising Creatives",
    description:
      "Conversion-focused ad designs crafted for campaigns, promotions, and product launches.",
    icon: "/ads.png",
  },
  {
    title: "Poster Design",
    description:
      "Modern poster concepts for events, brands, announcements, and promotional campaigns.",
    icon: "/poster.png",
  },
  {
    title: "Presentation Design",
    description:
      "Professional pitch decks and presentations that communicate ideas clearly and confidently.",
    icon: "/chart.png",
  },
  {
    title: "Marketing Assets",
    description:
      "Consistent visual materials that support growth across digital and print channels.",
    icon: "/activity.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Design
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Every visual is built with strategy, creativity,
            and brand consistency in mind.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-[#ff2b2b]/40
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(255,43,43,0.12)]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#ff2b2b]
                  to-[#ff2b2b]
                  flex
                  items-center
                  justify-center
                  mb-6
                "
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="
                    w-8
                    h-8
                    object-contain
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}