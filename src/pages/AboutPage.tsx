import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { CTASection } from '../components/common/CTASection';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  BookMarked, 
  FileText, 
  Briefcase, 
  User, 
  TrendingUp,
  RefreshCw,
  Users
} from 'lucide-react';
import { BRAND_PHILOSOPHY } from '../theme/tokens';

export const AboutPage: React.FC = () => {
  return (
    <div id="about-page" className="w-full">
      {/* 1. 브랜드 소개 Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>ABOUT AIFORIX</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2937] tracking-tight leading-[1.2]">
            AI FOR Innovation &amp; Transformation
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#0A5EDD] tracking-tight">
            {BRAND_PHILOSOPHY.title}
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            AI를 단순히 소개하는 수준을 넘어, 기업과 개인이 실제 업무 현장에서 AI를 활용해 실질적인 혁신과 비즈니스 성장을 이루도록 돕는 B2B AI 전문 브랜드입니다.
          </p>
        </div>
      </section>

      {/* 2. 브랜드 철학 & 3대 핵심 가치 (Innovation, Transformation, Partnership) */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="BRAND PHILOSOPHY"
            title="AIFORIX 브랜드 철학 &amp; 3대 핵심 축"
            subtitle="AI로 혁신과 변화를 선도하여 비즈니스의 지속 가능한 성장을 함께합니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Innovation */}
            <div className="bg-white p-8 rounded-[12px] border border-gray-200 shadow-ds-sm hover:shadow-ds-md hover:border-[#0A5EDD]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E6F0FF] text-[#0A5EDD] rounded-[10px] flex items-center justify-center mb-6 font-bold shadow-ds-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#0A5EDD] uppercase tracking-wider mb-1">
                  CORE 01
                </div>
                <h3 className="text-xl font-extrabold text-[#1F2937] mb-2">
                  INNOVATION <span className="text-sm font-semibold text-[#4B5563]">(혁신)</span>
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  새로운 아이디어와 실전 AI 기술로 기업의 미래 경쟁력을 선도합니다.
                </p>
              </div>
            </div>

            {/* 2. Transformation */}
            <div className="bg-white p-8 rounded-[12px] border border-gray-200 shadow-ds-sm hover:shadow-ds-md hover:border-[#6D28D9]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#F3E8FF] text-[#6D28D9] rounded-[10px] flex items-center justify-center mb-6 font-bold shadow-ds-sm">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-1">
                  CORE 02
                </div>
                <h3 className="text-xl font-extrabold text-[#1F2937] mb-2">
                  TRANSFORMATION <span className="text-sm font-semibold text-[#4B5563]">(변화)</span>
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  업무 방식의 근본적인 변화와 자동화를 통해 현업에 더 나은 실질적 가치를 창출합니다.
                </p>
              </div>
            </div>

            {/* 3. Partnership */}
            <div className="bg-white p-8 rounded-[12px] border border-gray-200 shadow-ds-sm hover:shadow-ds-md hover:border-[#0A5EDD]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E6F0FF] text-[#0A5EDD] rounded-[10px] flex items-center justify-center mb-6 font-bold shadow-ds-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#0A5EDD] uppercase tracking-wider mb-1">
                  CORE 03
                </div>
                <h3 className="text-xl font-extrabold text-[#1F2937] mb-2">
                  PARTNERSHIP <span className="text-sm font-semibold text-[#4B5563]">(동반성장)</span>
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  단순 외주 공급이 아닌 신뢰와 긴밀한 협력을 바탕으로 고객사와 함께 성장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 미션 & 비전 */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="MISSION &amp; VISION"
            title="AIFORIX의 지향점"
            subtitle="기술 중심이 아닌 현장과 사람 중심의 AI 전환을 추구합니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 미션 카드 */}
            <div className="bg-white p-8 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-[10px] flex items-center justify-center text-[#0A5EDD] mb-6 shadow-ds-sm">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#0A5EDD] uppercase tracking-wider mb-2">
                  OUR MISSION
                </div>
                <h3 className="text-xl font-extrabold text-[#1F2937] mb-3">
                  미션 (Mission)
                </h3>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-medium">
                  &ldquo;현장 중심의 AI 교육·컨설팅·자동화·솔루션을 통해 기업의 실질적인 AI 전환을 이끈다&rdquo;
                </p>
              </div>
            </div>

            {/* 비전 카드 */}
            <div className="bg-white p-8 rounded-[12px] border border-gray-200 shadow-ds-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#F3E8FF] rounded-[10px] flex items-center justify-center text-[#6D28D9] mb-6 shadow-ds-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-wider mb-2">
                  OUR VISION
                </div>
                <h3 className="text-xl font-extrabold text-[#1F2937] mb-3">
                  비전 (Vision)
                </h3>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed font-medium">
                  &ldquo;모든 조직이 AI를 통해 더 빠르고, 더 창의적이며, 더 효율적으로 일하는 세상을 만든다&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 딜리버리 모델 상세 (포워드 디플로이드 모델) */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FORWARD DEPLOYED MODEL"
            title="중소기업형 포워드 디플로이드 모델"
            subtitle="외부 엔지니어가 만들어 납품하는 것이 아니라, 그 업무를 가장 잘 아는 재직자(훈련생)가 직접 솔루션을 개발하도록 AIFORIX가 교육하고 코칭합니다."
            align="center"
          />

          {/* 5단계 스텝 상세 표 */}
          <div className="mb-12 overflow-hidden border border-gray-200 rounded-[12px] shadow-ds-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F1F5F9] border-b border-gray-200 text-[#1F2937] font-bold">
                  <tr>
                    <th className="px-5 py-3.5 w-24">단계</th>
                    <th className="px-5 py-3.5 w-44">프로세스</th>
                    <th className="px-5 py-3.5">주요 활동 및 산출물</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white text-[#4B5563]">
                  <tr>
                    <td className="px-5 py-4 font-black text-[#0A5EDD]">Step 01</td>
                    <td className="px-5 py-4 font-bold text-[#1F2937]">기업 문제 진단</td>
                    <td className="px-5 py-4">현업 부서 인터뷰 및 업무 프로세스 분석, AI 도입 적합 과제 및 우선순위 식별</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-black text-[#0A5EDD]">Step 02</td>
                    <td className="px-5 py-4 font-bold text-[#1F2937]">과정개발 컨설팅</td>
                    <td className="px-5 py-4">기업별 실무 환경에 맞춘 AI 훈련 로드맵 수립 및 문제 기반 학습(PBL) 과제 정의</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-black text-[#0A5EDD]">Step 03</td>
                    <td className="px-5 py-4 font-bold text-[#1F2937]">과정(교육) 진행</td>
                    <td className="px-5 py-4">생성형 AI, 자동화 도구(n8n, Apps Script, VBA 등) 및 프롬프트 엔지니어링 실무 실습</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-black text-[#0A5EDD]">Step 04</td>
                    <td className="px-5 py-4 font-bold text-[#1F2937]">솔루션 공동 개발</td>
                    <td className="px-5 py-4">AIFORIX 전문가와 재직자가 함께 참여하여 현업에 즉시 적용 가능한 업무 자동화/앱 구축</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 font-black text-[#0A5EDD]">Step 05</td>
                    <td className="px-5 py-4 font-bold text-[#1F2937]">신뢰 기반 후속 연계</td>
                    <td className="px-5 py-4">도입된 시스템의 현장 안착 모니터링, 오류 대응 및 지속적인 고도화 피드백 제공</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4대 운영 원칙 */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1F2937]">
              AIFORIX 4대 운영 원칙
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#F1F5F9] p-5 rounded-[12px] border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black text-[#0A5EDD] mb-1">01</div>
                  <h5 className="font-bold text-[#1F2937] text-sm mb-1.5">정직한 계산</h5>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    과장 없는 실제 Work hour 절감치만을 정직하게 계산합니다.
                  </p>
                </div>
              </div>

              <div className="bg-[#F1F5F9] p-5 rounded-[12px] border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black text-[#0A5EDD] mb-1">02</div>
                  <h5 className="font-bold text-[#1F2937] text-sm mb-1.5">AI는 초안, 사람은 검증</h5>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    AI가 생성한 결과는 사람이 반드시 검토하고 최종 확정합니다.
                  </p>
                </div>
              </div>

              <div className="bg-[#F1F5F9] p-5 rounded-[12px] border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black text-[#0A5EDD] mb-1">03</div>
                  <h5 className="font-bold text-[#1F2937] text-sm mb-1.5">내재화 우선</h5>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    외부 의존도를 낮추고 사내 재직자가 스스로 유지·발전시키는 역량을 배양합니다.
                  </p>
                </div>
              </div>

              <div className="bg-[#F1F5F9] p-5 rounded-[12px] border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black text-[#0A5EDD] mb-1">04</div>
                  <h5 className="font-bold text-[#1F2937] text-sm mb-1.5">시간은 사람에게</h5>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    단축된 업무 시간을 직원들의 창의적이고 본질적인 가치 업무에 재투자합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 대표 프로필 상세 */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FOUNDER &amp; LEADER"
            title="대표 프로필"
            subtitle="20년 실무 엔지니어링과 기업 인재 개발 경험을 바탕으로 현실적인 AI 도입을 지원합니다."
            align="center"
          />

          <div className="bg-white border border-gray-200 rounded-[12px] p-6 sm:p-10 shadow-ds-sm">
            {/* Header / Basic Info */}
            <div className="pb-8 border-b border-gray-100 space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-2xl font-extrabold text-[#1F2937]">좌성훈</h3>
                <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-0.5 rounded-full inline-block">
                  AIFORIX 대표
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1F2937]">
                한국AI서비스학회 AI사업본부장 · 국가인공지능전략위원회 AI전문가 · 한국산업인력공단 AI 훈련코치
              </p>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                IT 분야 20년 — 엔지니어 → 연구소장 → 인재교육팀장 → AIFORIX 대표
              </p>
            </div>

            {/* Detailed Career & Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-xs sm:text-sm">
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1F2937] mb-3 text-sm">
                    <GraduationCap className="w-4 h-4 text-[#0A5EDD]" />
                    <span>학력</span>
                  </h4>
                  <ul className="space-y-1.5 text-[#4B5563] pl-6 list-disc">
                    <li>한국기술교육대학교 IT융합 소프트웨어 공학석사 (2025)</li>
                    <li>제주대학교 컴퓨터공학 학사</li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1F2937] mb-3 text-sm">
                    <Award className="w-4 h-4 text-[#0A5EDD]" />
                    <span>수상 실적</span>
                  </h4>
                  <ul className="space-y-1.5 text-[#4B5563] pl-6 list-disc">
                    <li>2024 고용노동부 장관 표창 (직업능력개발 유공)</li>
                    <li>2025 한국산업인력공단 이사장상 (기업현장교사 부문) 외</li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1F2937] mb-3 text-sm">
                    <Briefcase className="w-4 h-4 text-[#0A5EDD]" />
                    <span>주요 자격</span>
                  </h4>
                  <p className="text-[#4B5563] leading-relaxed">
                    인공지능(AI) 전문가 1급, 정보보안전문가 1급, 기업교육전문가 1급, 정보처리기사, 직업능력개발훈련교사(인공지능 외 4종)
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1F2937] mb-3 text-sm">
                    <BookMarked className="w-4 h-4 text-[#0A5EDD]" />
                    <span>저서</span>
                  </h4>
                  <ul className="space-y-1.5 text-[#4B5563] pl-6 list-disc">
                    <li>「처음 시작하는 7가지 AI 도구 가이드」(단독)</li>
                    <li>「AI를 활용한 열다섯 가지의 서로 다른 이야기」(공저)</li>
                    <li>「Proxy Gateway와 WAS JDBC 이중화 솔루션」(단독)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1F2937] mb-3 text-sm">
                    <FileText className="w-4 h-4 text-[#0A5EDD]" />
                    <span>학술 논문</span>
                  </h4>
                  <ul className="space-y-1.5 text-[#4B5563] pl-6 list-disc">
                    <li>PostgreSQL 침입탐지 기반 접근제어 알고리즘 (TKIPS, 2025)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1F2937] mb-3 text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#0A5EDD]" />
                    <span>실무 경력</span>
                  </h4>
                  <p className="text-[#4B5563] leading-relaxed">
                    IT 분야 20년 실무 경험의 엔지니어 출신으로 연구소장 및 사내 인재교육팀장을 거쳐 현재 기업 AI 전문 훈련 및 실무형 솔루션 컨설팅을 전담하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 일하는 방식 5원칙 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="WORKING PRINCIPLES"
            title="AIFORIX의 일하는 방식 5원칙"
            subtitle="실효성 있는 AI 적용을 위해 지켜온 실천 규범입니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                title: '먼저 배웁니다',
                desc: '새로운 기술과 도구를 현장에 도입하기 전, 먼저 직접 학습하고 실무 적용 가능성을 면밀히 검증합니다.',
              },
              {
                title: '쉽게 설명합니다',
                desc: '어려운 전문 용어 대신 비개발자와 현업 실무자가 즉시 이해할 수 있는 직관적인 언어로 전달합니다.',
              },
              {
                title: '문제를 먼저 찾습니다',
                desc: '기술 도입 자체에 매몰되지 않고, 현업의 병목과 비효율이 발생하는 진짜 문제 지점부터 정확히 진단합니다.',
              },
              {
                title: '결과로 증명합니다',
                desc: '단순한 이론 강의에 그치지 않고 실제 업무 시간 단축과 가시적인 자동화 결과물로 효과를 입증합니다.',
              },
              {
                title: '책임 있는 AI를 추구합니다',
                desc: '기업 데이터 보안과 개인정보를 철저히 보호하며 사람이 중심이 되어 최종 검증하는 안전한 시스템을 만듭니다.',
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5F9] p-5 rounded-[12px] border border-gray-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 bg-white text-[#0A5EDD] rounded-full flex items-center justify-center font-bold text-xs mb-3 border border-gray-200 shadow-ds-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-[#1F2937] text-sm mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTASection */}
      <CTASection />
    </div>
  );
};
