import Particle from "@/components/Particle";
import About from "./sections/About";
import Introduction from "./sections/Introduction";
import dynamic from "next/dynamic";
import Projects from "./sections/Projects";
import Jobs from "./sections/Jobs";
import Technologies from "./sections/Technologies";

const ParticleElement = dynamic(
  () => import('@/components/Particle'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ParticleElement />
      <main className="overflow-hidden">
        <Introduction />
        <About />
        <Jobs />
        <Projects />
        <Technologies />
      </main>
    </>
  )
}
