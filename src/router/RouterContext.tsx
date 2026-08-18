import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isCurrent: (path: string) => boolean;
}

const RouterContext = createContext<RouterContextType | null>(null);

const routeMetadata: Record<string, { title: string; desc: string }> = {
  '/': {
    title: 'AIFORIX | AI 교육 · 컨설팅 · 자동화 · 솔루션',
    desc: 'AIFORIX(에이포릭스) - B2B AI 교육, 훈련 로드맵 컨설팅, 업무 자동화 및 맞춤형 솔루션 개발 전문 파트너.',
  },
  '/about': {
    title: '회사 소개 | AIFORIX',
    desc: '기술과 현장을 연결하는 AI 실무 전문가 그룹, AIFORIX의 비전과 전문성, 핵심 인력을 소개합니다.',
  },
  '/services': {
    title: '서비스 개요 | AIFORIX',
    desc: '교육, 컨설팅, 업무 자동화, 솔루션 개발까지 유기적으로 연결된 AIFORIX의 4대 핵심 사업 영역을 확인하세요.',
  },
  '/services/education': {
    title: 'AI 교육 & 역량 강화 | AIFORIX',
    desc: '쓸 줄 아는 직원에서 만들 줄 아는 직원으로. 5과정 56시간 표준 커리큘럼 기반 맞춤형 기업 출강 교육.',
  },
  '/services/consulting': {
    title: 'AI 도입 컨설팅 & 훈련 로드맵 | AIFORIX',
    desc: '5단계 표준 방법론과 공인 AI훈련코치가 주도하는 맞춤형 AI 도입 진단 및 정부지원 훈련사업 연계.',
  },
  '/services/automation': {
    title: 'AI 업무 자동화 | AIFORIX',
    desc: 'n8n 파이프라인, VBA/Apps Script, AI 에이전트로 반복 업무 시간의 최대 99%를 절감합니다.',
  },
  '/services/solution': {
    title: 'AI 솔루션 개발 | AIFORIX',
    desc: '재직자가 직접 만들고 운영하는 맞춤형 업무 시스템. 바이브코딩, AI Vision, 사내 RAG 지식 검색 구축.',
  },
  '/portfolio': {
    title: '강의 & 프로젝트 실적 | AIFORIX',
    desc: '공공기관, 대학, 금융, 기업 현장에서 정직한 Work hour 절감 수치로 검증된 실무 프로젝트 성과 사례.',
  },
  '/insight': {
    title: 'AIFORIX 인사이트 | AI 지식 & 트렌드',
    desc: 'AI 보안 5대 수칙, 현장 케이스 스터디, 방송 인터뷰 등 실무자를 위한 깊이 있는 AI 칼럼 모음.',
  },
  '/contact': {
    title: '문의하기 | AIFORIX',
    desc: '기업 맞춤형 AI 강의, 컨설팅, 자동화 및 솔루션 개발 문의. 평일 4시간 이내 신속 회신.',
  },
  '/privacy': {
    title: '개인정보처리방침 | AIFORIX',
    desc: 'AIFORIX 개인정보 수집 항목, 이용 목적, 보유 기간 및 정보주체 권리 안내.',
  },
  '/admin': {
    title: '관리자 포털 | AIFORIX',
    desc: 'AIFORIX 관리자 전용 대시보드',
  },
};

export function RouterProvider({ children }: { children: React.ReactNode }) {
  // Normalize initial path
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname || '/';
    return path;
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title, meta description, and robots tag whenever currentPath changes
  useEffect(() => {
    const normalized = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
    const meta = routeMetadata[normalized] || routeMetadata['/'];

    document.title = meta.title;

    // Update meta description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', meta.desc);

    // Robots meta tag for /admin
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (normalized === '/admin') {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute('content', 'noindex, nofollow');
    } else {
      if (robotsTag) {
        robotsTag.setAttribute('content', 'index, follow');
      }
    }
  }, [currentPath]);

  const navigate = useCallback((pathWithQuery: string) => {
    if (window.location.pathname + window.location.search !== pathWithQuery) {
      window.history.pushState({}, '', pathWithQuery);
      const purePath = pathWithQuery.split('?')[0];
      setCurrentPath(purePath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const isCurrent = useCallback((path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isCurrent }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}


