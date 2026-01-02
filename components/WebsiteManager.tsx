
import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  ExternalLink, 
  Trash2, 
  RefreshCw,
  Layout,
  Globe,
  Settings,
  Cpu,
  Shield,
  Zap
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
    },
    {
      id: '3',
      domain: 'zeushost.africa',
      phpVersion: '8.3',
      status: SiteStatus.ACTIVE,
      isWordPress: true,
      diskUsage: 8900,
      bandwidth: 45.8,
      createdAt: '2023-11-20',
      serverId: 'vps-dou-02'
    }
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Managed Websites</h1>
          <p className="text-slate-400">Deploy and scale your web applications instantly.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Filter domains..."
              className="bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 outline-none focus:border-sky-500/50 transition-all w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
            <Plus size={18} /> Add Website
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockWebsites.map((site) => (
          <div key={site.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all group">
            <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
              {/* Site Icon / Info */}
              <div className="flex-1 flex items-center gap-4">
                <div className={`p-4 rounded-2xl ${site.isWordPress ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                  {site.isWordPress ? <Zap size={24} /> : <Globe size={24} />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {site.domain}
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                      site.status === SiteStatus.ACTIVE ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {site.status}
                    </span>
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Cpu size={12} /> PHP {site.phpVersion}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Layout size={12} /> {site.isWordPress ? 'WordPress 6.4' : 'HTML/JS'}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Shield size={12} /> SSL Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-8 px-6 border-x border-slate-800 hidden lg:flex">
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Disk</p>
                  <p className="text-sm font-mono text-slate-200">{(site.diskUsage / 1024).toFixed(1)} GB</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Traffic</p>
                  <p className="text-sm font-mono text-slate-200">{site.bandwidth} GB</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-sky-400 transition-colors title='Site Logs'">
                  <ExternalLink size={18} />
                </button>
                <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 transition-colors">
                  <RefreshCw size={18} />
                </button>
                <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                  <Settings size={18} />
                </button>
                <div className="w-px h-6 bg-slate-800 mx-1" />
                <button className="p-2 hover:bg-rose-500/10 rounded-lg text-slate-500 hover:text-rose-400 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {/* Sub-bar for WordPress users */}
            {site.isWordPress && (
              <div className="px-6 py-3 bg-indigo-500/5 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-indigo-400">WP Quick Actions:</span>
                  <button className="text-[11px] px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700">Login to Admin</button>
                  <button className="text-[11px] px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700">Update Core</button>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">NODE: {site.serverId}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteManager;
