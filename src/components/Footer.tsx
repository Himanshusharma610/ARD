export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1628] border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ARD" className="w-14 h-14 object-contain rounded-lg" />
              <span className="text-white font-bold text-base tracking-tight hidden sm:block">
                Amity <span className="text-yellow-400">Robotics & Drone</span> Club
              </span>
              <span className="text-white font-bold text-base tracking-tight sm:hidden">
                ARD
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Building the future through robotics, drones, and automation. We empower students
              to engineer real-world solutions and push the boundaries of technology at
              Amity University Madhya Pradesh.
            </p>
            <div className="flex gap-3">
              {["📸", "💼", "🐙", "🎥"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-base hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Events", id: "events" },
                { label: "Team", id: "team" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-gray-500 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-blue-500 group-hover:translate-x-0.5 transition-transform text-xs">
                      ›
                    </span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <span>🏫</span>
                <span>Amity University MP, Gwalior</span>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <span>✉️</span>
                <a href="mailto:robotics@amity.edu" className="hover:text-yellow-400 transition-colors">
                  robotics@amity.edu
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <span>🌐</span>
                <a
                  href="https://www.amityroboticsanddroneclub.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  amitycodingclub.social
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Amity Robotics & Drone Club, Amity University MP. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-600 text-xs">
            <span>Built with</span>
            <span className="text-yellow-500">⚡</span>
            <span>by ARD Dev Team</span>
            <span className="mx-2">·</span>
            <span className="text-blue-400 font-mono text-xs">&lt;React /&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
