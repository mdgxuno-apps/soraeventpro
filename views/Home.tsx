import React from 'react';
import { ViewState } from '../types';
import { getServices, CLIENTS } from '../constants';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Event Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1 border border-brand-yellow/30 rounded-full bg-black/40 backdrop-blur-md">
            <span className="text-brand-yellow font-medium text-sm tracking-wider uppercase">{t('hero.microcopy')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            {t('hero.title_start')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">{t('hero.title_end')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button onClick={() => setView('contact')} className="w-full md:w-auto">
              {t('hero.cta_primary')}
            </Button>
            <Button variant="outline" onClick={() => setView('portfolio')} className="w-full md:w-auto group">
              <span>{t('hero.cta_secondary')}</span>
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-brand-yellow to-transparent" />
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-xl blur-xl" />
              <img 
                src="https://picsum.photos/800/800?random=10" 
                alt="Camera Operator" 
                className="relative rounded-xl shadow-2xl border border-gray-800 w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-bold text-black text-lg">{t('intro.badge_title')}</p>
                <p className="text-black/80 text-sm">{t('intro.badge_sub')}</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                {t('intro.title_start')}
                <span className="block text-brand-yellow mt-2">{t('intro.title_end')}</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('intro.description')}
              </p>
              <ul className="space-y-4 mb-8">
                {t('intro.points').map((item: string, i: number) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <span className="bg-brand-yellow/10 p-1 rounded-full mr-3 text-brand-yellow">
                      <Star size={14} fill="currentColor" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" onClick={() => setView('about')}>
                {t('intro.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('home_services.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('home_services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => setView('services')}>
              {t('home_services.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Trust / Clients */}
      <section className="py-16 bg-brand-gray border-y border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">{t('clients.title')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {CLIENTS.map((client, idx) => (
              <span key={idx} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-yellow">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6">{t('cta_section.title')}</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
            {t('cta_section.subtitle')}
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-black text-white hover:bg-gray-800 border-none px-8 py-4 text-lg shadow-2xl"
              onClick={() => setView('contact')}
            >
              {t('cta_section.button')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};