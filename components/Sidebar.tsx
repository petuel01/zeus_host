
import React from 'react';
import { 
  LayoutDashboard, 
  Globe, 
  Database as DbIcon, 
  CreditCard, 
  ShieldCheck, 
  Server, 
  Settings, 
  Zap,
  Terminal,
  HelpCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'websites', label: 'Websites', icon: Globe },
    { id: 'databases', label: 'Databases', icon: DbIcon },
    { id: 'billing', label: 'Billing & MoMo', icon: CreditCard },
    { id: 'security', label: 'Security Center', icon: ShieldCheck },
    { id: 'architecture', label: 'Infrastructure', icon: Server },
    { id: 'support', label: 'AI Support', icon: Zap },
  ];

  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sky-600 rounded-lg shadow-lg shadow-sky-900/20 group cursor-pointer">
            <Zap className="text-white fill-white transition-transform group-hover:scale-110 group-hover:rotate-12" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter text-white">ZEUS<span className="text-sky-500 italic">HOST</span></h1>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Africa Tier-1 Cloud</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                isActive 
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-[inset_0_1px_1px_rgba(14,165,233,0.1)]' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 border border-transparent'
              }`}
            >
              {/* Active Tab Indicator Bar */}
              <div 
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-sky-500 transition-all duration-300 ${
                  isActive ? 'h-6 opacity-100' : 'h-0 opacity-0 group-hover:h-3 group-hover:opacity-50'
                }`}
              />

              <item.icon 
                size={18} 
                className={`transition-all duration-300 ${
                  isActive ? 'text-sky-400 scale-110' : 'text-slate-500 group-hover:text-slate-300 group-hover:scale-110'
                }`} 
              />
              
              <span className={`transition-transform duration-300 ${isActive ? 'translate-x-0.5' : 'group-hover:translate-x-0.5'}`}>
                {item.label}
              </span>

              {/* Subtle Glow Effect for Active Tab */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl bg-sky-500/5 blur-sm -z-10" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800/50 hover:bg-slate-900 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-3">
            <Terminal size={14} className="text-slate-500" />
            <span className="text-[10px] font-mono text-slate-400">NODE STATUS</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between group cursor-default">
              <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">Node-01 (Lagos)</span>
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-20" />
              </div>
            </div>
            <div className="flex items-center justify-between group cursor-default">
              <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">Node-02 (Douala)</span>
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-20" />
              </div>
            </div>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-xs font-medium text-slate-500 hover:text-slate-300 hover:bg-slate-900/50 rounded-xl transition-all active:scale-[0.98]">
          <Settings size={16} className="transition-transform group-hover:rotate-45" />
          Account Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
