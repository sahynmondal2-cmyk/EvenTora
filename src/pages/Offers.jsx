import React from 'react';

const Offers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">Exclusive Offers</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">Take advantage of special discounts from our premier partners.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1,2,3,4].map(i => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 bg-indigo-100 flex items-center justify-center p-6">
                        <div className="text-indigo-600 text-center">
                            <span className="block text-4xl font-extrabold">20%</span>
                            <span className="block font-medium uppercase tracking-wider text-sm mt-1">OFF</span>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Photography</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Summer Wedding Special</h3>
                        <p className="text-gray-600 text-sm mb-4">Book any photography package before August 31st and receive a 20% discount.</p>
                        <button className="text-indigo-600 font-semibold hover:text-indigo-800 self-start">Claim Offer &rarr;</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
