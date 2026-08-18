import React from 'react';
import { Link } from '../../router/Link';
import { COMPANY_INFO, BRAND_PHILOSOPHY } from '../../theme/tokens';
import { Logo } from './Logo';
import { Mail, Phone, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="w-full bg-[#08225C] text-white text-sm mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Company Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo variant="white" size="md" />
            </Link>
            <p className="text-sm font-semibold text-blue-100">
              {BRAND_PHILOSOPHY.title}
            </p>
            <p className="text-xs text-blue-200/80 leading-relaxed max-w-md">
              {COMPANY_INFO.description}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 sm:gap-5 text-xs text-blue-200/90">
              <div className="flex items-center gap-1.5">
                <span className="text-blue-300">대표</span>
                <span className="font-semibold text-white">{COMPANY_INFO.representative}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#3882F6]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#3882F6]" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-blue-200 uppercase tracking-wider">
              서비스
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/education" className="text-blue-100/70 hover:text-white transition-colors">
                  AI 맞춤 교육
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-blue-100/70 hover:text-white transition-colors">
                  AI 도입 컨설팅
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="text-blue-100/70 hover:text-white transition-colors">
                  AI 업무 자동화
                </Link>
              </li>
              <li>
                <Link to="/services/solution" className="text-blue-100/70 hover:text-white transition-colors">
                  AI 솔루션 개발
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-blue-200 uppercase tracking-wider">
              바로가기
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-blue-100/70 hover:text-white transition-colors">
                  AIFORIX 소개 &amp; 철학
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blue-100/70 hover:text-white transition-colors">
                  강의·프로젝트 실적
                </Link>
              </li>
              <li>
                <Link to="/insight" className="text-blue-100/70 hover:text-white transition-colors">
                  AI 인사이트 리포트
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100/70 hover:text-white transition-colors">
                  도입 및 견적 문의
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300/60">
          <div>
            © {currentYear} {COMPANY_INFO.name} Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/privacy"
              className="text-blue-200 hover:text-white font-medium transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>개인정보처리방침</span>
            </Link>
            <span className="text-blue-900">|</span>
            <Link
              to="/admin"
              className="text-blue-300/60 hover:text-blue-200 text-[11px] transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
