import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { Page } from '../types';

interface TeamPageProps {
  teamMembers: number;
  setCurrentPage: (page: Page) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ teamMembers, setCurrentPage }) => {
  return (
    <div className="pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <h1 className="text-white text-2xl font-bold text-center mb-8">My Team</h1>
        
        <div className="flex bg-white/10 p-1 rounded-2xl backdrop-blur-md mb-8">
          <button className="flex-1 bg-white text-brand-primary font-bold py-3 rounded-xl shadow-lg">Team Report</button>
          <button onClick={() => setCurrentPage('invite')} className="flex-1 text-white/60 font-bold py-3">Invite Friends</button>
        </div>

        <div className="glass-card p-6 grid grid-cols-2 gap-4 relative z-10">
          <div className="text-center border-r border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total Members</p>
            <p className="text-2xl font-black text-brand-primary">{teamMembers}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Total Team Revenue</p>
            <p className="text-2xl font-black text-brand-secondary">₹{(teamMembers * 50).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20 space-y-4">
        {[1, 2, 3].map((level, i) => (
          <div key={level} className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 p-2 rounded-xl text-brand-primary">
                  <span className="font-black">L{level}</span>
                </div>
                <h3 className="font-bold text-gray-800">Level {level} Team</h3>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-3xl">
                <Users size={32} className="text-brand-primary/40 mb-2" />
                <p className="text-2xl font-black text-gray-800">{i === 0 ? teamMembers : 0}</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold">Active Members</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-gray-800">₹{(i === 0 ? teamMembers * 50 : 0).toFixed(2)}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Total Earnings</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-lg font-bold text-gray-800">₹{(i === 0 ? teamMembers * 100 : 0).toFixed(2)}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Total Recharges</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
