import React from 'react';
import { SectionTitleProps } from '../../types';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  id,
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      id={id}
      className={`
        mb-8 md:mb-12
        ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}
        ${className}
      `}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-[#0A5EDD] bg-[#E6F0FF] rounded-full uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-[#1F2937] leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-[#4B5563] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
