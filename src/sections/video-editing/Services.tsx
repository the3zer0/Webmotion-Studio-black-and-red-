const services = [
  {
    title: "Short Form Content",
    description:
      "High-retention edits for Reels, Shorts, and TikTok designed to stop the scroll.",
    icon: "/shorts.png",
  },
  {
    title: "Podcast Editing",
    description:
      "Multi-camera podcast edits with motion graphics, subtitles, and engaging pacing.",
    icon: "/pd.png",
  },
  {
    title: "Motion Graphics",
    description:
      "Dynamic animations, typography, and visual effects that elevate your content.",
    icon: "/motion.png",
  },
  {
    title: "YouTube Videos",
    description:
      "Long-form content optimized for watch time, storytelling, and audience retention.",
    icon: "/play.png",
  },
  {
    title: "Commercial Ads",
    description:
      "Conversion-focused ads crafted for brands, products, and marketing campaigns.",
    icon: "/ads.png",
  },
  {
    title: "Personal Branding",
    description:
      "Content systems that help creators and founders build authority online.",
    icon: "/personalbranding.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Do
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            From short-form content to cinematic commercials, every edit is
            built to capture attention and drive results.
          </p>
        </div>

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
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#ff2b2b]/50
                hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]
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
                    w-[34px]
                    h-[34px]
                    object-contain
                    brightness-0
                    invert
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