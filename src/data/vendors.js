export const vendors = Array.from({ length: 30 }, (_, i) => {
  const categories = ["Photography", "Videography", "Decoration", "Catering", "Makeup", "Mehendi", "DJ", "Entertainment", "Florist", "Invitation", "Wedding Planner", "Bridal Wear"];
  const locations = ["Mumbai", "Delhi", "Udaipur", "Goa", "Jaipur", "Bangalore", "Hyderabad", "Kolkata"];
  const names = {
    Photography: ["Lumiere Studios", "Ethereal Captures", "Golden Hour Films"],
    Videography: ["Cinematic Weddings", "Frame & Focus"],
    Decoration: ["The Royal Knot", "Enchanted Decor"],
    Catering: ["Gourmet Delights", "The Royal Kitchen"],
    Makeup: ["Glamour Studio", "Bridal Glow by Priya"],
    Mehendi: ["Henna Art by Aisha", "Traditional Strokes"],
    DJ: ["DJ Beats", "SoundWave"],
    Entertainment: ["Live Strings", "The Desi Band"],
    Florist: ["Bloom Boutique", "Exotic Flora"],
    Invitation: ["Paper & Ink", "The Royal Scroll"],
    "Wedding Planner": ["Vows & Veils", "The Dream Planners"],
    "Bridal Wear": ["The Bridal Lounge", "Regal Threads"]
  };
  
  const category = categories[i % categories.length];
  const categoryNames = names[category] || [`${category} Pro`];
  const name = `${categoryNames[i % categoryNames.length]} ${i + 1}`;
  const price = 50000 + (i * 15000);
  
  return {
    id: `v${i + 1}`,
    name,
    category,
    image: `https://images.unsplash.com/photo-${1519741497674 + i * 15}-611481863552?auto=format&fit=crop&q=80&w=800`,
    location: locations[i % locations.length],
    rating: (4.0 + (i % 10) * 0.1).toFixed(1),
    reviews: 50 + (i * 15),
    experience: `${2 + (i % 15)} Years`,
    price,
    availability: i % 5 !== 0,
    verified: i % 3 !== 0,
    gallery: [
      `https://images.unsplash.com/photo-${1511285560929 + i * 5}-9b456dbcc?auto=format&fit=crop&q=80&w=800`,
      `https://images.unsplash.com/photo-${1519225421980 + i * 5}-a31c19cca?auto=format&fit=crop&q=80&w=800`,
      `https://images.unsplash.com/photo-${1465495976277 + i * 5}-438c82343?auto=format&fit=crop&q=80&w=800`
    ],
    about: `Premium ${category} services offering unparalleled quality and luxury for your special day. We pride ourselves on creating unforgettable experiences.`,
    services: [`Premium ${category}`, "Custom Packages", "Consultation", "Destination Weddings"],
    packages: [
      { name: "Standard", price: price * 0.8, features: ["Basic Service", "4 Hours", "Digital Delivery"] },
      { name: "Premium", price: price, features: ["Full Service", "8 Hours", "Priority Support"] },
      { name: "Luxury", price: price * 1.5, features: ["Unlimited Service", "Full Day", "Premium Add-ons", "Dedicated Team"] }
    ]
  };
});
