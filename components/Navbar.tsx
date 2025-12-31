import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { ViewState } from '../types';
import { BRAND_NAME, CONTACT_PHONE } from '../constants';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: ViewState }[] = [
    { label: t('nav.home'), view: 'home' },
    { label: t('nav.services'), view: 'services' },
    { label: t('nav.portfolio'), view: 'portfolio' },
    { label: t('nav.about'), view: 'about' },
    { label: t('nav.contact'), view: 'contact' },
  ];

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm py-2 shadow-lg border-b border-gray-800' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex flex-col cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center space-x-1">
              <span className="bg-brand-yellow text-black px-2 py-0.5 font-black italic text-2xl skew-x-[-10deg] tracking-tight">SORA</span>
              <span className="text-white font-bold tracking-widest text-xl group-hover:text-brand-yellow transition-colors">PRO EVENT</span>
            </div>
            <span className="text-[0.6rem] text-gray-400 tracking-widest uppercase mt-0.5 ml-1">Régie Vidéo • Photo • Digital</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNavClick(link.view)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-yellow ${
                  currentView === link.view ? 'text-brand-yellow border-b-2 border-brand-yellow pb-1' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-700 mx-2"></div>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm font-medium text-white hover:text-brand-yellow transition-colors"
            >
              <Globe size={16} />
              <span className={language === 'fr' ? 'font-bold text-brand-yellow' : 'text-gray-400'}>FR</span>
              <span className="text-gray-600">|</span>
              <span className={language === 'en' ? 'font-bold text-brand-yellow' : 'text-gray-400'}>EN</span>
            </button>

            <a 
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 bg-brand-gray hover:bg-brand-yellow hover:text-black text-white px-4 py-2 rounded-full transition-all text-sm font-bold ml-2"
            >
              <Phone size={16} />
              <span>{CONTACT_PHONE}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
             <button 
              onClick={toggleLanguage}
              className="text-sm font-bold text-white hover:text-brand-yellow transition-colors flex items-center space-x-1"
            >
              <span className={language === 'fr' ? 'text-brand-yellow' : 'text-gray-400'}>FR</span>
              <span className="text-gray-600">|</span>
              <span className={language === 'en' ? 'text-brand-yellow' : 'text-gray-400'}>EN</span>
            </button>

            <button 
              className="text-white hover:text-brand-yellow transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-8 space-y-6 text-center">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNavClick(link.view)}
              className={`text-2xl font-bold uppercase ${
                currentView === link.view ? 'text-brand-yellow' : 'text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-8 border-t border-gray-800 w-full">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-brand-yellow text-black font-bold py-4 rounded-lg uppercase tracking-wide"
            >
              {t('nav.quote')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};