
import React from 'react';
import { Database, Plus, Search, Server, User, Key, ExternalLink, HardDrive } from 'lucide-react';

const DatabaseManager: React.FC = () => {
  const dbs = [
    { name: 'wp_main_prod', user: 'wp_admin', host: '127.0.0.1', size: '42.5 MB', type: 'MariaDB 10.11' },
    { name: 'app_v2_staging', user: 'staging_usr', host: '127.0.0.1', size: '15.2 MB', type: 'MySQL 8.0' },
    { name: 'test_db_empty', user: 'tester', host: '127.0.0.1', size: '0.1 MB', type: 'MySQL 8.0' },
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-left-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Databases</h1>
          <p className="text-slate-400">High-performance MySQL & MariaDB instances.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
            <ExternalLink size={18} /> phpMyAdmin
          </button>
          <button className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
            <Plus size={18} /> Create Database
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dbs.map((db) => (
          <div key={db.name} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 hover:border-slate-700 transition-all group relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={80} />
             </div>
             
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">{db.name}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter font-bold">{db.type} Instance</p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <User size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Username</span>
                  </div>
                  <p className="text-xs font-mono text-slate-300">{db.user}</p>
                </div>
                <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <HardDrive size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Size</span>
                  </div>
                  <p className="text-xs font-mono text-slate-300">{db.size}</p>
                </div>
             </div>

             <div className="flex items-center justify-between pt-4 border-t border-slate-800">
               <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                 <Server size={10} />
                 HOST: {db.host}
               </div>
               <div className="flex gap-2">
                 <button className="text-xs font-bold text-slate-400 hover:text-white transition-colors">Backup</button>
                 <button className="text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors">Reset Pwd</button>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseManager;
