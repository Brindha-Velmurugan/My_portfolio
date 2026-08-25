import React, { useState, useEffect } from 'react';
import { contactInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  FileText, 
  Menu, 
  X,
  Sparkles,
  Phone,
  Github,
  Linkedin,
  Heart
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'preferred-interests', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Interests', href: '#preferred-interests', icon: Heart, id: 'preferred-interests' },
    { name: 'Skills', href: '#skills', icon: Code, id: 'skills' },
    { name: 'Projects', href: '#projects', icon: Briefcase, id: 'projects' },
    { name: 'Experience', href: '#experience', icon: GraduationCap, id: 'experience' },
    { name: 'Certifications', href: '#certifications', icon: Award, id: 'certifications' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800 py-3'
          : 'bg-gradient-to-b from-white/95 dark:from-slate-950/95 via-white/70 dark:via-slate-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Identity */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-3 group"
          id="nav-logo-link"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-200 dark:shadow-none group-hover:scale-105 transition-transform">
            BV
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight leading-none group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Brindha V
            </span>
            <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 mt-1">
              <Sparkles className="w-3 h-3" /> Full Stack & Web Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs backdrop-blur-xs">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-item-${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-2xs border border-slate-200/80 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Quick Actions, Theme Toggle & Contact */}
        <div className="hidden lg:flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-950/60 hover:bg-blue-100/80 dark:hover:bg-blue-900/60 border border-blue-200/80 dark:border-blue-800 transition-all shadow-2xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer touch-manipulation"
            title="Brindha V on LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-800 transition-all shadow-2xs hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Resume</span>
          </button>
          
          <a
            id="nav-hire-button"
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-md shadow-indigo-200 dark:shadow-none transition-all hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            id="nav-mobile-resume"
            onClick={onOpenResume}
            className="px-3 py-2 min-h-[40px] rounded-xl text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 active:scale-95 touch-manipulation cursor-pointer"
          >
            Resume
          </button>
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center active:scale-95 touch-manipulation cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="nav-mobile-drawer" className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 min-h-[44px] rounded-xl text-sm font-medium transition-all active:scale-98 touch-manipulation ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-100 dark:border-indigo-900'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center justify-center gap-2 p-2.5 min-h-[44px] bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 active:scale-95 touch-manipulation"
              >
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> 
                <span>Call Phone</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center justify-center gap-2 p-2.5 min-h-[44px] bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 active:scale-95 touch-manipulation"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> 
                <span>Send Email</span>
              </a>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener" 
                className="flex items-center justify-center gap-2 p-2.5 min-h-[44px] bg-slate-50 dark:bg-slate-800/80 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 active:scale-95 touch-manipulation cursor-pointer"
              >
                <Github className="w-4 h-4" /> 
                <span>GitHub</span>
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener" 
                className="flex items-center justify-center gap-2 p-2.5 min-h-[44px] bg-blue-50 dark:bg-blue-950/60 rounded-xl text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 active:scale-95 touch-manipulation cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" /> 
                <span>LinkedIn</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 active:scale-95 touch-manipulation cursor-pointer"
            >
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>View & Print Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

