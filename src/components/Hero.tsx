import { technologies } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]"
    >
      {/* Animated BG Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-700/10 rounded-full blur-3xl animate-pulse delay-2000" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Amity University Madhya Pradesh
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Amity{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Robotics
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-semibold">
                  &{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Drone
                  </span>{" "}
                  Club
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                Building the future through{" "}
                <span className="text-yellow-400 font-medium">
                  robotics
                </span>
                , autonomous drones, and cutting-edge automation technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("team")}
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-[#0a1628] font-semibold text-base hover:from-yellow-400 hover:to-amber-400 transition-all duration-200 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:-translate-y-0.5"
              >
                Meet the Team
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
                  →
                </span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-7 py-3.5 rounded-xl border border-blue-500/40 text-gray-300 font-semibold text-base hover:bg-blue-500/10 hover:border-blue-500/60 hover:text-white transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Tech Tags */}
            <div className="space-y-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                Technologies We Work With
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 border border-white/10 rounded-full hover:border-yellow-500/40 hover:text-yellow-300 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Logo Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative p-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 shadow-2xl shadow-blue-900/30 backdrop-blur-sm">
              <img 
                src="/logo.png" 
                alt="ARD Logo" 
                className="w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl text-[#0a1628] text-sm font-bold shadow-xl shadow-yellow-500/30 animate-bounce">
              1500+ Members 🎉
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#0d1a2d] border border-blue-500/30 rounded-xl text-blue-300 text-sm font-medium shadow-xl">
              Student-Built Projects ✨
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
