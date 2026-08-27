import React from 'react';

const Packages = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Event Packages</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Curated packages to make your event planning seamless and stress-free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Basic', 'Premium', 'Ultimate'].map((pkg, i) => (
                <div key={i} className={`bg-white rounded-2xl shadow-sm border ${i === 1 ? 'border-indigo-500 shadow-md ring-1 ring-indigo-500' : 'border-gray-200'} p-8 flex flex-col`}>
                    {i === 1 && <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide self-start mb-4">Most Popular</span>}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{pkg} Package</h2>
                    <p className="text-gray-500 mb-6">Perfect for small to medium gatherings.</p>
                    <div className="text-4xl font-extrabold text-gray-900 mb-6">
                        ${(i + 1) * 1500} <span className="text-lg text-gray-500 font-normal">/event</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-gray-600"><span className="text-green-500 mr-2">✓</span> Venue Rental (4 hours)</li>
                        <li className="flex items-center text-gray-600"><span className="text-green-500 mr-2">✓</span> Standard Catering for 50</li>
                        <li className="flex items-center text-gray-600"><span className="text-green-500 mr-2">✓</span> Basic Decorations</li>
                        {i > 0 && <li className="flex items-center text-gray-600"><span className="text-green-500 mr-2">✓</span> Professional Photography</li>}
                        {i > 1 && <li className="flex items-center text-gray-600"><span className="text-green-500 mr-2">✓</span> Live Band / DJ</li>}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-semibold transition ${i === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                        Choose {pkg}
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
