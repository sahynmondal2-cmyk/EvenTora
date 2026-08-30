import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-champagne mb-6">Plan Your Dream Event</h1>
        <p className="text-xl text-ivory/80 mb-10 max-w-2xl mx-auto">From weddings to corporate events, Eventora has everything you need to create unforgettable experiences.</p>
        <button className="bg-champagne text-black px-8 py-3 rounded-full font-semibold hover:bg-champagne/90 transition shadow-[0_0_15px_rgba(198,166,107,0.3)]">Start Planning</button>
      </section>

      {/* Quick Planner */}
      <section className="pb-16 px-4 max-w-7xl mx-auto -mt-8 relative z-10">
        <div className="bg-surface p-8 rounded-2xl border border-border flex flex-col md:flex-row gap-4 items-center justify-between shadow-2xl">
            <div className="w-full">
                <label className="block text-sm font-medium text-ivory/70 mb-2">Event Type</label>
                <select className="w-full bg-background border border-border text-ivory rounded-lg py-2.5 px-3 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors"><option>Wedding</option><option>Corporate</option><option>Party</option></select>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium text-ivory/70 mb-2">Location</label>
                <input type="text" placeholder="City or zip code" className="w-full bg-background border border-border text-ivory rounded-lg py-2.5 px-3 placeholder-ivory/30 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors" />
            </div>
            <div className="w-full md:w-auto mt-6 md:mt-0 flex-shrink-0 flex items-end">
                <button className="w-full md:w-auto bg-champagne text-black px-8 py-2.5 rounded-lg font-medium hover:bg-champagne/90 transition shadow-[0_0_10px_rgba(198,166,107,0.2)] h-[46px]">Search</button>
            </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-surface border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-display font-bold text-champagne mb-2">10k+</div><div className="text-ivory/70 uppercase tracking-wider text-sm font-medium">Events Planned</div></div>
            <div><div className="text-4xl font-display font-bold text-champagne mb-2">5k+</div><div className="text-ivory/70 uppercase tracking-wider text-sm font-medium">Vendors</div></div>
            <div><div className="text-4xl font-display font-bold text-champagne mb-2">2k+</div><div className="text-ivory/70 uppercase tracking-wider text-sm font-medium">Venues</div></div>
            <div><div className="text-4xl font-display font-bold text-champagne mb-2">100%</div><div className="text-ivory/70 uppercase tracking-wider text-sm font-medium">Satisfaction</div></div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-ivory mb-12 text-center">Browse by Event Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Weddings', 'Corporate Events', 'Parties'].map((type, i) => (
                <div key={i} className="bg-surface rounded-xl border border-border p-6 hover:border-champagne/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition cursor-pointer text-center group">
                    <h3 className="text-xl font-semibold text-ivory group-hover:text-champagne transition-colors">{type}</h3>
                </div>
            ))}
        </div>
      </section>
      
      {/* Featured Vendors */}
      <section className="bg-surface py-20 px-4 border-y border-border">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ivory mb-12 text-center">Featured Vendors</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1,2,3,4].map(i => (
                    <div key={i} className="bg-[#0A0A0A] rounded-md border border-border overflow-hidden hover:border-champagne/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition group">
                        <div className="overflow-hidden h-48">
                            <img src={`https://picsum.photos/seed/homevendor${i}/800/600`} alt="Vendor" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg text-ivory">Premium Vendor {i}</h3>
                            <p className="text-champagne text-sm mt-1">Photography</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Featured Venues */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-ivory mb-12 text-center">Featured Venues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map(i => (
                <div key={i} className="bg-[#0A0A0A] rounded-md border border-border overflow-hidden hover:border-champagne/50 hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition group">
                    <div className="overflow-hidden h-56">
                        <img src={`https://picsum.photos/seed/homevenue${i}/800/600`} alt="Venue" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                        <h3 className="font-bold text-xl text-ivory mb-2">Luxury Venue {i}</h3>
                        <p className="text-champagne text-sm">New York, NY</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
