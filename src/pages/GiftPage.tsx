import React, { useState } from 'react';
import { ChevronLeft, Gift, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface GiftPageProps {
  setCurrentPage: (page: Page) => void;
  onRedeem: (code: string) => void;
}

export const GiftPage: React.FC<GiftPageProps> = ({ setCurrentPage, onRedeem }) => {
  const [giftCode, setGiftCode] = useState('');

  const handleRedeem = () => {
    if (!giftCode) {
      alert('Please enter a gift code.');
      return;
    }
    onRedeem(giftCode);
    setGiftCode('');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setCurrentPage('home')} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-bold">Redeem Gift</h1>
        </div>
        
        <div className="glass-card p-6 flex items-center gap-4 relative z-10">
          <div className="bg-brand-accent/10 p-3 rounded-2xl text-brand-accent">
            <Gift size={32} />
          </div>
          <div>
            <p className="text-gray-800 font-bold">Gift Rewards</p>
            <p className="text-xs text-gray-400">Enter code to claim your bonus</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 text-center">
          <div className="bg-brand-accent/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles size={40} className="text-brand-accent" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Have a Gift Code?</h2>
          <p className="text-gray-400 text-sm mb-8">Enter your secret code below to unlock special rewards and bonuses.</p>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Enter Code (e.g. OSM100)"
              className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-accent/20 rounded-2xl py-4 px-6 focus:outline-none transition-all font-bold text-center uppercase tracking-widest"
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
            />
            <button 
              onClick={handleRedeem}
              className="w-full bg-gradient-to-r from-brand-accent to-orange-600 text-white font-bold py-5 rounded-full shadow-lg shadow-brand-accent/30 active:scale-95 transition-transform"
            >
              REDEEM NOW
            </button>
          </div>
          
          <p className="mt-8 text-[10px] text-gray-400 uppercase font-bold">
            * Codes are case sensitive and can only be used once.
          </p>
        </div>
      </div>
    </div>
  );
};
