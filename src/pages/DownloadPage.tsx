import React from 'react';
import { ChevronLeft, Smartphone, Download, Apple, PlayCircle } from 'lucide-react';
import { Page } from '../types';

interface DownloadPageProps {
  setCurrentPage: (page: Page) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-12 px-6 rounded-b-[40px] flex items-center">
        <button onClick={() => setCurrentPage('mine')} className="text-white mr-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold flex-1 text-center mr-6 uppercase tracking-tight">Download App</h1>
      </div>

      <div className="px-6 mt-8">
        <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 text-center">
          <div className="bg-brand-primary/10 p-6 rounded-full inline-block mb-6">
            <Smartphone size={64} className="text-brand-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">OSM Mobile App</h2>
          <p className="text-gray-400 text-sm mb-10">Experience the full power of OSM Investment on your mobile device. Faster, smoother, and more secure.</p>
          
          <div className="space-y-4">
            <button className="w-full bg-brand-dark text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
              <PlayCircle size={24} />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</p>
                <p className="text-lg leading-none mt-1">Google Play</p>
              </div>
            </button>

            <button className="w-full bg-brand-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
              <Apple size={24} />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on the</p>
                <p className="text-lg leading-none mt-1">App Store</p>
              </div>
            </button>

            <button className="w-full bg-gray-100 text-gray-700 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
              <Download size={24} />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Direct Download</p>
                <p className="text-lg leading-none mt-1">Android APK</p>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-8 bg-brand-secondary/5 p-6 rounded-[32px] border border-brand-secondary/10 text-center">
          <p className="text-xs text-gray-500">Version 2.4.0 (Latest Update: Oct 2023)</p>
        </div>
      </div>
    </div>
  );
};
