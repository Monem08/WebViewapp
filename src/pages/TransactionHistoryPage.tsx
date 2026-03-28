import React from 'react';
import { ChevronLeft, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';
import { Page } from '../types';

interface TransactionHistoryPageProps {
  setCurrentPage: (page: Page) => void;
}

export const TransactionHistoryPage: React.FC<TransactionHistoryPageProps> = ({ setCurrentPage }) => {
  const transactions = [
    { id: 1, type: 'recharge', amount: 500, date: '2023-10-24 14:30', status: 'Success' },
    { id: 2, type: 'withdraw', amount: 200, date: '2023-10-23 09:15', status: 'Success' },
    { id: 3, type: 'income', amount: 50, date: '2023-10-22 10:00', status: 'Success' },
    { id: 4, type: 'recharge', amount: 1000, date: '2023-10-20 18:45', status: 'Success' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-brand-dark pt-12 pb-12 px-6 rounded-b-[40px] flex items-center">
        <button onClick={() => setCurrentPage('mine')} className="text-white mr-4">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-white text-xl font-bold flex-1 text-center mr-6 uppercase tracking-tight">Transactions</h1>
      </div>

      <div className="px-6 mt-8 space-y-4">
        {transactions.length === 0 ? (
          <div className="bg-white p-12 rounded-[40px] text-center shadow-sm border border-gray-100">
            <History size={48} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400">No transactions found</p>
          </div>
        ) : (
          transactions.map((tx) => (
            <div key={tx.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${tx.type === 'recharge' || tx.type === 'income' ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                  {tx.type === 'recharge' || tx.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
                </div>
                <div>
                  <p className="font-bold text-gray-800 capitalize">{tx.type}</p>
                  <p className="text-[10px] text-gray-400">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-black text-lg ${tx.type === 'recharge' || tx.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                  {tx.type === 'recharge' || tx.type === 'income' ? '+' : '-'}₹{tx.amount}
                </p>
                <p className="text-[10px] font-bold text-brand-secondary uppercase">{tx.status}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
