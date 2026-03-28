import React from 'react';
import { ChevronLeft, Newspaper, Bell } from 'lucide-react';
import { Page } from '../types';

interface NewsPageProps {
  setCurrentPage: (page: Page) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 pb-24">
    <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setCurrentPage('home')} className="text-white">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold">Latest News</h1>
      </div>
      
      <div className="glass-card p-6 flex items-center gap-4 relative z-10">
        <div className="bg-brand-primary/10 p-3 rounded-2xl text-brand-primary">
          <Newspaper size={32} />
        </div>
        <div>
          <p className="text-gray-800 font-bold">Platform Updates</p>
          <p className="text-xs text-gray-400">Stay informed about market changes</p>
        </div>
      </div>
    </div>

    <div className="px-6 -mt-12 relative z-20 space-y-4">
      {[
        { title: 'New Investment Tier Launched', date: 'Oct 24, 2023', desc: 'We have added a new high-yield tier for professional investors.' },
        { title: 'Withdrawal Processing Speed', date: 'Oct 22, 2023', desc: 'Our team has optimized the withdrawal gateway for faster payouts.' },
        { title: 'Referral Bonus Increased', date: 'Oct 20, 2023', desc: 'Earn ₹50 for every successful referral this month!' }
      ].map((news, i) => (
        <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Bell size={14} className="text-brand-secondary" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">{news.date}</span>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">{news.title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{news.desc}</p>
        </div>
      ))}
    </div>
  </div>
);
