import React, { useState } from 'react';
import { Button } from './Button';
import { Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-green-500 mb-2">{t('form.success_title')}</h3>
        <p className="text-gray-300">{t('form.success_desc')}</p>
        <button 
          onClick={() => setFormState('idle')} 
          className="mt-6 text-sm text-green-400 hover:text-green-300 underline"
        >
          {t('form.send_another')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-brand-gray p-8 rounded-xl border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">{t('form.name')}</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
            placeholder={t('form.name_ph')}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-300">{t('form.phone')}</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
            placeholder="06 XX XX XX XX"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">{t('form.email')}</label>
        <input 
          type="email" 
          id="email" 
          required 
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
          placeholder="votre@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-gray-300">{t('form.service_label')}</label>
        <select 
          id="service" 
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
        >
          <option value="general">{t('form.services.general')}</option>
          <option value="video">{t('form.services.video')}</option>
          <option value="photo">{t('form.services.photo')}</option>
          <option value="drone">{t('form.services.drone')}</option>
          <option value="event">{t('form.services.event')}</option>
          <option value="other">{t('form.services.other')}</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">{t('form.message')}</label>
        <textarea 
          id="message" 
          rows={4} 
          required 
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
          placeholder={t('form.message_ph')}
        ></textarea>
      </div>

      <Button 
        type="submit" 
        fullWidth 
        disabled={formState === 'submitting'}
        className="flex items-center justify-center space-x-2"
      >
        {formState === 'submitting' ? (
          <span>{t('form.submitting')}</span>
        ) : (
          <>
            <span>{t('form.submit')}</span>
            <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
};