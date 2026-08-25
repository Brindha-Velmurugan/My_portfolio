import React from 'react';
import { contactInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 border-t border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Identity */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
              BV
            </div>
            <div>
              <div className="text-white font-bold text-lg">Brindha V</div>
              <div className="text-xs text-indigo-400 font-medium">
                Web & Full Stack Developer | MCA Graduate
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#preferred-interests" className="hover:text-white transition-colors">Interests</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Internships</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all active:scale-95 touch-manipulation cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-blue-900/40 hover:bg-blue-800/60 text-blue-300 hover:text-white border border-blue-800/50 flex items-center justify-center transition-all active:scale-95 touch-manipulation cursor-pointer"
              title="Open LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md flex items-center justify-center transition-all active:scale-95 touch-manipulation cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Brindha V. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <span>Designed & Built for Web Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
