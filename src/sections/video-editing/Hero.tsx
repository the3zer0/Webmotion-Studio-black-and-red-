import { useEffect, useRef } from "react";

const stats = [
  { value: "55+", label: "Projects Delivered" },
  { value: "20+", label: "Brands Worked With" },
  { value: "3M+", label: "Views Generated" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  const playerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current;

        if (!iframe) return;

        iframe.contentWindow?.postMessage(
          JSON.stringify({
            event: "command",
            func: entry.isIntersecting ? "playVideo" : "pauseVideo",
          }),
          "*"
        );
      },
      {
        threshold: 0.5,
      }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#111111] py-24 lg:py-32"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#ff2b2b]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#ff2b2b] uppercase tracking-[0.3em] text-sm font-medium">
              VIDEO EDITING • MOTION DESIGN • STORYTELLING
            </span>

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-[#ff2b2b]/20
                to-[#ff2b2b]/10
                border
                border-[#ff2b2b]/30
                mt-6
                mb-8
              "
            >
              <span className="text-[#ff2b2b] text-xl">✦</span>

              <span className="text-white font-semibold">
                1.5+ Years Experience • 55+ Creative Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] text-white">
              CINEMATIC
              <br />
              <span className="bg-gradient-to-r from-[#ff2b2b] to-white bg-clip-text text-transparent">
                EDITS.
              </span>
            </h1>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
              We create cinematic edits, branded content, and high-retention
              videos designed to stop the scroll, hold attention, and turn
              viewers into loyal audiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-[#ff2b2b]
                  text-white
                  font-semibold
                  hover:scale-105
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
                  transition-all
                  duration-300
                "
              >
                View Portfolio
              </a>

              <a
                href="/resume/video-editor-resume.pdf"
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
                  transition-all
                  duration-300
                "
              >
                View Resume
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-[#ff2b2b]">
                    {stat.value}
                  </h3>

                  <p className="text-zinc-500 text-sm mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div
              ref={playerRef}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-black
                shadow-[0_0_50px_rgba(255,43,43,0.15)]
              "
            >
              <iframe
                ref={iframeRef}
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/HnvYalV-BOU?enablejsapi=1&autoplay=1&mute=1&controls=1&loop=1&playlist=HnvYalV-BOU&rel=0&modestbranding=1"
                title="Featured Work"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-6">
              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-[#ff2b2b]/10
                  border
                  border-[#ff2b2b]/20
                  text-[#ff2b2b]
                  text-sm
                  font-medium
                "
              >
                Featured Project
              </span>

              <div
                className="
                  mt-4
                  p-6
                  rounded-3xl
                  bg-white/[0.03]
                  border
                  border-white/10
                "
              >
                <p className="text-[#ff2b2b] text-xs tracking-[0.2em] uppercase mb-3">
                  Featured Work
                </p>

                <h3 className="text-white text-xl font-bold mb-3">
                  Podcast On Client Hunting
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  A cinematic short-form podcast edit focused on retention,
                  storytelling, pacing, subtitles, and motion graphics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}