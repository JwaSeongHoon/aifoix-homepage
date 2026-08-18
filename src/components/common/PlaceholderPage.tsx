import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';
import { CTASection } from './CTASection';
import { Link } from '../../router/Link';
import { ArrowLeft, Clock } from 'lucide-react';
import { AppRoute } from '../../types';

interface PlaceholderPageProps {
  id?: string;
  title: string;
  subtitle: string;
  pathBadge: string;
  description?: string;
  features?: { title: string; desc: string }[];
  parentPath?: { label: string; to: AppRoute };
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  id,
  title,
  subtitle,
  pathBadge,
  description,
  features,
  parentPath,
}) => {
  return (
    <div id={id || 'placeholder-page'} className="w-full">
      {/* Page Header Banner */}
      <section className="bg-[#F5F8FC] border-b border-[#E2E8F0] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {parentPath && (
            <div className="mb-4">
              <Link
                to={parentPath.to}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E74B5] hover:text-[#1F4E79] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{parentPath.label}로 돌아가기</span>
              </Link>
            </div>
          )}
          <div className="inline-block px-3 py-1 mb-3 text-xs font-mono font-medium text-[#1F4E79] bg-[#EAF1F7] rounded-full border border-[#D0E1F0]">
            Route: {pathBadge}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            {title}
          </h1>
          <p className="mt-3 text-base md:text-lg text-[#596780] leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Placeholder Content Area */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-dashed border-[#CBD5E1] rounded-[12px] p-8 md:p-12 bg-[#FAFBFD] text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EAF1F7] text-[#1F4E79] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">
              본문 콘텐츠 준비 중 (다음 단계 예정)
            </h3>
            <p className="text-sm text-[#596780] max-w-xl mx-auto leading-relaxed">
              {description || '현재 단계는 사이트 레이아웃 골격과 디자인 시스템 구조가 완성된 상태입니다. 세부적인 비즈니스 콘텐츠 및 상세 컴포넌트는 다음 단계에서 적용됩니다.'}
            </p>
          </div>

          {/* Feature Grid Skeleton */}
          {features && features.length > 0 && (
            <div className="mt-8">
              <SectionTitle
                title="주요 안내 항목"
                subtitle="해당 페이지에서 다루어질 주요 모듈 영역입니다."
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <Card key={idx} hoverEffect>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#EAF1F7] text-[#1F4E79] font-bold text-sm shrink-0">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#1A1A1A] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-[#596780] leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Common CTA Section */}
      <CTASection />
    </div>
  );
};
