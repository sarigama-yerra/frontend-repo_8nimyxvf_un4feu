import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Segments from './components/Segments';
import AboutContact from './components/AboutContact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-emerald-500"
      />

      <HeroSection />
      <HowItWorks />
      <Segments />
      <AboutContact />
    </div>
  );
}

export default App;
