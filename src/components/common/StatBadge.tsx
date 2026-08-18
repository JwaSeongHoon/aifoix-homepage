import React from 'react';
import { StatBadgeProps } from '../../types';

export const StatBadge: React.FC<StatBadgeProps> = ({
  id,
  value,
  unit = '',
  label,
  description,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: {
      number: 'text-[#0A5EDD]',
      accentBg: 'bg-[#E6F0FF]',
      accentText: 'text-[#0A5EDD]',
    },
    secondary: {
      number: 'text-[#6D28D9]',
      accentBg: 'bg-[#F3E8FF]',
      accentText: 'text-[#6D28D9]',
    },
    success: {
      number: 'text-[#B45309]',
      accentBg: 'bg-[#FFF3E0]',
      accentText: 'text-[#B45309]',
    },
  }[variant];

  return (
    <div
      id={id}
      className={`
        flex flex-col items-center justify-center p-6 bg-white border border-[#E2E8F0] rounded-[12px]
        shadow-ds-sm text-center
        ${className}
      `}
    >
      <div className="flex items-baseline justify-center gap-1 mb-1">
        <span className={`text-3xl md:text-4xl font-extrabold tracking-tight font-stat-number ${variantStyles.number}`}>
          {value}
        </span>
        {unit && (
          <span className="text-lg md:text-xl font-bold text-[#4B5563]">
            {unit}
          </span>
        )}
      </div>
      <div className="text-sm md:text-base font-semibold text-[#1F2937]">
        {label}
      </div>
      {description && (
        <div className="mt-1 text-xs text-[#9CA3AF]">
          {description}
        </div>
      )}
    </div>
  );
};
