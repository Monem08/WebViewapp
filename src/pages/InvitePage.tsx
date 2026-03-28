import React from 'react';
import { ChevronLeft, Copy, Share2, QrCode } from 'lucide-react';
import { Page } from '../types';

interface InvitePageProps {
  setCurrentPage: (page: Page) => void;
  onCopy: () => void;
}

export const InvitePage: React.FC<InvitePageProps> = ({ setCurrentPage, onCopy }) => {
  const inviteCode = '1789083144';
  const inviteLink = `${window.location.origin}?ref=${inviteCode}`;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <button onClick={() => setCurrentPage('team')} className="text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-white text-xl font-bold">Invite Friends</h1>
        </div>

        <div className="glass-card p-8 flex flex-col items-center text-center relative z-10">
          <div className="bg-white p-4 rounded-3xl shadow-inner mb-6">
            <QrCode size={120} className="text-brand-dark" />
          </div>
          <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">Your Invitation Code</p>
          <h2 className="text-3xl font-black text-brand-primary tracking-tighter">{inviteCode}</h2>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20 space-y-6">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Invitation Link</h3>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between mb-6">
            <p className="text-xs text-gray-500 truncate mr-4">{inviteLink}</p>
            <button 
              onClick={onCopy}
              className="bg-brand-primary/10 p-2 rounded-xl text-brand-primary active:scale-90 transition-transform"
            >
              <Copy size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={onCopy}
              className="w-full bg-brand-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <Copy size={20} />
              Copy Invitation Link
            </button>
            <button 
              className="w-full bg-brand-secondary text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-secondary/20 flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <Share2 size={20} />
              Share with Friends
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Referral Rewards</h3>
          <div className="space-y-4">
            {[
              { level: 'Level 1', reward: '10% Commission', desc: 'Direct referral investment' },
              { level: 'Level 2', reward: '5% Commission', desc: 'Indirect referral investment' },
              { level: 'Level 3', reward: '2% Commission', desc: 'Third-tier referral investment' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div>
                  <p className="font-bold text-gray-800 text-sm">{item.level}</p>
                  <p className="text-[10px] text-gray-400">{item.desc}</p>
                </div>
                <span className="text-brand-secondary font-black text-sm">{item.reward}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
