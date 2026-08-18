import React, { useState } from 'react';
import { Link } from '../router/Link';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  TrendingUp
} from 'lucide-react';

interface CurriculumStep {
  step: string;
  title: string;
  hours: string;
  target: string;
  tools: string[];
  summary: string;
  details: string[];
}

export const EducationPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps: CurriculumStep[] = [
    {
      step: 'STEP 1',
      title: '생성형 AI 활용',
      hours: '8시간',
      target: '전 직원 기초',
      tools: ['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'NotebookLM'],
      summary: '도구별 특성 이해 및 프롬프트 엔지니어링 기초, 업무 문서·콘텐츠 실습, 안전한 AI 활용 가이드라인',
      details: [
        '주요 생성형 AI 도구 비교 및 장단점 파악 (ChatGPT · Gemini · Claude · Perplexity · NotebookLM)',
        '프롬프트 엔지니어링 핵심 기법 (PTCF 프레임워크 · 컨텍스트 주입 · 메타 프롬프트 설계)',
        '실무 보고서 초안 작성, 보도자료, 마케팅 문구, 회의록 요약 실습',
        '기업 데이터 보안 및 안전한 AI 활용 수칙 (환각 방지 및 사내 정보 보호)',
      ],
    },
    {
      step: 'STEP 2',
      title: 'Google AI · Workspace',
      hours: '16시간',
      target: '협업 · 문서 실무',
      tools: ['Gemini', 'NotebookLM', 'Google Docs', 'Sheets', 'Meet', 'Calendar'],
      summary: 'Gemini·NotebookLM 기반 자료수집→분석→초안→완성 파이프라인, Docs·Sheets 협업, 환각 검토·마스킹 보안',
      details: [
        'NotebookLM 기반 사내 방대한 레퍼런스 및 PDF 문서 심층 분석과 Q&A',
        'Gemini 연계 실시간 자료수집 → 구조화 분석 → 1차 초안 → 최종 완성 4단계 워크플로우',
        'Google Docs, Sheets, Meet, Calendar 연동 스마트 협업 프로세스',
        '생성 결과물의 환각(Hallucination) 검토 기법 및 민감 정보 마스킹 보안 실무',
      ],
    },
    {
      step: 'STEP 3',
      title: 'AI 바이브 코딩 (Vibe Coding)',
      hours: '8시간',
      target: '업무 혁신 실무자',
      tools: ['AI Studio Build', 'PRD Framework', 'n8n 맛보기'],
      summary: '코딩 없이 대화로 업무앱 제작 — PRD 작성→메타 프롬프트 변환 5단계, 데이터 분석·대시보드 앱, AI 에이전트 연계',
      details: [
        '자연어 대화로 소프트웨어를 구현하는 바이브 코딩(Vibe Coding) 패러다임',
        '사내 업무 Pain point를 해결하는 PRD(제품 요구사항 정의서) 작성법',
        'PRD를 고성능 메타 프롬프트로 변환하는 5단계 공식',
        '실무 데이터 분석기, 통계 대시보드 웹 애플리케이션 즉시 제작 및 배포 실습',
        'AI 에이전트 및 n8n 워크플로우 연동 기초 실습',
      ],
    },
    {
      step: 'STEP 4',
      title: 'n8n 업무자동화',
      hours: '8시간',
      target: '반복 업무 부서',
      tools: ['n8n', 'JSON', 'AI Agent Node', 'RAG Node', 'MCP'],
      summary: 'JSON 구조 이해, 트리거·데이터 가공·AI Agent·RAG·MCP 노드 연계, 생성형 AI로 n8n JSON을 생성하는 vibe n8n 실전',
      details: [
        '노코드 워크플로우 자동화 엔진 n8n 기본 구조 및 JSON 데이터 처리 이해',
        '트리거(웹훅, 이메일, 스케줄)와 데이터 변환 노드 실무 구성',
        'n8n 내부 AI Agent 노드, RAG 지식 검색, MCP(Model Context Protocol) 연동',
        '생성형 AI에게 원하는 자동화를 설명하여 n8n JSON 코드를 원클릭 생성하는 vibe n8n 실전',
      ],
    },
    {
      step: 'STEP 5',
      title: 'Claude Code 실전',
      hours: '16시간',
      target: '핵심 인재 심화',
      tools: ['Claude Code', 'CLAUDE.md', 'Slash Commands', 'Hooks', 'Sub-agents'],
      summary: 'CLAUDE.md·슬래시 커맨드·Hook·서브에이전트·MCP, 기획→개발→배포로 사내 업무앱 1개 완성',
      details: [
        '터미널 기반 최첨단 AI 코딩 도구 Claude Code 환경 구축 및 프로젝트 설정',
        '프로젝트 헌장 CLAUDE.md 작성, 커스텀 슬래시 커맨드 및 Hook 구성',
        '특정 역할별 서브에이전트(Sub-agent) 분업 체계 및 외부 툴 MCP 연동',
        '실제 현업 과제를 기획서부터 프론트/백엔드 개발, 최종 배포까지 진행하여 완동되는 업무앱 1개 완성',
      ],
    },
  ];

  const educationDomains = [
    '생성형 AI 리터러시',
    '프롬프트 엔지니어링',
    'Google Workspace & Gemini',
    '바이브 코딩(Vibe Coding)',
    'n8n 워크플로우 자동화',
    'Claude Code 실전 앱 개발',
    '사내 AI 보안 & 데이터 거버넌스',
    '기업 맞춤형 PBL 문제 해결',
  ];

  return (
    <div id="education-page" className="w-full">
      {/* 1. Header Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>AI EDUCATION SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            AIFORIX 맞춤형 AI 교육
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#0A5EDD] tracking-tight">
            단순 사용법 강의를 넘어, 현업 문제를 직접 해결하는 실무형 AI 역량을 만듭니다.
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            전사 임직원의 기초 리터러시부터 핵심 인재의 실무 애플리케이션 개발까지, 체계적인 5단계 표준 커리큘럼(총 56시간)을 제공합니다.
          </p>

          <div className="mt-8">
            <Link to="/contact?type=lecture">
              <PrimaryButton size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                강의 및 교육 문의하기
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 성장 경로 배너 */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-ds-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center shrink-0 shadow-ds-sm">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A5EDD] uppercase tracking-wider mb-1">
                  GROWTH ROADMAP
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1F2937] tracking-tight">
                  &ldquo;쓸 줄 아는 직원 → 만들 줄 아는 직원&rdquo;
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-md md:text-right leading-relaxed">
              AI에게 질문만 던지는 소비자를 넘어, 사내 반복 업무를 자동화하고 필요한 앱을 직접 제작하는 주도적 실무자로 도약합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 표준 커리큘럼 5과정 56시간 아코디언 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="STANDARD CURRICULUM"
            title="표준 커리큘럼 5과정 (총 56시간)"
            subtitle="기업의 AI 도입 목적과 수강 대상에 맞춰 단계별로 선택하거나 전 과정을 일괄 도입할 수 있습니다."
            align="center"
          />

          <div className="space-y-4">
            {steps.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-[12px] transition-all overflow-hidden ${
                    isOpen ? 'border-[#0A5EDD]/40 shadow-ds-sm bg-white' : 'border-gray-200 bg-[#F1F5F9]/50 hover:bg-[#F1F5F9]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-1 rounded-[6px]">
                          {item.step}
                        </span>
                        <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2 py-0.5 rounded-[6px] flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.hours}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#1F2937] text-base sm:text-lg">
                            {item.title}
                          </h3>
                          <span className="text-xs text-[#9CA3AF] font-medium hidden md:inline-block">
                            · {item.target}
                          </span>
                        </div>
                        <p className="text-xs text-[#4B5563] mt-1 line-clamp-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="text-[#9CA3AF] p-1">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#0A5EDD]" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 border-t border-gray-100 pt-4 bg-white">
                      {/* Tools */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        <span className="text-xs font-bold text-[#1F2937] mr-1">활용 도구:</span>
                        {item.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium bg-[#F1F5F9] text-[#0A5EDD] px-2.5 py-0.5 rounded-full border border-gray-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Detail points */}
                      <div className="space-y-2">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                            <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 맞춤화 안내 박스 */}
          <div className="mt-8 p-6 bg-[#F1F5F9] rounded-[12px] border border-gray-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#1F2937]">
                고객사 맞춤형 커리큘럼 설계
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                과정명과 실습 사례는 고객사 산업·업무 용어에 맞게 맞춤 설계됩니다. 5개 과정 일괄 도입 또는 선택 도입이 모두 가능합니다.
              </p>
            </div>
            <Link to="/contact?type=lecture" className="shrink-0">
              <PrimaryButton size="sm">
                맞춤 제안 요청
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. 주요 교육 분야 태그 목록 */}
      <section className="py-14 md:py-16 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            badge="AREAS OF EXPERTISE"
            title="주요 교육 분야"
            subtitle="조직의 디지털 전환 목적에 따라 유연하게 구성되는 전문 트랙입니다."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {educationDomains.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs sm:text-sm font-semibold text-[#1F2937] shadow-ds-sm hover:border-[#0A5EDD]/40 hover:text-[#0A5EDD] transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTASection */}
      <CTASection
        title="기업에 맞는 AI 교육 과정을 설계해 보세요"
        subtitle="사내 직무 분석을 바탕으로 가장 효과적인 교육 일정과 커리큘럼을 제안해 드립니다."
        buttonText="강의 문의하기"
        buttonTarget="/contact"
      />
    </div>
  );
};
