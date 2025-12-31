import React from 'react';
import { ViewState } from '../types';
import { Button } from '../components/Button';
import { Camera, Heart, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface AboutProps {
  setView: (view: ViewState) => void;
}

export const About: React.FC<AboutProps> = ({ setView }) => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
            {t('about_page.title_start')} <br />
            <span className="text-brand-yellow">{t('about_page.title_end')}</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('about_page.p1') }}></p>
          <p className="text-gray-400 leading-relaxed">
            {t('about_page.p2')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: ShieldCheck, title: t('about_page.values.reliability.title'), text: t('about_page.values.reliability.text') },
            { icon: Heart, title: t('about_page.values.passion.title'), text: t('about_page.values.passion.text') },
            { icon: Camera, title: t('about_page.values.technology.title'), text: t('about_page.values.technology.text') },
            { icon: Users, title: t('about_page.values.team.title'), text: t('about_page.values.team.text') }
          ].map((val, idx) => (
            <div key={idx} className="bg-brand-gray p-6 rounded-xl border border-gray-800 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full text-brand-yellow mb-4">
                <val.icon size={24} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{val.title}</h3>
              <p className="text-sm text-gray-400">{val.text}</p>
            </div>
          ))}
        </div>

        {/* Team/Spirit Image */}
        <div className="relative rounded-2xl overflow-hidden mb-20">
           <img 
            src="https://picsum.photos/1200/500?grayscale" 
            alt="Team at work" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40">
            <h2 className="text-3xl font-bold text-white mb-4">{t('about_page.team_title')}</h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8">
              {t('about_page.team_desc')}
            </p>
            <Button onClick={() => setView('contact')}>
              {t('about_page.team_btn')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};