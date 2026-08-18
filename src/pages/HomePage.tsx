import React, { useState, useEffect, useRef } from 'react';
import { Link } from '../router/Link';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { OutlineButton } from '../components/common/OutlineButton';
import { SectionTitle } from '../components/common/SectionTitle';
import { CTASection } from '../components/common/CTASection';
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  User, 
  Quote, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { BRAND_PHILOSOPHY } from '../theme/tokens';
import ceoProfileImage from '../assets/images/ceo_profile_image_1787054254844.jpg';

// CountUp Hook for Smooth Scroll-Triggered Animation
function useCountUp(target: number, duration: number = 1600, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, start]);

  return count;
}

export const HomePage: React.FC = () => {
  // Impact Cases scroll observer
  const impactRef = useRef<HTMLDivElement>(null);
  const [impactInView, setImpactInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImpactInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Numbers for impact cases
  const count1 = useCountUp(720, 1500, impactInView);
  const count2 = useCountUp(168, 1500, impactInView);
  const count3Times = useCountUp(48, 1500, impactInView);
  const count3Hours = useCountUp(940, 1500, impactInView);
  const count4 = useCountUp(500, 1500, impactInView);

  const trustPartners = [
    '고용노동부',
    '한국산업인력공단',
    '대한상공회의소',
    '서울대학교',
    '국민연금공단',
    '한국고용노동교육원',
    '노사발전재단',
    '캠코 인재개발원',
  ];

  return (
    <div id="home-page" className="w-full">
      {/* 1. 히어로 Section */}
      <section id="hero-section" className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <span className="w-2 h-2 rounded-full bg-[#3882F6] animate-pulse"></span>
            <span>B2B AI EXPERT GROUP · AIFORIX</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#1F2937] tracking-tight leading-[1.18]">
            AI를 배우고, 업무를 바꾸고,
            <br />
            <span className="text-[#0A5EDD]">성과를 만듭니다.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#4B5563] tracking-tight">
            AI 교육 · AI 컨설팅 · AI 자동화 · AI 솔루션
          </p>

          <p className="mt-3 text-sm text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            AI로 혁신과 변화를 선도하여 비즈니스의 지속 가능한 성장을 지원하는 실무형 B2B AI 전문 파트너
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <PrimaryButton
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                문의하기
              </PrimaryButton>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <OutlineButton
                size="lg"
                className="w-full sm:w-auto"
              >
                사례 보기
              </OutlineButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 신뢰 텍스트 바 (마퀴) */}
      <section id="trust-bar" className="w-full py-4 bg-white border-b border-gray-200 overflow-hidden select-none">
        <div className="flex items-center">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-[#9CA3AF]">
            {[...trustPartners, ...trustPartners].map((partner, idx) => (
              <span key={idx} className="flex items-center gap-6 sm:gap-8 shrink-0 hover:text-[#4B5563] transition-colors">
                <span>{partner}</span>
                <span className="text-gray-300 font-light">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy 3 Pillars from Design System v1.1 */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BRAND_PHILOSOPHY.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[12px] border border-gray-100 bg-[#F1F5F9]/60 hover:bg-[#F1F5F9] transition-colors flex items-start gap-4"
              >
                <div 
                  className="w-10 h-10 rounded-[8px] flex items-center justify-center shrink-0 font-bold text-white shadow-ds-sm"
                  style={{ backgroundColor: pillar.color }}
                >
                  0{idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="font-extrabold text-[#1F2937] text-base">{pillar.en}</h3>
                    <span className="text-xs font-semibold text-[#4B5563]">({pillar.ko})</span>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4대 사업 카드 */}
      <section id="core-services-section" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR SERVICES"
            title="AIFORIX 4대 사업 영역"
            subtitle="기업의 AI 도입 단계와 실무 목적에 최적화된 맞춤형 솔루션을 제공합니다."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. AI 교육 */}
            <Link
              to="/services/education"
              className="group bg-white p-6 rounded-[12px] shadow-ds-sm border border-gray-200 flex flex-col justify-between hover:border-[#3882F6]/50 hover:shadow-ds-md hover:-translate-y-0.5 transition-all block"
            >
              <div>
                <div className="w-10 h-10 bg-[#E6F0FF] rounded-[8px] mb-4 flex items-center justify-center text-[#0A5EDD] font-bold text-sm group-hover:bg-[#0A5EDD] group-hover:text-white transition-colors">
                  01
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-[#0A5EDD]" />
                  <h3 className="font-bold text-[#1F2937] text-base group-hover:text-[#0A5EDD] transition-colors">
                    AI 교육
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#0A5EDD] mb-2">
                  &ldquo;쓸 줄 아는 직원에서 만들 줄 아는 직원으로&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  표준 커리큘럼 5과정 56시간
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A5EDD] group-hover:text-[#08225C] transition-colors">
                <span>상세보기</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* 2. AI 컨설팅 */}
            <Link
              to="/services/consulting"
              className="group bg-white p-6 rounded-[12px] shadow-ds-sm border border-gray-200 flex flex-col justify-between hover:border-[#6D28D9]/50 hover:shadow-ds-md hover:-translate-y-0.5 transition-all block"
            >
              <div>
                <div className="w-10 h-10 bg-[#F3E8FF] rounded-[8px] mb-4 flex items-center justify-center text-[#6D28D9] font-bold text-sm group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                  02
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-[#6D28D9]" />
                  <h3 className="font-bold text-[#1F2937] text-base group-hover:text-[#6D28D9] transition-colors">
                    AI 컨설팅
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#6D28D9] mb-2">
                  &ldquo;무엇을, 누가, 어떤 순서로 바꿀지 설계&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  AI훈련로드맵·PBL 과정개발
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#6D28D9] group-hover:text-[#3B0764] transition-colors">
                <span>상세보기</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* 3. AI 자동화 */}
            <Link
              to="/services/automation"
              className="group bg-white p-6 rounded-[12px] shadow-ds-sm border border-gray-200 flex flex-col justify-between hover:border-[#3882F6]/50 hover:shadow-ds-md hover:-translate-y-0.5 transition-all block"
            >
              <div>
                <div className="w-10 h-10 bg-[#E6F0FF] rounded-[8px] mb-4 flex items-center justify-center text-[#0A5EDD] font-bold text-sm group-hover:bg-[#0A5EDD] group-hover:text-white transition-colors">
                  03
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-[#0A5EDD]" />
                  <h3 className="font-bold text-[#1F2937] text-base group-hover:text-[#0A5EDD] transition-colors">
                    AI 자동화
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#0A5EDD] mb-2">
                  &ldquo;반복 업무의 무인화&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  n8n·VBA·Apps Script·AI 에이전트
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#0A5EDD] group-hover:text-[#08225C] transition-colors">
                <span>상세보기</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* 4. AI 솔루션 */}
            <Link
              to="/services/solution"
              className="group bg-white p-6 rounded-[12px] shadow-ds-sm border border-gray-200 flex flex-col justify-between hover:border-[#B45309]/50 hover:shadow-ds-md hover:-translate-y-0.5 transition-all block"
            >
              <div>
                <div className="w-10 h-10 bg-[#FFF3E0] rounded-[8px] mb-4 flex items-center justify-center text-[#B45309] font-bold text-sm group-hover:bg-[#B45309] group-hover:text-white transition-colors">
                  04
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[#B45309]" />
                  <h3 className="font-bold text-[#1F2937] text-base group-hover:text-[#B45309] transition-colors">
                    AI 솔루션
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#B45309] mb-2">
                  &ldquo;재직자가 직접 만드는 업무 시스템&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] leading-relaxed mb-6">
                  바이브코딩·Claude Code 업무앱
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#B45309] group-hover:text-[#7C2D12] transition-colors">
                <span>상세보기</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 임팩트 케이스 (숫자 카운트업) */}
      <section ref={impactRef} id="impact-cases-section" className="py-16 md:py-20 bg-[#F1F5F9] border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="IMPACT CASES"
            title="실질적 자동화 성과 지표"
            subtitle="현장 프로세스 개선을 통해 창출된 실제 업무 시간 절감 결과입니다."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 케이스 1 */}
            <div className="bg-white p-6 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between text-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-[#0A5EDD] bg-[#E6F0FF] rounded-full mb-3">
                  안전관리 자동화
                </span>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#0A5EDD] font-stat-number">
                    {count1}
                  </span>
                  <span className="text-lg font-bold text-[#4B5563]">배</span>
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#1F2937] mt-2">
                현장사진 위험성평가 자동화
              </p>
            </div>

            {/* 케이스 2 */}
            <div className="bg-white p-6 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between text-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-[#6D28D9] bg-[#F3E8FF] rounded-full mb-3">
                  기획 프로세스
                </span>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#6D28D9] font-stat-number">
                    {count2}
                  </span>
                  <span className="text-lg font-bold text-[#4B5563]">배</span>
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#1F2937] mt-2">
                회의 기반 화면설계 자동화
              </p>
            </div>

            {/* 케이스 3 */}
            <div className="bg-white p-6 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between text-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-[#B45309] bg-[#FFF3E0] rounded-full mb-3">
                  회계·정산 업무
                </span>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#B45309] font-stat-number">
                    {count3Times}
                  </span>
                  <span className="text-lg font-bold text-[#4B5563]">배</span>
                </div>
                <div className="text-xs font-bold text-[#B45309] bg-[#FFF3E0] py-1 px-2 rounded mt-1">
                  연 {count3Hours}시간 절감
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#1F2937] mt-2">
                수입정산 자동화
              </p>
            </div>

            {/* 케이스 4 */}
            <div className="bg-white p-6 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between text-center">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-[#0A5EDD] bg-[#E6F0FF] rounded-full mb-3">
                  사내 시스템 구축
                </span>
                <div className="flex items-baseline justify-center gap-1 my-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#0A5EDD] font-stat-number">
                    {count4}
                  </span>
                  <span className="text-lg font-bold text-[#4B5563]">배</span>
                </div>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#1F2937] mt-2">
                업무 자동화 솔루션
              </p>
            </div>
          </div>

          {/* 하단 각주 */}
          <p className="mt-6 text-center text-xs text-[#9CA3AF] font-normal">
            * 모든 수치는 자동화로 줄일 수 있는 시간만 계산한 정직한 Work hour 기준입니다.
          </p>
        </div>
      </section>

      {/* 5. 딜리버리 모델 요약 */}
      <section id="delivery-model-summary" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="DELIVERY MODEL"
            title="AIFORIX 5단계 딜리버리 프로세스"
            subtitle="단순한 일회성 교육을 넘어, 실무 현장에 적용되는 자동화 솔루션까지 함께 완성합니다."
            align="center"
          />

          {/* 5단계 스텝 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
            {[
              { step: '01', title: '기업 문제 진단', desc: '현업 업무 프로세스 분석 및 AI 도입 기회 식별' },
              { step: '02', title: '과정개발 컨설팅', desc: '맞춤형 커리큘럼 및 과제 정의' },
              { step: '03', title: '과정(교육) 진행', desc: '도구 활용 및 실습 중심 교육' },
              { step: '04', title: '솔루션 공동 개발', desc: '재직자와 함께 실전 자동화 구현' },
              { step: '05', title: '신뢰 기반 후속 연계', desc: '현장 안착 및 지속 개선 지원' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5F9] p-4 rounded-[12px] border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-black text-[#0A5EDD] mb-1">
                    STEP {item.step}
                  </div>
                  <h4 className="text-sm font-bold text-[#1F2937] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 인용구 및 상세 링크 */}
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Quote className="w-6 h-6 text-[#0A5EDD] shrink-0 hidden sm:block" />
              <div>
                <p className="text-base sm:text-lg font-bold text-[#1F2937] tracking-tight">
                  &ldquo;가장 잘 아는 사람이, 가장 좋은 자동화를 만든다.&rdquo;
                </p>
                <p className="text-xs text-[#4B5563] mt-1">
                  외부 납품 방식이 아닌, 현업 재직자가 주도하는 내재화된 AI 혁신을 지향합니다.
                </p>
              </div>
            </div>
            <Link to="/about">
              <OutlineButton size="md" icon={<ChevronRight className="w-4 h-4" />} iconPosition="right">
                자세히 보기
              </OutlineButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. 대표 프로필 요약 */}
      <section id="founder-summary-section" className="py-16 md:py-20 bg-[#F1F5F9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="LEADERSHIP"
            title="대표 소개"
            subtitle="풍부한 실무 엔지니어링 경험을 기반으로 신뢰할 수 있는 실전 AI 가이드를 제공합니다."
            align="center"
          />

          <div className="bg-white border border-gray-200 rounded-[12px] p-6 sm:p-8 shadow-ds-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {/* 대표 프로필 사진 */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#F1F5F9] border-2 border-[#0A5EDD]/30 shrink-0 shadow-ds-sm">
              <img
                src={ceoProfileImage}
                alt="AIFORIX 좌성훈 대표"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 대표 정보 */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 justify-center sm:justify-start">
                <h3 className="text-xl font-extrabold text-[#1F2937]">좌성훈</h3>
                <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-0.5 rounded-full inline-block">
                  AIFORIX 대표
                </span>
              </div>

              {/* 3줄 요약 문구 */}
              <div className="pt-2 space-y-1.5 text-xs sm:text-sm text-[#4B5563]">
                <p className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0" />
                  <span>IT 분야 20년 실무 경험의 엔지니어 출신</span>
                </p>
                <p className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0" />
                  <span>한국AI서비스학회 AI사업본부장</span>
                </p>
                <p className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0" />
                  <span>국가인공지능전략위원회 AI전문가 · 한국산업인력공단 AI 훈련코치</span>
                </p>
              </div>

              <div className="pt-3">
                <Link to="/about" className="inline-flex items-center gap-1 text-xs font-bold text-[#0A5EDD] hover:text-[#08225C] transition-colors">
                  <span>상세 프로필 및 이력 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTASection */}
      <CTASection />
    </div>
  );
};
