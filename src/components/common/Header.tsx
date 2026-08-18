import React, { useState, useEffect } from 'react';
import { useRouter } from '../../router/RouterContext';
import { Link } from '../../router/Link';
import { PrimaryButton } from './PrimaryButton';
import { Logo } from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../../types';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'AIFORIX 소개', path: '/about' },
    {
      label: '서비스',
      path: '/services',
      subItems: [
        { label: '서비스 전체보기', path: '/services', description: 'AIFORIX 핵심 4대 B2B AI 서비스' },
        { label: 'AI 교육', path: '/services/education', description: '임직원 역량 강화 맞춤형 실무 교육' },
        { label: 'AI 컨설팅', path: '/services/consulting', description: '기업 AI 도입 전략 및 로드맵 수립' },
        { label: 'AI 자동화', path: '/services/automation', description: '반복 업무 자동화 및 생산성 극대화' },
        { label: 'AI 솔루션', path: '/services/solution', description: '기업 맞춤형 AI 모델 및 애플리케이션 구축' },
      ],
    },
    { label: '강의·프로젝트', path: '/portfolio' },
    { label: '인사이트', path: '/insight' },
  ];

  const isCurrentActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header
      id="main-header"
      className={`
        sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200
        ${isScrolled ? 'border-b border-gray-200 shadow-ds-sm' : 'border-b border-gray-100'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Official Design System Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5EDD] rounded-md p-1"
            >
              <Logo variant="horizontal" size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            {navItems.map((item) => {
              const active = isCurrentActive(item.path);

              if (item.subItems) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`
                        flex items-center gap-1 py-2 text-sm transition-colors
                        ${active
                          ? 'text-[#0A5EDD] font-bold'
                          : 'text-[#4B5563] hover:text-[#0A5EDD]'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-[#0A5EDD]' : 'text-gray-400'
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 shadow-ds-lg rounded-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-white border border-gray-100 rounded-[12px] p-2 shadow-ds-xl">
                          {item.subItems.map((sub) => {
                            const subActive = currentPath === sub.path;
                            return (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`
                                  block px-3 py-2.5 rounded-[8px] text-sm transition-colors
                                  ${subActive
                                    ? 'bg-[#E6F0FF] text-[#0A5EDD] font-bold'
                                    : 'text-[#4B5563] hover:bg-[#F1F5F9] hover:text-[#0A5EDD]'
                                  }
                                `}
                              >
                                <div className="font-medium text-sm">{sub.label}</div>
                                {sub.description && (
                                  <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                    {sub.description}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    py-2 text-sm transition-colors
                    ${active
                      ? 'text-[#0A5EDD] font-bold'
                      : 'text-[#4B5563] hover:text-[#0A5EDD]'
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <PrimaryButton
                size="md"
                className="font-semibold"
              >
                문의하기
              </PrimaryButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F2937] hover:text-[#0A5EDD] hover:bg-[#F1F5F9] rounded-lg transition-colors"
              aria-label="메뉴 열기/닫기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-ds-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navItems.map((item) => {
              const active = isCurrentActive(item.path);

              if (item.subItems) {
                return (
                  <div key={item.path} className="py-2 border-b border-gray-100">
                    <div className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="mt-1 pl-2 space-y-1">
                      {item.subItems.map((sub) => {
                        const subActive = currentPath === sub.path;
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className={`
                              flex items-center justify-between px-3 py-2 rounded-lg text-sm
                              ${subActive
                                ? 'bg-[#E6F0FF] text-[#0A5EDD] font-bold'
                                : 'text-[#4B5563] hover:bg-[#F1F5F9]'
                              }
                            `}
                          >
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    block px-3 py-2.5 rounded-lg text-base font-medium transition-colors
                    ${active
                      ? 'bg-[#E6F0FF] text-[#0A5EDD] font-bold'
                      : 'text-[#4B5563] hover:bg-[#F1F5F9]'
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Contact Button */}
            <div className="pt-4 mt-3 border-t border-gray-100">
              <Link to="/contact">
                <PrimaryButton fullWidth size="lg">
                  문의하기
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
