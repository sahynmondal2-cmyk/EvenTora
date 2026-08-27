import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-indigo-600 py-24 px-4 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-6">About Eventora</h1>
        <p className="text-xl max-w-2xl mx-auto text-indigo-100">We believe every event should be a memorable experience. Our platform connects you with the best venues and vendors.</p>
      </div>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Eventora was founded with a simple goal: to make event planning accessible, enjoyable, and stress-free. 
            Whether you're organizing a small birthday party or a grand corporate gala, we provide the tools and connections 
            you need to bring your vision to life.
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Selection</h3>
                <p>We handpick our vendors and venues to ensure the highest quality of service for your events.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Planning</h3>
                <p>Our intuitive event builder helps you manage every aspect of your event in one place.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
