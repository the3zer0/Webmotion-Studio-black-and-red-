
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

              <div className="p-6">

                {/* Graphic Design */}

                {active === 0 && (
                  <div className="space-y-4">

                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-xl bg-[#ff2b2b]/15" />
                      <div className="h-16 rounded-xl bg-white/5" />
                      <div className="h-16 rounded-xl bg-white/5" />
                    </div>

                    <div className="h-24 rounded-2xl bg-white/5" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-28 rounded-2xl bg-[#ff2b2b]/10" />
                      <div className="h-28 rounded-2xl bg-white/5" />
                    </div>

                  </div>
                )}

                {/* Video Editing */}

                {active === 1 && (
                  <div className="space-y-4">

                    <div className="h-24 rounded-2xl bg-white/5" />

                    <div className="flex gap-2">
                      <div className="h-10 flex-1 rounded-xl bg-[#ff2b2b]/20" />
                      <div className="h-10 flex-1 rounded-xl bg-white/5" />
                      <div className="h-10 flex-1 rounded-xl bg-white/5" />
                    </div>

                    <div className="h-20 rounded-2xl bg-white/5" />

                  </div>
                )}

                {/* Web Development */}

                {active === 2 && (
                  <div className="space-y-4">

                    <div className="h-14 rounded-xl bg-white/5" />

                    <div className="h-32 rounded-2xl bg-[#ff2b2b]/10" />

                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                      <div className="h-12 rounded-xl bg-white/5" />
                    </div>

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

