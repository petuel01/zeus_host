
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Database as DbIcon, 
  CreditCard, 
  ShieldCheck, 
  Server, 
  Menu, 
  X, 
  Settings, 
  LogOut, 
  Terminal,
  Zap,
  ChevronRight,
  Info
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import WebsiteManager from './components/WebsiteManager';
import DatabaseManager from './components/DatabaseManager';
import Billing from './components/Billing';
import Security from './components/Security';
import ArchitectureView from './components/ArchitectureView';
import AISupport from './components/AISupport';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [tourStep, setTourStep] = useState<number | null>(null);

  const tourSteps = [
    {
      id: 0,
      title: "Welcome to Zeus Hosting ⚡",
      content: "Zeus is a high-performance cloud platform optimized specifically for African infrastructure. Let's take a quick tour of your new cockpit.",
      target: "center",
      tab: "dashboard"
    },
    {
      id: 1,
      title: "Tier-1 Navigation",
      content: "Our sidebar gives you instant access to website management, isolated databases, and security settings. Everything is designed for low-latency interactions.",
      target: "sidebar",
      tab: "dashboard"
    },
    {
      id: 2,
      title: "Real-time Metrics",
      content: "Monitor your CPU, RAM, and Storage across all African VPS worker nodes from this unified dashboard. No need to log into multiple servers.",
      target: "metrics",
      tab: "dashboard"
    },
    {
      id: 3,
      title: "African-First Payments",
      content: "We've integrated MTN Mobile Money directly into the core. Top up your wallet in seconds using local currency (XAF) without needing a credit card.",
      target: "momo",
      tab: "billing"
    },
    {
      id: 4,
      title: "Isolated Infrastructure",
      content: "See how we decouple the Firebase control plane from our VPS workers. This zero-trust design ensures your sites are secure and fast.",
      target: "infra",
      tab: "architecture"
    },
    {
      id: 5,
      title: "AI Technical Support",
      content: "Need help with Nginx or WordPress? Our integrated Gemini AI assistant is trained on the Zeus architecture to provide instant technical help.",
      target: "support",
      tab: "support"
    }
  ];

  const nextTourStep = () => {
    if (tourStep === null) return;
    if (tourStep < tourSteps.length - 1) {
      const nextStep = tourStep + 1;
      setTourStep(nextStep);
      setActiveTab(tourSteps[nextStep].tab);
    } else {
      setTourStep(null);
    }
  };

  const skipTour = () => setTourStep(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'websites':
        return <WebsiteManager />;
      case 'databases':
        return <DatabaseManager />;
      case 'billing':
        return <Billing />;
      case 'security':
        return <Security />;
      case 'architecture':
        return <ArchitectureView />;
      case 'support':
        return <AISupport />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden relative">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-900 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h2 className="text-lg font-semibold capitalize text-slate-100 flex items-center gap-2">
              {activeTab === 'dashboard' && <LayoutDashboard size={18} className="text-sky-400" />}
              {activeTab === 'websites' && <Globe size={18} className="text-emerald-400" />}
              {activeTab === 'databases' && <DbIcon size={18} className="text-amber-400" />}
              {activeTab === 'billing' && <CreditCard size={18} className="text-rose-400" />}
              {activeTab === 'security' && <ShieldCheck size={18} className="text-indigo-400" />}
              {activeTab === 'architecture' && <Server size={18} className="text-purple-400" />}
              {activeTab === 'support' && <Zap size={18} className="text-yellow-400" />}
              {activeTab.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setTourStep(0);
                setActiveTab('dashboard');
              }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400 text-xs font-bold hover:bg-sky-500/20 transition-all mr-4"
            >
              <Info size={14} /> Start Platform Tour
            </button>
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-xs text-slate-400">Current Balance</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">24,500 XAF</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-xs font-bold border border-slate-700">
              JD
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar relative">
          {renderContent()}
        </div>
      </main>

      {/* Tour Overlay System */}
      {tourStep !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          {/* Dimmed Background */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] pointer-events-auto" onClick={skipTour} />
          
          {/* Floating Tour Card */}
          <div className={`
            pointer-events-auto w-full max-w-sm bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-sky-500/50 relative overflow-hidden transition-all duration-500 animate-in zoom-in-95
            ${tourSteps[tourStep].target === 'sidebar' ? 'md:ml-[-400px]' : ''}
            ${tourSteps[tourStep].target === 'metrics' ? 'md:mt-[-100px]' : ''}
          `}>
            <div className="absolute top-0 right-0 p-8 opacity-5 -z-10">
              <Zap size={120} />
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 text-[10px] font-bold uppercase tracking-widest border border-sky-500/20">
                Step {tourStep + 1} of {tourSteps.length}
              </div>
              <button onClick={skipTour} className="text-slate-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{tourSteps[tourStep].title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {tourSteps[tourStep].content}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button 
                onClick={skipTour}
                className="text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors"
              >
                Skip Tour
              </button>
              <button 
                onClick={nextTourStep}
                className="bg-sky-500 hover:bg-sky-400 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20"
              >
                {tourStep === tourSteps.length - 1 ? 'Finish' : 'Next Step'} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
