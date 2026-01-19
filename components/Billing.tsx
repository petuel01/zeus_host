
import React, { useState } from 'react';
import { CreditCard, Wallet, Smartphone, Info, ArrowUpCircle, ArrowDownCircle, CheckCircle2 } from 'lucide-react';

const Billing: React.FC = () => {
  const [amount, setAmount] = useState('5000');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Wallet & Billing</h1>
        <p className="text-slate-400">Manage your XAF balance and Mobile Money payments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-gradient-to-br from-sky-600 to-blue-700 p-8 rounded-3xl shadow-2xl shadow-sky-500/10 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center gap-3 text-sky-100/80 mb-2">
              <Wallet size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Available Balance</span>
            </div>
            <h2 className="text-5xl font-black text-white tracking-tighter mb-8">24,500 <span className="text-xl opacity-60">XAF</span></h2>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-xs text-sky-100/60 border-b border-white/10 pb-2">
                <span>Monthly Recurring</span>
                <span className="font-mono text-white">4,200 XAF</span>
             </div>
             <p className="text-[10px] text-sky-100/40 uppercase font-bold">Estimated 5.8 months remaining</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Smartphone className="text-yellow-400" />
            Top Up via MTN Mobile Money
          </h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-3">
              {['1000', '5000', '10000', '25000'].map(a => (
                <button 
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`py-3 rounded-2xl border text-sm font-bold transition-all ${amount === a ? 'bg-yellow-400 border-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/20' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'}`}
                >
                  {a} XAF
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">+237</span>
                <input 
                  type="text" 
                  placeholder="670 00 00 00"
                  className="w-full bg-[#020617] border border-slate-800 rounded-2xl pl-16 pr-4 py-4 text-white outline-none focus:ring-1 focus:ring-yellow-400 transition-all font-mono"
                />
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-lg shadow-yellow-400/10">
                Deposit Now
              </button>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/40 p-4 rounded-2xl border border-slate-700">
              <Info size={18} className="text-sky-400 shrink-0" />
              <p className="text-xs text-slate-500 leading-relaxed">
                Transactions are processed in real-time. You will receive a prompt on your device to authorize the payment. Zeus Cloud does not store your MoMo credentials.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
           <h3 className="font-bold text-white">Recent Billing Activity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-slate-500 uppercase font-black tracking-widest border-b border-slate-800">
                <th className="px-8 py-4">Reference</th>
                <th className="px-8 py-4">Description</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {[
                { ref: 'MO-8812', desc: 'MoMo Top Up', amt: '+10,000 XAF', status: 'Success', date: 'Oct 12' },
                { ref: 'INV-4421', desc: 'VPS-LAG-01 Renewal', amt: '-1,200 XAF', status: 'Success', date: 'Oct 01' },
              ].map((tx, i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-8 py-4 text-xs font-mono text-slate-400">{tx.ref}</td>
                  <td className="px-8 py-4 text-sm font-medium text-slate-200">{tx.desc}</td>
                  <td className={`px-8 py-4 text-sm font-bold ${tx.amt.startsWith('+') ? 'text-emerald-400' : 'text-white'}`}>{tx.amt}</td>
                  <td className="px-8 py-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-tighter">
                      <CheckCircle2 size={12} /> {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-xs text-slate-500">{tx.date}, 2024</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;
