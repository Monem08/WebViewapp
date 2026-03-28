import React from 'react';
import { 
  User, 
  HelpCircle, 
  History, 
  ClipboardList, 
  TrendingUp, 
  Wallet, 
  ShieldCheck, 
  Smartphone, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';
import { Page } from '../types';

interface MinePageProps {
  balance: number;
  totalRecharge: number;
  userInvestments: any[];
  setCurrentPage: (page: Page) => void;
  onLogout: () => void;
}

export const MinePage: React.FC<MinePageProps> = ({ 
  balance, 
  totalRecharge, 
  userInvestments, 
  setCurrentPage, 
  onLogout 
}) => {
  const todayRevenue = userInvestments.reduce((acc, inv) => acc + inv.dailyIncome, 0);
  const totalRevenue = userInvestments.reduce((acc, inv) => acc + inv.totalEarned, 0);

  return (
    <div className="pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <div className="flex justify-end mb-4">
          <button className="text-white/60" onClick={() => setCurrentPage('help')}>
            <HelpCircle size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center overflow-hidden">
            <User size={48} className="text-white/40" />
          </div>
          <p className="text-white/60 text-xs font-mono">ID: 1789083144</p>
        </div>

        <div className="glass-card p-6 grid grid-cols-2 gap-4 relative z-10">
          <div className="text-center border-r border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total Recharge</p>
            <p className="text-2xl font-black text-brand-primary">₹{totalRecharge.toFixed(2)}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Available Balance</p>
            <p className="text-2xl font-black text-brand-secondary">₹{balance.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Yesterday', value: '0.00', icon: History },
            { label: 'Today', value: todayRevenue.toFixed(2), icon: ClipboardList },
            { label: 'This Week', value: todayRevenue.toFixed(2), icon: TrendingUp },
            { label: 'Total Revenue', value: totalRevenue.toFixed(2), icon: Wallet }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-2">
              <stat.icon size={20} className="text-brand-secondary mb-1" />
              <p className="text-xl font-bold text-gray-800">₹{stat.value}</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {[
            { icon: ShieldCheck, label: 'Account Safety', color: 'text-blue-500', page: 'account-safety' },
            { icon: History, label: 'Transaction History', color: 'text-orange-500', page: 'transactions' },
            { icon: Smartphone, label: 'Download App', color: 'text-purple-500', page: 'download' },
            { icon: LogOut, label: 'Logout', color: 'text-red-500', action: onLogout }
          ].map((item, i) => (
            <button 
              key={i} 
              onClick={() => item.page ? setCurrentPage(item.page as Page) : item.action?.()}
              className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-xl bg-gray-50 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <span className="font-bold text-gray-700">{item.label}</span>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
