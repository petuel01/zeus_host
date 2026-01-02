
import React from 'react';
import { 
  Cloud, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Globe, 
  Network,
  Layers,
  Zap,
  Lock,
  Smartphone
} from 'lucide-react';

const ArchitectureView: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-black text-white mb-4 tracking-tight">⚡ ZEUS SYSTEM ARCHITECTURE</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Zeus Hosting is built on a <span className="text-sky-400 font-bold">decoupled multi-tier cloud architecture</span>. 
          We separate the control plane (Firebase) from the data plane (VPS Worker Nodes) to ensure zero-trust 
          security and infinite scalability across the African continent.
        </p>
      </div>

      {/* Visual Diagram Placeholder */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 blur-3xl rounded-full" />

        <div className="relative flex flex-col items-center gap-12">
          {/* Top Tier: Frontend */}
          <div className="flex flex-col items-center">
            <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 backdrop-blur-md">
              <Globe className="text-sky-400" />
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Edge</p>
                <p className="text-white font-bold">React / Firebase Hosting</p>
              </div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-sky-500/50 to-transparent mt-2" />
          </div>

          {/* Middle Tier: Control Plane */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
              <ShieldCheck className="mx-auto text-indigo-400" size={32} />
              <h4 className="text-white font-bold">Identity & Auth</h4>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">Firebase Auth + RBAC</p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl text-center space-y-4 ring-2 ring-sky-500/20 shadow-2xl shadow-sky-500/5">
              <Cloud className="mx-auto text-sky-400" size={32} />
              <h4 className="text-white font-bold">Control API</h4>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">Node.js Cloud Functions</p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
              <Smartphone className="mx-auto text-yellow-400" size={32} />
              <h4 className="text-white font-bold">MoMo Payments</h4>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">MTN MoMo Integration</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex items-center w-full max-w-2xl px-12">
              <div className="h-px flex-1 bg-slate-800" />
              <div className="px-6 py-2 bg-slate-800/50 rounded-full border border-slate-700 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure gRPC / Webhook Tunnel</div>
              <div className="h-px flex-1 bg-slate-800" />
            </div>
          </div>

          {/* Bottom Tier: Worker Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {[
              { loc: 'LAGOS', code: 'NG-01' },
              { loc: 'DOUALA', code: 'CM-01' },
              { loc: 'ACCRA', code: 'GH-01' },
              { loc: 'NAIROBI', code: 'KE-01' }
            ].map((node) => (
              <div key={node.code} className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl text-center">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg w-fit mx-auto mb-3">
                  <Cpu size={20} />
                </div>
                <p className="text-xs font-black text-white">{node.loc}</p>
                <p className="text-[9px] font-mono text-slate-500">WORKER {node.code}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
              <Layers size={20} />
            </div>
            <h3 className="text-white font-bold">Micro-Orchestration</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Instead of manual server management, Zeus uses a lightweight controller service on each VPS. 
            It receives JSON tasks from the Cloud Functions and translates them into system commands.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
              <Lock size={20} />
            </div>
            <h3 className="text-white font-bold">Isolation Layer</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Every website runs in its own system user environment with restricted PHP-FPM pools and isolated Nginx blocks. 
            Users never get root access, drastically reducing the attack surface.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Zap size={20} />
            </div>
            <h3 className="text-white font-bold">Edge-Optimized</h3>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            By placing worker nodes in African data centers (Lagos, Douala, Accra), we achieve <span className="text-emerald-400 font-bold">&lt; 50ms latency</span> for local users, 
            beating Western giants like AWS or GCP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureView;
