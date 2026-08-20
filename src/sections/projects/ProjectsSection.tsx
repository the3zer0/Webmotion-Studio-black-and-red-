import { ProjectGrid } from "./ProjectGrid";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 sm:px-6 py-16 md:py-40 lg:px-12"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ff2b2b]/5 blur-[180px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="max-w-4xl">

          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff2b2b]">
            SELECTED WORK
          </p>

          <h2 className="font-display text-3xl sm:text-5xl leading-none text-white md:text-7xl">
            Creative work
            <br />
            <span className="text-[#ff2b2b]">
              built to perform.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Explore selected projects in video editing, graphic design,
            and web development — crafted to build stronger brands,
            capture attention, and turn ideas into impactful digital
            experiences.
          </p>

        </div>

        <ProjectGrid />
      </div>
    </section>
  );
}