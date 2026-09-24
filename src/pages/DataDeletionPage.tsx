import React, { useState } from 'react';
import { COMPANY_INFO } from '../theme/tokens';
import { Trash2, ArrowLeft, Mail, Phone, Clock, ShieldCheck, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Link } from '../router/Link';

export const DataDeletionPage: React.FC = () => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [deletionScope, setDeletionScope] = useState('all');
  const [reason, setReason] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!applicantName.trim() || !applicantEmail.trim()) {
      setErrorMsg('신청자 성명과 이메일 주소는 필수 입력 사항입니다.');
      return;
    }

    if (!agreed) {
      setErrorMsg('데이터 삭제 요청 처리를 위한 본인 확인 및 처리에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);

    // Prepare mailto or direct submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div id="data-deletion-page" className="w-full bg-white">
      {/* 1. Header Banner */}
      <section className="bg-[#F1F5F9] border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <Trash2 className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>USER DATA DELETION</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1F2937]">
            사용자 데이터 삭제 안내
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
            AIFORIX(에이포릭스)는 이용자의 개인정보 자기결정권을 적극 보장합니다. 수집된 상담 내역 및 개인정보 삭제 방법과 절차를 투명하게 안내해 드립니다.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#9CA3AF]">
            <span>시행일자: 2025년 1월 1일</span>
            <span>·</span>
            <span>최종 갱신: 2025년 1월 1일</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Quick Nav Bar */}
          <div className="p-4 bg-[#F8FAFC] border border-gray-200 rounded-[12px] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold text-[#1F2937]">관련 정책 바로가기:</span>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/privacy" className="text-[#0A5EDD] hover:underline font-semibold">
                개인정보처리방침 &rarr;
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms" className="text-[#0A5EDD] hover:underline font-semibold">
                서비스 이용약관 &rarr;
              </Link>
            </div>
          </div>

          {/* 3 Step Process Cards */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1F2937] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0A5EDD]" />
              <span>데이터 삭제 신청 및 처리 절차</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-5 shadow-ds-sm space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-bold text-[#1F2937] text-sm">삭제 신청 접수</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  이메일, 대표 전화 또는 본 페이지의 온라인 삭제 신청 폼을 통해 본인 확인 정보와 함께 삭제를 요청합니다.
                </p>
              </div>

              <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-5 shadow-ds-sm space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-bold text-[#1F2937] text-sm">본인 확인 및 데이터 조회</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  접수된 신청 정보(이메일, 연락처)와 사내 데이터베이스의 문의·상담 기록 일치 여부를 즉시 검증합니다.
                </p>
              </div>

              <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-5 shadow-ds-sm space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-bold text-[#1F2937] text-sm">영구 파기 및 결과 통보</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  영구 삭제(재생 불가 처리) 완료 후, 영업일 기준 3일 이내에 신청자 이메일 또는 문자로 완료 결과를 안내합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Policy Specifications */}
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[16px] p-6 sm:p-10 shadow-ds-sm space-y-6 text-sm text-[#4B5563] leading-relaxed">
            <div>
              <h3 className="text-base font-bold text-[#1F2937] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A5EDD]" />
                삭제 대상 데이터의 종류
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li>웹사이트 문의(Contact Form)를 통해 제출된 성명, 회사명, 이메일, 전화번호</li>
                <li>교육, 컨설팅, 업무 자동화, 솔루션 개발 등 상담을 위해 전송된 상담 문의 본문 내역</li>
                <li>상담 과정에서 교환된 제안서 송수신 이력 및 메일 커뮤니케이션 데이터</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1F2937] mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0A5EDD]" />
                처리 소요 기간
              </h3>
              <p className="text-xs sm:text-sm bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                삭제 요청 접수일로부터 <strong>영업일 기준 최대 3영업일(72시간) 이내</strong>에 영구 삭제 처리되며, 법령상 의무 보관 대상이 아닌 모든 데이터는 즉시 복구 불가능한 방식으로 파기됩니다.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1F2937] mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                관계 법령에 따른 예외 보관 기준
              </h3>
              <p className="text-xs sm:text-sm mb-2">
                이용자가 삭제를 요청하더라도, 상법 및 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련 법령에 의해 보존 의무가 부과된 아래 항목은 법정 보관 기간 경과 후 파기됩니다:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm bg-white p-4 rounded-[8px] border border-gray-200 shadow-ds-sm">
                <li>계약서 또는 청약철회 등에 관한 기록: <strong>5년</strong></li>
                <li>대금결제 및 재화·용역의 공급에 관한 기록: <strong>5년</strong></li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: <strong>3년</strong></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0A5EDD]" />
                데이터 삭제 전담 창구 및 연락처
              </h3>
              <div className="bg-white p-5 rounded-[12px] border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm shadow-ds-sm">
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">책임자</span>
                  <span className="font-bold text-[#1F2937]">{COMPANY_INFO.representative} 대표 (개인정보 보호책임자)</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">소속</span>
                  <span className="font-bold text-[#1F2937]">{COMPANY_INFO.name} ({COMPANY_INFO.nameKo})</span>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">이메일 접수</span>
                  <a href={`mailto:${COMPANY_INFO.email}?subject=[데이터삭제요청]`} className="font-bold text-[#0A5EDD] hover:underline flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block text-xs mb-0.5">유선 접수</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#0A5EDD] hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Online Data Deletion Request Form */}
          <div className="bg-white border-2 border-[#0A5EDD]/30 rounded-[16px] p-6 sm:p-10 shadow-ds-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-extrabold text-[#1F2937]">
                온라인 데이터 삭제 신청 폼
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4B5563] mb-6">
              아래 양식을 작성해 주시면 개인정보 보호책임자가 즉시 확인 후 데이터베이스 내 모든 기록을 안전하게 영구 파기합니다.
            </p>

            {submitted ? (
              <div className="p-8 bg-[#E6F0FF] border border-[#0A5EDD]/30 rounded-[12px] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#0A5EDD] text-white flex items-center justify-center mx-auto shadow-ds-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#1F2937]">
                  데이터 삭제 요청이 정상적으로 접수되었습니다
                </h4>
                <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  신청하신 이메일(<strong>{applicantEmail}</strong>)로 접수 확인 안내가 발송되며, 영업일 기준 3일 이내에 영구 파기 완료 통보를 전달해 드립니다.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setApplicantName('');
                      setApplicantEmail('');
                      setApplicantPhone('');
                      setReason('');
                      setAgreed(false);
                    }}
                    className="text-xs font-bold text-[#0A5EDD] hover:underline"
                  >
                    새로운 삭제 요청 작성하기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-[8px] text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                      신청자 성명 (담당자명) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="예: 홍길동"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#0A5EDD] focus:ring-1 focus:ring-[#0A5EDD]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                      문의 시 등록했던 이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="예: contact@example.com"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#0A5EDD] focus:ring-1 focus:ring-[#0A5EDD]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                      문의 시 등록했던 연락처
                    </label>
                    <input
                      type="tel"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="예: 010-1234-5678"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#0A5EDD] focus:ring-1 focus:ring-[#0A5EDD]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                      삭제 요청 범위
                    </label>
                    <select
                      value={deletionScope}
                      onChange={(e) => setDeletionScope(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#0A5EDD] focus:ring-1 focus:ring-[#0A5EDD] bg-white"
                    >
                      <option value="all">전체 데이터 영구 삭제 (개인정보 및 모든 상담 기록)</option>
                      <option value="inquiry">문의 및 상담 기록만 삭제</option>
                      <option value="marketing">이메일/연락처 정보만 파기</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                    삭제 사유 (선택 사항)
                  </label>
                  <textarea
                    rows={3}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="삭제를 희망하시는 사유가 있으시다면 남겨주세요 (서비스 개선에 소중히 반영하겠습니다)."
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#0A5EDD] focus:ring-1 focus:ring-[#0A5EDD]"
                  />
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#0A5EDD] focus:ring-[#0A5EDD]"
                    />
                    <span className="text-xs text-[#4B5563] leading-relaxed">
                      본인 확인 및 데이터베이스 내 개인정보 영구 파기 처리에 동의합니다. 삭제 처리 후에는 기존 상담 이력의 복구가 불가능함을 확인하였습니다.
                    </span>
                  </label>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#0A5EDD] text-white text-xs sm:text-sm font-bold hover:bg-[#08225C] transition-colors shadow-ds-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>처리 중...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>데이터 삭제 신청 제출</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Navigation links */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#4B5563] hover:text-[#1F2937]">
              <ArrowLeft className="w-4 h-4" />
              <span>메인 홈으로 돌아가기</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs sm:text-sm font-bold text-[#0A5EDD] hover:underline">
                개인정보처리방침
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/terms" className="text-xs sm:text-sm font-bold text-[#0A5EDD] hover:underline">
                서비스 이용약관
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
