import React from 'react';
import { Database, Zap, Shield, BarChart3, ChevronRight, Menu, X } from 'lucide-react';
import { trackEvent } from '../analytics/amplitude';

const DEMO_URL = 'https://use.amplitude.com/productanalyticsdemonstration';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Database className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              DataStream
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <button 
              onClick={() => {
                trackEvent('Clicked Sign Up', { location: 'navbar' });
                window.location.href = DEMO_URL;
              }}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Turn Your Data into <br/>
          <span className="text-indigo-600">Real-Time Insights</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Process millions of events per second with our distributed streaming platform. Build, scale, and monitor without the complexity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              trackEvent('Clicked Sign Up', { location: 'hero' });
              window.location.href = DEMO_URL;
            }}
            className="group bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
          >
            Start Free Trial
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              trackEvent('Clicked Request Demo', { location: 'hero' });
              window.location.href = DEMO_URL;
            }}
            className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all shadow-sm"
          >
            Request Demo
          </button>
        </div>
      </div>
      
      {/* Abstract Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      title: "Ultra Low Latency",
      description: "Get insights in milliseconds. Our optimized engine ensures your data moves faster than ever."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and SOC2 compliance. Your data is always safe and private."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Advanced Analytics",
      description: "Pre-built dashboards and custom queries at your fingertips. No SQL experts needed."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Powerful features designed for modern data teams.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingDemo = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-300">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to scale your insights?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
              Join 500+ teams using DataStream to power their business decisions with real-time data.
            </p>
            <button 
              onClick={() => {
                trackEvent('Clicked Request Demo', { location: 'pricing_section' });
                window.location.href = DEMO_URL;
              }}
              className="bg-white text-indigo-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95"
            >
              Request a Custom Demo
            </button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-indigo-600" />
            <span className="text-lg font-bold text-gray-900">DataStream</span>
          </div>
          <div className="flex gap-8 text-gray-500 font-medium">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2026 DataStream Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, Features, PricingDemo, Footer };
