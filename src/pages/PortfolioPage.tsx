import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { OutlineButton } from '../components/common/OutlineButton';
import { CTASection } from '../components/common/CTASection';
import { cases, CaseItem } from '../data/cases';
import { 
  Briefcase, 
  Building2, 
  GraduationCap, 
  Landmark, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Workflow
} from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('전체');
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null);

  const filterTabs = ['전체', '솔루션', '자동화', '컨설팅', '교육'];

  const filteredCases = selectedFilter === '전체' 
    ? cases 
    : cases.filter((c) => c.분야 === selectedFilter);

  const lectureGroups = [
    {
      group: '공공 · 공동훈련센터',
      icon: <Landmark className="w-5 h-5" />,
      tag: 'Public & Training Center',
      clients: [
        '고용노동부',
        '한국산업인력공단',
        '대한상공회의소',
        '한국고용노동교육원',
        '노사발전재단',
        '캠코 인재개발원',
      ],
    },
    {
      group: '대학 (University)',
      icon: <GraduationCap className="w-5 h-5" />,
      tag: 'Higher Education',
      clients: [
        '서울대학교',
        '한성대학교',
        '고려대학교',
        '인하대학교 등',
      ],
    },
    {
      group: '금융 (Finance & Public Pension)',
      icon: <Building2 className="w-5 h-5" />,
      tag: 'Finance & Pension',
      clients: [
        '국민연금공단 등',
      ],
    },
    {
      group: '기업 (Enterprise & SMB)',
      icon: <Briefcase className="w-5 h-5" />,
      tag: 'Corporate Clients',
      clients: [
        '유지텔레콤',
        '글로벌 브랜드 커머스 기업',
        'IT/소프트웨어 개발기업',
        '다수 중소·중견 제조 및 서비스 기업',
      ],
    },
  ];

  return (
    <div id="portfolio-page" className="w-full">
      {/* 1. Header Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>PORTFOLIO &amp; IMPACT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            강의 및 프로젝트 실적
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#0A5EDD] tracking-tight">
            공공기관, 대학, 금융기관, 기업 현장에서 검증된 AIFORIX의 실질적인 성과입니다.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            과장 없는 정직한 Work hour 절감 수치와 실제 현장 적용 사례를 투명하게 공개합니다.
          </p>
        </div>
      </section>

      {/* 2. 강의 이력 4개 그룹 그리드 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="LECTURE &amp; TRAINING HISTORY"
            title="주요 출강 및 파트너 기관"
            subtitle="신뢰할 수 있는 공공기관과 교육기관에서 수많은 교육생과 함께했습니다."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lectureGroups.map((grp, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-6 shadow-ds-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[8px] bg-white border border-gray-200 text-[#0A5EDD] flex items-center justify-center font-bold mb-4 shadow-ds-sm">
                    {grp.icon}
                  </div>
                  <h3 className="font-bold text-[#1F2937] text-base mb-1">
                    {grp.group}
                  </h3>
                  <span className="text-[10px] font-bold text-[#0A5EDD] uppercase tracking-wider block mb-4">
                    {grp.tag}
                  </span>

                  <ul className="space-y-2 border-t border-gray-200/60 pt-3">
                    {grp.clients.map((client, cIdx) => (
                      <li key={cIdx} className="text-xs font-semibold text-[#4B5563] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A5EDD]" />
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 솔루션 & 자동화 사례 그리드 */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="CASE STUDIES"
            title="실전 프로젝트 및 솔루션 사례"
            subtitle="카드를 클릭하면 문제 정의부터 해결 접근법, 최종 결과까지 상세히 확인하실 수 있습니다."
            align="center"
          />

          {/* 필터 탭 */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A5EDD] text-white shadow-ds-sm'
                      : 'bg-white text-[#4B5563] border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* 사례 카드 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((item) => (
              <div
                key={item.slug}
                onClick={() => setActiveCase(item)}
                className="bg-white rounded-[12px] border border-gray-200 p-6 shadow-ds-sm flex flex-col justify-between hover:border-[#0A5EDD]/50 hover:shadow-ds-md transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-0.5 rounded-full">
                      {item.분야}
                    </span>
                    {item.효율 !== '-' && (
                      <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2 py-0.5 rounded-[6px]">
                        {item.효율}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-[#1F2937] text-base mb-1.5 leading-snug group-hover:text-[#0A5EDD] transition-colors">
                    {item.제목}
                  </h3>

                  <p className="text-[11px] text-[#9CA3AF] font-medium mb-3">
                    적용: {item.기업표기}
                  </p>

                  {/* Before / After Bar */}
                  {item.before !== '-' && (
                    <div className="bg-[#F1F5F9] p-3 rounded-[8px] border border-gray-200 my-3 text-xs flex items-center justify-between">
                      <div>
                        <span className="text-[#9CA3AF] block text-[10px]">기존</span>
                        <span className="font-bold text-[#4B5563]">{item.before}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
                      <div>
                        <span className="text-[#0A5EDD] block text-[10px]">도입 후</span>
                        <span className="font-bold text-[#0A5EDD]">{item.after}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 mb-4">
                    {item.요약}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.도구.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-medium bg-[#F1F5F9] text-[#0A5EDD] px-1.5 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#0A5EDD] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    상세보기
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-8 text-center text-xs text-[#9CA3AF]">
            * 절감 시간 및 효율은 작업 현장 표준 Work hour 기준 산출값이며, 고객사의 요청 및 보안을 위해 기업명은 익명 또는 가칭으로 표기되었습니다.
          </div>
        </div>
      </section>

      {/* 4. 사례 상세 모달 */}
      {activeCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div 
            className="bg-white rounded-[16px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-ds-xl border border-gray-200 flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-7 border-b border-gray-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-0.5 rounded-full">
                    {activeCase.분야}
                  </span>
                  <span className="text-xs text-[#9CA3AF] font-medium">
                    · {activeCase.기업표기}
                  </span>
                  {activeCase.효율 !== '-' && (
                    <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2 py-0.5 rounded-[6px]">
                      효율 {activeCase.효율}
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1F2937]">
                  {activeCase.제목}
                </h3>
              </div>
              <button
                onClick={() => setActiveCase(null)}
                className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#1F2937] hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-6">
              {/* Metrics Summary */}
              {activeCase.before !== '-' && (
                <div className="bg-[#F1F5F9] p-4 rounded-[12px] border border-gray-200 flex items-center justify-around text-center">
                  <div>
                    <span className="text-xs text-[#9CA3AF] block mb-0.5">기존 소요 시간</span>
                    <span className="text-sm sm:text-base font-bold text-[#4B5563]">{activeCase.before}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#0A5EDD]" />
                  <div>
                    <span className="text-xs text-[#9CA3AF] block mb-0.5">개선 후 소요 시간</span>
                    <span className="text-sm sm:text-base font-bold text-[#0A5EDD]">{activeCase.after}</span>
                  </div>
                  {activeCase.효율 !== '-' && (
                    <div>
                      <span className="text-xs text-[#9CA3AF] block mb-0.5">개선 효율</span>
                      <span className="text-sm sm:text-base font-bold text-[#0A5EDD]">{activeCase.효율}</span>
                    </div>
                  )}
                </div>
              )}

              {/* 3-Step Details */}
              <div className="space-y-4">
                {/* 1. 문제 (Problem) */}
                <div className="border border-red-200 bg-[#FFF5F5] rounded-[12px] p-5">
                  <div className="flex items-center gap-2 mb-2 text-red-700 font-bold text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>01. 직면했던 문제 (Problem)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {activeCase.문제 || activeCase.요약}
                  </p>
                </div>

                {/* 2. 접근 (Approach) */}
                <div className="border border-blue-200 bg-[#F0F7FF] rounded-[12px] p-5">
                  <div className="flex items-center gap-2 mb-2 text-[#0A5EDD] font-bold text-sm">
                    <Workflow className="w-4 h-4" />
                    <span>02. AIFORIX 해결 접근법 (Approach)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {activeCase.접근 || '업무 분석을 기반으로 최적의 프롬프트 엔지니어링 및 AI 도구를 결합하여 파이프라인을 구축했습니다.'}
                  </p>
                </div>

                {/* 3. 결과 (Outcome) */}
                <div className="border border-indigo-200 bg-[#F5F3FF] rounded-[12px] p-5">
                  <div className="flex items-center gap-2 mb-2 text-[#6D28D9] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>03. 최종 성과 및 가치 환원 (Outcome)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {activeCase.결과 || activeCase.요약}
                  </p>
                </div>
              </div>

              {/* Tools & Tags */}
              <div className="pt-2">
                <span className="text-xs font-bold text-[#1F2937] block mb-2">활용 기술 및 도구:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCase.도구.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F1F5F9] border border-gray-200 text-[#0A5EDD] px-3 py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-gray-100 bg-[#F9FAFB] flex items-center justify-end">
              <OutlineButton size="sm" onClick={() => setActiveCase(null)}>
                닫기
              </OutlineButton>
            </div>
          </div>
        </div>
      )}

      {/* 5. CTASection */}
      <CTASection
        title="우리 기업에도 검증된 성과를 만들어 보세요"
        subtitle="강의, 컨설팅, 업무 자동화, 솔루션 구축까지 현업 맞춤형으로 상담해 드립니다."
        buttonText="프로젝트 문의하기"
        buttonTarget="/contact"
      />
    </div>
  );
};
