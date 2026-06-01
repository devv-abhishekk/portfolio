import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomLoader } from '../components/custom_loader';
import { ScrollToTop } from '../components/scroll_to_top';
import { NavigationBar } from '../components/navigation_bar';
import { Footer } from '../components/footer';
import { HeroSection } from '../components/hero_section';
import { AboutSection } from '../components/about_section';
import { SkillsSection } from '../components/skills_section';
import { ExperienceSection } from '../components/experience_section';
import { ProjectsSection } from '../components/projects_section';
import { ContactSection } from '../components/contact_section';

export const PortfolioPage = () => {
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
          <NavigationBar />

          {/* Core Sections Grid */}
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Custom Scroll To Top radial ring */}
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
