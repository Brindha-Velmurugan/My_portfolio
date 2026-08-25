import React, { useState } from 'react';
import { projectList } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle, 
  ExternalLink, 
  Play, 
  X, 
  Send, 
  MapPin, 
  AlertCircle, 
  ShoppingBag, 
  Users, 
  ChevronRight,
  TrendingUp,
  Check,
  ShieldAlert,
  Droplets,
  Zap,
  Truck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeSimulator, setActiveSimulator] = useState<'farmer' | 'citizen' | null>(null);

  // Farmers Simulator State
  const [farmerProduceList, setFarmerProduceList] = useState([
    { id: 'p1', name: 'Organic Red Tomatoes', farm: 'Green Valley Farms, Trichy', price: '₹32 / kg', marketPrice: '₹48 / kg', qty: 1, added: false },
    { id: 'p2', name: 'Fresh Ponni Paddy Rice', farm: 'Cauvery Delta Cooperative, Thanjavur', price: '₹45 / kg', marketPrice: '₹62 / kg', qty: 5, added: false },
    { id: 'p3', name: 'Farm-Fresh Country Sugarcane', farm: 'Sunshine Agro, Cuddalore', price: '₹28 / bundle', marketPrice: '₹40 / bundle', qty: 1, added: false },
  ]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // CitizenConnect Simulator State
  const [complaintCategory, setComplaintCategory] = useState('Water Supply');
  const [complaintLocation, setComplaintLocation] = useState('K.K. Nagar 4th Street, Trichy');
  const [complaintDesc, setComplaintDesc] = useState('Low water pressure and pipe leakage near public overhead tank.');
  const [submittedTickets, setSubmittedTickets] = useState([
    { id: 'TK-8902', cat: 'Electricity', loc: 'Main Road, Cuddalore', status: 'In Progress', time: 'Just now' },
    { id: 'TK-8891', cat: 'Sanitation', loc: 'College Road, Trichy', status: 'Resolved', time: 'Yesterday' }
  ]);
  const [complaintSuccess, setComplaintSuccess] = useState(false);

  const handleFarmerAdd = (id: string) => {
    setFarmerProduceList(prev => prev.map(item => item.id === id ? { ...item, added: true } : item));
  };

  const handleFarmerOrderSubmit = () => {
    setOrderPlaced(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    setTimeout(() => {
      setOrderPlaced(false);
      setFarmerProduceList(prev => prev.map(item => ({ ...item, added: false })));
    }, 4000);
  };

  const handleCitizenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complaintDesc.trim()) return;

    const newTicket = {
      id: `TK-${Math.floor(1000 + Math.random() * 9000)}`,
      cat: complaintCategory,
      loc: complaintLocation || 'Trichy Central Sector',
      status: 'Received & Assigned',
      time: 'Just now'
    };

    setSubmittedTickets([newTicket, ...submittedTickets]);
    setComplaintSuccess(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });

    setTimeout(() => {
      setComplaintSuccess(false);
      setComplaintDesc('');
    }, 3500);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-3 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" /> 
            <span>Featured Web Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Impact-Driven Web Applications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-3">
            Real-world software built to eliminate middleman overheads for farmers and streamline civic issue resolution for local citizens.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50/50 dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-2xs hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm">
                    Role: {project.role}
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider bg-indigo-950/80 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {project.userType}
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight mt-1.5 text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-8 space-y-5 bg-white dark:bg-slate-900">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Impact Highlight */}
                  <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-2xl border border-indigo-100/90 dark:border-indigo-900/60 flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed font-medium">
                      <span className="font-bold text-indigo-900 dark:text-indigo-300 block mb-0.5">System Impact</span>
                      {project.impact}
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Core System Capabilities
                    </div>
                    <div className="space-y-1.5">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-8 pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <span>View System Architecture & Features</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveSimulator(project.id === 'farmer-market' ? 'farmer' : 'citizen')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-xs shadow-md shadow-indigo-200 dark:shadow-none transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Test Live Prototype</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4" /> {selectedProject.role}
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
              {selectedProject.title}
            </h3>

            <div className="rounded-2xl overflow-hidden mb-6 h-56 bg-slate-100 dark:bg-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              <p>{selectedProject.description}</p>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                  Target Audience
                </div>
                <div className="text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  {selectedProject.userType}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                  Complete Feature Set
                </div>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((kf, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 bg-indigo-50/50 dark:bg-slate-800 p-2.5 rounded-xl border border-indigo-100/60 dark:border-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{kf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  const targetId = selectedProject.id === 'farmer-market' ? 'farmer' : 'citizen';
                  setSelectedProject(null);
                  setActiveSimulator(targetId);
                }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold text-xs flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Launch Live Simulator
              </button>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FARMER MARKET SIMULATOR MODAL */}
      {activeSimulator === 'farmer' && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 dark:bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveSimulator(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full w-fit border border-emerald-200 dark:border-emerald-800">
              <ShoppingBag className="w-3.5 h-3.5" /> Interactive Prototype Simulator
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-1">
              Direct Market Access for Farmers
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">
              Simulate a consumer ordering fresh agricultural crops directly from Tamil Nadu farm producers with transparent fair pricing.
            </p>

            {orderPlaced ? (
              <div className="py-12 text-center bg-emerald-50/80 dark:bg-emerald-950/50 rounded-2xl border border-emerald-200 dark:border-emerald-800 p-6 space-y-3 animate-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 dark:text-emerald-200">Direct Order Confirmed!</h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                  Your order has been transmitted directly to the farmer. The producer receives 100% of the listed farm gate price without middleman commission deductions.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center justify-between">
                  <span>Available Farm Fresh Produce</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-normal">Direct Farm Gate Prices</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {farmerProduceList.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">{item.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{item.farm}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-right">
                          <div className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">{item.price}</div>
                          <div className="text-[11px] text-slate-400 line-through">Retail: {item.marketPrice}</div>
                        </div>

                        {item.added ? (
                          <span className="px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
                            <Check className="w-3.5 h-3.5" /> Selected
                          </span>
                        ) : (
                          <button
                            onClick={() => handleFarmerAdd(item.id)}
                            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs font-semibold shadow-xs cursor-pointer"
                          >
                            + Add to Order
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Selected Items: <span className="font-bold text-slate-900 dark:text-white">{farmerProduceList.filter(i => i.added).length}</span>
                  </div>

                  <button
                    disabled={farmerProduceList.filter(i => i.added).length === 0}
                    onClick={handleFarmerOrderSubmit}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-md cursor-pointer"
                  >
                    Place Direct Farm Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CITIZEN CONNECT SIMULATOR MODAL */}
      {activeSimulator === 'citizen' && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 dark:bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveSimulator(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-full bg-slate-100 dark:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full w-fit border border-indigo-200 dark:border-indigo-800">
              <Users className="w-3.5 h-3.5" /> Interactive Prototype Simulator
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 mb-1">
              CitizenConnect - Civic Complaint Portal
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">
              Test filing a civic infrastructure grievance and tracking resolution status in real-time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Complaint Form */}
              <form onSubmit={handleCitizenSubmit} className="md:col-span-7 space-y-3 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                  File New Issue Report
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">Select Issue Category</label>
                  <select
                    value={complaintCategory}
                    onChange={(e) => setComplaintCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-hidden"
                  >
                    <option value="Water Supply">Water Supply & Leakage</option>
                    <option value="Electricity">Electricity & Street Lights</option>
                    <option value="Road Damage">Road Pothole / Repair</option>
                    <option value="Sanitation">Sanitation & Garbage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">Street Location</label>
                  <input
                    type="text"
                    value={complaintLocation}
                    onChange={(e) => setComplaintLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">Problem Description</label>
                  <textarea
                    rows={3}
                    value={complaintDesc}
                    onChange={(e) => setComplaintDesc(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-100 focus:outline-hidden"
                    placeholder="Describe the issue..."
                  />
                </div>

                {complaintSuccess && (
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs rounded-xl font-medium flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Ticket generated! Municipal department notified.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Complaint Ticket
                </button>
              </form>

              {/* Real-time Tickets List */}
              <div className="md:col-span-5 space-y-3">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  Community Ticket Feed
                </div>

                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                  {submittedTickets.map((t) => (
                    <div key={t.id} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-indigo-600 dark:text-indigo-400">{t.id}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {t.status}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">{t.cat}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span className="truncate">{t.loc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
