import { useState } from "react";
import { events } from "../data";

const allTags = ["All", "Robotics", "Drone", "Hackathon", "Workshop", "IoT", "Competition"];

export default function Events() {
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeTag === "All"
      ? events
      : events.filter((e) => e.tags.includes(activeTag));

  return (
    <section id="events" className="bg-[#070d1a] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-widest">
            Events & Initiatives
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Discover{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Amazing Events
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From high-speed drone races to intense robotics battles — explore our
            events and find your next challenge.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-blue-500/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <div
              key={event.id}
              className="group rounded-2xl overflow-hidden border border-blue-500/15 bg-[#0a1628] hover:border-yellow-500/35 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x300/0d1a2d/f59e0b?text=ARD+Event";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold">
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {event.title}
                </h3>
                <p
                  className={`text-gray-400 text-sm leading-relaxed flex-1 ${
                    expanded === event.id ? "" : "line-clamp-3"
                  }`}
                >
                  {event.description}
                </p>
                <button
                  onClick={() =>
                    setExpanded(expanded === event.id ? null : event.id)
                  }
                  className="text-blue-400 text-xs mt-2 hover:text-blue-300 transition-colors font-medium self-start"
                >
                  {expanded === event.id ? "Show less ↑" : "Read more ↓"}
                </button>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <div className="text-5xl mb-4"></div>
            <p className="text-lg">No events found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
