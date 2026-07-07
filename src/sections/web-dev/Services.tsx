'use client'

const services = [
  {
    title: 'Landing Pages',
    description:
      'High-converting landing pages built to generate leads and drive sales.',
    icon: '/web/globe.svg',
  },
  {
    title: 'Business Websites',
    description:
      'Professional websites that establish trust and strengthen your online presence.',
    icon: '/web/briefcase.svg',
  },
  {
    title: 'Portfolio Websites',
    description:
      'Showcase your work through modern, visually engaging portfolio experiences.',
    icon: '/web/user.svg',
  },
  {
    title: 'E-Commerce Stores',
    description:
      'Conversion-focused online stores optimized for growth and performance.',
    icon: '/web/shopping-cart.svg',
  },
  {
    title: 'Web Applications',
    description:
      'Custom web solutions tailored to your business and workflow requirements.',
    icon: '/web/monitor.svg',
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated websites into fast, modern, and user-friendly experiences.',
    icon: '/web/refresh.svg',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We Build
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Every website is designed with performance,
            user experience, and business growth in mind.
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
                hover:border-[#ff2b2b]/40
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(255,107,53,0.12)]
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
                  width={52}
                  height={52}
                  className="
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
  )
}