import React from 'react';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

interface TaskPageProps {
  completedTasks: string[];
  onClaim: (id: string, reward: number) => void;
}

export const TaskPage: React.FC<TaskPageProps> = ({ completedTasks, onClaim }) => {
  const tasks = [
    { id: 't1', title: 'Daily Check-in', reward: 10, desc: 'Login every day to claim your reward' },
    { id: 't2', title: 'Invite 1 Friend', reward: 50, desc: 'Get a bonus for every successful referral' },
    { id: 't3', title: 'Share on WhatsApp', reward: 5, desc: 'Spread the word about OSM Investment' }
  ];

  return (
    <div className="pb-24">
      <div className="bg-brand-dark pt-12 pb-24 px-6 rounded-b-[40px] relative">
        <h1 className="text-white text-2xl font-bold text-center mb-8">Daily Tasks</h1>
        
        <div className="glass-card p-6 flex items-center gap-4 relative z-10">
          <div className="bg-brand-secondary/10 p-3 rounded-2xl text-brand-secondary">
            <ClipboardList size={32} />
          </div>
          <div>
            <p className="text-gray-800 font-bold">Complete & Earn</p>
            <p className="text-xs text-gray-400">Finish tasks to get instant cash rewards</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-12 relative z-20 space-y-4">
        {tasks.map((task, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">{task.title}</h3>
              <p className="text-xs text-gray-400">{task.desc}</p>
              <p className="text-brand-secondary font-bold text-sm mt-1">Reward: ₹{task.reward}</p>
            </div>
            <button 
              onClick={() => onClaim(task.id, task.reward)}
              disabled={completedTasks.includes(task.id)}
              className={`font-bold px-4 py-2 rounded-xl text-sm transition-all ${completedTasks.includes(task.id) ? 'bg-gray-100 text-gray-400' : 'bg-brand-primary/10 text-brand-primary active:scale-95'}`}
            >
              {completedTasks.includes(task.id) ? (
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={14} />
                  Claimed
                </div>
              ) : 'Claim'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
