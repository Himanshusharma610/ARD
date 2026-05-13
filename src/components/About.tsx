import { missions } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-[#0a1628] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Who We{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Are
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The Amity Robotics & Drone Club was born from a simple yet powerful idea: students should never be left behind in the rapidly evolving world of robotics, automation, and drone technology.
          </p>
        </div>

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Our{" "}
              <span className="text-yellow-400">Mission</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              We believe that hands-on experience in robotics and drone technology can transform how students approach engineering and problem-solving. Our platform empowers students to build real robots, design autonomous drones, and receive mentorship that helps them grow both technically and professionally.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're building a community where innovation thrives and every member can reach their full potential. From RoboWars to drone racing, from IoT projects to 3D printed prototypes — we cover it all.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Robotics", "Drone Tech", "IoT", "Automation"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-300 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-[#070d1a] p-8 space-y-6">
              <div className="text-6xl text-center"></div>
              <h4 className="text-xl font-bold text-white text-center">
                From the Desk of HOI
              </h4>
              <blockquote className="text-gray-400 italic text-center leading-relaxed text-sm">
                "At Amity Robotics & Drone Club, we believe that innovation and
                collaboration are the cornerstones of success in today's
                fast-evolving tech world. We encourage every student to
                explore robotics, drones, and automation without limits,
                fostering a culture where ideas turn into impactful solutions."
              </blockquote>
              <div className="text-center">
                <div className="text-blue-300 font-semibold text-sm">
                  Head of Institution
                </div>
                <div className="text-gray-500 text-xs">
                  ASET, Amity University MP
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 -z-10 bg-blue-600/10 rounded-2xl blur-2xl" />
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {missions.map((m, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-blue-500/15 bg-white/2 hover:bg-blue-500/5 p-7 transition-all duration-300 hover:border-yellow-500/35 hover:-translate-y-1 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="text-4xl mb-4">{m.emoji}</div>
              <h4 className="text-lg font-bold text-white mb-3">{m.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
