
import React, { useState } from 'react';
import { 
  CreditCard, 
  Wallet, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Clock, 
  CheckCircle2, 
  Smartphone,
  Info
} from 'lucide-react';

const Billing: React.FC = () => {
  const [topUpAmount, setTopUpAmount] = useState('5000');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMomoPayment = () => {
    setIsProcessing(true);
    // Simulation of MoMo prompt
    setTimeout(() => {
      setIsProcessing(false);
      alert('MTN MoMo push notification sent to your phone. Please authorize the transaction of ' + topUpAmount + ' XAF.');
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Billing & Payments</h1>
          <p className="text-slate-400">Manage your subscription and top up using MTN Mobile Money.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Balance Card */}
        <div className="lg:col-span-1 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 rounded-3xl shadow-xl shadow-sky-500/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
            <Wallet size={120} />
          </div>
          <p className="text-sky-100/80 font-medium mb-1">Available Balance</p>
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">24,500 <span className="text-lg font-bold opacity-80">XAF</span></h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-sky-100/70 border-b border-white/10 pb-2">
              <span>Next Invoice</span>
              <span className="font-mono">15 Oct 2024</span>
            </div>
            <div className="flex items-center justify-between text-sm text-sky-100/70">
              <span>Estimated Cost</span>
              <span className="font-mono">~4,200 XAF</span>
            </div>
          </div>
        </div>

        {/* Top Up Form */}
        <div className="lg:col-span-2 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Smartphone className="text-yellow-400" />
            Top Up with MTN MoMo
          </h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['1000', '5000', '10000', '25000'].map(amount => (
                <button 
                  key={amount}
                  onClick={() => setTopUpAmount(amount)}
                  className={`py-3 rounded-xl border text-sm font-bold transition-all ${
                    topUpAmount === amount 
                      ? 'bg-yellow-400 border-yellow-400 text-slate-900 shadow-lg shadow-yellow-400/20' 
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  {amount} XAF
                </button>
              ))}
            </div>

            <div className="relative">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">MoMo Phone Number</label>
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-sm">+237</span>
                  <input 
                    type="text" 
                    placeholder="67X XX XX XX"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-16 pr-4 py-3 text-slate-200 outline-none focus:border-yellow-400/50 transition-all font-mono"
                  />
                </div>
                <button 
                  onClick={handleMomoPayment}
                  disabled={isProcessing}
                  className="bg-yellow-400 hover:bg-yellow-300 disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 px-8 py-3 rounded-xl font-black text-sm transition-all whitespace-nowrap shadow-lg shadow-yellow-400/10"
                >
                  {isProcessing ? 'Processing...' : 'Pay with MoMo'}
                </button>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex gap-3">
              <Info size={20} className="text-sky-400 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Transactions are processed securely via MTN Mobile Money Cameroon. 
                Ensure your phone is unlocked and you have sufficient funds before proceeding. 
                Credits are applied to your wallet instantly after confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-950/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { id: 'TX-98213', type: 'Credit', method: 'MTN MoMo', amount: '+5,000 XAF', status: 'Completed', date: 'Sept 12, 2024' },
                { id: 'TX-98104', type: 'Debit', method: 'Hosting Renewal', amount: '-1,200 XAF', status: 'Completed', date: 'Sept 01, 2024' },
                { id: 'TX-97992', type: 'Credit', method: 'MTN MoMo', amount: '+10,000 XAF', status: 'Completed', date: 'Aug 24, 2024' },
              ].map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-slate-400">{tx.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {tx.type === 'Credit' ? <ArrowUpCircle size={14} className="text-emerald-400" /> : <ArrowDownCircle size={14} className="text-rose-400" />}
                      <span className="text-sm text-slate-200">{tx.method}</span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold ${tx.type === 'Credit' ? 'text-emerald-400' : 'text-slate-200'}`}>{tx.amount}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                      <CheckCircle2 size={12} /> {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{tx.date}</td>
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
