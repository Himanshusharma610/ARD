import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] font-inter antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <TechMarquee />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
