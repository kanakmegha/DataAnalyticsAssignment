import React, { useEffect } from 'react';
import { Navbar, Hero, Features, PricingDemo, Footer } from './components/LandingPage';
import { initAmplitude, trackEvent } from './analytics/amplitude';

function App() {
  useEffect(() => {
    // Initialize Amplitude
    initAmplitude();
    
    // Track Page Viewed on mount
    trackEvent('Page Viewed', {
      url: window.location.href,
      path: window.location.pathname,
      title: document.title
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PricingDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
