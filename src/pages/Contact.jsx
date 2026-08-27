import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-8 md:p-12">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Get in Touch</h1>
            <p className="text-gray-600 mb-8">Have a question or need help planning? Send us a message.</p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows="4" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
