'use client'

import { useState } from 'react'

const projects = [
  {
    title: 'maowa.me',
    category: 'Creative Portfolio',
    image: '/projects/maowa-me.jpg',
    link: 'https://maowa.me',
    description:
      'Personal portfolio website built with React, Tailwind CSS, Framer Motion, and modern UI animations.',
  },
]

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)

  return (
    <section
      id="projects"
      className="py-16 md:py-32 px-4 sm:px-6 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Recent Projects
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Websites built to impress visitors,
            strengthen brands, and increase conversions.
          </p>
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-1 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="
                group
                cursor-pointer
                rounded-[2rem]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                hover:border-[#ff2b2b]/40
                transition-all
                duration-300
              "
            >
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Screenshot */}
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/50
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span className="text-white text-lg font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#ff2b2b] text-sm uppercase tracking-[0.2em] mb-2">
                  {project.category}
                </p>

                <h3 className="text-3xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="
            fixed
            inset-0
            z-[999]
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-6
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-6xl
              rounded-[2rem]
              overflow-hidden
              border
              border-white/10
              bg-[#151515]
            "
          >
            <div className="relative h-[70vh]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-8">
              <p className="text-[#ff2b2b] uppercase tracking-[0.2em] text-sm mb-3">
                {selectedProject.category}
              </p>

              <h3 className="text-4xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-zinc-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-8
                    py-4
                    rounded-full
                    bg-gradient-to-r
                    from-[#ff2b2b]
                    to-[#ff2b2b]
                    text-white
                    font-semibold
                  "
                >
                  Visit Live Site →
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white/15
                    text-white
                  "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}