'use client'


const packages = [
  {
    tier: 'Basic',
    price: 69,
    description:
      'Professional website for startups, personal brands, and small businesses looking to establish a strong online presence.',
    badge: null,
  },
  {
    tier: 'Standard',
    price: 149,
    description:
      'Conversion-focused website with SEO optimization, lead generation features, and scalable structure for growing businesses.',
    badge: 'Most Popular',
  },
  {
    tier: 'Premium',
    price: 299,
    description:
      'Advanced web applications with dashboards, authentication, databases, APIs, and custom business functionality.',
    badge: null,
  },
]

const featureRows = [
  {
    label: 'Pages',
    values: ['Up to 3', 'Up to 8', 'Unlimited'],
  },
  {
    label: 'Custom Design',
    values: ['✓', '✓', '✓'],
  },
  {
    label: 'Mobile Responsive',
    values: ['✓', '✓', '✓'],
  },
  {
    label: 'Contact Form',
    values: ['✓', '✓', '✓'],
  },
  {
    label: 'SEO Optimization',
    values: ['Basic', 'Advanced', 'Advanced'],
  },
  {
    label: 'WhatsApp Integration',
    values: ['✓', '✓', '✓'],
  },
  {
    label: 'Google Maps',
    values: ['×', '✓', '✓'],
  },
  {
    label: 'Blog Setup',
    values: ['×', '✓', '✓'],
  },
  {
    label: 'CMS Integration',
    values: ['×', '✓', '✓'],
  },
  {
    label: 'Analytics Setup',
    values: ['×', '✓', '✓'],
  },
  {
    label: 'Performance Score',
    values: ['90+', '95+', '95+'],
  },
  {
    label: 'Speed Optimization',
    values: ['✓', '✓', '✓'],
  },
  {
    label: 'Content Upload',
    values: ['×', '✓', '✓'],
  },
  {
    label: 'Database Integration',
    values: ['×', '×', '✓'],
  },
  {
    label: 'Authentication',
    values: ['×', '×', '✓'],
  },
  {
    label: 'Admin Dashboard',
    values: ['×', '×', '✓'],
  },
  {
    label: 'API Integration',
    values: ['×', '×', '✓'],
  },
  {
    label: 'Payment Gateway',
    values: ['×', '×', '✓'],
  },
  {
    label: 'Priority Support',
    values: ['×', '✓', '✓'],
  },
  {
    label: 'Revisions',
    values: ['2', '4', 'Unlimited'],
  },
  {
    label: 'Delivery Time',
    values: ['3–5 Days', '5–7 Days', '7–10 Days'],
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 px-6 bg-[#151515]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Package Comparison
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your Website Package
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto">
            Flexible website development packages
            designed for startups, businesses,
            and growing brands.
          </p>
        </div>

        {/* Packages */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.tier}
              className={`
                relative
                rounded-[2rem]
                p-8
                border
                transition-all
                duration-300
                ${
                  pkg.badge
                    ? 'border-[#ff2b2b] shadow-[0_0_40px_rgba(255,43,43,0.2)]'
                    : 'border-white/10'
                }
                bg-white/[0.03]
              `}
            >
              {pkg.badge && (
                <div
                  className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    px-4
                    py-1
                    rounded-b-xl
                    bg-[#ff2b2b]
                    text-white
                    text-xs
                    font-bold
                  "
                >
                  MOST POPULAR
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8">
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-[#ff2b2b] text-xl">
                    $
                  </span>

                  <span className="text-6xl font-bold text-white">
                    {pkg.price}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">
                  {pkg.tier}
                </h3>

                <p className="text-zinc-400">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {featureRows.map((row) => {
                  const value = row.values[index]

                  return (
                    <div
                      key={row.label}
                      className="
                        flex
                        justify-between
                        items-center
                        border-b
                        border-white/5
                        pb-3
                      "
                    >
                      <span className="text-zinc-400 text-sm">
                        {row.label}
                      </span>

                      <span
                        className={`
                          text-sm
                          font-medium
                          ${
                            value === '✓'
                              ? 'text-green-400'
                              : value === '×'
                              ? 'text-red-400'
                              : 'text-white'
                          }
                        `}
                      >
                        {value}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
             <a
  href={`https://wa.me/8801805768267?text=${encodeURIComponent(
  `Hello, I'm interested in the ${pkg.tier} website package and I'd like to discuss my project.`
)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-full
    py-4
    rounded-xl
    bg-gradient-to-r
    from-[#ff2b2b]
    to-[#ff2b2b]
    text-white
    font-semibold
    flex
    items-center
    justify-center
    hover:scale-105
    transition-all
    duration-300
  "
>
  Start Your Project →
</a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-[#ff2b2b]/10
            to-[#ff2b2b]/10
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Every business is unique. If your
            requirements don't fit any package,
            we'll create a custom proposal tailored
            to your goals and budget.
          </p>

          <a
            href={`https://wa.me/8801805768267?text=${encodeURIComponent(
              `Hello, I'm interested in a custom website development solution. I'd like to discuss my project requirements.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              px-8
              py-4
              rounded-full
              bg-[#ff2b2b]
              text-white
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Let's Discuss Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}