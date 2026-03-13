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

function App() {
  return (
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
  );
}

export default App;
