import React, { useState } from 'react';
import { preferredInterestsList } from '../data/portfolioData';
import { 
  Heart, 
  Palette, 
  Code, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  Compass,
  Laptop
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Code,
  Layers,
  BarChart3,
  Sparkles,
  Laptop
};

export const PreferredInterestsSection: React.FC = () => {
  const [selectedInterestId, setSelectedInterestId] = useState<string>(preferredInterestsList[0]?.id || '');

  return (
    <section id="preferred-interests" className="py-20 bg-gradient-to-b from-white dark:from-slate-950 via-indigo-50/20 dark:via-slate-900/30 to-white dark:to-slate-950 border-y border-slate-200/70 dark:border-slate-800 relative overflow-hidden transition-colors">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-indigo-100/25 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200/70 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold mb-3.5 shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Core Focus Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Preferred Interests
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Key specialization domains driving my technical growth, UI craft, full-stack architecture, and analytical problem-solving.
          </p>
        </div>

        {/* 4 Cards Grid for Preferred Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {preferredInterestsList.map((interest, index) => {
            const Icon = iconMap[interest.iconName] || Sparkles;
            const isSelected = selectedInterestId === interest.id;

            return (
              <div
                key={interest.id}
                onClick={() => setSelectedInterestId(interest.id)}
                className={`group rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-indigo-400 dark:border-indigo-500 shadow-xl shadow-indigo-100/80 dark:shadow-none ring-2 ring-indigo-500/20 dark:ring-indigo-400/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 shadow-2xs hover:shadow-lg'
                }`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${interest.gradient}`} />

                <div>
                  {/* Card Header: Icon + Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-tr from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-200 dark:shadow-none scale-105'
                        : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {interest.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-3 leading-snug">
                    {interest.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-5">
                    {interest.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 mb-5 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Core Highlights
                    </div>
                    {interest.keyHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags: Tools & Frameworks */}
                <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Key Tools
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {interest.toolsAndMethods.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 group-hover:border-indigo-200 dark:group-hover:border-indigo-800 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Portfolio Alignment */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Synergy Across Design, Full-Stack Architecture & Data
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 max-w-xl leading-relaxed">
                Combining intuitive UI/UX design with robust frontend/full-stack engineering and insightful data analytics enables end-to-end delivery of impactful, user-first web applications.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition-all active:scale-95 shrink-0"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
