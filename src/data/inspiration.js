export const inspiration = Array.from({ length: 40 }, (_, i) => {
  const categories = ["Decor", "Bridal", "Reception", "Table Setup", "Flowers", "Stage", "Invitations", "Photography", "Outdoor"];
  const titles = ["Vintage Elegance", "Bohemian Dream", "Royal Heritage", "Modern Minimalist", "Enchanted Forest", "Sunset Romance", "Classic White", "Pastel Symphony", "Glitzy Glamour", "Rustic Charm"];
  
  const category = categories[i % categories.length];
  const title = `${titles[i % titles.length]} ${category}`;
  
  return {
    id: `ins${i + 1}`,
    title,
    image: `https://images.unsplash.com/photo-${1511285560929 + i * 50}-9b456dbcc?auto=format&fit=crop&q=80&w=600`,
    category
  };
});
