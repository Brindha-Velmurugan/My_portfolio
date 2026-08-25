import React, { useState, useRef } from 'react';
import { 
  contactInfo, 
  educationList, 
  internshipList, 
  projectList, 
  skillCategories, 
  certificationsList, 
  workshopsList 
} from '../data/portfolioData';
import { 
  X, 
  Download, 
  FileText,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const resumeContainerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // -------------------------------------------------------------
  // PURE VECTOR 1-PAGE PDF GENERATOR (Precision Clean 1-Page Layout)
  // -------------------------------------------------------------
  const generatePureVectorPdf = (): jsPDF => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = 210;
    const margin = 14;
    const contentWidth = pageWidth - margin * 2;
    let y = 14;

    // Header - Clean Name & Contact Info
    pdf.setFont('times', 'bold');
    pdf.setFontSize(18);
    pdf.setTextColor(0, 0, 0);
    pdf.text(contactInfo.name.toUpperCase(), pageWidth / 2, y, { align: 'center' });
    y += 5;

    pdf.setFont('times', 'normal');
    pdf.setFontSize(9.5);
    const contactLine1 = `${contactInfo.location}  |  Phone: +91 ${contactInfo.phone}  |  Email: ${contactInfo.email}`;
    pdf.text(contactLine1, pageWidth / 2, y, { align: 'center' });
    y += 4.2;

    const contactLine2 = `LinkedIn: linkedin.com/in/v-brindha-2132232ba  |  GitHub: ${contactInfo.github}`;
    pdf.text(contactLine2, pageWidth / 2, y, { align: 'center' });
    y += 3.8;

    pdf.setDrawColor(0, 0, 0);
    pdf.setLineWidth(0.5);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 4.5;

    // Helper Section Header
    const drawSectionHeader = (title: string) => {
      pdf.setFont('times', 'bold');
      pdf.setFontSize(10.5);
      pdf.setTextColor(0, 0, 0);
      pdf.text(title.toUpperCase(), margin, y);
      y += 1.2;
      pdf.setLineWidth(0.3);
      pdf.line(margin, y, pageWidth - margin, y);
      y += 3.8;
    };

    // 1. Professional Summary
    drawSectionHeader('Professional Summary');
    pdf.setFont('times', 'normal');
    pdf.setFontSize(9);
    const summaryText = 'Dedicated Master of Computer Applications (MCA) scholar with an 8.83 CGPA and hands-on internship experience in full stack web development, relational database systems, and data analytics. Proficient in Java, HTML, CSS, PHP, SQL, and Power BI with strong problem-solving and software engineering capabilities.';
    const summaryLines = pdf.splitTextToSize(summaryText, contentWidth);
    pdf.text(summaryLines, margin, y);
    y += summaryLines.length * 3.8 + 2.5;

    // 2. Education
    drawSectionHeader('Education');
    educationList.forEach(edu => {
      pdf.setFont('times', 'bold');
      pdf.setFontSize(9);
      pdf.text(edu.degree, margin, y);
      pdf.text(edu.score, pageWidth - margin, y, { align: 'right' });
      y += 3.8;

      pdf.setFont('times', 'normal');
      pdf.setFontSize(8.5);
      pdf.text(edu.institution, margin, y);
      pdf.text(edu.period, pageWidth - margin, y, { align: 'right' });
      y += 4.2;
    });
    y += 0.5;

    // 3. Technical Skills
    drawSectionHeader('Technical Skills');
    skillCategories.forEach(cat => {
      pdf.setFont('times', 'bold');
      pdf.setFontSize(9);
      pdf.text(`${cat.title}:`, margin, y);
      
      pdf.setFont('times', 'normal');
      pdf.setFontSize(8.5);
      const skillsStr = cat.skills.map(s => s.name).join(', ');
      pdf.text(skillsStr, margin + 44, y);
      y += 3.8;
    });
    y += 1.5;

    // 4. Internship Experience
    drawSectionHeader('Industry Experience');
    const topInternships = [
      {
        company: 'eSoft IT Solutions',
        role: 'Web Development Intern',
        period: 'Trichy, India',
        bullets: [
          'Developed dynamic web modules and integrated backend business logic with relational MySQL databases.',
          'Designed relational database schemas, built secure user authentication sessions, and handled CRUD operations.'
        ]
      },
      {
        company: 'IAFC',
        role: 'Software Development Intern',
        period: 'Trichy, India',
        bullets: [
          'Engineered core enterprise application components utilizing object-oriented programming principles in Java.',
          'Optimized database queries and structured robust exception handling and data collection modules.'
        ]
      },
      {
        company: 'T4TEQ Software Solutions / HCC IICT',
        role: 'Data Visualization & Full Stack Intern',
        period: 'Trichy, India',
        bullets: [
          'Built interactive Power BI business analytics dashboards and created responsive client-server web components.'
        ]
      }
    ];

    topInternships.forEach(intern => {
      pdf.setFont('times', 'bold');
      pdf.setFontSize(9);
      pdf.text(`${intern.company} — ${intern.role}`, margin, y);
      pdf.setFont('times', 'normal');
      pdf.text(intern.period, pageWidth - margin, y, { align: 'right' });
      y += 3.8;

      pdf.setFont('times', 'normal');
      pdf.setFontSize(8.5);
      intern.bullets.forEach(bullet => {
        const bText = `• ${bullet}`;
        const bLines = pdf.splitTextToSize(bText, contentWidth - 4);
        pdf.text(bLines, margin + 2, y);
        y += bLines.length * 3.6;
      });
      y += 1;
    });
    y += 0.5;

    // 5. Key Projects
    drawSectionHeader('Key Software Projects');
    const resumeProjects = [
      {
        title: 'Direct Market Access Platform for Farmers',
        role: 'Full-Stack Developer',
        tech: 'Java, HTML, CSS, SQL, Relational DB',
        bullets: [
          'Engineered a direct digital marketplace connecting farmers directly to retail buyers to eliminate middleman margins.',
          'Implemented real-time crop cataloging, transparent price index tracking, and digital transaction logging.'
        ]
      },
      {
        title: 'CitizenConnect — Civic Issue Resolution Portal',
        role: 'Lead Developer',
        tech: 'PHP, MySQL, JavaScript, HTML, CSS',
        bullets: [
          'Developed an automated municipal grievance portal enabling citizens to submit location-tagged infrastructure complaints.',
          'Built administrative tracking dashboards for departmental ticket dispatch, resolution status monitoring, and alert notifications.'
        ]
      }
    ];

    resumeProjects.forEach(proj => {
      pdf.setFont('times', 'bold');
      pdf.setFontSize(9);
      pdf.text(`${proj.title} (${proj.role})`, margin, y);
      pdf.setFont('times', 'normal');
      pdf.text(proj.tech, pageWidth - margin, y, { align: 'right' });
      y += 3.8;

      pdf.setFont('times', 'normal');
      pdf.setFontSize(8.5);
      proj.bullets.forEach(bullet => {
        const bText = `• ${bullet}`;
        const bLines = pdf.splitTextToSize(bText, contentWidth - 4);
        pdf.text(bLines, margin + 2, y);
        y += bLines.length * 3.6;
      });
      y += 1;
    });
    y += 0.5;

    // 6. Certifications & Academic Honors
    drawSectionHeader('Certifications & Workshops');
    pdf.setFont('times', 'normal');
    pdf.setFontSize(8.5);
    pdf.text('• Full Stack Web Development Certification — Novi-Tech R&D Private Limited', margin + 2, y);
    y += 3.6;
    pdf.text('• Soft Skills & Personality Development (Elite Silver Badge - 81%) — NPTEL (Swayam)', margin + 2, y);
    y += 3.6;
    pdf.text('• National Workshop on MERN Stack Development — Holy Cross College & Jamal Mohamed College', margin + 2, y);
    y += 3.6;
    pdf.text('• Typewriting English Junior (First Class with Distinction) — Department of Technical Education', margin + 2, y);

    return pdf;
  };

  // -------------------------------------------------------------
  // RELIABLE 1-PAGE PDF DOWNLOAD HANDLER
  // -------------------------------------------------------------
  const handleDownloadPdf = async () => {
    setIsExporting(true);
    setStatusMessage({ type: 'info', text: 'Generating single-page PDF...' });

    try {
      let pdfGenerated = false;

      // Attempt 1: High-Definition DOM-to-Canvas Capture (Single A4 Page)
      if (resumeContainerRef.current) {
        try {
          const canvas = await html2canvas(resumeContainerRef.current, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
          });

          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgData = canvas.toDataURL('image/jpeg', 0.98);
          // Exact single A4 dimensions
          pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);

          const blob = pdf.output('blob');
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'Brindha_V_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);

          pdfGenerated = true;
        } catch (canvasError) {
          console.warn('Canvas capture fallback to pure vector engine:', canvasError);
        }
      }

      // Attempt 2: Pure Vector 1-Page PDF Generator
      if (!pdfGenerated) {
        const vectorPdf = generatePureVectorPdf();
        const blob = vectorPdf.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'Brindha_V_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
      }

      confetti({ particleCount: 35, spread: 55, origin: { y: 0.6 } });
      setStatusMessage({ type: 'success', text: '1-Page Resume PDF downloaded successfully!' });
      setTimeout(() => setStatusMessage(null), 3500);
    } catch (err) {
      console.error('Download error:', err);
      setStatusMessage({ type: 'error', text: 'Opening print dialog...' });
      setTimeout(() => {
        window.print();
        setStatusMessage(null);
      }, 1000);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div 
      id="resume-modal-backdrop" 
      className="fixed inset-0 z-50 bg-slate-900/85 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      {/* Modal Container */}
      <div 
        id="resume-modal-dialog" 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[96vh] flex flex-col shadow-2xl overflow-hidden my-auto border border-slate-300"
      >
        
        {/* Top Header Bar with ONLY 2 Options: Download Resume as PDF & Close */}
        <div 
          id="resume-modal-header"
          className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between gap-4 shrink-0 border-b border-slate-800"
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-indigo-400" />
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">
                Brindha V — Professional Resume
              </h2>
              <p className="text-xs text-slate-400">
                1-Page Standard Format • Times New Roman
              </p>
            </div>
          </div>

          {/* Action Buttons: 1. Download Resume as PDF | 2. Close */}
          <div className="flex items-center gap-3">
            <button
              id="download-resume-pdf-btn"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              title="Download Resume as PDF"
            >
              {isExporting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Resume as PDF</span>
                </>
              )}
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Alert Notification */}
        {statusMessage && (
          <div className={`px-4 py-2 text-xs font-semibold flex items-center gap-2 ${
            statusMessage.type === 'success' ? 'bg-emerald-600 text-white' :
            statusMessage.type === 'error' ? 'bg-rose-600 text-white' :
            'bg-indigo-600 text-white'
          }`}>
            {statusMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Scrollable Container for Preview */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-200/70">
          
          {/* EXACT 1-PAGE A4 PROFESSIONAL RESUME (Times New Roman, Non-Italic, Crisp Alignment) */}
          <div 
            ref={resumeContainerRef}
            id="resume-document-content"
            className="bg-white text-black shadow-lg mx-auto p-6 sm:p-10 w-full max-w-[210mm] box-border border border-slate-300"
            style={{ 
              fontFamily: '"Times New Roman", Times, Georgia, serif',
              fontStyle: 'normal',
              color: '#000000',
              lineHeight: '1.38',
              width: '100%',
              maxWidth: '210mm'
            }}
          >
            {/* Header */}
            <div className="text-center pb-2 border-b-2 border-black space-y-0.5">
              <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-black">
                {contactInfo.name}
              </h1>
              
              <div className="text-[12.5px] text-black">
                <span>{contactInfo.location}</span>
                <span className="mx-2">|</span>
                <span>Phone: +91 {contactInfo.phone}</span>
                <span className="mx-2">|</span>
                <span>Email: {contactInfo.email}</span>
              </div>

              <div className="text-[12.5px] text-black">
                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener" 
                  className="text-black hover:underline font-medium"
                >
                  LinkedIn: linkedin.com/in/v-brindha-2132232ba
                </a>
                <span className="mx-2">|</span>
                <a href={contactInfo.github} target="_blank" rel="noopener" className="text-black hover:underline font-medium">
                  GitHub: {contactInfo.github}
                </a>
              </div>
            </div>

            {/* 1. Professional Summary */}
            <div className="mt-3">
              <h2 className="text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                Professional Summary
              </h2>
              <p className="text-[12px] text-black text-justify leading-relaxed">
                Dedicated Master of Computer Applications (MCA) scholar with an 8.83 CGPA and hands-on internship experience in full stack web development, relational database systems, and data analytics. Proficient in Java, HTML, CSS, PHP, SQL, and Power BI with strong problem-solving and software engineering capabilities.
              </p>
            </div>

            {/* 2. Education */}
            <div className="mt-3">
              <h2 className="text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                Education
              </h2>
              <div className="space-y-1.5 text-[12px]">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-black">{edu.degree}</span>
                      <span className="text-black"> — {edu.institution}</span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-bold text-black">{edu.score}</span>
                      <span className="text-[11px] text-black ml-2">({edu.period})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Technical Skills */}
            <div className="mt-3">
              <h2 className="text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                Technical Skills
              </h2>
              <div className="space-y-1 text-[12px]">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="flex items-baseline">
                    <span className="font-bold w-44 shrink-0 text-black">
                      {cat.title}:
                    </span>
                    <span className="text-black">
                      {cat.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Industry Experience */}
            <div className="mt-3">
              <h2 className="text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                Industry Experience
              </h2>
              <div className="space-y-2 text-[12px]">
                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-black">eSoft IT Solutions — <span className="font-normal">Web Development Intern</span></span>
                    <span className="text-[11px] text-black">Trichy, India</span>
                  </div>
                  <ul className="list-disc list-inside text-[11.5px] text-black leading-snug pl-1 space-y-0.5">
                    <li>Developed dynamic web modules and integrated backend business logic with relational MySQL databases.</li>
                    <li>Designed relational schemas, implemented secure session authentication, and handled CRUD operations.</li>
                  </ul>
                </div>

                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-black">IAFC — <span className="font-normal">Software Development Intern</span></span>
                    <span className="text-[11px] text-black">Trichy, India</span>
                  </div>
                  <ul className="list-disc list-inside text-[11.5px] text-black leading-snug pl-1 space-y-0.5">
                    <li>Engineered core enterprise application components utilizing object-oriented programming in Java.</li>
                    <li>Optimized database queries and structured robust exception handling and data collection routines.</li>
                  </ul>
                </div>

                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-black">T4TEQ Software Solutions / HCC IICT — <span className="font-normal">Data Visualization & Full Stack Intern</span></span>
                    <span className="text-[11px] text-black">Trichy, India</span>
                  </div>
                  <ul className="list-disc list-inside text-[11.5px] text-black leading-snug pl-1">
                    <li>Built interactive Power BI business analytics dashboards and created responsive client-server web components.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Key Projects */}
            <div className="mt-3">
              <h2 className="text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                Key Software Projects
              </h2>
              <div className="space-y-2 text-[12px]">
                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-black">Direct Market Access Platform for Farmers — <span className="font-normal">Full-Stack Developer</span></span>
                    <span className="text-[11px] text-black">Java, HTML, CSS, SQL</span>
                  </div>
                  <ul className="list-disc list-inside text-[11.5px] text-black leading-snug pl-1 space-y-0.5">
                    <li>Engineered a direct digital marketplace connecting farmers directly to retail buyers to eliminate middleman margins.</li>
                    <li>Implemented real-time crop cataloging, transparent price index tracking, and digital transaction logging.</li>
                  </ul>
                </div>

                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-black">CitizenConnect — Civic Issue Resolution Portal — <span className="font-normal">Lead Developer</span></span>
                    <span className="text-[11px] text-black">PHP, MySQL, JavaScript, HTML, CSS</span>
                  </div>
                  <ul className="list-disc list-inside text-[11.5px] text-black leading-snug pl-1 space-y-0.5">
                    <li>Developed an automated municipal grievance portal allowing citizens to submit location-tagged complaints.</li>
                    <li>Built administrative tracking dashboards for departmental ticket dispatch, resolution status, and alert notifications.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Certifications & Academic Honors */}
            <div className="mt-3">
              <h2 className="text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
                Certifications & Workshops
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0.5 text-[11.5px] text-black">
                <div>• <span className="font-bold">Full Stack Web Development</span> — Novi-Tech R&D Pvt Ltd</div>
                <div>• <span className="font-bold">Soft Skills (Elite Silver Badge - 81%)</span> — NPTEL</div>
                <div>• <span className="font-bold">MERN Stack Workshop</span> — Holy Cross College</div>
                <div>• <span className="font-bold">Typewriting English Junior (Distinction)</span> — Dept. of Tech Ed</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Footer with Only the 2 Actions */}
        <div 
          id="resume-modal-footer"
          className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0"
        >
          <span className="text-xs text-slate-600 dark:text-slate-400 font-serif">
            Brindha V — 1-Page Standard Professional Resume
          </span>

          <div className="flex items-center gap-3">
            <button
              id="footer-download-resume-btn"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume as PDF</span>
            </button>
            <button
              id="footer-close-resume-btn"
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
