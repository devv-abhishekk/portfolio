import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomLoader } from './components/CustomLoader';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <CustomLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen">
          {/* Ambient Cosmic Background Orbs Mesh */}
          <div className="glow-bg-grid" aria-hidden="true">
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
            <div className="glow-orb orb-3"></div>
          </div>

          {/* Navigation bar */}
          <Navbar />

          {/* Core Sections Grid */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Custom Scroll To Top radial ring */}
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
