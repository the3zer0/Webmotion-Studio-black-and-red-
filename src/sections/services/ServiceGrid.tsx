import { useState } from "react";
import { services } from "../../data/services";
import { ServiceItem } from "./ServiceItem";

export function ServiceGrid() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-24 grid gap-16 lg:grid-cols-[1fr_520px]">
      {/* Left Side */}

      <div>
        {services.map((service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setActive(index)}
          >
            <ServiceItem
              id={service.id}
              title={service.title}
              short={service.short}
              description={service.description}
              active={active === index}
              href={
                index === 0
                  ? "/graphics-design"
                  : index === 1
                  ? "/video-editing"
                  : "/web-development"
              }
            />
          </div>
        ))}
      </div>

      {/* Right Preview */}

      <div className="sticky top-32 hidden h-fit lg:block">
        <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] p-8">

          {/* Glow */}

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#ff2b2b]/15 blur-[120px]" />

          <div className="relative z-10">

            <p className="text-xs uppercase tracking-[0.35em] text-[#ff2b2b]">
              LIVE PREVIEW
            </p>

            <h3 className="mt-5 font-display text-4xl text-white">
              {services[active].previewTitle}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {services[active].previewText}
            </p>

            {/* Preview Window */}

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

              {/* Browser Bar */}

              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="p-4">

                {/* Graphic Design */}

                {active === 0 && (
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/graphics-project/graphics.jpg"
                      alt="Graphic Design Preview"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}

                {/* Video Editing */}

                {active === 1 && (
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/video.png"
                      alt="Video Editing Preview"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}

                {/* Web Development */}

                {active === 2 && (
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/web/web.png"
                      alt="Web Development Preview"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}