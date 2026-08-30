import React from 'react';

const Vendors = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Find Vendors</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>All Categories</option>
                    <option>Photography</option>
                    <option>Catering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>Any Price</option>
                    <option>$</option>
                    <option>$$</option>
                    <option>$$$</option>
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
                      <img src={`https://picsum.photos/seed/vendorlist${i}/800/600`} alt={`Vendor ${i}`} className="h-48 w-full object-cover" />
                      <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-lg text-gray-900">Vendor {i}</h3>
                            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">Top Rated</span>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">Photography • New York, NY</p>
                          <div className="flex items-center text-sm text-gray-600">
                             <span className="text-yellow-400 mr-1">★</span> 4.9 (120 reviews)
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

export default Vendors;
