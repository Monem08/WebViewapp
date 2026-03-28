import { 
  Home, 
  ClipboardList, 
  TrendingUp, 
  User, 
  Wallet, 
  ArrowDownToLine, 
  Newspaper, 
  Info, 
  Gift, 
  HelpCircle,
  ChevronRight,
  LogOut,
  Users,
  History,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export type Page = 'home' | 'task' | 'income' | 'mine' | 'login' | 'register' | 'recharge' | 'withdraw' | 'team' | 'news' | 'about' | 'gift' | 'help' | 'invite' | 'account-safety' | 'transactions' | 'download';

export type ToastType = 'success' | 'error' | 'info';

export interface InvestmentPackage {
  id: string;
  name: string;
  image: string;
  price: number;
  dailyIncome: number;
  totalEarn: number;
  validityDays: number;
}

export interface UserInvestment {
  id: string;
  packageId: string;
  packageName: string;
  purchaseDate: string;
  expiryDate: string;
  dailyIncome: number;
  totalEarned: number;
  lastCollected: string;
  status: 'active' | 'completed';
}

export const INVESTMENT_PACKAGES: InvestmentPackage[] = [
  {
    id: '1',
    name: 'OSM STARTER 1',
    image: 'https://picsum.photos/seed/bike1/800/450',
    price: 500,
    dailyIncome: 50,
    totalEarn: 1500,
    validityDays: 30
  },
  {
    id: '2',
    name: 'OSM ADVANCE 2',
    image: 'https://picsum.photos/seed/bike2/800/450',
    price: 1500,
    dailyIncome: 160,
    totalEarn: 4800,
    validityDays: 30
  },
  {
    id: '3',
    name: 'OSM PRO 3',
    image: 'https://picsum.photos/seed/bike3/800/450',
    price: 5000,
    dailyIncome: 550,
    totalEarn: 16500,
    validityDays: 30
  },
  {
    id: '4',
    name: 'OSM ELITE 4',
    image: 'https://picsum.photos/seed/bike4/800/450',
    price: 12000,
    dailyIncome: 1400,
    totalEarn: 42000,
    validityDays: 30
  }
];
