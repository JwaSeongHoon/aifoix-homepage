import React from 'react';
import { Link } from '../router/Link';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { cases } from '../data/cases';
import { 
  Layers, 
  Camera, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Users,
  Terminal,
  Server
} from 'lucide-react';

export const SolutionPage: React.FC = () => {
  const solutionCases = cases.filter((c) => c.분야 === '솔루션').slice(0, 3);

  const solutionDomains = [
    {
      title: '바이브코딩 & Claude Code 실무 앱',
      badge: '자체 앱 구축',
      icon: <Terminal className="w-5 h-5" />,
      desc: '기획서 작성부터 PRD 수립, Claude Code 개발 및 클라우드 배포까지 비개발자 재직자가 사내 맞춤형 웹 시스템을 직접 구축할 수 있도록 합니다.',
      features: [
        '코딩 문법 암기 없이 자연어 메타 프롬프트로 웹 애플리케이션 완성',
        '사내 정산, 재고 조회, 예약 관리 등 100% 맞춤형 기능 구현',
        '외주 비용 제로 및 사내 개발 내재화 실현',
      ],
    },
    {
      title: 'AI Vision 위험성평가 솔루션',
      badge: '안전·현장 혁신',
      icon: <Camera className="w-5 h-5" />,
      desc: '현장 사진 업로드만으로 위험 요인을 시각적으로 자동 탐지하고, 법적 기준에 부합하는 위험성평가표와 작업계획서를 2분 만에 자동 생성합니다.',
      features: [
        'Claude Vision 멀티모달 기반 실시간 유해·위험 요소 객체 인식',
        '산업안전보건법 및 KOSHA 가이드라인 표준 서식 자동 출력',
        '1건당 24시간 걸리던 서류 작업을 2분으로 720배 단축',
      ],
    },
    {
      title: '사내 RAG & 지식 검색 시스템',
      badge: '보안 지식 베이스',
      icon: <Database className="w-5 h-5" />,
      desc: '사내 방대한 규정집, 제품 매뉴얼, 기술 보고서, 고객 Q&A를 안전하게 벡터화하여 환각 없는 정확한 답변과 출처를 제공하는 보안 챗봇입니다.',
      features: [
        '사내 비공개 문서 기반 정확한 출처(페이지, 문서명) 명시',
        '부서별·직급별 세분화된 접근 권한 관리(RBAC)',
        '폐쇄망 및 사내 온프레미스 인프라 연동 지원',
      ],
    },
    {
      title: '실무 엑셀의 DB 시스템화',
      badge: '데이터 거버넌스',
      icon: <Server className="w-5 h-5" />,
      desc: '셀 병합, 비정형 서식, 수식 오류로 뒤엉킨 실무 엑셀을 프롬프팅으로 자동 정규화하여 PostgreSQL 데이터베이스에 적재하고 실시간 대시보드를 제공합니다.',
      features: [
        '비정형 엑셀 파일 업로드 시 6단계 자동 정제 파이프라인 가동',
        '안정적인 관계형 DB 자동 적재 및 히스토리 관리',
        '경영진 및 현업을 위한 실시간 데이터 시각화 대시보드',
      ],
    },
  ];

  return (
    <div id="solution-page" className="w-full">
      {/* 1. Header Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#B45309] bg-white border border-[#B45309]/20 rounded-full shadow-ds-sm">
            <Layers className="w-3.5 h-3.5 text-[#B45309]" />
            <span>AI SOLUTION SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            AIFORIX AI 솔루션 개발
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#B45309] tracking-tight">
            &ldquo;재직자가 직접 만들고 운영하는 맞춤형 업무 시스템&rdquo;
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            비싼 외주 개발과 유지보수의 굴레에서 벗어나, 가장 업무를 잘 아는 현업 담당자가 직접 필요한 솔루션을 만들고 발전시킬 수 있도록 함께 구축합니다.
          </p>

          <div className="mt-8">
            <Link to="/contact?type=solution">
              <PrimaryButton size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                솔루션 도입 문의하기
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 바이브코딩 철학 배너 */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-ds-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B45309] text-white flex items-center justify-center shrink-0 shadow-ds-sm">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
                  CORE PHILOSOPHY
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1F2937] tracking-tight">
                  &ldquo;가장 잘 아는 사람이 가장 좋은 시스템을 만듭니다&rdquo;
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-md md:text-right leading-relaxed font-medium">
              우리가 대신 만들어주고 떠나는 것이 아니라, 재직자가 스스로 만들고 유지보수할 수 있도록 함께 구현합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 4대 솔루션 영역 카드 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="SOLUTION DOMAINS"
            title="4대 핵심 솔루션 영역"
            subtitle="현장 안전부터 사내 지식 검색, 데이터 시스템화까지 기업에 꼭 필요한 솔루션을 제공합니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionDomains.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-7 shadow-ds-sm hover:border-[#B45309]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-gray-200 text-[#B45309] flex items-center justify-center font-bold shadow-ds-sm">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#B45309] bg-[#FFF3E0] px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2937] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200/60">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 관련 사례 카드 (솔루션 분야 3개) */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="SOLUTION CASES"
            title="실제 솔루션 개발 사례"
            subtitle="비개발자 재직자가 직접 구축하거나 현장에 안착된 성공 사례입니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionCases.map((c) => (
              <div
                key={c.slug}
                className="bg-white rounded-[12px] border border-gray-200 p-6 shadow-ds-sm flex flex-col justify-between hover:border-[#B45309]/40 hover:shadow-ds-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#B45309] bg-[#FFF3E0] px-2 py-0.5 rounded-md">
                      {c.효율 !== '-' ? `효율 ${c.효율}` : c.분야}
                    </span>
                    <span className="text-[11px] text-[#9CA3AF] font-medium">{c.기업표기}</span>
                  </div>

                  <h3 className="font-bold text-[#1F2937] text-base mb-2 leading-snug">
                    {c.제목}
                  </h3>

                  <div className="bg-[#F1F5F9] p-3 rounded-[8px] border border-gray-200 my-3 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[#9CA3AF] block text-[10px]">기존</span>
                      <span className="font-bold text-[#4B5563]">{c.before}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <div>
                      <span className="text-[#B45309] block text-[10px]">도입 후</span>
                      <span className="font-bold text-[#B45309]">{c.after}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 mb-4">
                    {c.요약}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {c.도구.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-[#F1F5F9] text-[#B45309] px-1.5 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link to="/portfolio" className="text-xs font-bold text-[#B45309] hover:underline flex items-center gap-0.5">
                    상세보기
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/portfolio">
              <PrimaryButton size="md" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                전체 포트폴리오 사례 확인하기
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTASection */}
      <CTASection
        title="우리 회사만의 맞춤형 AI 솔루션을 구축하세요"
        subtitle="외주 개발 비용 없이 사내 임직원이 직접 운영하는 지속 가능한 소프트웨어를 완성합니다."
        buttonText="솔루션 도입 문의하기"
        buttonTarget="/contact"
      />
    </div>
  );
};
