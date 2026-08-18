import React from 'react';
import { CardProps } from '../../types';

export const Card: React.FC<CardProps> = ({
  id,
  children,
  className = '',
  hoverEffect = false,
  onClick,
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`
        bg-white border border-[#E2E8F0] rounded-[12px] p-6 md:p-8
        shadow-ds-sm
        ${hoverEffect ? 'transition-all duration-200 ease-out hover:border-[#3882F6]/50 hover:shadow-ds-md hover:-translate-y-0.5 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
