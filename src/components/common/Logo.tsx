import React from 'react';

export interface LogoProps {
  variant?: 'horizontal' | 'symbol' | 'white' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const isWhite = variant === 'white';
  const isSymbolOnly = variant === 'symbol';

  // Size scale factors
  const symbolSize = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const primaryColor = isWhite ? '#FFFFFF' : '#0A5EDD';
  const accentColor = isWhite ? '#FFFFFF' : '#3882F6';
  const darkColor = isWhite ? '#FFFFFF' : '#08225C';
  const textColor = isWhite ? 'text-white' : 'text-[#08225C]';
  const subtextColor = isWhite ? 'text-blue-200' : 'text-[#4B5563]';
  const sloganDark = isWhite ? 'text-white' : 'text-[#1F2937]';
  const sloganBlue = isWhite ? 'text-blue-300' : 'text-[#0A5EDD]';

  // Vector rendering of the stylized 'A' with orbital swoop and satellite dot
  const LogoSymbol = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${symbolSize} shrink-0 transition-transform duration-200 group-hover:scale-105`}
      aria-label="AIFORIX Symbol"
    >
      <defs>
        <linearGradient id={isWhite ? 'aiforix-grad-white' : 'aiforix-grad-blue'} x1="10" y1="90" x2="80" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isWhite ? '#FFFFFF' : '#08225C'} />
          <stop offset="50%" stopColor={isWhite ? '#FFFFFF' : '#0A5EDD'} />
          <stop offset="100%" stopColor={isWhite ? '#E6F0FF' : '#3882F6'} />
        </linearGradient>
        <linearGradient id={isWhite ? 'aiforix-swoosh-white' : 'aiforix-swoosh'} x1="5" y1="75" x2="70" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isWhite ? '#FFFFFF' : '#0A5EDD'} />
          <stop offset="100%" stopColor={isWhite ? '#E6F0FF' : '#3882F6'} />
        </linearGradient>
      </defs>

      {/* Main Stylized 'A' Arch */}
      {/* Left ascending curve with dynamic thickness */}
      <path
        d="M 12 78 C 22 76 34 56 46 26 C 48 21 51 21 53 26 L 76 78 C 77 81 74 83 71 83 C 68 83 66 80 65 77 L 50 41 L 34 78 C 32 82 27 84 21 84 C 16 84 10 82 12 78 Z"
        fill={`url(#${isWhite ? 'aiforix-grad-white' : 'aiforix-grad-blue'})`}
      />

      {/* Dynamic Orbital Swoosh Bar crossing the A */}
      <path
        d="M 8 72 C 22 66 48 54 84 64 C 88 65 89 68 85 70 C 58 80 28 82 8 72 Z"
        fill={`url(#${isWhite ? 'aiforix-swoosh-white' : 'aiforix-swoosh'})`}
      />

      {/* Innovation / Orbit Satellite Dot (Top Right) */}
      <circle
        cx="78"
        cy="22"
        r="5.5"
        fill={accentColor}
      />
    </svg>
  );

  if (isSymbolOnly) {
    return <div className={`inline-flex items-center ${className}`}>{LogoSymbol}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {LogoSymbol}
      <div className="flex flex-col justify-center select-none text-left">
        {/* Main Logo Text: AIFORIX */}
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black tracking-tight ${textColor} leading-none`}
            style={{
              fontFamily: "'Hanken Grotesk', 'Pretendard', sans-serif",
              fontSize: size === 'sm' ? '18px' : size === 'lg' ? '28px' : size === 'xl' ? '36px' : '22px',
              letterSpacing: '-0.03em',
            }}
          >
            AIFORIX
          </span>
          {variant !== 'compact' && (
            <span
              className={`font-medium ${subtextColor} leading-none`}
              style={{
                fontFamily: "'Pretendard', sans-serif",
                fontSize: size === 'sm' ? '11px' : size === 'lg' ? '14px' : size === 'xl' ? '16px' : '12px',
              }}
            >
              에이포릭스
            </span>
          )}
        </div>

        {/* Sub-tagline: AI FOR Innovation & Transformation */}
        {showSubtitle && variant !== 'compact' && (
          <div
            className="flex items-center gap-1 mt-0.5 tracking-tight font-semibold"
            style={{
              fontFamily: "'Hanken Grotesk', 'Geist', sans-serif",
              fontSize: size === 'sm' ? '9px' : size === 'lg' ? '12px' : size === 'xl' ? '13px' : '10px',
              letterSpacing: '-0.01em',
            }}
          >
            <span className={`${sloganBlue} font-extrabold`}>AI FOR</span>
            <span className={`${sloganDark} font-medium`}>Innovation &amp; Transformation</span>
          </div>
        )}
      </div>
    </div>
  );
};
