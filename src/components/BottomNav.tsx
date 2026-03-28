import React from 'react';
import { 
  Home as HomeIcon, 
  ClipboardList, 
  TrendingUp, 
  User, 
  Users
} from 'lucide-react';
import { Page } from '../types';

interface BottomNavProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'task', icon: ClipboardList, label: 'Task' },
    { id: 'team', icon: Users, label: 'Team', isCenter: true },
    { id: 'income', icon: TrendingUp, label: 'Income' },
    { id: 'mine', icon: User, label: 'Mine' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-dark border-t border-white/10 px-6 py-3 flex justify-between items-center z-50 rounded-t-3xl max-w-md mx-auto">
      {navItems.map((item) => {
        if (item.isCenter) {
          return (
            <div key={item.id} className="relative -top-6">
              <button 
                onClick={() => setCurrentPage(item.id as Page)}
                className="bg-white p-3 rounded-full shadow-lg border-4 border-brand-dark active:scale-90 transition-transform"
              >
                <item.icon size={28} className="text-brand-primary" />
              </button>
            </div>
          );
        }
        return (
          <button 
            key={item.id}
            onClick={() => setCurrentPage(item.id as Page)}
            className={`flex flex-col items-center gap-1 transition-colors ${currentPage === item.id ? 'text-brand-secondary' : 'text-gray-400'}`}
          >
            <item.icon size={24} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
