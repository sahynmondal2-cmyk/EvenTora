export const venues = Array.from({ length: 15 }, (_, i) => {
  const types = ["Banquet Hall", "Luxury Hotel", "Garden", "Beach", "Rooftop", "Palace", "Resort", "Destination Venue"];
  const names = ["The Grand Taj", "Oberoi Udaivilas", "Rambagh Palace", "Umaid Bhawan", "Leela Palace", "Taj Falaknuma", "ITC Grand Chola", "JW Marriott", "The Ritz-Carlton", "St. Regis", "Alila Diwa", "W Goa", "Roseate House", "Taj Mahal Palace", "Trident"];
  const locations = ["Mumbai", "Delhi", "Udaipur", "Goa", "Jaipur"];
  
  const vType = types[i % types.length];
  const name = `${names[i]} ${locations[i % locations.length]}`;
  
  return {
    id: `ven${i + 1}`,
    name,
    type: vType,
    location: locations[i % locations.length],
    capacity: 200 + (i * 100),
    price: 500000 + (i * 200000),
    rating: (4.0 + (i % 10) * 0.1).toFixed(1),
    amenities: ["Valet Parking", "Bridal Suite", "In-house Catering", "Pool", "Spa", "Wi-Fi", "AV Equipment"].slice(0, 4 + (i % 4)),
    images: [
      `https://picsum.photos/seed/venue${i}a/800/600`,
      `https://picsum.photos/seed/venue${i}b/800/600`,
      `https://picsum.photos/seed/venue${i}c/800/600`
    ],
    availability: i % 4 !== 0,
    about: `Experience luxury at ${name}, a premier ${vType} offering breathtaking views, exceptional service, and a majestic ambiance perfect for royal weddings.`,
    reviews: [
      { user: "Aarav Sharma", rating: 5, comment: "Absolutely magical! The best venue we could have asked for." },
      { user: "Ananya Patel", rating: 4, comment: "Beautiful architecture and great service, highly recommend." }
    ]
  };
});
