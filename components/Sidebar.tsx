
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
  HelpCircle,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'My Sites', icon: LayoutDashboard },
    { id: 'websites', label: 'Domains', icon: Globe },
    { id: 'databases', label: 'Databases', icon: DbIcon },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'security', label: 'Security', icon: ShieldCheck },
    { id: 'architecture', label: 'Infrastructure', icon: Server },
    { id: 'support', label: 'AI Support', icon: Zap },
  ];

  if (!isOpen) return null;

  return (
    <aside className="w-72 bg-[#020617] border-r border-slate-800 flex flex-col h-full z-30 transition-all duration-300">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Zap size={22} className="text-white fill-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tighter">ZEUS<span className="text-sky-500">.</span></h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Hosting Cloud</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all group relative ${
                isActive 
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-sky-400' : 'text-slate-500 group-hover:text-slate-300'} />
              {item.label}
              {isActive && (
                <div className="absolute right-4 w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-800 mt-auto">
        <div className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <HelpCircle size={16} className="text-sky-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Help Center</span>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed mb-4">Need help with Nginx or MoMo payments?</p>
          <button className="w-full py-2 bg-sky-500 hover:bg-sky-400 text-white text-[10px] font-bold rounded-lg transition-all uppercase tracking-widest">
            Contact Support
          </button>
        </div>
        
        <button className="w-full flex items-center gap-4 px-5 py-3 text-sm font-semibold text-slate-500 hover:text-white transition-colors">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
