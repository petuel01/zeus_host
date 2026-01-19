
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Database as DbIcon, 
  CreditCard, 
  ShieldCheck, 
  Server, 
  Menu, 
  X, 
  Zap,
  Bell,
  Search,
  PlusCircle,
  HelpCircle
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

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'websites': return <WebsiteManager />;
      case 'databases': return <DatabaseManager />;
      case 'billing': return <Billing />;
      case 'security': return <Security />;
      case 'architecture': return <ArchitectureView />;
      case 'support': return <AISupport />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Experience Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Modern SaaS Header */}
        <header className="h-16 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-xl flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
            >
              {isSidebarOpen ? <Menu size={20} /> : <X size={20} />}
            </button>
            <div className="h-4 w-px bg-slate-800 mx-2 hidden md:block"></div>
            <h2 className="text-sm font-bold text-slate-100 uppercase tracking-widest hidden md:block">
              {activeTab === 'dashboard' ? 'My Home' : activeTab.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input 
                type="text" 
                placeholder="Search settings..." 
                className="bg-slate-900/50 border border-slate-800 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-300 w-64 focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              />
            </div>
            
            <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-[10px] font-black text-emerald-500">MTN MOMO</span>
              <span className="text-xs font-bold text-white">24,500 XAF</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-400 hover:text-white relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-sky-500 rounded-full border-2 border-[#020617]"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-[10px] font-bold border border-white/10 cursor-pointer hover:scale-105 transition-transform">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#020617] to-[#0f172a] p-8">
          <div className="max-w-7xl mx-auto space-y-8 pb-12">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
