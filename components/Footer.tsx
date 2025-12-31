import React from 'react';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from '../constants';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { ViewState } from '../types';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark border-t border-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
               <div className="flex items-center space-x-1 mb-2">
                <span className="bg-brand-yellow text-black px-2 py-0.5 font-black italic text-xl skew-x-[-10deg]">SORA</span>
                <span className="text-white font-bold tracking-widest text-lg">PRO EVENT</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`https://wa.me/${CONTACT_PHONE.replace(/\s/g, '').replace('0', '212')}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.nav_title')}</h3>
            <ul className="space-y-4">
              <li><button onClick={() => setView('services')} className="hover:text-brand-yellow transition-colors">{t('nav.services')}</button></li>
              <li><button onClick={() => setView('portfolio')} className="hover:text-brand-yellow transition-colors">{t('nav.portfolio')}</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-brand-yellow transition-colors">{t('nav.about')}</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-brand-yellow transition-colors">{t('nav.quote')}</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.contact_title')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-yellow shrink-0 mt-1" size={18} />
                <span>{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-yellow shrink-0" size={18} />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-white">{CONTACT_PHONE}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-yellow shrink-0" size={18} />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SoraProEvent. {t('footer.rights')}</p>
          <p className="mt-2">{t('footer.made_in')} <span className="text-brand-yellow">♥</span> in Morocco</p>
        </div>
      </div>
    </footer>
  );
};