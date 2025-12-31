import React from 'react';
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{t('contact_page.title')}</h1>
            <p className="text-lg text-gray-400 mb-10" dangerouslySetInnerHTML={{ __html: t('contact_page.intro') }}></p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{t('contact_page.phone_label')}</h3>
                  <p className="text-gray-400 mb-1">{t('contact_page.phone_sub')}</p>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-xl font-bold text-brand-yellow hover:underline">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{t('contact_page.whatsapp_label')}</h3>
                  <p className="text-gray-400 mb-1">{t('contact_page.whatsapp_sub')}</p>
                  <a href={`https://wa.me/${CONTACT_PHONE.replace(/\s/g, '').replace('0', '212')}`} target="_blank" rel="noreferrer" className="text-white hover:text-green-400 transition-colors">
                    {t('contact_page.whatsapp_btn')}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{t('contact_page.email_label')}</h3>
                  <p className="text-gray-400 mb-1">{t('contact_page.email_sub')}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-brand-yellow transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{t('contact_page.address_label')}</h3>
                  <p className="text-gray-400 max-w-xs">
                    {CONTACT_ADDRESS}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <div className="bg-brand-gray/50 p-1 rounded-2xl border border-gray-800">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};