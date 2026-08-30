import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Plan Your Dream Event</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">From weddings to corporate events, Eventora has everything you need to create unforgettable experiences.</p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">Start Planning</button>
      </section>

      {/* Quick Planner */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"><option>Wedding</option></select>
            </div>
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" placeholder="City or zip code" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0 flex-shrink-0">
                <button className="w-full md:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700">Search</button>
            </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold mb-2">10k+</div><div className="text-indigo-100">Events Planned</div></div>
            <div><div className="text-4xl font-bold mb-2">5k+</div><div className="text-indigo-100">Vendors</div></div>
            <div><div className="text-4xl font-bold mb-2">2k+</div><div className="text-indigo-100">Venues</div></div>
            <div><div className="text-4xl font-bold mb-2">100%</div><div className="text-indigo-100">Satisfaction</div></div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Browse by Event Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Weddings', 'Corporate Events', 'Parties'].map((type, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition cursor-pointer text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
                </div>
            ))}
        </div>
      </section>
      
      {/* Featured Vendors */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Vendors</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1,2,3,4].map(i => (
                    <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                        <img src={`https://picsum.photos/seed/homevendor${i}/800/600`} alt="Vendor" className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg text-gray-900">Vendor Name</h3>
                            <p className="text-gray-500 text-sm">Photography</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Featured Venues */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Venues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                    <img src={`https://picsum.photos/seed/homevenue${i}/800/600`} alt="Venue" className="h-56 w-full object-cover" />
                    <div className="p-6">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">Venue Name</h3>
                        <p className="text-gray-500 text-sm">New York, NY</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
