import React, { useState } from 'react';

const EventBuilder = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Plan Your Event</h1>
            <p className="text-gray-500 mt-2">Step {step} of {totalSteps}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4 max-w-md mx-auto">
                <div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
            </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 min-h-[400px] flex flex-col justify-between">
            {/* Steps Content */}
            <div className="flex-1">
                {step === 1 && (
                    <div className="animate-fade-in">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">What type of event are you planning?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Wedding', 'Birthday', 'Corporate', 'Anniversary'].map(type => (
                                <div key={type} className="border-2 border-gray-100 hover:border-indigo-500 rounded-xl p-4 text-center cursor-pointer transition">
                                    <div className="font-medium text-gray-800">{type}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-fade-in max-w-md mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">When and where?</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input type="date" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input type="text" placeholder="City or Zip Code" className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-fade-in max-w-md mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">How many guests?</h2>
                        <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-3">
                            <option>Less than 50</option>
                            <option>50 - 100</option>
                            <option>100 - 250</option>
                            <option>250+</option>
                        </select>
                    </div>
                )}

                {step === 4 && (
                    <div className="animate-fade-in max-w-md mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">What's your budget?</h2>
                        <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-3">
                            <option>Under $5,000</option>
                            <option>$5,000 - $10,000</option>
                            <option>$10,000 - $25,000</option>
                            <option>$25,000+</option>
                        </select>
                    </div>
                )}

                {step === 5 && (
                    <div className="animate-fade-in">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Services Needed</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Photography', 'Catering', 'Music / DJ', 'Decorations', 'Venue', 'Planning'].map(service => (
                                <label key={service} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                                    <input type="checkbox" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <span className="font-medium text-gray-700">{service}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {step === 6 && (
                    <div className="animate-fade-in text-center max-w-lg mx-auto">
                        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">All Set!</h2>
                        <p className="text-gray-600 mb-8">We've saved your event details. We will now curate the best vendors and venues matching your preferences.</p>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition w-full">View Recommendations</button>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
                <button 
                    onClick={prevStep} 
                    disabled={step === 1}
                    className={`px-6 py-2 rounded-lg font-medium ${step === 1 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-gray-700 bg-gray-200 hover:bg-gray-300'}`}
                >
                    Back
                </button>
                
                {step < totalSteps && (
                    <button 
                        onClick={nextStep}
                        className="px-6 py-2 rounded-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventBuilder;
