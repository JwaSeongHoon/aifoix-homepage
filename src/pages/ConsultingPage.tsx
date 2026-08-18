import React from 'react';
import { Link } from '../router/Link';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Award
} from 'lucide-react';

export const ConsultingPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: '기업 AI 역량 수준 진단',
      badge: '초·중·고급 분류',
      desc: '조직 구성원의 디지털 리터러시, 데이터 인프라 상태, 기존 IT 툴 사용 패턴을 정밀 진단하여 기업의 AI 준비도를 객관적으로 판별합니다.',
    },
    {
      number: '02',
      title: '과업·워크플로우 분석',
      badge: '4대 기준 평가',
      desc: '부서별 업무를 분해하여 [반복성 × 데이터 축적도 × 시간 절감 효과 × 학습 적정성]을 기반으로 AI 도입 필요도를 입체 평가합니다.',
    },
    {
      number: '03',
      title: '훈련대상 과업 선정 및 As-Is / To-Be 설계',
      badge: '우선순위 과제 도출',
      desc: '단기 성과 창출이 가능한 핵심 과업을 우선 선정하고, 기존 수작업(As-Is)과 AI 적용 후의 개선된 업무 프로세스(To-Be)를 구체적으로 모델링합니다.',
    },
    {
      number: '04',
      title: 'KSA 역량 모델링 & 훈련체계 수립',
      badge: '맞춤형 역량 체계',
      desc: '선정된 과업 수행에 필요한 지식(Knowledge), 기술(Skill), 태도(Attitude)를 체계화하여 실무 중심의 직무별 훈련 체계도를 수립합니다.',
    },
    {
      number: '05',
      title: '정부지원사업 매핑',
      badge: '비용 효율 극대화',
      desc: '기업 규모와 업종에 맞춰 S-OJT(체계적 현장훈련), 사업주훈련, 인재키움 프리미엄 등 정부 지원 사업을 최적 매핑하여 비용 부담을 최소화합니다.',
    },
  ];

  return (
    <div id="consulting-page" className="w-full">
      {/* 1. Header Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#6D28D9] bg-white border border-[#6D28D9]/20 rounded-full shadow-ds-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#6D28D9]" />
            <span>AI CONSULTING SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            AIFORIX AI 도입 컨설팅
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#6D28D9] tracking-tight">
            &ldquo;무엇을, 누가, 어떤 순서로 바꿀지 설계합니다&rdquo;
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            막연한 기술 도입이 아닌, 기업의 실제 워크플로우를 진단하고 실행 가능한 AI 훈련 로드맵과 정부 지원 사업을 연결합니다.
          </p>

          <div className="mt-8">
            <Link to="/contact?type=consulting">
              <PrimaryButton size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                컨설팅 문의하기
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 신뢰 문구 배너 */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-5 sm:p-6 text-center flex items-center justify-center gap-3">
            <Award className="w-5 h-5 text-[#6D28D9] shrink-0" />
            <p className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              한국산업인력공단 AI훈련코치 활동을 통해 다수 기업에서 검증한 진단·설계 방법론입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AI훈련로드맵 표준 방법론 5단계 스텝 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="5-STEP METHODOLOGY"
            title="AI 훈련 로드맵 표준 방법론 5단계"
            subtitle="현장 중심의 데이터 기반 분석을 통해 기업별 최적화된 로드맵을 체계적으로 도출합니다."
            align="center"
          />

          <div className="space-y-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-6 sm:p-7 shadow-ds-sm hover:border-[#6D28D9]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                <div className="w-12 h-12 rounded-[10px] bg-white border border-gray-200 text-[#6D28D9] font-extrabold text-base flex items-center justify-center shrink-0 shadow-ds-sm">
                  {item.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#1F2937]">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#6D28D9] bg-[#F3E8FF] px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PBL 과정개발 & AI 거버넌스·보안 컨설팅 블록 */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="SPECIALIZED CONSULTING"
            title="특화 컨설팅 프로그램"
            subtitle="실제 문제 해결 중심의 실습 과정 개발과 엔터프라이즈 보안 거버넌스 가이드를 제공합니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 블록 1: PBL 과정개발 컨설팅 */}
            <div className="bg-white p-7 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#F3E8FF] text-[#6D28D9] flex items-center justify-center font-bold mb-5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">
                  PBL(문제 기반 학습) 과정개발 컨설팅
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                  이론 중심 교육이 아닌, 기업의 실제 업무 데이터와 실무 이슈를 교재화하여 훈련 기간 내에 실전 결과물을 산출하는 맞춤형 PBL 커리큘럼을 설계합니다.
                </p>
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-[#4B5563]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6D28D9]" />
                    <span>기업 실무 데이터 기반 프로젝트 과제 정의</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6D28D9]" />
                    <span>현업 멘토-수강생 간 공동 피드백 가이드 수립</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6D28D9]" />
                    <span>훈련 종료 후 즉시 사내 적용 가능한 산출물 검증</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 블록 2: AI 거버넌스·보안 컨설팅 */}
            <div className="bg-white p-7 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center font-bold mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">
                  AI 거버넌스 &amp; 보안 컨설팅
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6">
                  보안 솔루션 분야 20년 경력 기반으로 사내 데이터의 안전한 활용, 온프레미스 프라이빗 AI 아키텍처 자문, 금융·공공 컴플라이언스를 충족하는 거버넌스를 정립합니다.
                </p>
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-[#4B5563]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5EDD]" />
                    <span>사내 기밀 데이터 및 개인정보 마스킹 체계 구축</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5EDD]" />
                    <span>온프레미스 및 폐쇄망 AI 도입 아키텍처 자문</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5EDD]" />
                    <span>금융·공공 규제 준수 및 AI 사용 윤리 가이드라인</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTASection */}
      <CTASection
        title="전문가와 함께 AI 훈련 로드맵을 수립하세요"
        subtitle="기업의 현황을 파악하고 최적의 정부지원사업 연계 방안을 안내해 드립니다."
        buttonText="컨설팅 문의하기"
        buttonTarget="/contact"
      />
    </div>
  );
};
