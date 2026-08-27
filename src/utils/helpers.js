export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null) return '';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const generateId = (prefix = 'ID') => {
  return `${prefix}-${Math.floor(10000 + Math.random() * 90000)}`;
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
