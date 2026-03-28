import React from 'react';
import { motion } from 'motion/react';
import { 
  Crown, 
  Wallet, 
  ArrowDownToLine, 
  Newspaper, 
  Info, 
  Gift, 
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { Page, INVESTMENT_PACKAGES, InvestmentPackage } from '../types';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  onInvest: (pkg: InvestmentPackage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, onInvest }) => {
  return (
    <div className="pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Crown size={24} className="text-brand-accent" />
              <h1 className="text-white text-xl font-bold">OSM INVESTMENT</h1>
            </div>
            <p className="text-white/60 text-[10px] mt-1">The Quality Choice for Every Home</p>
          </div>
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
            <div className="bg-white/20 px-2 py-1 rounded text-[10px] text-white font-bold">AM</div>
          </div>
        </div>

        <div className="glass-card p-6 flex justify-around items-center relative z-10">
          <button onClick={() => setCurrentPage('recharge')} className="flex flex-col items-center gap-2">
            <div className="bg-brand-secondary/10 p-3 rounded-2xl text-brand-secondary">
              <Wallet size={28} />
            </div>
            <span className="text-sm font-bold text-gray-700">Recharge</span>
          </button>
          <div className="w-px h-12 bg-gray-100"></div>
          <button onClick={() => setCurrentPage('withdraw')} className="flex flex-col items-center gap-2">
            <div className="bg-brand-primary/10 p-3 rounded-2xl text-brand-primary">
              <ArrowDownToLine size={28} />
            </div>
            <span className="text-sm font-bold text-gray-700">Withdraw</span>
          </button>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { icon: Newspaper, label: 'News', page: 'news' },
            { icon: Info, label: 'About', page: 'about' },
            { icon: Gift, label: 'Gift', page: 'gift' },
            { icon: HelpCircle, label: 'Help', page: 'help' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => setCurrentPage(item.page as Page)}
            >
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 text-brand-secondary">
                <item.icon size={24} />
              </div>
              <span className="text-[10px] font-medium text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-6 bg-brand-secondary rounded-full"></div>
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            ✨ Investment Packages ✨
          </h2>
        </div>

        <div className="space-y-6">
          {INVESTMENT_PACKAGES.map((pkg) => (
            <motion.div 
              key={pkg.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100"
            >
              <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{pkg.name}</h3>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="bg-gray-50 p-3 rounded-2xl text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Price</p>
                    <p className="text-brand-secondary font-bold text-xs">₹{pkg.price}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-2xl text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Daily</p>
                    <p className="text-brand-secondary font-bold text-xs">₹{pkg.dailyIncome}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-2xl text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total</p>
                    <p className="text-brand-secondary font-bold text-xs">₹{pkg.totalEarn}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-2xl text-center">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Cycle</p>
                    <p className="text-brand-primary font-bold text-xs">{pkg.validityDays}D</p>
                  </div>
                </div>
                <button 
                  onClick={() => onInvest(pkg)}
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-dark text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <TrendingUp size={20} />
                  INVEST NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
