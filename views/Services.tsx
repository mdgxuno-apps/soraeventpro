import React from 'react';
import { ViewState } from '../types';
import { getServices } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { useLanguage } from '../LanguageContext';

interface ServicesProps {
  setView: (view: ViewState) => void;
}

export const Services: React.FC<ServicesProps> = ({ setView }) => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{t('services_page.title')}</h1>
          <p className="text-lg text-gray-400">
            {t('services_page.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Custom Service CTA */}
        <div className="mt-20 bg-brand-gray rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('services_page.custom_title')}</h3>
              <p className="text-gray-400">{t('services_page.custom_desc')}</p>
            </div>
            <Button onClick={() => setView('contact')}>
              {t('services_page.custom_btn')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};