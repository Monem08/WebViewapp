import React from 'react';
import { ChevronLeft, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Page } from '../types';

interface HelpPageProps {
  setCurrentPage: (page: Page) => void;
}

export const HelpPage: React.FC<HelpPageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 pb-24">
    <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setCurrentPage('home')} className="text-white">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold">Help Center</h1>
      </div>
      
      <div className="glass-card p-6 flex items-center gap-4 relative z-10">
        <div className="bg-brand-primary/10 p-3 rounded-2xl text-brand-primary">
          <HelpCircle size={32} />
        </div>
        <div>
          <p className="text-gray-800 font-bold">Support 24/7</p>
          <p className="text-xs text-gray-400">We are here to help you</p>
        </div>
      </div>
    </div>

    <div className="px-6 -mt-12 relative z-20 space-y-6">
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            { q: 'How do I withdraw my earnings?', a: 'Go to the Withdraw page, enter your bank details and the amount you wish to withdraw.' },
            { q: 'What is the minimum deposit?', a: 'The minimum recharge amount is ₹300.' },
            { q: 'How long does withdrawal take?', a: 'Withdrawals are typically processed within 24 hours.' }
          ].map((faq, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-800 text-sm mb-1">{faq.q}</h4>
              <p className="text-xs text-gray-500">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: MessageCircle, label: 'WhatsApp', color: 'text-green-500' },
          { icon: Mail, label: 'Email', color: 'text-blue-500' },
          { icon: Phone, label: 'Call', color: 'text-brand-primary' }
        ].map((contact, i) => (
          <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center gap-2">
            <div className={`p-3 rounded-2xl bg-gray-50 ${contact.color}`}>
              <contact.icon size={24} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase">{contact.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
