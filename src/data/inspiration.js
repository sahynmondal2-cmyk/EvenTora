export const inspiration = Array.from({ length: 40 }, (_, i) => {
  const categories = ["Decor", "Bridal", "Reception", "Table Setup", "Flowers", "Stage", "Invitations", "Photography", "Outdoor"];
  const titles = ["Vintage Elegance", "Bohemian Dream", "Royal Heritage", "Modern Minimalist", "Enchanted Forest", "Sunset Romance", "Classic White", "Pastel Symphony", "Glitzy Glamour", "Rustic Charm"];
  
  const category = categories[i % categories.length];
  const title = `${titles[i % titles.length]} ${category}`;
  
  return {
    id: `ins${i + 1}`,
    title,
    image: `https://picsum.photos/seed/insp${i}/600/800`,
    category
  };
});
