import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Approach from '@/components/Approach';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import BackgroundAmbience from '@/components/BackgroundAmbience';

export default function Home() {
  return (
    <main className="relative min-h-screen text-[#ededed] selection:bg-neutral-800 selection:text-white">
      <BackgroundAmbience />
      <Header />
      <Hero />
      <Projects />
      <Approach />
      <Skills />
      <Contact />
    </main>
  );
}