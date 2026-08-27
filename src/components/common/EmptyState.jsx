import React from 'react';
import Button from './Button';

export default function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-md border border-dashed border-gray-700 bg-[#050505] p-8 text-center">
      <div className="mb-4 rounded-full bg-gray-900 p-4">
        {Icon && <Icon className="h-8 w-8 text-[#D4AF37]" />}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-[#FFFFF0]">{title}</h3>
      <p className="mb-6 max-w-sm text-sm text-gray-400">{description}</p>
      {action && (
        <Button onClick={action.onClick} variant="primary">
          {action.label}
        </Button>
      )}
    </div>
  );
}
