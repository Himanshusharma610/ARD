import { technologies } from "../data";

const allTechs = [...technologies, ...technologies];

export default function TechMarquee() {
  return (
    <section className="bg-[#070d1a] py-16 overflow-hidden border-y border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-xs text-gray-600 uppercase tracking-widest font-semibold">
          Technologies & Tools We Use
        </p>
      </div>
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#070d1a] to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#070d1a] to-transparent pointer-events-none" />

        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {allTechs.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-gray-400 text-sm font-medium shrink-0 hover:border-yellow-500/40 hover:text-yellow-300 transition-colors duration-200 cursor-default"
            >
              <span className="text-yellow-500 text-xs">◈</span>
              {tech}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
