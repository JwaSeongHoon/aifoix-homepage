import React from 'react';
import { ButtonProps } from '../../types';

export const PrimaryButton: React.FC<ButtonProps> = ({
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
        bg-[#3882F6] text-white hover:bg-[#0A5EDD] active:bg-[#08225C]
        transition-all duration-150 ease-out
        shadow-ds-sm hover:shadow-ds-md active:scale-[0.99]
        disabled:bg-[#E6F0FF] disabled:text-[#9CA3AF] disabled:cursor-not-allowed disabled:shadow-none disabled:active:scale-100
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
