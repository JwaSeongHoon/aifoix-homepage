import React from 'react';
import { COMPANY_INFO } from '../theme/tokens';
import { ShieldCheck } from 'lucide-react';
import { Link } from '../router/Link';

export const PrivacyPage: React.FC = () => {
  return (
    <div id="privacy-page" className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F1F5F9] border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>PRIVACY POLICY</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2937]">
            개인정보처리방침
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
            AIFORIX(아이포릭스)는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 엄격히 준수하며, 안전하게 개인정보를 처리하고 있습니다.
          </p>
        </div>
      </section>

      {/* 2. Policy Main Body */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[16px] p-6 sm:p-10 shadow-ds-sm space-y-8 text-sm text-[#4B5563] leading-relaxed">
            
            {/* 개요 */}
            <div className="border-b border-gray-200 pb-6">
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                AIFORIX(이하 &ldquo;회사&rdquo;)는 고객의 개인정보를 소중하게 생각하며, 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </p>
            </div>

            {/* 제1조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                제1조 (개인정보의 수집 및 이용 목적)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사는 다음의 목적을 위하여 최소한의 개인정보를 수집 및 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 관련 법률에 따라 별도의 사전 동의를 받는 등 필요한 조치를 이행합니다.
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#4B5563] bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li><strong>문의 및 상담 응대:</strong> 교육, 컨설팅, 자동화, 솔루션 구축 등 고객 문의 접수, 사실 확인 및 견적·제안 회신</li>
                <li><strong>커뮤니케이션:</strong> 상담 일정 조율, 교육 커리큘럼 제안서 전달 및 서비스 관련 안내</li>
              </ul>
            </div>

            {/* 제2조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                제2조 (수집하는 개인정보 항목)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사는 문의 접수 시점에 서비스 제공을 위해 필요한 최소한의 항목만을 수집합니다.
              </p>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-2 shadow-ds-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-bold text-[#1F2937] min-w-[90px]">수집 항목:</span>
                  <span>성명(담당자명), 연락처(전화번호), 이메일 주소, 회사(기관)명, 문의 내용(세부 요청사항)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span className="font-bold text-[#1F2937] min-w-[90px]">수집 방법:</span>
                  <span>웹사이트 문의하기 폼(Contact Form)을 통한 이용자의 직접 입력 및 전송</span>
                </div>
              </div>
            </div>

            {/* 제3조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                제3조 (개인정보의 보유 및 이용 기간)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 관련 법령에서 정한 기간 동안 보관합니다.
              </p>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-1.5 shadow-ds-sm">
                <p><strong>- 문의 및 상담 이력:</strong> 목적 달성 후 <strong>1년간</strong> 보관 (원활한 상담 이력 확인용)</p>
                <p><strong>- 즉시 파기 요청:</strong> 정보주체의 삭제 요청이 있을 경우 지체 없이 즉시 파기</p>
              </div>
            </div>

            {/* 제4조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                제4조 (개인정보의 제3자 제공 및 위탁)
              </h2>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-2 shadow-ds-sm">
                <p><strong>- 제3자 제공:</strong> 회사는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.</p>
                <p><strong>- 처리 위탁:</strong> 회사는 원칙적으로 고객의 개인정보 처리 업무를 외부에 위탁하지 않습니다.</p>
              </div>
            </div>

            {/* 제5조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                제5조 (정보주체의 권리·의무 및 행사 방법)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-[#4B5563] mb-3">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리정지 요구</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                권리 행사는 회사 대표 이메일(<a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0A5EDD] font-semibold underline">{COMPANY_INFO.email}</a>) 또는 유선 전화(<a href={`tel:${COMPANY_INFO.phone}`} className="text-[#0A5EDD] font-semibold underline">{COMPANY_INFO.phone}</a>)를 통해 요청하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
              </p>
            </div>

            {/* 제6조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
                제6조 (개인정보 보호책임자 및 담당 부서)
              </h2>
              <p className="mb-3 text-xs sm:text-sm text-[#4B5563]">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              
              <div className="bg-white p-5 rounded-[12px] border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm shadow-ds-sm">
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">성명 / 직책</span>
                  <span className="font-bold text-[#1F2937]">{COMPANY_INFO.representative} (대표 / 개인정보 보호책임자)</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">소속</span>
                  <span className="font-bold text-[#1F2937]">{COMPANY_INFO.name}</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">이메일</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#0A5EDD] hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">연락처</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#0A5EDD] hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* 제7조 */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
                제7조 (개인정보처리방침의 시행 및 변경)
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                이 개인정보처리방침은 <strong>2025년 1월 1일</strong>부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 웹사이트 공지사항을 통하여 고지할 것입니다.
              </p>
            </div>

          </div>

          {/* Contact Link */}
          <div className="mt-8 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A5EDD] hover:underline">
              문의하기 페이지로 돌아가기 &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
