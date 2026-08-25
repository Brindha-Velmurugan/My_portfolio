import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PreferredInterestsSection } from './components/PreferredInterestsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ScrollTopProgress } from './components/ScrollTopProgress';
import { profileAvatarUrl } from './data/portfolioData';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200">
          {/* Top Navbar */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          {/* Main Content Sections */}
          <main>
            <HeroSection 
              onOpenResume={() => setIsResumeOpen(true)} 
              currentPhoto={profileAvatarUrl}
            />
            <AboutSection 
              currentPhoto={profileAvatarUrl}
            />
            <PreferredInterestsSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Printable Resume Document Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />

          {/* Floating Scroll to Top & Reading Progress */}
          <ScrollTopProgress />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

