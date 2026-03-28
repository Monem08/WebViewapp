import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, PartyPopper } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, message, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[40px] p-10 flex flex-col items-center text-center shadow-2xl max-w-xs w-full"
          >
            <div className="bg-brand-secondary/10 p-6 rounded-full mb-6 relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <CheckCircle2 size={64} className="text-brand-secondary" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-2 -right-2 text-brand-accent"
              >
                <PartyPopper size={32} />
              </motion.div>
            </div>
            
            <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase tracking-tight">Success!</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              {message}
            </p>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-1.5 bg-brand-secondary rounded-b-full"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
