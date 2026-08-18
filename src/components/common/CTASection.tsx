import React from 'react';
import { CTASectionProps } from '../../types';
import { Link } from '../../router/Link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const CTASection: React.FC<CTASectionProps> = ({
  id,
  title = '우리 회사 업무, AI로 바꿀 수 있을까요?',
  subtitle = '기업별 맞춤형 AI 도입 컨설팅부터 실무 교육, 자동화 솔루션까지 AIFORIX 전문가가 함께합니다.',
  buttonText = '문의하기',
  buttonTarget = '/contact',
  className = '',
}) => {
  return (
    <section
      id={id || 'cta-section'}
      className={`
        w-full py-12 md:py-16 bg-[#F1F5F9] border-y border-gray-100
        ${className}
      `}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#08225C] text-white rounded-[16px] p-8 md:p-12 shadow-ds-lg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#3882F6]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center md:text-left flex-1 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-semibold text-white bg-white/15 rounded-full backdrop-blur-xs">
              <HelpCircle className="w-3.5 h-3.5 text-blue-300" />
              <span>AI 도입 상담 &amp; 맞춤 진단</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-blue-100/90 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
          <div className="shrink-0 relative z-10">
            <Link to={buttonTarget}>
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#3882F6] text-white hover:bg-[#0A5EDD] active:bg-[#08225C] text-base font-bold rounded-[8px] shadow-ds-md hover:shadow-ds-lg active:scale-[0.99] transition-all cursor-pointer">
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
