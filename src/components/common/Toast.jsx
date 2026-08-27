import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'info', onClose, isVisible }) {
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-[#D4AF37]" />,
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-md border border-gray-800 bg-[#121212] p-4 shadow-lg"
        >
          {icons[type]}
          <p className="text-sm text-[#FFFFF0]">{message}</p>
          <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
