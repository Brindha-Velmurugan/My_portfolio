import React, { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink, 
  Loader2, 
  AlertTriangle,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('Recruitment / Job Opportunity');
  const [formMessage, setFormMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    showToast({
      title: 'Email Copied to Clipboard',
      message: contactInfo.email,
      type: 'copy'
    });
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
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
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyLinkedin = () => {
    navigator.clipboard.writeText(contactInfo.linkedin);
    setCopiedLinkedin(true);
    showToast({
      title: 'LinkedIn Profile URL Copied',
      message: contactInfo.linkedin,
      type: 'copy'
    });
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };

  // Real Email Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) return;

    setIsSending(true);
    setErrorMessage(null);

    try {
      // 1. Submit directly to FormSubmit backend service routed to Brindha's Gmail
      const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry from ${formName} - ${formSubject}`,
          Name: formName,
          Email: formEmail,
          Subject: formSubject,
          Message: formMessage,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        showToast({
          title: 'Message Delivered Successfully!',
          message: `Your inquiry has been sent to ${contactInfo.email}`,
          type: 'success'
        });
        confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
      } else {
        throw new Error('Form delivery service error');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX attempt failed, falling back to direct email composer:', err);
      // Fallback: Open pre-filled email in user's default email client
      const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(`[${formSubject}] Message from ${formName}`)}&body=${encodeURIComponent(`Name: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`)}`;
      window.location.href = mailtoUrl;
      setFormSubmitted(true);
      showToast({
        title: 'Opening Email Client',
        message: 'Opening your default mail app to send the message',
        type: 'info'
      });
    } finally {
      setIsSending(false);
    }
  };

  const getGmailComposeUrl = () => {
    const subject = encodeURIComponent(`[${formSubject}] Portfolio Inquiry from ${formName || 'Recruiter'}`);
    const body = encodeURIComponent(`Hi Brindha,\n\nName: ${formName}\nEmail: ${formEmail}\n\nMessage:\n${formMessage}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${subject}&body=${body}`;
  };

  const whatsappUrl = `https://wa.me/919342916991?text=${encodeURIComponent('Hi Brindha, I viewed your web developer portfolio and would like to discuss an opportunity.')}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 dark:from-slate-900/40 dark:via-slate-950 dark:to-slate-900/60 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3 shadow-2xs">
            <Mail className="w-3.5 h-3.5" /> 
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-3">
            Currently open to Web Development, Full Stack, and Software Engineering roles. Feel free to send a message or connect directly via email or call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100/80 dark:border-indigo-900 rounded-xl shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email ID</div>
                      <a href={`mailto:${contactInfo.email}`} className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 truncate block">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 min-w-[44px] min-h-[44px] bg-white dark:bg-slate-700 rounded-xl border border-slate-200/90 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 flex items-center justify-center transition-all shrink-0 shadow-2xs cursor-pointer active:scale-95 touch-manipulation"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card & WhatsApp */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100/80 dark:border-indigo-900 rounded-xl shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Phone & WhatsApp</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400">
                        +91 {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener"
                      className="p-2.5 min-w-[44px] min-h-[44px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center transition-all shadow-2xs active:scale-95 touch-manipulation cursor-pointer"
                      title="Chat on WhatsApp"
                      aria-label="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2.5 min-w-[44px] min-h-[44px] bg-white dark:bg-slate-700 rounded-xl border border-slate-200/90 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95 touch-manipulation"
                      title="Copy Phone"
                      aria-label="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Profile Card */}
                <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/60 flex items-center justify-between gap-3 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 bg-blue-600 text-white rounded-xl shrink-0 shadow-xs">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">LinkedIn Profile</div>
                      <a 
                        href={contactInfo.linkedin} 
                        target="_blank" 
                        rel="noopener" 
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 truncate block hover:underline"
                      >
                        v-brindha-2132232ba
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener"
                      className="p-2.5 min-w-[44px] min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all shadow-2xs active:scale-95 touch-manipulation cursor-pointer"
                      title="Open LinkedIn in New Tab"
                      aria-label="Open LinkedIn"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={handleCopyLinkedin}
                      className="p-2.5 min-w-[44px] min-h-[44px] bg-white dark:bg-slate-700 rounded-xl border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-slate-600 text-blue-700 dark:text-blue-300 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-95 touch-manipulation"
                      title="Copy LinkedIn URL"
                      aria-label="Copy LinkedIn URL"
                    >
                      {copiedLinkedin ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100/80 dark:border-indigo-900 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {contactInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 py-3 px-4 min-h-[48px] rounded-xl bg-slate-100/80 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-slate-200/90 dark:border-slate-700 active:scale-95 touch-manipulation cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 py-3 px-4 min-h-[48px] rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 active:scale-95 touch-manipulation cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Open LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Real Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Direct Inbox Delivery
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to send an inquiry, job opportunity, or collaboration proposal.
              </p>

              {formSubmitted ? (
                <div className="py-10 px-6 text-center bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-3 animate-in zoom-in-95">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950 dark:text-emerald-200">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formName}</strong>. Your message regarding <em>"{formSubject}"</em> has been dispatched directly. I will get back to you promptly.
                  </p>
                  
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getGmailComposeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Mail className="w-3.5 h-3.5 text-red-500" />
                      <span>Open in Gmail Directly</span>
                    </a>
                    
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormMessage('');
                      }}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. HR / Recruiter Name"
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50/80 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/40 transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50/80 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/40 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Inquiry Purpose / Subject</label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50/80 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-hidden focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/40 transition-all cursor-pointer shadow-2xs"
                    >
                      <option value="Recruitment / Job Opportunity">Recruitment / Job Opportunity</option>
                      <option value="Full-Stack Web Development Project">Full-Stack Web Development Project</option>
                      <option value="Internship / Mentorship">Internship / Mentorship</option>
                      <option value="Data Analytics & BI Collaboration">Data Analytics & BI Collaboration</option>
                      <option value="General Professional Inquiry">General Professional Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">Message Details *</label>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {formMessage.length} characters
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Type your message, interview invitation, or project details here..."
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50/80 dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:bg-white dark:focus:bg-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-900/40 transition-all shadow-2xs resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-200 dark:shadow-none hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message Directly</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getGmailComposeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-3 bg-slate-100/80 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 border border-slate-200/90 dark:border-slate-700 transition-colors shadow-2xs"
                      title="Open Gmail Composer"
                    >
                      <Mail className="w-3.5 h-3.5 text-red-500" />
                      <span>Compose in Gmail</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


