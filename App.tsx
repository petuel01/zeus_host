
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
  Zap
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
    <div className="flex h-screen bg-slate-950 overflow-hidden">
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
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
