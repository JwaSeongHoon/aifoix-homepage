import React from 'react';
import { COMPANY_INFO } from '../theme/tokens';
import { ShieldCheck, ArrowLeft, Mail, Phone } from 'lucide-react';
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
            AIFORIX(에이포릭스)는 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 엄격히 준수하며, 안전하게 개인정보를 처리하고 있습니다.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#9CA3AF]">
            <span>공고일자: 2025년 1월 1일</span>
            <span>·</span>
            <span>시행일자: 2025년 1월 1일</span>
          </div>
        </div>
      </section>

      {/* 2. Policy Main Body */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Nav Bar */}
          <div className="mb-8 p-4 bg-[#F8FAFC] border border-gray-200 rounded-[12px] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#1F2937]">관련 안내 바로가기:</span>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/terms" className="text-[#0A5EDD] hover:underline font-semibold">
                서비스 이용약관 &rarr;
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/data-deletion" className="text-[#0A5EDD] hover:underline font-semibold">
                사용자 데이터 삭제 안내 &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[16px] p-6 sm:p-10 shadow-ds-sm space-y-8 text-sm text-[#4B5563] leading-relaxed">
            
            {/* 개요 */}
            <div className="border-b border-gray-200 pb-6">
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                AIFORIX(이하 &ldquo;회사&rdquo;)는 정보주체의 개인정보를 소중하게 생각하며, 「개인정보 보호법」 제30조 및 관계 법령에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
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
                <li><strong>문의 및 상담 응대:</strong> AI 맞춤 교육, 기업 컨설팅, 업무 자동화 구축, 솔루션 개발 등 고객 문의 접수, 본인 확인, 사실 확인 및 견적·제안 회신</li>
                <li><strong>비즈니스 커뮤니케이션:</strong> 상담 일정 조율, 교육 커리큘럼 및 기술 제안서 전달, 서비스 관련 공지 및 중요 안내</li>
                <li><strong>계약 체결 및 이행:</strong> 프로젝트 및 교육 계약의 체결, 이행 및 정산 관련 연락 업무</li>
              </ul>
            </div>

            {/* 제2조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                제2조 (수집하는 개인정보 항목 및 수집 방법)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사는 고객 문의 접수 및 서비스 제공을 위해 아래와 같은 개인정보 항목을 수집합니다.
              </p>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-3 shadow-ds-sm">
                <div>
                  <div className="font-bold text-[#1F2937] mb-1">1. 수집 항목</div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>필수 항목:</strong> 성명(담당자명), 연락처(휴대전화번호), 이메일 주소, 회사(기관)명, 문의 내용</li>
                    <li><strong>선택 항목:</strong> 직책/부서, 희망 일정, 인원 규모, 자동화 대상 업무 세부 정보, 예산 범위</li>
                    <li><strong>서비스 이용 과정에서 자동 생성되는 항목:</strong> 접속 IP 정보, 쿠키(Cookie), 서비스 이용 기록, 접속 로그</li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <div className="font-bold text-[#1F2937] mb-1">2. 수집 방법</div>
                  <p>
                    웹사이트 내 문의하기(Contact Form)를 통한 이용자의 직접 입력 및 전송, 이메일/유선 전화를 통한 상담 신청
                  </p>
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
                회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 법정 기간 동안 안전하게 분리 보관합니다.
              </p>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-2 shadow-ds-sm">
                <p><strong>- 웹사이트 문의 및 상담 이력:</strong> 목적 달성 후 <strong>1년간</strong> 보관 (원활한 후속 상담 이력 확인 및 분쟁 예방 목적)</p>
                <p><strong>- 계약 또는 청약철회 등에 관한 기록:</strong> <strong>5년</strong> (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                <p><strong>- 대금결제 및 재화 등의 공급에 관한 기록:</strong> <strong>5년</strong> (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                <p><strong>- 소비자의 불만 또는 분쟁처리에 관한 기록:</strong> <strong>3년</strong> (전자상거래 등에서의 소비자보호에 관한 법률)</p>
                <p><strong>- 웹사이트 방문 기록(접속 로그):</strong> <strong>3개월</strong> (통신비밀보호법)</p>
                <p className="text-[#0A5EDD] font-semibold pt-1">
                  * 정보주체는 보관 기간 중이라도 언제든지 즉시 삭제를 요구할 수 있으며, 이 경우 회사는 지체 없이 파기합니다.
                </p>
              </div>
            </div>

            {/* 제4조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                제4조 (개인정보의 제3자 제공 및 처리 위탁)
              </h2>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-2.5 shadow-ds-sm">
                <div>
                  <strong className="text-[#1F2937]">1. 제3자 제공:</strong>
                  <p className="mt-0.5">회사는 정보주체의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에 한하여 제공합니다.</p>
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <strong className="text-[#1F2937]">2. 처리 위탁:</strong>
                  <p className="mt-0.5">회사는 원칙적으로 고객의 개인정보 처리 업무를 외부에 위탁하지 않습니다. 향후 안정적인 서비스 제공을 위해 위탁이 필요한 경우, 위탁 대상자와 위탁 업무 내용을 본 방침을 통해 사전 공개하고 동의를 받겠습니다.</p>
                </div>
              </div>
            </div>

            {/* 제5조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                제5조 (개인정보의 파기 절차 및 방법)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 경우 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <div className="bg-white p-4 rounded-[8px] border border-gray-200 text-xs sm:text-sm text-[#4B5563] space-y-2 shadow-ds-sm">
                <p><strong>- 파기 절차:</strong> 이용자가 입력한 정보는 목적 달성 후 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.</p>
                <p><strong>- 전자적 파일:</strong> 재생할 수 없는 기술적 방법(영구 삭제 및 복구 불가 처리)을 사용하여 안전하게 삭제합니다.</p>
                <p><strong>- 종이 문서:</strong> 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
              </div>
            </div>

            {/* 제6조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">6</span>
                제6조 (정보주체의 권리·의무 및 행사 방법)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                정보주체는 회사에 대해 언제든지 다음 각 호의 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-xs sm:text-sm text-[#4B5563] mb-3 bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구 (파기 신청)</li>
                <li>처리 정지 요구</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                권리 행사는 회사 대표 이메일(<a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0A5EDD] font-semibold underline">{COMPANY_INFO.email}</a>) 또는 유선 전화(<a href={`tel:${COMPANY_INFO.phone}`} className="text-[#0A5EDD] font-semibold underline">{COMPANY_INFO.phone}</a>)를 통해 요청하실 수 있으며, 별도 마련된 <Link to="/data-deletion" className="text-[#0A5EDD] font-semibold underline">[데이터 삭제 안내 페이지]</Link>를 통해서도 간편하게 신청하실 수 있습니다. 회사는 본인 확인 절차를 거친 후 지체 없이 조치합니다.
              </p>
            </div>

            {/* 제7조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">7</span>
                제7조 (개인정보의 안전성 확보 조치)
              </h2>
              <p className="mb-2 text-xs sm:text-sm text-[#4B5563]">
                회사는 개인정보 보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적 및 물리적 조치를 취하고 있습니다.
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#4B5563] bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li><strong>관리적 조치:</strong> 내부관리계획 수립 및 시행, 정기적인 임직원 보안 교육 실시</li>
                <li><strong>기술적 조치:</strong> 개인정보처리시스템 접근 권한 관리, 보안서버(SSL/TLS 암호화 통신) 구축, 침입차단시스템 운용</li>
                <li><strong>물리적 조치:</strong> 자료 보관실 및 전산실 등의 비인가자 접근 통제</li>
              </ul>
            </div>

            {/* 제8조 */}
            <div>
              <h2 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">8</span>
                제8조 (개인정보 보호책임자 및 담당 부서)
              </h2>
              <p className="mb-3 text-xs sm:text-sm text-[#4B5563]">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              
              <div className="bg-white p-5 rounded-[12px] border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm shadow-ds-sm">
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">성명 / 직책</span>
                  <span className="font-bold text-[#1F2937]">{COMPANY_INFO.representative} (대표 / 개인정보 보호책임자)</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">소속</span>
                  <span className="font-bold text-[#1F2937]">{COMPANY_INFO.name} ({COMPANY_INFO.nameKo})</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">이메일</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#0A5EDD] hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">대표 전화</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#0A5EDD] hover:underline flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 p-4 bg-white rounded-[8px] border border-gray-200 text-xs text-[#4B5563] space-y-1">
                <p className="font-bold text-[#1F2937]">기타 개인정보 침해에 대한 신고나 상담이 필요한 기관:</p>
                <p>• 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</p>
                <p>• 대검찰청 사이버수사과 (spo.go.kr / 국번없이 1301)</p>
                <p>• 경찰청 사이버수사국 (ecrm.police.go.kr / 국번없이 182)</p>
                <p>• 개인정보분쟁조정위원회 (kopico.go.kr / 1833-6972)</p>
              </div>
            </div>

            {/* 제9조 */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-base font-bold text-[#1F2937] mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center text-xs font-bold shrink-0">9</span>
                제9조 (개인정보처리방침의 변경)
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563]">
                이 개인정보처리방침은 <strong>2025년 1월 1일</strong>부터 적용됩니다. 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 웹사이트 공지사항 또는 별도의 팝업을 통하여 고지할 것입니다.
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
              <Link to="/terms" className="text-xs sm:text-sm font-bold text-[#0A5EDD] hover:underline">
                서비스 이용약관
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
