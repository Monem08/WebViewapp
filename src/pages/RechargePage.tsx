import React, { useState } from 'react';
import { ChevronLeft, Crown, Wallet, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';

interface RechargePageProps {
  balance: number;
  setCurrentPage: (page: Page) => void;
  onRecharge: (amount: number) => void;
}

export const RechargePage: React.FC<RechargePageProps> = ({ balance, setCurrentPage, onRecharge }) => {
  const [amount, setAmount] = useState('');
  const amounts = [300, 800, 1500, 3000, 5000, 12000, 18000, 25000, 50000];

  const handleRecharge = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    onRecharge(amt);
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setCurrentPage('home')} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-white font-bold">Recharge</h1>
          <button className="text-white text-sm">Records</button>
        </div>
        
        <div className="flex flex-col items-center gap-2 mb-8">
          <Crown size={32} className="text-brand-accent" />
          <h2 className="text-white font-bold">OSM INVESTMENT</h2>
        </div>

        <div className="glass-card p-6 text-center relative z-10">
          <p className="text-[10px] text-gray-400 uppercase font-bold mb-2">Available Balance</p>
          <p className="text-3xl font-black text-brand-primary">₹ {balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100">
          <p className="text-xs font-black text-gray-800 uppercase tracking-widest mb-6">Select Amount</p>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            {amounts.map((amt) => (
              <button 
                key={amt}
                onClick={() => setAmount(amt.toString())}
                className={`py-4 rounded-2xl font-bold transition-all border-2 ${amount === amt.toString() ? 'bg-brand-primary text-white border-brand-primary' : 'bg-gray-50 text-gray-700 border-transparent'}`}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          <div className="relative mb-8">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-secondary font-bold">₹</span>
            <input 
              type="number" 
              placeholder="Enter custom amount"
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary/20 rounded-2xl py-4 pl-8 pr-4 focus:outline-none transition-all font-bold"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <p className="text-xs font-black text-gray-800 uppercase tracking-widest mb-4">Payment Method</p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-brand-primary/20">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary p-2 rounded-xl text-white">
                  <Wallet size={20} />
                </div>
                <span className="font-bold text-gray-700">UPI Gateway</span>
              </div>
              <CheckCircle2 size={20} className="text-brand-secondary" />
            </div>
          </div>

          <button 
            onClick={handleRecharge}
            className="w-full bg-gradient-to-r from-brand-primary to-brand-dark text-white font-bold py-5 rounded-full shadow-lg shadow-brand-primary/30 active:scale-95 transition-transform"
          >
            RECHARGE NOW
          </button>
        </div>
      </div>
    </div>
  );
};
