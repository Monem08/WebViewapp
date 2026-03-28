import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Crown, Phone, Lock, UserPlus, ShieldCheck } from 'lucide-react';
import { Page } from '../types';

interface RegisterPageProps {
  onRegister: (phone: string, pass: string) => void;
  setCurrentPage: (page: Page) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, setCurrentPage }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    onRegister(phone, password);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <div className="h-1/4 flex flex-col items-center justify-center gap-2">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-brand-accent/20 p-3 rounded-full"
        >
          <Crown size={48} className="text-brand-accent" />
        </motion.div>
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold tracking-tight">OSM INVESTMENT</h1>
          <p className="text-white/60 text-[10px] uppercase tracking-widest mt-1">Join the Global Market</p>
        </div>
      </div>
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex-1 bg-white rounded-t-[40px] p-8"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-brand-secondary/10 p-2 rounded-full mb-4">
            <div className="bg-brand-secondary p-2 rounded-full text-white">
              <UserPlus size={20} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-400 text-sm">Start your investment journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">+91</span>
            <input 
              type="tel" 
              placeholder="Phone Number"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          <div className="relative">
            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <ShieldCheck size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="password" 
              placeholder="Confirm Password"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <Crown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Invite Code (Optional)"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-brand-secondary to-brand-dark text-white font-bold py-4 rounded-full shadow-lg shadow-brand-secondary/30 active:scale-95 transition-transform mt-4"
          >
            REGISTER NOW
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account? <span onClick={() => setCurrentPage('login')} className="text-brand-primary font-bold cursor-pointer">Login</span>
        </div>
      </motion.div>
    </div>
  );
};
