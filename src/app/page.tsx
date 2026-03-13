import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Timeline from "@/components/sections/Timeline";
import Prizes from "@/components/sections/Prizes";
import CTA from "@/components/sections/CTA";
import Community from "@/components/sections/Community";
import FAQ from "@/components/sections/FAQ";
import PacmanCodenyx from "@/components/animations/pacman/PacmanCodenyx";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <SmoothScrollProvider>
      <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Highlights />
          <About />
          <Process />
          <Timeline />
          <Prizes />
          <CTA />
          <Community />
          <FAQ />
          <PacmanCodenyx />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
