import React from 'react';
import { educationList, profileAvatarUrl } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Award, 
  CheckCircle,
  Lightbulb,
  Target,
  MapPin,
  Building2
} from 'lucide-react';

interface AboutSectionProps {
  currentPhoto?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentPhoto = profileAvatarUrl }) => {
  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3 shadow-2xs">
            <User className="w-3.5 h-3.5" /> 
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Driven by Technical Precision & Purposeful Web Design
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-3">
            A comprehensive overview of my academic background, technical domain focus, and development philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Bio Card with Formal Portrait Avatar */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md transition-shadow space-y-5">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-md shrink-0 bg-white dark:bg-slate-800 p-0.5">
                  <img 
                    src={currentPhoto} 
                    alt="Brindha V - MCA Scholar" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Brindha V</h3>
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Master of Computer Applications (MCA)</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1">
                    <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Holy Cross College (Autonomous), Trichy</span>
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      CGPA: 8.83
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Open to Opportunities
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  I am a dedicated Computer Applications postgraduate student with a strong foundation in Web Development, Full Stack Architecture, Data Analytics, and Software Design.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  My practical exposure spans 6 specialized software internships across database management, core Java, full stack engineering, business intelligence in Power BI, embedded sensor technology, and data analytics.
                </p>
              </div>
            </div>

            {/* Core Values & Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Problem-First Approach</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Designing web software that directly resolves real-world challenges, such as agricultural direct trade and municipal complaint management.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Continuous Learning</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Earned NPTEL certifications in Soft Skills & Personality, UniAthena Python verified skills, and Accenture Web Analytics credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Journey & Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3>Education & Academic Milestones</h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded-lg border border-indigo-100 dark:border-indigo-900">
                Trichy, Tamil Nadu
              </span>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-md transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-blue-600" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex sm:flex-col items-start sm:items-end gap-1">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {edu.score}
                      </span>
                      {edu.period && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {edu.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.highlight && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{edu.highlight}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
