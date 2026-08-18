import React from 'react';
import { Link } from '../router/Link';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { CTASection } from '../components/common/CTASection';
import { cases } from '../data/cases';
import { 
  Cpu, 
  Workflow, 
  FileSpreadsheet, 
  Receipt, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Info
} from 'lucide-react';

export const AutomationPage: React.FC = () => {
  const automationCases = cases.filter((c) => c.분야 === '자동화').slice(0, 3);

  const domains = [
    {
      title: 'n8n 워크플로우 (vibe n8n)',
      badge: '노코드 오케스트레이션',
      icon: <Workflow className="w-5 h-5" />,
      desc: '웹훅 트리거, 데이터 변환, AI Agent 노드, 사내 지식 RAG 및 외부 도구 MCP 연계까지 복잡한 비즈니스 로직을 자동화합니다.',
      features: [
        '자연어로 설명하면 n8n JSON 코드를 자동 생성하는 vibe n8n',
        '다양한 SaaS 툴(Slack, Gmail, Notion, CRM) 실시간 데이터 동기화',
        '상황별 분기 조건 처리 및 예외 알림 워크플로우',
      ],
    },
    {
      title: 'VBA / Apps Script 자동화',
      badge: '오피스 업무 고속화',
      icon: <FileSpreadsheet className="w-5 h-5" />,
      desc: '엑셀 매크로, 구글 스프레드시트 스크립트, 대량 이메일 발송 및 템플릿 문서 일괄 생성을 비개발자도 즉시 실행할 수 있도록 구축합니다.',
      features: [
        '복잡한 엑셀 수식·피벗 테이블 원클릭 데이터 가공',
        '구글 드라이브 및 스프레드시트 기반 실시간 팀 공유 파이프라인',
        '명찰 3만 장, 대량 맞춤 안내장 등 수작업 대비 수백 배 속도 개선',
      ],
    },
    {
      title: '파일/경비 처리 AI 에이전트',
      badge: '회계·총무 무인화',
      icon: <Receipt className="w-5 h-5" />,
      desc: '영수증, 인보이스, 세금계산서 OCR 판독 및 비용 항목 자동 분류, 전표 생성 및 결재 승인 워크플로우를 자동화합니다.',
      features: [
        '비정형 영수증/인보이스 이미지의 핵심 데이터(공급가, 부가세, 품목) 자동 추출',
        '사내 회계 계정 코드 자동 매칭 및 오류 검증',
        '결재선 자동 지정 및 승인 상태 실시간 알림',
      ],
    },
    {
      title: '문서 생성 파이프라인',
      badge: '지능형 문서화',
      icon: <FileText className="w-5 h-5" />,
      desc: '회의 녹취록 기반 회의록 요약, 요구사항 정의서(PRD), 제안서 초안, 위험성평가표 자동 생성을 원스톱으로 처리합니다.',
      features: [
        '음성 회의록에서 결정 사항 및 액션 아이템 자동 추출',
        '역질문법 기반 100페이지 이상 대규모 제안서 구조화',
        '표준 서식에 맞춘 고품질 보고서 및 슬라이드 원클릭 출력',
      ],
    },
  ];

  return (
    <div id="automation-page" className="w-full">
      {/* 1. Header Hero */}
      <section className="relative bg-[#F1F5F9] py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <Cpu className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>AI AUTOMATION SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            AIFORIX AI 업무 자동화
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl font-bold text-[#0A5EDD] tracking-tight">
            &ldquo;반복 업무의 무인화와 실시간 처리&rdquo;
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            단순 입력과 수작업 취합에 낭비되던 시간을 제로로 만들고, 임직원이 더 가치 있는 판단과 창의적 업무에 집중하도록 돕습니다.
          </p>

          <div className="mt-8">
            <Link to="/contact?type=automation">
              <PrimaryButton size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                자동화 구축 문의하기
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 효율 수치 기준 안내 바 */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-4 sm:p-5 flex items-center gap-3 text-center sm:text-left shadow-ds-sm">
            <Info className="w-5 h-5 text-[#0A5EDD] shrink-0 mx-auto sm:mx-0" />
            <p className="text-xs sm:text-sm font-semibold text-[#1F2937]">
              모든 효율 수치는 자동화로 줄일 수 있는 시간만 계산한 <span className="text-[#0A5EDD] underline underline-offset-2">정직한 Work hour</span> 기준입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 4대 자동화 영역 카드 */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="AUTOMATION DOMAINS"
            title="4대 핵심 자동화 영역"
            subtitle="기업의 업무 환경과 시스템 인프라에 맞춘 최적의 자동화 파이프라인을 구축합니다."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-7 shadow-ds-sm hover:border-[#0A5EDD]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-white border border-gray-200 text-[#0A5EDD] flex items-center justify-center font-bold shadow-ds-sm">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2.5 py-1 rounded-full">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5EDD] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 관련 사례 카드 (자동화 분야 3개) */}
      <section className="py-16 md:py-20 bg-[#F1F5F9] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="AUTOMATION CASES"
            title="실제 업무 자동화 구축 사례"
            subtitle="현장에서 검증된 AIFORIX의 자동화 성과를 확인하세요."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationCases.map((c) => (
              <div
                key={c.slug}
                className="bg-white rounded-[12px] border border-gray-200 p-6 shadow-ds-sm flex flex-col justify-between hover:border-[#0A5EDD]/40 hover:shadow-ds-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2 py-0.5 rounded-md">
                      효율 {c.효율}
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
                      <span className="text-[#0A5EDD] block text-[10px]">도입 후</span>
                      <span className="font-bold text-[#0A5EDD]">{c.after}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 mb-4">
                    {c.요약}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {c.도구.map((tool, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-[#F1F5F9] text-[#0A5EDD] px-1.5 py-0.5 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Link to="/portfolio" className="text-xs font-bold text-[#0A5EDD] hover:underline flex items-center gap-0.5">
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
        title="사내 반복 업무를 AI로 자동화하세요"
        subtitle="현재 수작업으로 소요되는 시간과 프로세스를 남겨주시면 최적의 자동화 방안을 제안해 드립니다."
        buttonText="자동화 구축 문의하기"
        buttonTarget="/contact"
      />
    </div>
  );
};
