import React from 'react';

const VendorDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="h-64 md:h-96 bg-gray-300 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Starlight Photography</h1>
                    <p className="text-lg text-gray-500 mb-4">Capturing your special moments in New York, NY</p>
                    <div className="flex items-center text-gray-700">
                        <span className="text-yellow-400 mr-1 text-xl">★</span> 
                        <span className="font-semibold mr-2">4.9</span>
                        <span className="text-gray-400">(150 Reviews)</span>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 flex gap-4">
                    <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">Message</button>
                    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">Request Quote</button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are a team of passionate photographers dedicated to capturing the magic of your special day. With over 10 years of experience, we specialize in candid, documentary-style wedding photography that tells your unique story.
                    </p>
                </section>

                {/* Gallery */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[1,2,3,4,5,6].map(i => <div key={i} className="h-40 bg-gray-200 rounded-xl"></div>)}
                    </div>
                </section>

                {/* Packages */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Packages</h2>
                    <div className="space-y-4">
                        {[1,2].map(i => (
                            <div key={i} className="border border-gray-200 rounded-xl p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Standard Package {i}</h3>
                                    <p className="text-gray-500 mt-1">8 hours coverage, 500 edited photos, online gallery.</p>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-xl text-gray-900 mb-2">$2,500</div>
                                    <button className="text-indigo-600 font-medium hover:text-indigo-800">Select</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">Contact Info</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li>📍 New York, NY</li>
                        <li>📞 (555) 123-4567</li>
                        <li>🌐 starlightphoto.com</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
