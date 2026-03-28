import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Page, INVESTMENT_PACKAGES, InvestmentPackage, ToastType } from './types';

// Components
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';
import { SuccessModal } from './components/SuccessModal';

// Pages
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { MinePage } from './pages/MinePage';
import { RechargePage } from './pages/RechargePage';
import { WithdrawPage } from './pages/WithdrawPage';
import { TeamPage } from './pages/TeamPage';
import { IncomePage } from './pages/IncomePage';
import { TaskPage } from './pages/TaskPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { GiftPage } from './pages/GiftPage';
import { HelpPage } from './pages/HelpPage';
import { InvitePage } from './pages/InvitePage';
import { RegisterPage } from './pages/RegisterPage';
import { AccountSafetyPage } from './pages/AccountSafetyPage';
import { TransactionHistoryPage } from './pages/TransactionHistoryPage';
import { DownloadPage } from './pages/DownloadPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem('osm_balance');
    return saved ? parseFloat(saved) : 200;
  });
  const [totalRecharge, setTotalRecharge] = useState(() => {
    const saved = localStorage.getItem('osm_total_recharge');
    return saved ? parseFloat(saved) : 0;
  });
  const [userInvestments, setUserInvestments] = useState<any[]>(() => {
    const saved = localStorage.getItem('osm_investments');
    return saved ? JSON.parse(saved) : [];
  });
  const [teamMembers, setTeamMembers] = useState(() => {
    const saved = localStorage.getItem('osm_team_members');
    return saved ? parseInt(saved) : 0;
  });
  const [completedTasks, setCompletedTasks] = useState<string[]>(() => {
    const saved = localStorage.getItem('osm_completed_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Notification State
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [successModal, setSuccessModal] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: ''
  });

  const showToast = (message: string, type: ToastType = 'success') => {
    setToast({ message, type });
  };

  const showSuccess = (message: string) => {
    setSuccessModal({ isOpen: true, message });
  };

  useEffect(() => {
    localStorage.setItem('osm_balance', balance.toString());
    localStorage.setItem('osm_total_recharge', totalRecharge.toString());
    localStorage.setItem('osm_investments', JSON.stringify(userInvestments));
    localStorage.setItem('osm_team_members', teamMembers.toString());
    localStorage.setItem('osm_completed_tasks', JSON.stringify(completedTasks));
  }, [balance, totalRecharge, userInvestments, teamMembers, completedTasks]);

  // Auto Income Collection Logic
  useEffect(() => {
    if (!isLoggedIn || userInvestments.length === 0) return;

    const processAutoIncome = () => {
      const now = new Date();
      let totalNewIncome = 0;
      let hasChanges = false;

      const updatedInvestments = userInvestments.map(inv => {
        if (inv.status !== 'active') return inv;

        const expiryDate = new Date(inv.expiryDate);
        if (now > expiryDate) {
          hasChanges = true;
          return { ...inv, status: 'completed' };
        }

        const lastCollected = new Date(inv.lastCollected);
        // 86400 seconds = 1 day of income
        const diffInSeconds = (now.getTime() - lastCollected.getTime()) / 1000;
        const intervals = Math.floor(diffInSeconds / 86400);

        if (intervals > 0) {
          const earned = intervals * inv.dailyIncome;
          totalNewIncome += earned;
          hasChanges = true;
          
          // Update lastCollected to the point where we last "earned" income
          const newLastCollected = new Date(lastCollected.getTime() + (intervals * 86400 * 1000));
          
          return {
            ...inv,
            totalEarned: inv.totalEarned + earned,
            lastCollected: newLastCollected.toISOString()
          };
        }
        return inv;
      });

      if (hasChanges) {
        setUserInvestments(updatedInvestments);
        if (totalNewIncome > 0) {
          setBalance(prev => prev + totalNewIncome);
          showToast(`Auto-collected ₹${totalNewIncome} from investments!`, 'success');
        }
      }
    };

    // Run immediately and then every 5 seconds
    processAutoIncome();
    const interval = setInterval(processAutoIncome, 5000);
    return () => clearInterval(interval);
  }, [isLoggedIn, userInvestments, balance]); // Added balance to dependencies to ensure toast shows correctly

  const handleInvest = (pkg: InvestmentPackage) => {
    if (balance < pkg.price) {
      showToast('Insufficient balance. Please recharge.', 'error');
      setCurrentPage('recharge');
      return;
    }

    const confirmInvest = window.confirm(`Invest in ${pkg.name} for ₹${pkg.price}? Cycle: ${pkg.validityDays} Days.`);
    if (confirmInvest) {
      const purchaseDate = new Date();
      const expiryDate = new Date();
      expiryDate.setDate(purchaseDate.getDate() + pkg.validityDays);

      setBalance(prev => prev - pkg.price);
      const newInvestment = {
        id: Math.random().toString(36).substr(2, 9),
        packageId: pkg.id,
        packageName: pkg.name,
        purchaseDate: purchaseDate.toLocaleDateString(),
        expiryDate: expiryDate.toLocaleDateString(),
        dailyIncome: pkg.dailyIncome,
        totalEarned: 0,
        lastCollected: new Date().toISOString(),
        status: 'active'
      };
      setUserInvestments(prev => [...prev, newInvestment]);
      showSuccess('INVESTMENT successful');
      setCurrentPage('income');
    }
  };

  const handleClaimTask = (taskId: string, reward: number) => {
    if (completedTasks.includes(taskId)) {
      showToast('Task already completed!', 'info');
      return;
    }
    setCompletedTasks(prev => [...prev, taskId]);
    setBalance(prev => prev + reward);
    showToast(`Task completed! ₹${reward} added.`);
  };

  const handleInvite = () => {
    const inviteLink = `${window.location.origin}?ref=1789083144`;
    navigator.clipboard.writeText(inviteLink);
    showToast('Invite link copied to clipboard!');
    setTeamMembers(prev => prev + 1);
    setBalance(prev => prev + 50);
  };

  const handleLogin = (phone: string, pass: string) => {
    if (phone && pass) {
      setIsLoggedIn(true);
      setCurrentPage('home');
      showToast('Login successful! Welcome to OSM.');
    } else {
      showToast('Invalid credentials.', 'error');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
    showToast('Logged out successfully.');
  };

  const handleRecharge = (amt: number) => {
    setBalance(prev => prev + amt);
    setTotalRecharge(prev => prev + amt);
    showSuccess(`Recharge of ₹${amt} successful!`);
    setCurrentPage('home');
  };

  const handleWithdraw = (amt: number) => {
    setBalance(prev => prev - amt);
    showToast(`Withdrawal request for ₹${amt} submitted!`);
    setCurrentPage('home');
  };

  const handleRedeem = (code: string) => {
    if (code.toUpperCase() === 'OSM100') {
      setBalance(prev => prev + 100);
      showSuccess('Congratulations! ₹100 added to your balance.');
    } else {
      showToast('Invalid gift code.', 'error');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login': return <LoginPage onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      case 'register': return <RegisterPage onRegister={handleLogin} setCurrentPage={setCurrentPage} />;
      case 'home': return <HomePage setCurrentPage={setCurrentPage} onInvest={handleInvest} />;
      case 'mine': return (
        <MinePage 
          balance={balance} 
          totalRecharge={totalRecharge} 
          userInvestments={userInvestments} 
          setCurrentPage={setCurrentPage} 
          onLogout={handleLogout} 
        />
      );
      case 'recharge': return (
        <RechargePage 
          balance={balance} 
          setCurrentPage={setCurrentPage} 
          onRecharge={handleRecharge} 
        />
      );
      case 'withdraw': return (
        <WithdrawPage 
          balance={balance} 
          setCurrentPage={setCurrentPage} 
          onWithdraw={handleWithdraw} 
        />
      );
      case 'team': return <TeamPage teamMembers={teamMembers} setCurrentPage={setCurrentPage} />;
      case 'invite': return <InvitePage setCurrentPage={setCurrentPage} onCopy={handleInvite} />;
      case 'income': return (
        <IncomePage 
          userInvestments={userInvestments} 
          setCurrentPage={setCurrentPage} 
        />
      );
      case 'task': return <TaskPage completedTasks={completedTasks} onClaim={handleClaimTask} />;
      case 'news': return <NewsPage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'gift': return <GiftPage setCurrentPage={setCurrentPage} onRedeem={handleRedeem} />;
      case 'help': return <HelpPage setCurrentPage={setCurrentPage} />;
      case 'account-safety': return <AccountSafetyPage setCurrentPage={setCurrentPage} />;
      case 'transactions': return <TransactionHistoryPage setCurrentPage={setCurrentPage} />;
      case 'download': return <DownloadPage setCurrentPage={setCurrentPage} />;
      default: return <HomePage setCurrentPage={setCurrentPage} onInvest={handleInvest} />;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative">
      <AnimatePresence mode="wait">
        {toast && (
          <Toast 
            key="toast"
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>

      <SuccessModal 
        isOpen={successModal.isOpen} 
        message={successModal.message} 
        onClose={() => setSuccessModal({ ...successModal, isOpen: false })} 
      />

      {renderPage()}
      
      {isLoggedIn && !['login', 'recharge', 'withdraw', 'news', 'about', 'gift', 'help', 'invite'].includes(currentPage) && (
        <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
