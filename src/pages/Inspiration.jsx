import React from 'react';

const Inspiration = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Event Inspiration</h1>
            <p className="text-lg text-gray-500">Discover ideas and trends for your next big event.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Weddings', 'Corporate', 'Decor', 'Catering', 'Themes'].map((cat, i) => (
                <button key={i} className={`px-6 py-2 rounded-full border text-sm font-medium ${i === 0 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                    {cat}
                </button>
            ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
             {[...Array(12)].map((_, i) => (
                <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden bg-gray-200">
                    <div className="w-full bg-gray-300" style={{ height: `${Math.floor(Math.random() * 200) + 150}px` }}></div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-end p-4 opacity-0 group-hover:opacity-100">
                        <span className="text-white font-medium">View Idea</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
