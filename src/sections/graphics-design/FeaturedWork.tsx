'use client'

import { useState } from 'react'

const projects = [
  // LOGO DESIGN
  {
    title: 'Assassin',
    category: 'Logo Design',
    image: '/graphics-project/logos/assassin.png',
  },
  {
    title: 'Bonko Cleaners',
    category: 'Logo Design',
    image: '/graphics-project/logos/bonko-cleaners.png',
  },
  {
    title: 'Hornet',
    category: 'Logo Design',
    image: '/graphics-project/logos/hornet.png',
  },
  {
    title: 'Community Links',
    category: 'Logo Design',
    image: '/graphics-project/logos/community-links.png',
  },
  {
    title: 'Haus Of Holders',
    category: 'Logo Design',
    image: '/graphics-project/logos/haus-of-holders.png',
  },
  {
    title: 'Inclusion Army',
    category: 'Logo Design',
    image: '/graphics-project/logos/inclusion-army.png',
  },
  {
    title: 'L Logo',
    category: 'Logo Design',
    image: '/graphics-project/logos/l-logo.png',
  },
  {
    title: 'Mr Icon',
    category: 'Logo Design',
    image: '/graphics-project/logos/mr-icon.png',
  },
  {
    title: 'Mrittika Builders Ltd',
    category: 'Logo Design',
    image: '/graphics-project/logos/mrittika-builders-ltd.png',
  },
  {
    title: 'Roof Of The World',
    category: 'Logo Design',
    image: '/graphics-project/logos/roof-of-the-world.png',
  },

  // PRINT DESIGN
  {
    title: 'Book Cover Collection',
    category: 'Print Design',
    image: '/graphics-project/print-design/book-cover-collection.jpg',
  },
  {
    title: 'BUET Admission Guide',
    category: 'Print Design',
    image: '/graphics-project/print-design/buet-admission-guide.jpg',
  },
  {
    title: 'Certificate Designs',
    category: 'Print Design',
    image: '/graphics-project/print-design/certificate-designs.jpg',
  },
  {
    title: 'Dhaka University Guide',
    category: 'Print Design',
    image: '/graphics-project/print-design/dhaka-university-guide.jpg',
  },
  {
    title: 'Promotional Creatives',
    category: 'Print Design',
    image: '/graphics-project/print-design/promotional-creatives.jpg',
  },

  // SOCIAL MEDIA
  {
    title: 'Social Media Posts',
    category: 'Social Media Design',
    image: '/graphics-project/print-design/social-media-posts.jpg',
  },

  // THUMBNAILS
  {
    title: "AR Khalifa's Method",
    category: 'Thumbnail Design',
    image: '/graphics-project/thumbnail/ar-khalifas-method.jpg',
  },
  {
    title: 'Partial Fraction',
    category: 'Thumbnail Design',
    image: '/graphics-project/thumbnail/partial.jpg',
  },
  {
    title: 'Reactions Endgame',
    category: 'Thumbnail Design',
    image: '/graphics-project/thumbnail/reactions.jpg',
  },
]

const filters = [
  'All',
  'Logo Design',
  'Print Design',
  'Thumbnail Design',
  'Social Media Design',
]

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        )

  return (
    <section
      id="projects"
      className="py-32 bg-[#151515]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* BIG EXPERIENCE BADGE */}
     <div className="flex justify-center mb-10">
  <div
    className="
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      rounded-full
      border
      border-[#ff2b2b]/30
      bg-gradient-to-r
      from-[#ff2b2b]/10
      to-[#ff2b2b]/10
      backdrop-blur-xl
    "
  >
    <span className="text-[#ff2b2b] text-lg font-bold">
      6+ Years Experienced
    </span>

    <span className="text-zinc-500">•</span>

    <span className="text-white text-lg font-bold">
      351+ Projects Completed
    </span>
  </div>
</div>

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured Work
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Logo Design, Print Design, Social Media Design and
            Thumbnail Projects created for brands, institutions
            and creators.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#ff2b2b] to-[#ff2b2b] text-white border-transparent'
                  : 'border-white/10 text-zinc-300 hover:border-[#ff2b2b]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedImage(project.image)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                hover:border-[#ff2b2b]/50
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                transition-all
                duration-300
              "
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#ff2b2b] text-sm uppercase tracking-[0.2em] mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h3>

          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Need logo design, print design, social media posts,
            or thumbnails? Let's build something exceptional.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#ff2b2b] to-[#ff2b2b] text-white font-semibold hover:scale-105 transition"
          >
            Start Your Project →
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center p-6 cursor-pointer"
        >
          <div className="relative w-full max-w-7xl h-[90vh]">
            <img
              src={selectedImage}
              alt="Preview"
              className="h-full w-full object-contain"
            />
          </div>

          <button className="absolute top-6 right-8 text-white text-5xl">
            ×
          </button>
        </div>
      )}
    </section>
  )
}