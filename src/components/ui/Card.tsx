'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
}: CardProps) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };

  return (
    <div
      className={`
        bg-white
        rounded-lg
        ${paddings[padding]}
        ${shadows[shadow]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
