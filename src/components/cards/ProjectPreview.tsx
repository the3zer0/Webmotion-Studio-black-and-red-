import { motion } from 'framer-motion';

type ProjectPreviewProps = {
  accent: string;
  index: number;
  title: string;
};

export function ProjectPreview({ accent, index, title }: ProjectPreviewProps) {
  const mirrored = index % 2 === 1;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${mirrored ? 'lg:order-2' : ''}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.65))]" />
      <div className="relative rounded-[1.6rem] border border-white/10 bg-[#060606] p-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">Creative Preview</p>
            <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
          </div>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-white/12" />
            <span className="h-3 w-3 rounded-full bg-white/12" />
            <span className="h-3 w-3 rounded-full bg-[#ff2b2b]" />
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0b0b0b] p-5">
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.02)_70%)]" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              className="relative h-full rounded-[1.2rem] border border-white/8 bg-[radial-gradient(circle_at_20%_20%,rgba(255,43,43,0.3),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.15),transparent_18%),linear-gradient(160deg,#101010,#050505)] p-4"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff2b2b]/90 shadow-[0_0_18px_rgba(255,43,43,0.7)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gray-300">
                    Live
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-32 rounded-full bg-white/20" />
                  <div className="h-2 w-44 rounded-full bg-white/10" />
                  <div className="grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((block) => (
                      <div key={block} className="h-20 rounded-2xl border border-white/10 bg-white/5" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-white/4 p-4 backdrop-blur-xl">
            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500">Impact</p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">+42%</p>
              <p className="mt-1 text-sm text-gray-400">Lift in attention and interaction through the redesigned experience.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500">Style</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-[radial-gradient(circle,#ff2b2b,transparent_70%)] shadow-glow" />
                <div>
                  <p className="font-medium text-white">Cinematic depth</p>
                  <p className="text-sm text-gray-400">Luxurious contrast, crisp edges, and layered light.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500">Motion</p>
                <span className="text-xs text-[#ff2b2b]">Smooth</span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/6">
                <div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,#ff2b2b,rgba(255,43,43,0.35))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
