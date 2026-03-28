import React, { useState, useEffect } from 'react';
import { TrendingUp, Package, Clock } from 'lucide-react';
import { Page } from '../types';

interface IncomePageProps {
  userInvestments: any[];
  setCurrentPage: (page: Page) => void;
}

export const IncomePage: React.FC<IncomePageProps> = ({ userInvestments, setCurrentPage }) => {
  const [timers, setTimers] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimers = () => {
      const now = new Date();
      const newTimers: { [key: string]: string } = {};

      userInvestments.forEach(inv => {
        if (inv.status !== 'active') return;
        
        const lastCollected = new Date(inv.lastCollected);
        const nextCollection = new Date(lastCollected.getTime() + 86400 * 1000);
        const diff = nextCollection.getTime() - now.getTime();

        if (diff > 0) {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          newTimers[inv.id] = `${hours}h ${minutes}m ${seconds}s`;
        } else {
          newTimers[inv.id] = "Processing...";
        }
      });

      setTimers(newTimers);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, [userInvestments]);

  return (
    <div className="pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <h1 className="text-white text-2xl font-bold text-center mb-8">My Investments</h1>
        
        <div className="glass-card p-6 flex justify-around items-center relative z-10">
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Active Plans</p>
            <p className="text-2xl font-black text-brand-primary">{userInvestments.length}</p>
          </div>
          <div className="w-px h-12 bg-gray-100"></div>
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Daily Yield</p>
            <p className="text-2xl font-black text-brand-secondary">
              ₹{userInvestments.reduce((acc, inv) => acc + inv.dailyIncome, 0)}
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20 space-y-6">
        {userInvestments.length === 0 ? (
          <div className="bg-white rounded-[40px] p-12 text-center shadow-sm border border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={40} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Active Investments</h3>
            <p className="text-gray-400 text-sm mb-8">Start your investment journey today and earn daily profits.</p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="w-full bg-brand-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-primary/20"
            >
              EXPLORE PACKAGES
            </button>
          </div>
        ) : (
          userInvestments.map((inv) => (
            <div key={inv.id} className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-secondary/10 p-2 rounded-xl text-brand-secondary">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{inv.packageName}</h3>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Start: {inv.purchaseDate}</p>
                      <p className="text-[10px] text-brand-primary font-bold uppercase tracking-wider">End: {inv.expiryDate}</p>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  {inv.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Daily Income</p>
                  <p className="text-brand-primary font-bold">₹{inv.dailyIncome}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-2xl">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Total Earned</p>
                  <p className="text-brand-secondary font-bold">₹{inv.totalEarned}</p>
                </div>
              </div>
              
              {inv.status === 'active' && (
                <div className="mt-4 flex items-center justify-center gap-2 py-2 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                  <Clock size={14} className="text-brand-primary" />
                  <p className="text-[10px] font-bold text-gray-600 uppercase">
                    Next Income in: <span className="text-brand-primary">{timers[inv.id] || 'Calculating...'}</span>
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
