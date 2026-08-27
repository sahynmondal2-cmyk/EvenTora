import React from 'react';

const VenueDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="h-64 md:h-96 bg-gray-300 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">The Grand Plaza</h1>
                    <p className="text-lg text-gray-500 mb-4">Luxury Banquet Hall in Los Angeles, CA</p>
                    <div className="flex items-center text-gray-700 space-x-4">
                        <div><span className="text-yellow-400 mr-1 text-xl">★</span> <span className="font-semibold">4.8</span></div>
                        <div><span>👥</span> <span className="ml-1">Up to 500 guests</span></div>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 flex gap-4">
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">Book a Tour</button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Venue</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The Grand Plaza offers a breathtaking setting for your most important events. Featuring crystal chandeliers, marble floors, and state-of-the-art lighting and sound systems, our venue provides the perfect backdrop for weddings, galas, and corporate events.
                    </p>
                </section>

                {/* Spaces */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Spaces</h2>
                    <div className="space-y-4">
                        {[1,2].map(i => (
                            <div key={i} className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden">
                                <div className="w-full md:w-48 h-32 bg-gray-200 flex-shrink-0"></div>
                                <div className="p-4 flex-1">
                                    <h3 className="font-semibold text-lg text-gray-900">Main Ballroom {i}</h3>
                                    <p className="text-gray-500 mt-1 mb-2">Capacity: 300 seated, 500 standing</p>
                                    <p className="text-gray-600 text-sm">Elegant space with floor-to-ceiling windows.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">Amenities</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>✅ In-house Catering</li>
                        <li>✅ Bridal Suite</li>
                        <li>✅ Valet Parking</li>
                        <li>✅ AV Equipment</li>
                        <li>✅ Dance Floor</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
