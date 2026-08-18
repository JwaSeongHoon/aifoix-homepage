import React from 'react';
import { Link } from '../router/Link';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { 
  BookOpen, 
  Briefcase, 
  Cpu, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Workflow
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const comparisonData = [
    {
      domain: 'AI 교육',
      path: '/services/education',
      tag: '역량 내재화',
      color: '#0A5EDD',
      value: '쓸 줄 아는 직원에서 만들 줄 아는 직원으로 역량 도약',
      output: '표준 5과정 56H 커리큘럼, 실무 프롬프트 템플릿, 사내 업무앱 프로토타입',
      target: '전사 임직원, 직무별 실무진, 디지털 혁신 담당자',
    },
    {
      domain: 'AI 컨설팅',
      path: '/services/consulting',
      tag: '전략 및 설계',
      color: '#6D28D9',
      value: '무엇을, 누가, 어떤 순서로 바꿀지 체계적 설계',
      output: 'AI 훈련 로드맵, 과업 분석표, PBL 과정 정의서, 정부지원사업 매핑 보고서',
      target: '경영진, 인사/교육(HRD) 담당 부서, 사업부서장',
    },
    {
      domain: 'AI 자동화',
      path: '/services/automation',
      tag: '반복 업무 무인화',
      color: '#0A5EDD',
      value: '사내 일상적인 반복 루틴 업무의 제로화',
      output: 'n8n 워크플로우, VBA/Apps Script 매크로, AI 에이전트, 자동 문서 파이프라인',
      target: '경영관리, 정산/회계, 총무, 운영/지원 부서',
    },
    {
      domain: 'AI 솔루션',
      path: '/services/solution',
      tag: '시스템 구축',
      color: '#B45309',
      value: '재직자가 직접 만들고 운영하는 맞춤형 업무 시스템',
      output: '바이브코딩 업무앱, AI Vision 위험성평가, 사내 RAG 지식베이스, 데이터 대시보드',
      target: '현장 안전관리, 생산/품질, 고객지원, IT/시스템 부서',
    },
  ];

  return (
    <div id="services-page" className="w-full">
      {/* 1. Header Banner */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>AIFORIX SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            AIFORIX 4대 사업 영역 개요
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#0A5EDD] tracking-tight">
            진단부터 교육, 자동화, 그리고 자체 솔루션 구축까지
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            단편적인 기능 교육이나 외주 납품에 그치지 않고, 기업의 AI 도입 전 과정을 유기적으로 연결하여 실질적인 업무 성과를 완성합니다.
          </p>
        </div>
      </section>

      {/* 2. 연결 다이어그램 섹션 */}
      <section className="py-14 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-6 sm:p-10 shadow-ds-sm text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A5EDD] uppercase tracking-wider mb-3">
              <Workflow className="w-4 h-4" />
              <span>INTEGRATED VALUE CYCLE</span>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1F2937] tracking-tight mb-8">
              &ldquo;컨설팅으로 문제를 진단하고 → 교육으로 역량을 만들고 → 자동화·솔루션으로 성과를 증명합니다&rdquo;
            </h2>

            {/* Step Pipeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-white p-5 rounded-[12px] border border-gray-200 shadow-ds-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#E6F0FF] text-[#0A5EDD] text-xs font-bold flex items-center justify-center">1</span>
                  <h3 className="font-bold text-[#1F2937] text-sm">컨설팅 (진단 &amp; 설계)</h3>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  사내 워크플로우를 분석하여 비효율을 찾고 적합한 AI 훈련 로드맵과 정부 지원 사업을 매핑합니다.
                </p>
              </div>

              <div className="bg-white p-5 rounded-[12px] border border-gray-200 shadow-ds-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#F3E8FF] text-[#6D28D9] text-xs font-bold flex items-center justify-center">2</span>
                  <h3 className="font-bold text-[#1F2937] text-sm">교육 (역량 내재화)</h3>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  도구 기초부터 바이브코딩까지, 실무자가 직접 자신의 업무를 개선할 수 있는 기술을 실습합니다.
                </p>
              </div>

              <div className="bg-white p-5 rounded-[12px] border border-gray-200 shadow-ds-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFF3E0] text-[#B45309] text-xs font-bold flex items-center justify-center">3</span>
                  <h3 className="font-bold text-[#1F2937] text-sm">자동화 &amp; 솔루션 (성과 증명)</h3>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  현업에 즉시 적용되는 무인 자동화와 전용 앱을 구축하여 명확한 시간 절감 성과를 창출합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4대 사업 비교표 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="SERVICE COMPARISON"
            title="4대 사업 분야 비교"
            subtitle="각 영역별 핵심 제공 가치와 대표 산출물을 한눈에 확인하세요."
            align="center"
          />

          <div className="overflow-hidden border border-gray-200 rounded-[12px] shadow-ds-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F1F5F9] border-b border-gray-200 text-[#1F2937] font-bold">
                  <tr>
                    <th className="px-5 py-4 w-32">사업 분야</th>
                    <th className="px-5 py-4 w-60">핵심 제공 가치</th>
                    <th className="px-5 py-4">대표 산출물</th>
                    <th className="px-5 py-4 w-28 text-center">바로가기</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white text-[#4B5563]">
                  {comparisonData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F1F5F9]/50 transition-colors">
                      <td className="px-5 py-4">
                        <div className="font-bold text-[#1F2937] text-sm">{item.domain}</div>
                        <span className="inline-block mt-0.5 text-[10px] text-[#9CA3AF] font-medium">{item.tag}</span>
                      </td>
                      <td className="px-5 py-4 font-semibold text-[#1F2937]">
                        {item.value}
                      </td>
                      <td className="px-5 py-4 text-xs text-[#4B5563] leading-relaxed">
                        {item.output}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <Link
                          to={item.path}
                          className="inline-flex items-center justify-center p-2 rounded-[8px] bg-[#E6F0FF] text-[#0A5EDD] hover:bg-[#0A5EDD] hover:text-white transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 서브페이지 상세 링크 카드 그리드 */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="EXPLORE SERVICES"
            title="상세 서비스 알아보기"
            subtitle="필요한 분야를 선택하여 구체적인 커리큘럼과 방법론을 확인하세요."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: AI Education */}
            <div className="bg-white p-7 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between hover:border-[#0A5EDD]/40 hover:shadow-ds-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-1 rounded-full">
                    5개 과정 · 56시간
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                  AI 교육 (AI Education)
                </h3>
                <p className="text-xs font-semibold text-[#0A5EDD] mb-3">
                  &ldquo;쓸 줄 아는 직원에서 만들 줄 아는 직원으로&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  생성형 AI 기초부터 구글 워크스페이스, n8n 자동화, 바이브코딩, Claude Code까지 수준별 표준 커리큘럼을 제공합니다.
                </p>
              </div>
              <Link to="/services/education">
                <PrimaryButton size="md" fullWidth icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  교육 프로그램 상세 보기
                </PrimaryButton>
              </Link>
            </div>

            {/* Card 2: AI Consulting */}
            <div className="bg-white p-7 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between hover:border-[#6D28D9]/40 hover:shadow-ds-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#F3E8FF] text-[#6D28D9] flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#6D28D9] bg-[#F3E8FF] px-2.5 py-1 rounded-full">
                    5단계 방법론
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                  AI 컨설팅 (AI Consulting)
                </h3>
                <p className="text-xs font-semibold text-[#6D28D9] mb-3">
                  &ldquo;무엇을, 누가, 어떤 순서로 바꿀지 체계적 설계&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  기업 AI 역량 진단, 과업 분석, AI 훈련 로드맵 수립, PBL 과정 개발 및 정부지원사업 연계를 완벽하게 설계합니다.
                </p>
              </div>
              <Link to="/services/consulting">
                <PrimaryButton size="md" fullWidth icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  컨설팅 프로세스 상세 보기
                </PrimaryButton>
              </Link>
            </div>

            {/* Card 3: AI Automation */}
            <div className="bg-white p-7 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between hover:border-[#0A5EDD]/40 hover:shadow-ds-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-1 rounded-full">
                    업무 시간 대폭 절감
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                  AI 자동화 (AI Automation)
                </h3>
                <p className="text-xs font-semibold text-[#0A5EDD] mb-3">
                  &ldquo;반복 업무의 무인화와 실시간 처리&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  n8n 워크플로우(vibe n8n), VBA/Apps Script 매크로, 파일/경비 처리 AI 에이전트, 문서 생성 파이프라인을 구축합니다.
                </p>
              </div>
              <Link to="/services/automation">
                <PrimaryButton size="md" fullWidth icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  자동화 구축 영역 보기
                </PrimaryButton>
              </Link>
            </div>

            {/* Card 4: AI Solution */}
            <div className="bg-white p-7 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between hover:border-[#B45309]/40 hover:shadow-ds-md transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#FFF3E0] text-[#B45309] flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#B45309] bg-[#FFF3E0] px-2.5 py-1 rounded-full">
                    바이브코딩 기반
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                  AI 솔루션 (AI Solution)
                </h3>
                <p className="text-xs font-semibold text-[#B45309] mb-3">
                  &ldquo;재직자가 직접 만드는 전용 업무 시스템&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  바이브코딩 및 Claude Code 실무 앱, AI Vision 위험성평가, 사내 RAG 챗봇, 실무 엑셀의 DB 시스템화를 구현합니다.
                </p>
              </div>
              <Link to="/services/solution">
                <PrimaryButton size="md" fullWidth icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  솔루션 라인업 보기
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTASection */}
      <CTASection />
    </div>
  );
};
