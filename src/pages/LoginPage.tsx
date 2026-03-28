import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Crown, ChevronRight } from 'lucide-react';
import { Page } from '../types';

interface LoginPageProps {
  onLogin: (phone: string, pass: string) => void;
  setCurrentPage: (page: Page) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, setCurrentPage }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(phone, password);
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <div className="h-1/3 flex flex-col items-center justify-center gap-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-brand-accent/20 p-4 rounded-full"
        >
          <Crown size={64} className="text-brand-accent" />
        </motion.div>
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold tracking-tight">OSM INVESTMENT</h1>
          <p className="text-white/60 text-sm uppercase tracking-widest mt-1">Global Market</p>
        </div>
      </div>
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex-1 bg-white rounded-t-[40px] p-8"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-brand-primary/10 p-2 rounded-full mb-4">
            <div className="bg-brand-primary p-2 rounded-full text-white">
              <ChevronRight size={20} className="rotate-90" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Login to your green investment account</p>
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
          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-brand-primary to-brand-dark text-white font-bold py-4 rounded-full shadow-lg shadow-brand-primary/30 active:scale-95 transition-transform mt-4"
          >
            LOGIN NOW
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          New to the platform? <span onClick={() => setCurrentPage('register')} className="text-brand-secondary font-bold cursor-pointer">Register</span>
        </div>
      </motion.div>
    </div>
  );
};
