import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';

interface WithdrawPageProps {
  balance: number;
  setCurrentPage: (page: Page) => void;
  onWithdraw: (amount: number) => void;
}

export const WithdrawPage: React.FC<WithdrawPageProps> = ({ balance, setCurrentPage, onWithdraw }) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  
  const handleWithdraw = () => {
    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt < 200) {
      alert('Minimum withdrawal is ₹200.');
      return;
    }
    if (amt > balance) {
      alert('Insufficient balance.');
      return;
    }
    onWithdraw(amt);
    setWithdrawAmount('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setCurrentPage('home')} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-white font-bold">Withdraw</h1>
          <button className="text-white text-sm">Records</button>
        </div>
        
        <div className="glass-card p-6 text-center relative z-10">
          <p className="text-[10px] text-gray-400 uppercase font-bold mb-2">Withdrawable Balance</p>
          <p className="text-3xl font-black text-brand-primary">₹ {balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100">
          <p className="text-xs font-black text-gray-800 uppercase tracking-widest mb-6">Withdraw Details</p>
          
          <div className="space-y-4 mb-8">
            <input 
              type="number" 
              placeholder="Enter amount"
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary/20 rounded-2xl py-4 px-6 focus:outline-none transition-all font-bold"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Account Holder Name"
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary/20 rounded-2xl py-4 px-6 focus:outline-none transition-all font-bold"
            />
            <input 
              type="text" 
              placeholder="Bank Name / UPI ID"
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary/20 rounded-2xl py-4 px-6 focus:outline-none transition-all font-bold"
            />
            <input 
              type="text" 
              placeholder="IFSC Code (Optional)"
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-primary/20 rounded-2xl py-4 px-6 focus:outline-none transition-all font-bold"
            />
          </div>

          <div className="bg-brand-primary/5 p-4 rounded-2xl mb-8">
            <p className="text-[10px] text-brand-primary font-bold uppercase mb-2">Withdrawal Rules:</p>
            <ul className="text-[10px] text-gray-500 space-y-1 list-disc pl-4">
              <li>Minimum withdrawal: ₹200</li>
              <li>Withdrawal time: 10:00 AM - 06:00 PM</li>
              <li>Processing fee: 10%</li>
              <li>Arrival time: Within 24 hours</li>
            </ul>
          </div>

          <button 
            onClick={handleWithdraw}
            className="w-full bg-gradient-to-r from-brand-primary to-brand-dark text-white font-bold py-5 rounded-full shadow-lg shadow-brand-primary/30 active:scale-95 transition-transform"
          >
            WITHDRAW NOW
          </button>
        </div>
      </div>
    </div>
  );
};
