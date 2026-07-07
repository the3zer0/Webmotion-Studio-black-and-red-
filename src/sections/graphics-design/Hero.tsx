const stats = [
  {
    value: "351+",
    label: "Projects Completed",
  },
  {
    value: "62+",
    label: "Logo Designs",
  },
  {
    value: "120+",
    label: "Print Designs",
  },
  {
    value: "100+",
    label: "Thumbnail Designs",
  },
  {
    value: "69+",
    label: "Social Media Posts",
  },
];

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#111111]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff2b2b]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#ff2b2b] uppercase tracking-[0.35em] text-sm mb-6">
            LOGO DESIGN • PRINT DESIGN • THUMBNAILS • SOCIAL MEDIA
          </p>

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-[#ff2b2b]/20
              to-[#ff2b2b]/10
              border
              border-[#ff2b2b]/30
              mb-10
            "
          >
            <span className="text-[#ff2b2b] text-xl">✦</span>

            <span className="text-white text-lg md:text-xl font-bold">
              6+ Years Experience • 351+ Projects Completed
            </span>
          </div>

          <h1 className="text-[3.5rem] md:text-[6.5rem] leading-[0.9] font-bold text-white">
            DESIGNS THAT
            <br />
            <span className="bg-gradient-to-r from-[#ff2b2b] to-[#ff2b2b] bg-clip-text text-transparent">
              BUILD BRANDS
            </span>
            <br />
            AND CAPTURE
            <br />
            ATTENTION.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            With 6+ years of experience and over 351 completed projects, we help
            businesses, creators, and organizations stand out through strategic
            logo design, print materials, social media creatives, and
            high-converting thumbnails.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-[#ff2b2b]
                to-[#ff2b2b]
                text-white
                font-semibold
                shadow-[0_0_25px_rgba(255,107,53,0.25)]
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(255,107,53,0.4)]
                transition-all
                duration-300
              "
            >
              Start Project
            </a>

            <a
              href="#projects"
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                text-white
                font-semibold
                hover:border-[#ff2b2b]/50
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              View Portfolio
            </a>

            <a
              href="/resume/graphics-designer-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                text-white
                font-semibold
                hover:border-[#ff2b2b]/50
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              View Resume
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-20">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-bold text-[#ff2b2b]">
                  {stat.value}
                </h3>

                <p className="text-zinc-500 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}