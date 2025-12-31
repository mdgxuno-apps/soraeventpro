import React from 'react';
import { Service } from '../types';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div className="group relative bg-brand-gray overflow-hidden rounded-xl border border-gray-800 hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10" />
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 right-4 z-20 bg-brand-yellow p-2 rounded-full text-black">
          <Icon size={24} />
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {service.description}
        </p>
        
        <ul className="space-y-2 mt-4 pt-4 border-t border-gray-800">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <Check size={16} className="text-brand-yellow mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-xs text-brand-yellow mt-1 italic">
              + {service.features.length - 3} autres caractéristiques...
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};