import Particle from "@/components/Particle";
import About from "./sections/About";
import Introduction from "./sections/Introduction";
import dynamic from "next/dynamic";
import Projects from "./sections/Projects";

const ParticleElement = dynamic(
  () => import('@/components/Particle'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ParticleElement />
      <main>
        <Introduction />
        <About />
        <Projects />
      </main>
    </>
  )
}
