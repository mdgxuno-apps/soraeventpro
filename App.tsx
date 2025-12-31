import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { Services } from './views/Services';
import { Portfolio } from './views/Portfolio';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { ViewState } from './types';
import { CONTACT_PHONE } from './constants';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from './LanguageContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Basic "router" that syncs with hash if refreshed (optional nice-to-have)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ViewState;
      if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
        setCurrentView(hash);
      }
    };
    
    // Initial load
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetView = (view: ViewState) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={handleSetView} />;
      case 'services': return <Services setView={handleSetView} />;
      case 'portfolio': return <Portfolio setView={handleSetView} />;
      case 'about': return <About setView={handleSetView} />;
      case 'contact': return <Contact />;
      default: return <Home setView={handleSetView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100 font-sans selection:bg-brand-yellow selection:text-black">
      <Navbar currentView={currentView} setView={handleSetView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={handleSetView} />

      {/* Sticky WhatsApp Button for Mobile/All */}
      <a 
        href={`https://wa.me/${CONTACT_PHONE.replace(/\s/g, '').replace('0', '212')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center cinematic-shadow"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" className="text-white" />
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;