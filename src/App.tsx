import { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ProfilesStrip } from './components/ProfilesStrip';
import { Education } from './components/Education';
import { SoftSkills } from './components/SoftSkills';
import { Contact } from './components/Contact';
import { EasterEgg } from './components/EasterEgg';

export function App() {
  const [, setPreloaderFinished] = useState(false);

  return (
    <SmoothScroll>
      {/* Preloader Screen */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Main Experience */}
      <div className="min-h-screen bg-[var(--bg-space)] text-[var(--text-main)] flex flex-col relative transition-colors duration-300 selection:bg-[#C6FF3D] selection:text-[#0A0A0F]">
        {/* Custom Interactive Elements */}
        <CustomCursor />
        <ScrollProgressBar />
        <EasterEgg />

        {/* Global Navigation */}
        <Navbar />

        {/* Page Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <ProfilesStrip />
          <Education />
          <SoftSkills />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
