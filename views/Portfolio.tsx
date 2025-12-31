import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { useLanguage } from '../LanguageContext';

interface PortfolioProps {
  setView: (view: ViewState) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ setView }) => {
  const { t } = useLanguage();

  const ITEMS = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: `Projet ${i + 1}`,
    category: i % 3 === 0 ? t('portfolio_page.categories.wedding') : i % 3 === 1 ? t('portfolio_page.categories.corporate') : t('portfolio_page.categories.drone'),
    image: `https://picsum.photos/800/600?random=${i + 20}`,
    type: i % 2 === 0 ? 'video' : 'photo'
  }));

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{t('portfolio_page.title')}</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('portfolio_page.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <div key={item.id} className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-gray-900">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
              
              {/* Play icon for video types */}
              {item.type === 'video' && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-black transition-all">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">{t('portfolio_page.cta_text')}</p>
          <Button onClick={() => setView('contact')}>
            {t('portfolio_page.cta_btn')}
          </Button>
        </div>
      </div>
    </div>
  );
};