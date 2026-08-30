import React from 'react';

const Venues = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Find Venues</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Venue Type</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>All Types</option>
                    <option>Hotel</option>
                    <option>Banquet Hall</option>
                    <option>Outdoor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guest Capacity</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>Any Capacity</option>
                    <option>50 - 100</option>
                    <option>100 - 300</option>
                    <option>300+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Listing */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition">
                      <img src={`https://picsum.photos/seed/venuelist${i}/800/600`} alt={`Venue ${i}`} className="h-56 w-full object-cover" />
                      <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">Grand Venue {i}</h3>
                          </div>
                          <p className="text-gray-500 text-sm mb-2">Banquet Hall • Los Angeles, CA</p>
                          <p className="text-gray-700 text-sm mb-4 flex items-center">
                              <span className="mr-2">👥</span> Up to 300 guests
                          </p>
                          <div className="flex items-center text-sm text-gray-600 border-t pt-3">
                             <span className="text-yellow-400 mr-1">★</span> 4.8 (85 reviews)
                          </div>
                      </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venues;
