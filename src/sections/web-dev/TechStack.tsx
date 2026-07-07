
'use client'

import { useState } from 'react'

const techStacks = {
  frontend: [
    {
      name: 'Next.js',
      description: 'Production-Ready React Framework',
      icon: '/web/nextjs.svg',
    },
    {
      name: 'React',
      description: 'Interactive User Interfaces',
      icon: '/web/react.svg',
    },
    {
      name: 'TypeScript',
      description: 'Type-Safe Development',
      icon: '/web/typescript.svg',
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-First Styling',
      icon: '/web/tailwind-css.svg',
    },
    {
      name: 'Framer Motion',
      description: 'Smooth UI Animations',
      icon: '/web/framer.svg',
    },
  ],

  backend: [
    {
      name: 'Node.js',
      description: 'Scalable Backend Development',
      icon: '/web/node-js.svg',
    },
    {
      name: 'Express.js',
      description: 'Fast & Flexible APIs',
      icon: '/web/express-js.svg',
    },
    {
      name: 'REST API',
      description: 'Custom API Integration',
      icon: '/web/rest-api.svg',
    },
    {
      name: 'Authentication',
      description: 'Secure User Systems',
      icon: '/web/authentication.svg',
    },
  ],

  database: [
    {
      name: 'MongoDB',
      description: 'Modern NoSQL Database',
      icon: '/web/mongodb.svg',
    },
    {
      name: 'PostgreSQL',
      description: 'Relational Database',
      icon: '/web/postgresql.svg',
    },
    {
      name: 'Firebase',
      description: 'Realtime Backend Services',
      icon: '/web/firebase.svg',
    },
    {
      name: 'Supabase',
      description: 'Open Source Backend Platform',
      icon: '/web/icons8-supabase-240.png',
    },
  ],

  deployment: [
    {
      name: 'Vercel',
      description: 'Modern Hosting Platform',
      icon: '/web/vercel.svg',
    },
    {
      name: 'GitHub',
      description: 'Version Control & Collaboration',
      icon: '/web/github.svg',
    },
    {
      name: 'Cloudflare',
      description: 'Performance & Security',
      icon: '/web/cloudflare.svg',
    },
    {
      name: 'Domain Setup',
      description: 'Launch Ready Websites',
      icon: '/web/domain.svg',
    },
  ],
}



export default function TechStack() {
  const [activeTab, setActiveTab] =
    useState<
      'frontend' |
      'backend' |
      'database' |
      'deployment'
    >('frontend')

  return (
    <section className="py-32 px-6 bg-[#151515]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Technology Stack
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Full Stack Development
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            From frontend interfaces to backend systems,
            databases, and deployment — we build complete
            digital products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            {
              id: 'frontend',
              label: 'Frontend',
            },
            {
              id: 'backend',
              label: 'Backend',
            },
            {
              id: 'database',
              label: 'Database',
            },
            {
              id: 'deployment',
              label: 'Deployment',
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as
                    | 'frontend'
                    | 'backend'
                    | 'database'
                    | 'deployment'
                )
              }
              className={`
                px-6 py-3 rounded-full
                transition-all duration-300
                ${
                  activeTab === tab.id
                    ? 'bg-[#ff2b2b] text-white font-semibold'
                    : 'bg-white/5 text-zinc-400'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {techStacks[activeTab].map((tech) => (
            <div
              key={tech.name}
              className="
                group
                relative
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-[#ff2b2b]/40
                hover:-translate-y-2
                hover:shadow-[0_0_50px_rgba(255,107,53,0.15)]
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-20
                  h-20
                  rounded-3xl
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
                  src={tech.icon}
                  alt={tech.name}
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {tech.name}
              </h3>

              <p className="text-zinc-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              95+
            </h3>
            <p className="text-zinc-500">
              Performance Score
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              100%
            </h3>
            <p className="text-zinc-500">
              Mobile Responsive
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              SEO
            </h3>
            <p className="text-zinc-500">
              Optimized Structure
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#ff2b2b] mb-3">
              Full
            </h3>
            <p className="text-zinc-500">
              Stack Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

