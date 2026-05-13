import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", interest: "General" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#070d1a] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Join Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have questions? Want to collaborate on a robotics project? Interested in
            joining ARD? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-blue-500/15 bg-[#0a1628] p-6 space-y-5">
              <h3 className="text-white font-bold text-lg">Contact Details</h3>
              {[
                {
                  icon: "🏫",
                  label: "Location",
                  value: "Amity University Madhya Pradesh, Gwalior",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "robotics@amity.edu",
                },
                {
                  icon: "🌐",
                  label: "Website",
                  value: "amitycodingclub.social",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-gray-200 text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-blue-500/15 bg-[#0a1628] p-6 space-y-4">
              <h3 className="text-white font-bold text-lg">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Instagram", icon: "", color: "hover:border-pink-500/40 hover:text-pink-400", href: "#" },
                  { name: "LinkedIn", icon: "💼", color: "hover:border-blue-500/40 hover:text-blue-400", href: "#" },
                  { name: "GitHub", icon: "🐙", color: "hover:border-gray-400/40 hover:text-gray-200", href: "https://github.com/orgs/amitycodingclub" },
                  { name: "YouTube", icon: "🎥", color: "hover:border-red-500/40 hover:text-red-400", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/10 bg-white/3 text-gray-400 text-sm font-medium transition-all duration-200 ${social.color}`}
                  >
                    <span>{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-blue-500/15 bg-[#0a1628] p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="text-6xl"></div>
                <h3 className="text-white text-xl font-bold">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out! We'll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "", interest: "General" }); }}
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@amity.edu"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    I'm Interested In
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm focus:outline-none focus:border-blue-500/60 transition-all duration-200 appearance-none"
                  >
                    <option value="General" className="bg-[#0a1628]">General Inquiry</option>
                    <option value="Join" className="bg-[#0a1628]">Joining ARD</option>
                    <option value="Robotics" className="bg-[#0a1628]">Robotics Projects</option>
                    <option value="Drone" className="bg-[#0a1628]">Drone Projects</option>
                    <option value="Collaboration" className="bg-[#0a1628]">Collaboration</option>
                    <option value="Sponsorship" className="bg-[#0a1628]">Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about yourself or your query..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
