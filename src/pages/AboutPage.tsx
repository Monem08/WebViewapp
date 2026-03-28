import React from 'react';
import { ChevronLeft, Info, ShieldCheck, Globe, Award } from 'lucide-react';
import { Page } from '../types';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 pb-24">
    <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setCurrentPage('home')} className="text-white">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold">About Us</h1>
      </div>
      
      <div className="glass-card p-6 flex items-center gap-4 relative z-10">
        <div className="bg-brand-secondary/10 p-3 rounded-2xl text-brand-secondary">
          <Info size={32} />
        </div>
        <div>
          <p className="text-gray-800 font-bold">OSM Investment</p>
          <p className="text-xs text-gray-400">Global Financial Leaders</p>
        </div>
      </div>
    </div>

    <div className="px-6 -mt-12 relative z-20 space-y-6">
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          OSM Investment is a leading global financial services provider dedicated to helping individuals grow their wealth through sustainable and high-yield investment opportunities. Founded in 2015, we have served over 1 million clients worldwide.
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: ShieldCheck, title: 'Secure & Regulated', desc: 'Your funds are protected by industry-leading security protocols.' },
            { icon: Globe, title: 'Global Reach', desc: 'Investing in markets across 5 continents for maximum diversification.' },
            { icon: Award, title: 'Award Winning', desc: 'Recognized as the "Best Green Investment Platform" in 2022.' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="text-brand-primary">
                <item.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                <p className="text-[10px] text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
