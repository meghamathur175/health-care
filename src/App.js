// src/App.js
import React from 'react';
import './index.css';
import { FaAmbulance, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      <HowItWorks />
      <StatsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-blue-100 text-center py-20 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Revolutionizing Emergency Healthcare
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Fast. Smart. Life-saving ambulance dispatching.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
        🚑 Request Ambulance
      </button>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Step
          icon={<FaMapMarkerAlt size={40} className="text-blue-600 mb-2" />}
          title="1. Request"
          description="Submit request via app or website with your location."
        />
        <Step
          icon={<FaClock size={40} className="text-blue-600 mb-2" />}
          title="2. Hospital Accepts"
          description="Nearest hospital accepts the request instantly."
        />
        <Step
          icon={<FaAmbulance size={40} className="text-blue-600 mb-2" />}
          title="3. Ambulance Arrives"
          description="Ambulance is dispatched and tracks your location live."
        />
      </div>
    </section>
  );
}

function Step({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      {icon}
      <h3 className="text-xl font-bold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-10">Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Stat number="1,250+" label="Lives Saved" />
        <Stat number="47" label="Partner Hospitals" />
        <Stat number="8 mins" label="Avg Response Time" />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-3xl font-bold text-blue-600 mb-2">{number}</h3>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}

export default App;