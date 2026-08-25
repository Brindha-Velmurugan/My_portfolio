import React, { useState } from 'react';
import { internshipList, educationList, workshopsList } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  CheckCircle, 
  Building2, 
  Sparkles, 
  BookOpen, 
  Layers, 
  Calendar,
  Search
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'internships' | 'education' | 'workshops'>('internships');
  const [searchFilter, setSearchFilter] = useState('');

  const filteredInternships = internshipList.filter(item => 
    item.company.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.domain.toLowerCase().includes(searchFilter.toLowerCase()) ||
    item.role.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <section id="experience" className="py-20 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" /> 
            <span>Professional Exposure & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industry Internships & Academic Foundation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-3">
            Specialized technical internships across full stack web engineering, core software, data visualization, and sensor telemetry.
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('internships')}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'internships'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Internships (6)</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Workshops</span>
            </button>
          </div>

          {activeTab === 'internships' && (
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter internships..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/40 shadow-2xs"
              />
            </div>
          )}
        </div>

        {/* INTERNSHIPS VIEW */}
        {activeTab === 'internships' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((intern, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Company Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {intern.company}
                        </h3>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                          {intern.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Domain Tag */}
                  <div className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold mb-4">
                    Domain: {intern.domain}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {intern.description}
                  </p>

                  {/* Skills Acquired List */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Practical Capabilities
                    </div>
                    {intern.skillsAcquired.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                  <span>Hands-on Internship Experience</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EDUCATION VIEW */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-4">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {edu.degree}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {edu.highlight}
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 dark:border-slate-800">
                  <div className="text-right">
                    <div className="text-lg font-extrabold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-3.5 py-1 rounded-xl border border-indigo-100 dark:border-indigo-900">
                      {edu.score}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WORKSHOPS VIEW */}
        {activeTab === 'workshops' && (
          <div className="max-w-3xl mx-auto">
            {workshopsList.map((ws, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                  National Workshop
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {ws.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Organized by: {ws.organizer}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                  {ws.focus}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
