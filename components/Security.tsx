
import React from 'react';
import { Shield, ShieldAlert, Key, Eye, Lock, FileText, CheckCircle } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Security Center</h1>
          <p className="text-slate-400">Monitor threats and manage identity across your hosting account.</p>
        </div>
        <div className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-xl border border-emerald-500/20 flex items-center gap-2">
          <Shield size={18} />
          <span className="text-sm font-bold uppercase tracking-tighter">Account Secure</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* WAF Status */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
              <Eye size={20} />
            </div>
            <h3 className="text-white font-bold">Edge WAF</h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">Real-time protection against SQLi, XSS, and DDoS at the edge nodes.</p>
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Status</span>
              <span className="text-emerald-400 font-bold">Active</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Threats Blocked (24h)</span>
              <span className="text-slate-200 font-mono">142</span>
            </div>
          </div>
        </div>

        {/* SSL Status */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
              <Lock size={20} />
            </div>
            <h3 className="text-white font-bold">Auto-SSL</h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">Let's Encrypt certificates managed automatically for every domain.</p>
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Coverage</span>
              <span className="text-slate-200 font-bold">100% (12/12)</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Renewal Mode</span>
              <span className="text-sky-400 font-bold">Automatic</span>
            </div>
          </div>
        </div>

        {/* IAM Status */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
              <Key size={20} />
            </div>
            <h3 className="text-white font-bold">Access Control</h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">Role-based access controls for team members and API clients.</p>
          <div className="space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Active Sessions</span>
              <span className="text-slate-200 font-mono">2</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">2FA Status</span>
              <span className="text-amber-400 font-bold">Recommended</span>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Logs */}
      <div className="bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText size={18} className="text-slate-400" /> Audit Log
          </h3>
          <button className="text-xs text-sky-400 font-bold hover:underline uppercase tracking-tighter">Download JSON Report</button>
        </div>
        <div className="p-6 space-y-4">
          {[
            { action: 'Website Created', meta: 'portfolio-test.me', time: '2 hours ago', status: 'SUCCESS' },
            { action: 'Database User Reset', meta: 'db_admin_root', time: '5 hours ago', status: 'SUCCESS' },
            { action: 'Failed Login Attempt', meta: 'IP: 192.168.1.1 (Lagos)', time: '1 day ago', status: 'BLOCKED' },
            { action: 'SSL Certificate Issued', meta: 'zeushost.africa', time: '3 days ago', status: 'SUCCESS' },
          ].map((log, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${log.status === 'BLOCKED' ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                  {log.status === 'BLOCKED' ? <ShieldAlert size={16} /> : <CheckCircle size={16} />}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-200">{log.action}</p>
                  <p className="text-xs text-slate-500 font-mono">{log.meta}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">{log.time}</p>
                <p className={`text-[10px] font-bold ${log.status === 'BLOCKED' ? 'text-rose-400' : 'text-emerald-400'}`}>{log.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
