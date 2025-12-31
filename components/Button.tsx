import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow uppercase tracking-wide";
  
  const variants = {
    primary: "border-transparent text-black bg-brand-yellow hover:bg-white hover:text-black shadow-lg shadow-yellow-500/30",
    secondary: "border-transparent text-white bg-brand-gray hover:bg-brand-yellow hover:text-black",
    outline: "border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-black bg-transparent",
    ghost: "border-transparent text-gray-300 hover:text-white bg-transparent"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};