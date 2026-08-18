import React, { useState, useEffect } from 'react';
import { Card } from '../components/common/Card';
import { SectionTitle } from '../components/common/SectionTitle';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { OutlineButton } from '../components/common/OutlineButton';
import { COMPANY_INFO } from '../theme/tokens';
import { Link } from '../router/Link';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  GraduationCap, 
  Compass, 
  Layers, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDWcMswnO7uwBL5MtNhBqP2zFHHxsNiXQyChOfZerEJ9Lsf0Hf0kI_YI8gKTEJjaenEw/exec';

type InquiryType = 'lecture' | 'consulting' | 'solution' | 'general';

interface FormState {
  // Lecture fields
  company: string;
  contactName: string;
  phone: string;
  email: string;
  preferredDate: string;
  duration: string;
  location: string;
  targetAudience: string;
  expectedAttendees: string;
  topic: string;
  customTopic: string;
  budget: string;
  message: string;

  // Consulting fields
  industry: string;
  companySize: string;
  aiExperience: string;
  urgentProblem: string;
  targetDepartment: string;
  startDate: string;
  expectedOutcome: string;
  govSupport: string;

  // Solution fields
  targetTask: string;
  currentSystem: string;
  securityReq: string;
  expectedUsers: string;
  targetSchedule: string;
  coachingPreference: string;

  // Honeypot
  hp: string;
}

const initialFormState: FormState = {
  company: '',
  contactName: '',
  phone: '',
  email: '',
  preferredDate: '',
  duration: '2시간',
  location: '서울',
  targetAudience: '임직원',
  expectedAttendees: '10-30명',
  topic: '생성형 AI 활용',
  customTopic: '',
  budget: '',
  message: '',

  industry: '',
  companySize: '10~50명',
  aiExperience: '없음',
  urgentProblem: '',
  targetDepartment: '',
  startDate: '',
  expectedOutcome: '',
  govSupport: '상담 후 결정',

  targetTask: '',
  currentSystem: 'Excel',
  securityReq: '사내 데이터(보안 필수)',
  expectedUsers: '10~30명',
  targetSchedule: '1개월 이내',
  coachingPreference: '상담 후 결정',

  hp: '',
};

export const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InquiryType>('lecture');
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Parse URL query parameter on mount and when search params change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const typeParam = params.get('type');
      if (typeParam) {
        if (typeParam === 'automation' || typeParam === 'solution') {
          setActiveTab('solution');
        } else if (['lecture', 'consulting', 'general'].includes(typeParam)) {
          setActiveTab(typeParam as InquiryType);
        }
      }
    }
  }, []);

  const handleTabChange = (type: InquiryType) => {
    setActiveTab(type);
    setSubmitStatus('idle');
    setErrorMessage('');
    if (typeof window !== 'undefined') {
      const newUrl = `${window.location.pathname}?type=${type}`;
      window.history.replaceState({}, '', newUrl);
    }
  };

  const formatPhoneNumber = (val: string): string => {
    if (!val) return '';
    const digits = val.replace(/[^0-9]/g, '');
    if (!digits) return val.trim();

    if (digits.startsWith('02')) {
      if (digits.length <= 2) return digits;
      if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
      if (digits.length <= 9) return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
      return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
    } else if (
      digits.startsWith('01') ||
      digits.startsWith('07') ||
      digits.startsWith('05') ||
      digits.startsWith('03') ||
      digits.startsWith('04') ||
      digits.startsWith('06') ||
      digits.startsWith('08')
    ) {
      if (digits.length <= 3) return digits;
      if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      if (digits.length <= 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
    } else if (digits.length >= 7) {
      if (digits.length <= 8) return `${digits.slice(0, 4)}-${digits.slice(4)}`;
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
    }
    return val;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    // Check Honeypot
    if (formData.hp && formData.hp.trim() !== '') {
      return false;
    }

    if (!agreed) {
      setErrorMessage('개인정보 수집 및 이용에 동의해 주세요.');
      return false;
    }

    if (activeTab === 'lecture') {
      if (!formData.company.trim() || !formData.contactName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setErrorMessage('필수 항목(기관/회사명, 담당자, 연락처, 이메일)을 모두 입력해 주세요.');
        return false;
      }
    } else if (activeTab === 'consulting') {
      if (!formData.company.trim() || !formData.contactName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setErrorMessage('필수 항목(회사명, 담당자, 연락처, 이메일)을 모두 입력해 주세요.');
        return false;
      }
      if (!formData.urgentProblem.trim() || formData.urgentProblem.trim().length < 50) {
        setErrorMessage('가장 시급한 업무 문제를 최소 50자 이상 구체적으로 작성해 주세요.');
        return false;
      }
    } else if (activeTab === 'solution') {
      if (!formData.company.trim() || !formData.contactName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setErrorMessage('필수 항목(회사명, 담당자, 연락처, 이메일)을 모두 입력해 주세요.');
        return false;
      }
      if (!formData.targetTask.trim()) {
        setErrorMessage('자동화하고 싶은 업무 내용을 입력해 주세요.');
        return false;
      }
    } else if (activeTab === 'general') {
      if (!formData.contactName.trim() || !formData.email.trim() || !formData.message.trim()) {
        setErrorMessage('필수 항목(성함, 이메일, 문의 내용)을 모두 입력해 주세요.');
        return false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('올바른 이메일 주소 형식을 입력해 주세요.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formattedPhone = formatPhoneNumber(formData.phone) || formData.phone.trim();
      let dataPayload: Record<string, any> = {};

      if (activeTab === 'lecture') {
        dataPayload = {
          '기관/회사명': formData.company,
          '담당자': formData.contactName,
          '연락처': formattedPhone,
          '이메일': formData.email,
          '희망일시': formData.preferredDate,
          '강의시간': formData.duration,
          '장소': formData.location,
          '대상': formData.targetAudience,
          '인원': formData.expectedAttendees,
          '주제': formData.topic === '직접 입력' ? formData.customTopic : formData.topic,
          '예산': formData.budget,
          '요청사항': formData.message,
        };
      } else if (activeTab === 'consulting') {
        dataPayload = {
          '회사명': formData.company,
          '담당자': formData.contactName,
          '연락처': formattedPhone,
          '이메일': formData.email,
          '업종': formData.industry,
          '규모': formData.companySize,
          'AI경험': formData.aiExperience,
          '시급한문제': formData.urgentProblem,
          '희망부서': formData.targetDepartment,
          '시작시기': formData.startDate,
          '예산': formData.budget,
          '기대결과물': formData.expectedOutcome,
          '정부지원희망': formData.govSupport,
        };
      } else if (activeTab === 'solution') {
        dataPayload = {
          '회사명': formData.company,
          '담당자': formData.contactName,
          '연락처': formattedPhone,
          '이메일': formData.email,
          '대상업무': formData.targetTask,
          '현재시스템': formData.currentSystem,
          '보안요구': formData.securityReq,
          '사용자수': formData.expectedUsers,
          '일정': formData.targetSchedule,
          '예산': formData.budget,
          '직접개발희망': formData.coachingPreference,
        };
      } else if (activeTab === 'general') {
        dataPayload = {
          '성함': formData.contactName,
          '연락처': formattedPhone,
          '이메일': formData.email,
          '문의내용': formData.message,
        };
      }

      const payload = {
        type: activeTab,
        data: dataPayload,
        hp: formData.hp,
      };

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('success');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: '강의료는 얼마인가요?',
      a: '강의 시간, 인원, 장소, 주제 및 실습 환경에 따라 상이합니다. 문의 폼을 통해 상세 내용을 남겨주시면 기업 및 기관의 예산에 맞추어 정확한 견적서와 맞춤 커리큘럼을 신속히 안내해 드립니다.',
    },
    {
      q: '강의 자료도 제공되나요?',
      a: '네, 강의용 PPT 원본 또는 PDF, 실습용 템플릿과 프롬프트 가이드, 참고 링크 및 강의 후 복습을 위한 단계별 실무 가이드 문서를 함께 제공합니다.',
    },
    {
      q: '지방 강의도 가능한가요?',
      a: '네, 전국 어디든 출강이 가능합니다. 교통비(KTX 등 실비)는 별도 처리하거나 강의료에 포함하여 유연하게 협의하실 수 있습니다.',
    },
    {
      q: '온라인 강의도 진행하시나요?',
      a: '네, Zoom, Webex, Microsoft Teams, Google Meet 등 고객사에서 지정하시는 모든 화상회의 플랫폼을 통한 실시간 라이브 인터랙티브 강의가 가능합니다.',
    },
    {
      q: '강의 외에 컨설팅도 받을 수 있나요?',
      a: '네, AIFORIX는 교육·컨설팅·자동화·솔루션을 통합 제공합니다. 1회성 강의 후 사내 파일럿 프로젝트나 본 사업 컨설팅 및 구축으로 자연스럽게 연계하여 진행하는 사례가 많습니다.',
    },
    {
      q: '정부지원 훈련사업으로 진행할 수 있나요?',
      a: '네, 사업주훈련, S-OJT, AI 특화 공동훈련센터, 인재키움 프리미엄, 일학습병행 등과 연계하여 기업의 비용 부담을 최소화(또는 전액 무료)할 수 있는 방안을 함께 설계해 드립니다.',
    },
    {
      q: '학회·협회 명의 강의가 가능한가요?',
      a: '네, 한국AI서비스학회 AI사업본부장 자격 및 주요 공공기관 전문위원 자격으로 공문 발송 및 공식 출강 명의 지원이 가능합니다.',
    },
  ];

  return (
    <div id="contact-page" className="w-full bg-white">
      {/* 1. Header Hero */}
      <section className="bg-[#F1F5F9] border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 mb-2 text-xs font-extrabold text-[#0A5EDD] bg-white border border-[#0A5EDD]/20 rounded-full shadow-ds-sm">
            <Mail className="w-3.5 h-3.5 text-[#0A5EDD]" />
            <span>CONTACT &amp; INQUIRY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1F2937] tracking-tight leading-[1.2]">
            프로젝트 및 교육 문의하기
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            필요하신 분야를 선택해 상세 내용을 남겨주시면, 평일 영업시간 기준 <strong>4시간 이내</strong>에 신속히 1차 검토 의견과 함께 회신드립니다.
          </p>
        </div>
      </section>

      {/* 2. Contact Channels Summary */}
      <section className="py-3 sm:py-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Phone */}
            <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-3 sm:p-3.5 flex items-center gap-3.5 shadow-ds-sm">
              <div className="w-9 h-9 rounded-[8px] bg-white border border-gray-200 text-[#0A5EDD] flex items-center justify-center font-bold shrink-0 shadow-ds-sm">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#9CA3AF] font-semibold block">전화 직통 상담</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm sm:text-base font-bold text-[#1F2937] hover:text-[#0A5EDD] transition-colors font-mono">
                  {COMPANY_INFO.phone}
                </a>
                <span className="text-[10px] sm:text-[11px] text-[#4B5563] block">평일 09:00 - 18:00</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-3 sm:p-3.5 flex items-center gap-3.5 shadow-ds-sm">
              <div className="w-9 h-9 rounded-[8px] bg-white border border-gray-200 text-[#0A5EDD] flex items-center justify-center font-bold shrink-0 shadow-ds-sm">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#9CA3AF] font-semibold block">공식 이메일 접수</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs sm:text-sm font-bold text-[#1F2937] hover:text-[#0A5EDD] transition-colors truncate block">
                  {COMPANY_INFO.email}
                </a>
                <span className="text-[10px] sm:text-[11px] text-[#4B5563] block">제안서·견적서 상시 수신</span>
              </div>
            </div>

            {/* Response Promise */}
            <div className="bg-[#F1F5F9] border border-gray-200 rounded-[12px] p-3 sm:p-3.5 flex items-center gap-3.5 shadow-ds-sm">
              <div className="w-9 h-9 rounded-[8px] bg-white border border-gray-200 text-[#0A5EDD] flex items-center justify-center font-bold shrink-0 shadow-ds-sm">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] text-[#9CA3AF] font-semibold block">신속 응답 약속</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[11px] font-bold text-[#0A5EDD] bg-[#E6F0FF] px-2 py-0.5 rounded-[4px]">
                    4시간 이내 회신
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#4B5563] block mt-0.5">영업일 기준 전문 담당자 1:1 회신</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Inquiry Form Section */}
      <section className="pt-5 pb-12 sm:pt-6 sm:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-5">
            <button
              onClick={() => handleTabChange('lecture')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'lecture'
                  ? 'bg-[#0A5EDD] text-white shadow-ds-sm'
                  : 'bg-[#F1F5F9] text-[#4B5563] hover:bg-gray-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>강의 문의</span>
            </button>

            <button
              onClick={() => handleTabChange('consulting')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'consulting'
                  ? 'bg-[#6D28D9] text-white shadow-ds-sm'
                  : 'bg-[#F1F5F9] text-[#4B5563] hover:bg-gray-200'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>컨설팅 문의</span>
            </button>

            <button
              onClick={() => handleTabChange('solution')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'solution'
                  ? 'bg-[#B45309] text-white shadow-ds-sm'
                  : 'bg-[#F1F5F9] text-[#4B5563] hover:bg-gray-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>자동화·솔루션 문의</span>
            </button>

            <button
              onClick={() => handleTabChange('general')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'general'
                  ? 'bg-[#1F2937] text-white shadow-ds-sm'
                  : 'bg-[#F1F5F9] text-[#4B5563] hover:bg-gray-200'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>일반 문의</span>
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-[#F1F5F9] border border-gray-200 rounded-[16px] p-5 sm:p-8 shadow-ds-sm">
            {submitStatus === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center mx-auto shadow-ds-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937]">
                  문의가 정상적으로 접수되었습니다.
                </h3>
                <p className="text-sm sm:text-base text-[#4B5563] max-w-md mx-auto leading-relaxed">
                  평일 영업시간 기준 <strong>4시간 이내</strong>에 입력해주신 연락처 및 이메일로 1차 회신드리겠습니다.
                </p>
                <div className="pt-6 flex justify-center gap-4">
                  <OutlineButton
                    size="md"
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData(initialFormState);
                      setAgreed(false);
                    }}
                  >
                    추가 문의 작성하기
                  </OutlineButton>
                  <Link to="/">
                    <PrimaryButton size="md">
                      홈으로 돌아가기
                    </PrimaryButton>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="hp"
                    value={formData.hp}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* TAB 1: 강의 문의 */}
                {activeTab === 'lecture' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#0A5EDD]" />
                        <span>기업 및 기관 맞춤형 AI 강의 문의</span>
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-1">
                        출강 일정, 대상 및 희망 주제를 입력해주시면 맞춤형 커리큘럼 제안서를 송부해 드립니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          기관 / 회사명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="예: (주)한국제조, 서울대학교"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          담당자 성함 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="예: 홍길동 팀장"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="예: 010-1234-5678"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="예: contact@company.com"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          희망 일시
                        </label>
                        <input
                          type="text"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          placeholder="예: 2026년 9월 중순 / 미정"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          강의 시간
                        </label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        >
                          <option value="1시간">1시간 (특강/키노트)</option>
                          <option value="2시간">2시간 (기본 활용)</option>
                          <option value="3시간">3시간 (실습 중심)</option>
                          <option value="종일">종일 (6~8시간 몰입 워크숍)</option>
                          <option value="다회차/기타">다회차 과정 / 기타</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          장소
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        >
                          <option value="서울">서울</option>
                          <option value="경기/인천">경기 / 인천</option>
                          <option value="지방">지방 (전국 출강)</option>
                          <option value="온라인">온라인 (Zoom/Teams 등)</option>
                          <option value="미정">미정 / 협의</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          교육 대상
                        </label>
                        <select
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        >
                          <option value="임직원(전사)">전사 임직원</option>
                          <option value="실무자(직무별)">직무별 실무자 (기획/영업/안전/인사 등)</option>
                          <option value="경영진/리더십">경영진 및 부서장 리더십</option>
                          <option value="학생/일반인">학생 / 일반인</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          예상 인원
                        </label>
                        <select
                          name="expectedAttendees"
                          value={formData.expectedAttendees}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        >
                          <option value="10명 미만">10명 미만 (소그룹 집중)</option>
                          <option value="10-30명">10 ~ 30명 (표준 실습)</option>
                          <option value="30-50명">30 ~ 50명</option>
                          <option value="50명 이상">50명 이상 (대규모 강연)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                        희망 주제
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                      >
                        <option value="생성형 AI 활용">생성형 AI 실무 활용 &amp; 업무 생산성</option>
                        <option value="Google AI·Workspace">Google AI &amp; Workspace 스마트 워크</option>
                        <option value="AI 바이브 코딩">AI 바이브 코딩 (비개발자 맞춤 앱 개발)</option>
                        <option value="n8n 업무자동화">n8n 노코드/로코드 업무자동화 파이프라인</option>
                        <option value="Claude Code 실전">Claude Code 실전 에이전트 구축</option>
                        <option value="AI 보안과 책임 있는 활용">AI 보안과 책임 있는 활용 (거버넌스)</option>
                        <option value="직접 입력">직접 입력</option>
                      </select>

                      {formData.topic === '직접 입력' && (
                        <input
                          type="text"
                          name="customTopic"
                          value={formData.customTopic}
                          onChange={handleInputChange}
                          placeholder="희망하시는 교육 주제를 직접 입력해 주세요"
                          className="mt-2 w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          예산 규모 (선택)
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          placeholder="예: 기관 표준 강사료 기준 / 협의"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                        기타 요청사항
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="강의 시 특별히 강조하고 싶은 내용이나 실습 소프트웨어, 사전 질문 등을 자유롭게 적어주세요."
                        className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: 컨설팅 문의 */}
                {activeTab === 'consulting' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
                        <Compass className="w-5 h-5 text-[#6D28D9]" />
                        <span>AI 도입 및 훈련 로드맵 컨설팅 문의</span>
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-1">
                        기업의 현안 문제를 분석하고 5단계 표준 방법론 및 정부지원 훈련사업 연계를 진단해 드립니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          회사명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="예: (주)에이아이솔루션"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          담당자 성함 및 직책 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="예: 이영희 이사 / DX기획팀"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="예: 010-9876-5432"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="예: yhlee@company.com"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          업종
                        </label>
                        <input
                          type="text"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          placeholder="예: 제조, 유통, IT, 금융 등"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          기업 규모 (임직원 수)
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        >
                          <option value="10인 미만">10인 미만</option>
                          <option value="10~50인">10 ~ 50인</option>
                          <option value="50~100인">50 ~ 100인</option>
                          <option value="100~300인">100 ~ 300인</option>
                          <option value="300인 이상">300인 이상</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          사내 AI 도입 경험
                        </label>
                        <select
                          name="aiExperience"
                          value={formData.aiExperience}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        >
                          <option value="없음">전혀 없음 (처음 도입 검토)</option>
                          <option value="일부">일부 직원이 개별 유료 결제 사용 중</option>
                          <option value="활발히 사용 중">전사 또는 부서 단위로 활발히 사용 중</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-[#1F2937]">
                          가장 시급한 업무 문제 (Problem Definition) <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] text-[#9CA3AF]">
                          (최소 50자 / 현재 {formData.urgentProblem.length}자)
                        </span>
                      </div>
                      <textarea
                        name="urgentProblem"
                        rows={4}
                        value={formData.urgentProblem}
                        onChange={handleInputChange}
                        placeholder="어떤 부서에서 어떤 반복 업무나 데이터 정리 때문에 시간과 비용이 소모되고 있는지 최대한 구체적으로 작성해 주세요. (50자 이상)"
                        required
                        className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          AI 도입 희망 부서 / 업무
                        </label>
                        <input
                          type="text"
                          name="targetDepartment"
                          value={formData.targetDepartment}
                          onChange={handleInputChange}
                          placeholder="예: 고객지원팀 상담 이력 요약, 경영지원부 정산"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          희망 시작 시기
                        </label>
                        <input
                          type="text"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          placeholder="예: 2026년 4분기 내 / 즉시 가능"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          기대 결과물
                        </label>
                        <input
                          type="text"
                          name="expectedOutcome"
                          value={formData.expectedOutcome}
                          onChange={handleInputChange}
                          placeholder="예: 업무시간 50% 단축, 사내 RAG PoC 완성"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          정부지원 훈련사업 연계 희망
                        </label>
                        <select
                          name="govSupport"
                          value={formData.govSupport}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#6D28D9]"
                        >
                          <option value="예 (적극 희망)">예 (적극 희망 - 사업주훈련/S-OJT 등)</option>
                          <option value="아니오 (자체 예산)">아니오 (사내 자체 예산 진행)</option>
                          <option value="상담 후 결정">상담 후 지원 조건 검토 후 결정</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: 자동화·솔루션 문의 */}
                {activeTab === 'solution' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
                        <Layers className="w-5 h-5 text-[#B45309]" />
                        <span>AI 업무 자동화 &amp; 솔루션 구축 문의</span>
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-1">
                        n8n 파이프라인, AI Vision, 사내 RAG 지식 검색, 맞춤형 바이브코딩 앱 구축을 상담합니다.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          회사명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="예: (주)글로벌로지스"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          담당자 성함 및 직책 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="예: 박민수 부장"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          연락처 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="예: 010-3333-4444"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="예: mspark@company.com"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                        자동화 / 솔루션 구축 희망 업무 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="targetTask"
                        rows={4}
                        value={formData.targetTask}
                        onChange={handleInputChange}
                        placeholder="예: 수입 정산서 엑셀 100장을 매주 수작업 검토하는데, 이를 AI로 자동 대조 및 이상치 적발하고 싶습니다. / 사내 규정집 기반 챗봇 구축 등"
                        required
                        className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          현재 사용 중인 시스템 / 도구
                        </label>
                        <select
                          name="currentSystem"
                          value={formData.currentSystem}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        >
                          <option value="Excel (엑셀 파일)">Excel (로컬 엑셀 파일)</option>
                          <option value="Google Sheets">Google Sheets (스프레드시트)</option>
                          <option value="ERP / 그룹웨어 연동">사내 ERP / 그룹웨어 시스템</option>
                          <option value="기타 데이터베이스">PostgreSQL / MySQL 등 자체 DB</option>
                          <option value="기타">기타</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          데이터 보안 요구 수준
                        </label>
                        <select
                          name="securityReq"
                          value={formData.securityReq}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        >
                          <option value="사내 데이터(보안 필수)">사내 비공개 데이터 (외부 학습 차단 필수)</option>
                          <option value="클라우드 허용">클라우드 API 사용 가능</option>
                          <option value="온프레미스/폐쇄망">온프레미스 / 폐쇄망 환경 구축 필요</option>
                          <option value="상담 후 결정">상담 후 결정 / 모름</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          예상 사용자 수
                        </label>
                        <input
                          type="text"
                          name="expectedUsers"
                          value={formData.expectedUsers}
                          onChange={handleInputChange}
                          placeholder="예: 5~10명 / 전사 100명"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          희망 일정
                        </label>
                        <input
                          type="text"
                          name="targetSchedule"
                          value={formData.targetSchedule}
                          onChange={handleInputChange}
                          placeholder="예: 1개월 이내 PoC 완료"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          직원 직접 개발(코칭형) 희망
                        </label>
                        <select
                          name="coachingPreference"
                          value={formData.coachingPreference}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#B45309]"
                        >
                          <option value="상담 후 결정">상담 후 최적 방식 결정</option>
                          <option value="예 (교육+코칭형 내재화)">예 (사내 직원이 직접 구축·운영하도록 코칭)</option>
                          <option value="아니오 (완전 위탁 구축)">아니오 (AIFORIX 전담 턴키 구축)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: 일반 문의 */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-base font-bold text-[#1F2937] flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-[#1F2937]" />
                        <span>일반 문의 및 제휴 제안</span>
                      </h3>
                      <p className="text-xs text-[#9CA3AF] mt-1">
                        사업 제휴, 미디어 인터뷰, 기타 궁금하신 점을 자유롭게 남겨주세요.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          성함 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="성함을 입력해 주세요"
                          required
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="예: 010-1234-5678"
                          className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                        이메일 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="답변 받으실 이메일 주소를 입력해 주세요"
                        required
                        className="w-full bg-white border border-gray-200 rounded-[8px] px-3.5 py-2.5 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1F2937] mb-1.5">
                        문의 내용 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                        required
                        className="w-full bg-white border border-gray-200 rounded-[8px] p-3 text-xs sm:text-sm text-[#1F2937] focus:outline-hidden focus:border-[#0A5EDD]"
                      />
                    </div>
                  </div>
                )}

                {/* Privacy Agreement Checkbox (Common to all forms) */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0A5EDD] focus:ring-[#0A5EDD] cursor-pointer"
                    />
                    <span className="text-xs text-[#4B5563] leading-relaxed">
                      <span className="font-bold text-[#1F2937]">[필수]</span> 개인정보 수집·이용에 동의합니다. 수집 항목(성명, 연락처, 이메일, 회사명, 문의 내용)은 문의 응대 및 상담 목적으로만 사용되며 목적 달성 후 관계 법령에 따라 보관 및 파기됩니다.{' '}
                      <Link to="/privacy" className="text-[#0A5EDD] font-bold underline ml-1 hover:text-[#094bb0]">
                        [개인정보처리방침 전문 보기]
                      </Link>
                    </span>
                  </label>
                </div>

                {/* Error Message Display */}
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-[8px] flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submission Error Banner */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-[8px] text-xs text-amber-800 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-amber-900">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>네트워크 지연으로 전송에 실패했거나 일시적 오류가 발생했습니다.</span>
                    </div>
                    <p className="pl-6 text-[#4B5563] leading-relaxed">
                      다시 시도해 주시거나, 급하신 경우 <strong>010-7400-3791</strong> 또는 <strong>junsan12@gmail.com</strong>으로 연락 주시면 즉시 상담을 도와드리겠습니다.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={!agreed || isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-[8px] text-sm font-bold transition-all shadow-ds-sm ${
                      !agreed || isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#0A5EDD] text-white hover:bg-[#094bb0] active:scale-98 cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>문의 접수 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>문의 접수하기</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion Section */}
      <section className="py-14 md:py-20 bg-[#F1F5F9] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FREQUENTLY ASKED QUESTIONS"
            title="자주 묻는 질문 (FAQ)"
            subtitle="교육 및 프로젝트 진행과 관련하여 고객사에서 가장 자주 묻는 질문들을 모았습니다."
            align="center"
          />

          <div className="space-y-3 mt-8">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-[12px] overflow-hidden shadow-ds-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center font-bold text-xs shrink-0">
                        Q
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#1F2937]">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9CA3AF] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0A5EDD]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-gray-100 bg-[#F9FAFB]">
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#E6F0FF] text-[#0A5EDD] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          A
                        </span>
                        <div className="pt-0.5">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
