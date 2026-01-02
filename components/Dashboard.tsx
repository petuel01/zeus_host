
import React from 'react';
import { 
  Activity, 
  HardDrive, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', load: 12 },
  { time: '04:00', load: 18 },
  { time: '08:00', load: 45 },
  { time: '12:00', load: 78 },
  { time: '16:00', load: 55 },
  { time: '20:00', load: 35 },
  { time: '23:59', load: 20 },
];

const StatCard = ({ label, value, icon: Icon, color, trend }: any) => (
  <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all">
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400`}>
        <Icon size={24} />
      </div>
      {trend && (
        <span className="flex items-center text-xs font-medium text-emerald-400">
          <TrendingUp size={12} className="mr-1" />
          {trend}
        </span>
      )}
    </div>
    <div className="space-y-1">
      <p className="text-sm text-slate-400 font-medium">{label}</p>
      <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
          <p className="text-sm font-mono text-white">
            <span className="font-bold text-sky-400">{payload[0].value}</span>
            <span className="ml-1 text-slate-400 text-xs">req/s</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome back, John 👋</h1>
          <p className="text-slate-400">Here's what's happening across your 12 active sites.</p>
        </div>
        <button className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2">
          New Project <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Active Websites" value="12" icon={Globe} color="sky" trend="+2 this month" />
        <StatCard label="CPU Usage" value="24.8%" icon={Cpu} color="indigo" />
        <StatCard label="Storage" value="184 GB" icon={HardDrive} color="emerald" />
        <StatCard label="Live Sessions" value="1,240" icon={Activity} color="rose" trend="12% vs last week" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Aggregated Traffic</h3>
              <p className="text-xs text-slate-500">Across all VPS worker nodes (Requests/s)</p>
            </div>
            <select className="bg-slate-800 border-none rounded-lg text-xs px-3 py-2 text-slate-300 outline-none cursor-pointer hover:bg-slate-700 transition-colors">
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  vertical={false} 
                  stroke="#1e293b" 
                  opacity={0.5}
                />
                <XAxis 
                  dataKey="time" 
                  stroke="#475569" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#475569" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false}
                  dx={-10}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ stroke: '#334155', strokeWidth: 2, strokeDasharray: '4 4' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="load" 
                  stroke="#0ea5e9" 
                  fillOpacity={1} 
                  fill="url(#colorLoad)" 
                  strokeWidth={3}
                  activeDot={{ 
                    r: 6, 
                    stroke: '#0f172a', 
                    strokeWidth: 2, 
                    fill: '#0ea5e9',
                    className: "filter drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                  }}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-6">System Health</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
              <div>
                <p className="text-sm font-medium text-slate-200">Nginx Engine</p>
                <p className="text-xs text-slate-500">Operational • Uptime 99.99%</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
              <div>
                <p className="text-sm font-medium text-slate-200">PHP-FPM Workers</p>
                <p className="text-xs text-slate-500">12 workers active • Scale capacity 80%</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10" />
              <div>
                <p className="text-sm font-medium text-slate-200">MTN MoMo Gateway</p>
                <p className="text-xs text-slate-500">Online • Latency 45ms</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 ring-4 ring-amber-500/10" />
              <div>
                <p className="text-sm font-medium text-slate-200">Backup Engine</p>
                <p className="text-xs text-slate-500">Weekly sync pending for 2 sites</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="bg-sky-500/5 p-4 rounded-xl border border-sky-500/20">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} className="text-sky-400" />
                <span className="text-xs font-bold text-sky-400 uppercase tracking-tighter">Next Billing Cycle</span>
              </div>
              <p className="text-sm text-slate-300 font-medium">October 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
