export const customers = Array.from({ length: 30 }, (_, i) => {
  const firstNames = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Ayaan", "Krishna", "Ishaan", "Shaurya"];
  const lastNames = ["Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Reddy", "Jain", "Mehta", "Bose"];
  const statuses = ["Active", "Lead", "Closed", "Inactive"];
  
  return {
    id: `c${i + 1}`,
    name: `${firstNames[i % firstNames.length]} ${lastNames[(i + 3) % lastNames.length]}`,
    email: `customer${i + 1}@example.com`,
    phone: `+91 98${10000000 + i * 12345}`,
    events: 1 + (i % 3),
    budget: 1000000 + (i * 500000),
    guests: 100 + (i * 20),
    status: statuses[i % 4],
    lastActivity: `2024-08-${String(1 + (i % 28)).padStart(2, '0')}`
  };
});
