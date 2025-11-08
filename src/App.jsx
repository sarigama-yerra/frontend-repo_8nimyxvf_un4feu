import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Segments from './components/Segments';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <HowItWorks />
      <Segments />
      <AboutContact />
    </div>
  );
}

export default App;
