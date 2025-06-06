'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group';
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white hover:from-blue-700 hover:via-blue-800 hover:to-indigo-700 shadow-lg hover:shadow-xl focus-visible:ring-blue-500 transform hover:scale-105',
      secondary: 'bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 text-white hover:from-slate-700 hover:via-gray-800 hover:to-slate-700 shadow-lg hover:shadow-xl focus-visible:ring-gray-500 transform hover:scale-105',
      outline: 'border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 shadow-lg hover:shadow-xl focus-visible:ring-white/50 transform hover:scale-105',
      ghost: 'bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 focus-visible:ring-white/30 transform hover:scale-105',
      orange: 'bg-orange-300 text-white hover:bg-orange-400 shadow-lg hover:shadow-xl focus-visible:ring-orange-500 transform hover:scale-105'
    };

    const sizes = {
      sm: 'h-10 px-4 text-sm rounded-xl',
      md: 'h-12 px-8 text-base rounded-xl',
      lg: 'h-14 px-10 text-lg rounded-2xl'
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isLoading && 'cursor-wait',
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -top-full group-hover:top-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent transition-all duration-500 rounded-xl" />
        
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };