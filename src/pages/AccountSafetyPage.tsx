import React from 'react';
import { ChevronLeft, ShieldCheck, Lock, Smartphone, Eye, EyeOff } from 'lucide-react';
import { Page } from '../types';

interface AccountSafetyPageProps {
  setCurrentPage: (page: Page) => void;
}

export const AccountSafetyPage: React.FC<AccountSafetyPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-12 px-6 rounded-b-[40px] flex items-center">
        <button onClick={() => setCurrentPage('mine')} className="text-white mr-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold flex-1 text-center mr-6 uppercase tracking-tight">Account Safety</h1>
      </div>

      <div className="px-6 mt-8 space-y-6">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <ShieldCheck size={48} className="text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Your Account is Secure</h2>
            <p className="text-gray-400 text-sm text-center mt-2">We use advanced encryption to protect your data and funds.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-brand-primary" />
                <span className="font-bold text-gray-700">Login Password</span>
              </div>
              <button className="text-brand-secondary text-sm font-bold">Modify</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-brand-primary" />
                <span className="font-bold text-gray-700">Phone Binding</span>
              </div>
              <span className="text-gray-400 text-sm">+91 ******3144</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-brand-primary" />
                <span className="font-bold text-gray-700">Withdrawal Password</span>
              </div>
              <button className="text-brand-secondary text-sm font-bold">Set Now</button>
            </div>
          </div>
        </div>

        <div className="bg-brand-primary/5 p-6 rounded-[32px] border border-brand-primary/10">
          <h3 className="font-bold text-brand-primary mb-2">Security Tips:</h3>
          <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
            <li>Never share your password or OTP with anyone.</li>
            <li>OSM staff will never ask for your login credentials.</li>
            <li>Use a strong, unique password for your account.</li>
            <li>Enable withdrawal password for extra layer of security.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
