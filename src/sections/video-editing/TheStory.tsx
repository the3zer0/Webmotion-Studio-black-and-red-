export default function TheStory() {
  const storyParagraphs = [
    {
      title: 'Crafting Motion, Telling Stories',
      content:
        'Every frame matters. We create high-retention YouTube videos, commercials, and short-form content designed to stop the scroll and hold attention.',
    },
    {
      title: 'The Process',
      content:
        'From raw footage to final delivery, every project is built around pacing, emotion, and viewer psychology. Editing, sound design, and motion graphics work together to create memorable content.',
    },
    {
      title: 'The Philosophy',
      content:
        'Great editing is not about flashy transitions. It is about making people feel something and turning attention into engagement.',
    },
  ]

  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            {storyParagraphs.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#ff2b2b]/40 pl-6"
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-[#ff2b2b] text-sm tracking-widest">
                01
              </span>

              <h4 className="text-2xl font-bold mt-3 mb-3">
                Discovery
              </h4>

              <p className="text-zinc-400">
                Understanding your audience, goals, and content strategy.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-[#ff2b2b] text-sm tracking-widest">
                02
              </span>

              <h4 className="text-2xl font-bold mt-3 mb-3">
                Editing & Motion
              </h4>

              <p className="text-zinc-400">
                Building visuals, pacing, sound design, and storytelling.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-[#ff2b2b] text-sm tracking-widest">
                03
              </span>

              <h4 className="text-2xl font-bold mt-3 mb-3">
                Delivery
              </h4>

              <p className="text-zinc-400">
                Optimized exports ready for YouTube, Reels, Shorts, and Ads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}