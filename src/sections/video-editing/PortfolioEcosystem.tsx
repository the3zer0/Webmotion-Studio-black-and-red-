'use client'

import { useState } from 'react'

const projects = [
{
title: 'Typography in Motion',
category: 'Practice',
image: '/typo.png',
videoId: 'QozVu0nCeb8',
},
{
title: 'Typography',
category: 'Practice',
image: '/p.png',
videoId: 'ACrOPLjY4xA',
},
{
title: 'Podcast On Client Hunting',
category: 'Podcast',
image: '/client.png',
videoId: 'HnvYalV-BOU',
},
{
title: 'AI Advertising Short',
category: 'Advertising',
image: '/ai1.png',
videoId: 'ZfNsTScUwpU',
},
{
title: 'Cinematic Motion Graphics',
category: 'Practice',
image: '/time.png',
videoId: 'cvcJGoWiTXs',
},
{
title: 'Typography 2026',
category: 'Practice',
image: '/money.png',
videoId: '835u3xtpiyo',
},
]

export default function PortfolioEcosystem() {
const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

return (
<> <section
  id="projects"
  className="py-16 md:py-24 px-4 sm:px-6 bg-[#0a0a0a]"
> <div className="max-w-7xl mx-auto">


      <div className="mb-16 text-center">
        <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
          Featured Work
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Selected Projects
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Motion graphics, short-form content, podcasts,
          commercials and creative edits crafted to capture
          attention and keep audiences engaged.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <button
            key={project.title}
            onClick={() => setSelectedVideo(project.videoId)}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#ff2b2b]/60
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]
              text-left
            "
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#ff2b2b]
                    flex
                    items-center
                    justify-center
                    text-white
                    text-xl
                    shadow-lg
                    group-hover:scale-110
                    transition
                  "
                >
                  ▶
                </div>
              </div>
            </div>

            <div className="p-6">
              <span className="text-[#ff2b2b] text-sm uppercase tracking-wider">
                {project.category}
              </span>

              <h3 className="text-white text-xl font-semibold mt-3">
                {project.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>

  {selectedVideo && (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/90
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
      "
      onClick={() => setSelectedVideo(null)}
    >
      <div
        className="
          relative
          w-full
          max-w-6xl
          aspect-video
          rounded-3xl
          overflow-hidden
          bg-black
          border
          border-[#ff2b2b]/30
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedVideo(null)}
          className="
            absolute
            top-4
            right-4
            z-20
            w-10
            h-10
            rounded-full
            bg-black/70
            text-white
            hover:bg-[#ff2b2b]
            transition
          "
        >
          ✕
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
          title="Project Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )}
</>


)
}
