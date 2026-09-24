import React from 'react';
import { COMPANY_INFO } from '../theme/tokens';
import { FileText, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from '../router/Link';

export const TermsPage: React.FC = () => {
  return (
    <div id="terms-page" className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F1F5F9] border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <FileText className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2937]">
            서비스 이용약관
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
            AIFORIX(에이포릭스)가 제공하는 AI 교육, 컨설팅, 업무 자동화 및 솔루션 개발 등 웹사이트 및 제반 서비스의 이용 조건과 권리·의무를 규정합니다.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#9CA3AF]">
            <span>공고일자: 2025년 1월 1일</span>
            <span>·</span>
            <span>시행일자: 2025년 1월 1일</span>
          </div>
        </div>
      </section>

      {/* 2. Terms Main Body */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Nav Bar */}
          <div className="mb-8 p-4 bg-[#F8FAFC] border border-gray-200 rounded-[12px] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#1F2937]">관련 정책 바로가기:</span>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/privacy" className="text-[#0A5EDD] hover:underline font-semibold">
                개인정보처리방침 &rarr;
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/data-deletion" className="text-[#0A5EDD] hover:underline font-semibold">
                사용자 데이터 삭제 안내 &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[16px] p-6 sm:p-10 shadow-ds-sm space-y-8 text-sm text-[#4B5563] leading-relaxed">
            
            {/* 제1조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                제1조 (목적)
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                본 약관은 AIFORIX(이하 &ldquo;회사&rdquo;)가 운영하는 공식 웹사이트(이하 &ldquo;사이트&rdquo;) 및 회사가 제공하는 AI 맞춤 교육, 컨설팅, 업무 자동화 구축, 솔루션 개발 등 일체의 B2B 서비스(이하 &ldquo;서비스&rdquo;)의 이용조건 및 절차, 회사와 이용자 간의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            {/* 제2조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                제2조 (용어의 정의)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-[#4B5563] bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li>
                  <strong>&ldquo;사이트&rdquo;</strong>란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래하거나 정보를 제공할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이트를 운영하는 회사의 의미로도 사용합니다.
                </li>
                <li>
                  <strong>&ldquo;이용자&rdquo;</strong>란 사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 열람하거나 문의 및 계약 상담 등을 수행하는 고객(개인 및 법인)을 말합니다.
                </li>
                <li>
                  <strong>&ldquo;서비스&rdquo;</strong>란 회사가 온·오프라인으로 제공하는 AI 교육, 컨설팅, 자동화 파이프라인 설계, 바이브코딩 개발 솔루션, 지식 콘텐츠 및 제반 부가 서비스를 포괄합니다.
                </li>
              </ul>
            </div>

            {/* 제3조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                제3조 (약관의 효력 및 개정)
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                <p>
                  1. 본 약관은 사이트 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.
                </p>
                <p>
                  2. 회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                </p>
                <p>
                  3. 회사가 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여 현행 약관과 함께 사이트의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
                </p>
              </div>
            </div>

            {/* 제4조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                제4조 (서비스의 내용 및 계약 체결)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사가 제공하는 주요 서비스의 내용은 다음과 같습니다:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2937]">AI 맞춤 교육:</strong>
                    <p className="text-[#4B5563] text-xs mt-0.5">기업·기관 대상 생성형 AI 활용, 프롬프트 엔지니어링, 바이브코딩 실무 교육</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2937]">AI 도입 컨설팅:</strong>
                    <p className="text-[#4B5563] text-xs mt-0.5">기업 AI 도입 타당성 검토, 비즈니스 프로세스 진단, 단계별 로드맵 수립</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2937]">AI 업무 자동화:</strong>
                    <p className="text-[#4B5563] text-xs mt-0.5">반복 수작업 및 현장 위험성평가, 서류 분석 등 업무 파이프라인 자동화</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5EDD] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F2937]">AI 솔루션 개발:</strong>
                    <p className="text-[#4B5563] text-xs mt-0.5">사내 보안 요구사항을 충족하는 맞춤형 AI 애플리케이션 및 시스템 구축</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-[#4B5563]">
                * 개별 교육 및 프로젝트 계약은 웹사이트 문의 접수 후 상호 협의된 별도의 견적서, 과업지시서 및 용역계약서에 따라 체결됩니다.
              </p>
            </div>

            {/* 제5조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                제5조 (이용자의 의무 및 금지행위)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                이용자는 다음 각 호의 행위를 하여서는 아니 됩니다:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#4B5563] bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li>문의 신청 또는 상담 시 허위 내용의 기재 및 타인의 정보 도용</li>
                <li>회사의 사이트 및 서비스에 게시된 정보의 무단 변경, 복제, 배포 및 상업적 이용</li>
                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>회사 또는 제3자의 저작권 등 지식재산권에 대한 침해 행위</li>
                <li>회사 또는 제3자의 명예를 훼손하거나 업무를 방해하는 행위</li>
                <li>외설적이거나 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</li>
              </ul>
            </div>

            {/* 제6조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
                제6조 (저작권의 귀속 및 권리 보호)
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                <p>
                  1. 회사가 작성한 저작물(강의 자료, 교육 커리큘럼, 웹사이트 디자인, 코드 및 지식 인사이트 리포트 등)에 대한 저작권 및 기타 지식재산권은 회사에 귀속합니다.
                </p>
                <p>
                  2. 이용자는 회사의 서비스를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                </p>
              </div>
            </div>

            {/* 제7조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
                제7조 (면책 조항)
              </h2>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-2 shadow-ds-sm">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p>
                    3. 회사는 사이트에 게재된 제3자의 의견, 정보, 자료 등의 신뢰도 및 정확성에 관하여는 회사의 고의 또는 중과실이 없는 한 책임을 지지 않습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 제8조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">8</span>
                제8조 (분쟁의 해결 및 관할 법원)
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                <p>
                  1. 회사와 이용자는 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 다하여야 합니다.
                </p>
                <p>
                  2. 제1항의 노력에도 불구하고 분쟁이 해결되지 않을 경우, 대한민국 법령을 적용하며 민사소송법상 관할 법원에 소를 제기할 수 있습니다.
                </p>
              </div>
            </div>

            {/* 부칙 */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-2">
                부칙
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                본 약관은 <strong>2025년 1월 1일</strong>부터 시행됩니다.
              </p>
            </div>

          </div>

          {/* Navigation links */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4B5563] hover:text-[#1F2937]">
              <ArrowLeft className="w-4 h-4" />
              <span>메인 홈으로 돌아가기</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs sm:text-sm font-bold text-[#0A5EDD] hover:underline">
                개인정보처리방침
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/data-deletion" className="text-xs sm:text-sm font-bold text-[#0A5EDD] hover:underline">
                데이터 삭제 안내
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
