import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-50 w-full max-w-lg overflow-hidden rounded-md border border-gray-800 bg-[#0A0A0A] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              {title && <h2 className="text-xl font-semibold text-[#D4AF37]">{title}</h2>}
              <button
                onClick={onClose}
                className="rounded-sm p-1 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="text-[#FFFFF0]">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
