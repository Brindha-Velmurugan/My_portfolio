import React, { useState } from 'react';
import { contactInfo, profileAvatarUrl } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';
import { 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Sparkles, 
  FileText, 
  ArrowDownRight,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onOpenResume: () => void;
  currentPhoto?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, currentPhoto = profileAvatarUrl }) => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);
  const [showImageZoom, setShowImageZoom] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    showToast({
      title: 'Email Copied',
      message: contactInfo.email,
      type: 'copy'
    });
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    showToast({
      title: 'Phone Number Copied',
      message: `+91 ${contactInfo.phone}`,
      type: 'copy'
    });
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyLinkedin = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contactInfo.linkedin);
    setCopiedLinkedin(true);
    showToast({
      title: 'LinkedIn URL Copied',
      message: contactInfo.linkedin,
      type: 'copy'
    });
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 dark:from-slate-950 via-indigo-50/20 dark:via-slate-900/40 to-white dark:to-slate-950">
      {/* Decorative background grid and soft glow circles */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-indigo-200/30 dark:from-indigo-900/20 to-blue-200/20 dark:to-blue-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Greeting & Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-semibold shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for Web & Full Stack Roles | MCA Postgraduate Scholar</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-blue-400">Brindha V</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 tracking-tight">
                Web & Full Stack Developer
              </p>
            </div>

            {/* Short Bio Summary */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Postgraduate Computer Applications scholar (<span className="font-semibold text-slate-900 dark:text-slate-100">MCA CGPA: 8.83</span>) at Holy Cross College. Passionate about building functional web applications, intuitive digital solutions, and user-friendly software architecture.
            </p>

            {/* Quick Contact Chips & Actions */}
            <div className="w-full flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-sm shadow-md shadow-indigo-200 dark:shadow-none transition-all active:scale-95 touch-manipulation cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95 touch-manipulation cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>View Resume</span>
              </button>

              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-semibold text-sm border border-indigo-200/80 dark:border-indigo-800 transition-all active:scale-95 touch-manipulation"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Quick Contact Link Bar */}
            <div className="w-full pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
              
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 min-h-[44px] rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="truncate max-w-[180px] sm:max-w-none text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
                  {contactInfo.email}
                </a>
                <button 
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  aria-label="Copy Email"
                  className="p-1.5 hover:bg-indigo-50 dark:hover:bg-indigo-950/80 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer touch-manipulation"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 min-h-[44px] rounded-xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
                  +91 {contactInfo.phone}
                </a>
                <button 
                  onClick={handleCopyPhone}
                  title="Copy Phone"
                  aria-label="Copy Phone"
                  className="p-1.5 hover:bg-indigo-50 dark:hover:bg-indigo-950/80 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer touch-manipulation"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800 font-semibold transition-all shadow-2xs active:scale-95 touch-manipulation cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <div className="flex items-center bg-blue-50/90 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 rounded-xl shadow-2xs">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] text-blue-700 dark:text-blue-300 hover:bg-blue-100/80 dark:hover:bg-blue-900/60 font-semibold rounded-l-xl transition-all active:scale-95 touch-manipulation cursor-pointer"
                    title="Open Brindha's LinkedIn Profile"
                    aria-label="Open LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-blue-500 shrink-0" />
                  </a>
                  <button
                    onClick={handleCopyLinkedin}
                    title="Copy LinkedIn URL"
                    aria-label="Copy LinkedIn URL"
                    className="p-2.5 hover:bg-blue-100 dark:hover:bg-blue-900/80 rounded-r-xl text-blue-500 hover:text-blue-700 dark:hover:text-blue-200 transition-colors cursor-pointer touch-manipulation border-l border-blue-200/60 dark:border-blue-800"
                  >
                    {copiedLinkedin ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: CIRCULAR PROFILE FRAME WITH ADVANCED STYLE */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Outer Decorative Ring Container */}
            <div className="relative group cursor-pointer" onClick={() => setShowImageZoom(true)}>
              
              {/* Rotating Gradient Aura */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 opacity-25 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Outer Circular Ring with Dashed Accent & Gradient Border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-500 shadow-xl shadow-indigo-200/60 dark:shadow-none">
                
                {/* Inner White Margin Ring */}
                <div className="w-full h-full rounded-full p-1.5 bg-white dark:bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  
                  {/* Actual Profile Image in Circular Frame */}
                  <img
                    src={currentPhoto}
                    alt="Brindha V - Full Stack Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlaid Subtle Hover Lens Tag */}
                  <div className="absolute inset-0 rounded-full bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-xs font-semibold text-indigo-900 dark:text-indigo-300 shadow-md">
                      Click to View
                    </span>
                  </div>

                </div>

              </div>

              {/* Top Floating Badge: MCA Distinction */}
              <div className="absolute -top-3 -right-2 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/80 shadow-md flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-300">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>MCA 8.83 CGPA</span>
              </div>

              {/* Bottom Floating Badge: Verified Full Stack */}
              <div className="absolute -bottom-3 -left-2 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-900/80 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Full Stack & Web Dev</span>
              </div>

            </div>

            {/* Quick Stat Pill Grid underneath Avatar */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-10">
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs text-center hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">8.83</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">MCA CGPA</div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs text-center hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">6</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Internships</div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs text-center hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">11+</div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">Certificates</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Image Lightbox Modal */}
      {showImageZoom && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setShowImageZoom(false)}>
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowImageZoom(false)}
              className="absolute top-3 right-3 p-2 text-slate-400 hover:text-slate-800 rounded-full bg-slate-100 cursor-pointer"
            >
              ✕
            </button>
            <div className="w-56 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-lg mb-4">
              <img
                src={currentPhoto}
                alt="Brindha V - MCA Scholar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Brindha V</h3>
            <p className="text-xs font-semibold text-indigo-600 mt-1">Computer Applications Scholar (MCA)</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Holy Cross College (Autonomous), Trichy
            </p>
            <button
              onClick={() => setShowImageZoom(false)}
              className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
