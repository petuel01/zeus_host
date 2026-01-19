
import React from 'react';
import { 
  PlusCircle, 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  Cpu, 
  Zap,
  Layers,
  Search
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { val: 10 }, { val: 25 }, { val: 18 }, { val: 40 }, 
  { val: 30 }, { val: 55 }, { val: 45 }, { val: 70 }
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Hero Welcome */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">My Sites</h1>
          <p className="text-slate-400 text-lg">Manage your Zeus Hosting experience and domains.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
            <PlusCircle size={18} /> Create New Site
          </button>
        </div>
      </div>

      {/* Main Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Domain Search Card - Iconic for Hosting Companies */}
        <div className="col-span-1 lg:col-span-2 bg-[#0f172a] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-sky-500/5 group-hover:text-sky-500/10 transition-colors">
            <Globe size={180} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Find a new domain</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-md">Search for the perfect address for your brand. Register .com, .net, or localized .cm domains instantly.</p>
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="yourbrandname.com" 
              className="w-full bg-[#020617] border border-slate-700 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-600"
            />
            <button className="absolute right-2 bg-sky-500 hover:bg-sky-400 text-white px-6 py-2.5 rounded-xl font-bold transition-all">
              Search
            </button>
          </div>
        </div>

        {/* Resource Usage Card */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Cloud Stats</h3>
              <Zap size={20} className="text-sky-400" />
            </div>
            <p className="text-slate-400 text-sm mb-6">Aggregated performance across your African cluster nodes.</p>
            <div className="space-y-4">
               <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">CPU Usage</span>
                  <span className="text-white font-bold">12%</span>
               </div>
               <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-sky-500 h-full w-[12%] rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]"></div>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Storage</span>
                  <span className="text-white font-bold">4.2 / 50 GB</span>
               </div>
               <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[8%] rounded-full"></div>
               </div>
            </div>
          </div>
          <button className="mt-8 text-sky-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
            View Full Report <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Featured Sites Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers size={20} className="text-indigo-400" /> Recent Websites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'doualamarket.com', status: 'Active', plan: 'Tier-1 VPS', engine: 'WordPress 6.4' },
            { name: 'techafrica.me', status: 'Active', plan: 'Tier-2 VPS', engine: 'Custom Node.js' }
          ].map((site, i) => (
            <div key={i} className="bg-[#0f172a]/50 border border-slate-800 rounded-3xl p-6 hover:border-sky-500/30 transition-all group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-sky-400 group-hover:bg-sky-500/10 transition-colors">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{site.name}</h4>
                    <p className="text-xs text-slate-500">{site.engine} • {site.plan}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase">{site.status}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all border border-slate-700">Manage</button>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700">
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
