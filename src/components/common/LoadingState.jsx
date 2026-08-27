import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingState({ text = 'Loading...' }) {
  return (
    <div className="flex min-h-[200px] w-full flex-col items-center justify-center gap-3">
      <Loader2 className="h-8 w-8 animate-spin text-[#D4AF37]" />
      <p className="text-sm font-medium text-gray-400">{text}</p>
    </div>
  );
}
