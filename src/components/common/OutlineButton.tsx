import React from 'react';
import { ButtonProps } from '../../types';

export const OutlineButton: React.FC<ButtonProps> = ({
  id,
  children,
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-[8px] gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-[8px] gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-[8px] gap-2.5',
  }[size];

  const widthClass = fullWidth ? 'w-full' : 'inline-flex';

  return (
    <button
      id={id}
      disabled={disabled}
      className={`
        ${widthClass} items-center justify-center
        border border-[#3882F6] text-[#3882F6] bg-white 
        hover:border-[#0A5EDD] hover:text-[#0A5EDD] hover:bg-[#E6F0FF]/40 
        active:border-[#08225C] active:text-[#08225C] active:bg-[#E6F0FF]/80
        transition-all duration-150 ease-out
        active:scale-[0.99]
        disabled:border-[#E2E8F0] disabled:text-[#9CA3AF] disabled:bg-white disabled:cursor-not-allowed
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5EDD] focus-visible:ring-offset-2
        cursor-pointer
        ${sizeClasses}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
