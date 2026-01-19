
import React, { useState } from 'react';
import { 
  Plus, Search, ExternalLink, Trash2, RefreshCw, Globe, Settings, Cpu, Shield, Zap, Layout
} from 'lucide-react';
import { Website, SiteStatus } from '../types';

const WebsiteManager: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const mockWebsites: Website[] = [
    {
      id: '1',
      domain: 'ecommerce-douala.com',
      phpVersion: '8.3',
      status: SiteStatus.ACTIVE,
      isWordPress: true,
      diskUsage: 1250,
      bandwidth: 4.2,
      createdAt: '2024-01-12',
      serverId: 'vps-lag-01'
    },
    {
      id: '2',
      domain: 'portfolio-test.me',
      phpVersion: '8.2',
      status: SiteStatus.PENDING,
      isWordPress: false,
      diskUsage: 240,
      bandwidth: 0.5,
      createdAt: '2024-03-05',
      serverId: 'vps-lag-01'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Manage Websites</h1>
          <p className="text-slate-400">Control your domains and server environments.</p>
        </div>
        <button className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-sky-500/20 flex items-center gap-2">
          <Plus size={20} /> Add New Site
        </button>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search your domains..."
            className="w-full bg-[#020617] border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-sky-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {mockWebsites.map((site) => (
            <div key={site.id} className="bg-slate-900 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700 transition-all">
              <div className="p-6 flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${site.isWordPress ? 'bg-sky-500/10 text-sky-400' : 'bg-slate-800 text-slate-500'}`}>
                    {site.isWordPress ? <Zap size={28} /> : <Globe size={28} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{site.domain}</h3>
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase ${site.status === SiteStatus.ACTIVE ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                        {site.status}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1"><Cpu size={12} /> PHP {site.phpVersion}</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1"><Shield size={12} /> SSL Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-12 px-8 border-l border-slate-800 hidden xl:flex">
                   <div className="text-center">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Disk</p>
                      <p className="text-sm font-mono text-slate-300">{(site.diskUsage / 1024).toFixed(1)} GB</p>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Bandwidth</p>
                      <p className="text-sm font-mono text-slate-300">{site.bandwidth} GB</p>
                   </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all border border-slate-700">Manage</button>
                  <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"><ExternalLink size={18} /></button>
                  <button className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"><Settings size={18} /></button>
                  <button className="p-2 hover:bg-rose-500/10 rounded-xl text-slate-500 hover:text-rose-400 transition-colors"><Trash2 size={18} /></button>
                </div>
              </div>

              {site.isWordPress && (
                <div className="bg-sky-500/5 px-6 py-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">WordPress Hub:</span>
                    <button className="text-[10px] font-bold text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 hover:bg-slate-700 transition-all">Quick Login</button>
                    <button className="text-[10px] font-bold text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 hover:bg-slate-700 transition-all">Update Plugins</button>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Server: {site.serverId}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteManager;
