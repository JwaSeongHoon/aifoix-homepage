/**
 * AIFORIX 디자인 시스템 v1.1 토큰
 * 
 * 01. BRAND PHILOSOPHY
 * - "AI로 혁신과 변화를 선도하여 비즈니스의 성장을 지속적으로 지원합니다."
 * - AI FOR Innovation & Transformation
 * 
 * 02. COLOR SYSTEM
 * - Primary: #3882F6 (Light/Accent), #0A5EDD (Main), #08225C (Dark Navy), #E6F0FF (Tint)
 * - Secondary: #8B5CF6, #6D28D9, #3B0764, #F3E8FF
 * - Tertiary: #D16900, #B45309, #7C2D12, #FFF3E0
 * - Neutral: #1F2937, #4B5563, #9CA3AF, #F1F5F9, #FFFFFF
 * 
 * 03. TYPOGRAPHY
 * - Headline (Bold): Hanken Grotesk
 * - Body (Regular): Hanken Grotesk
 * - Label (Medium): Geist / Pretendard
 * 
 * 08. SHADOWS & 09. BORDER RADIUS
 * - Radius: none(0px), sm(4px), md(8px), lg(12px), xl(16px), full(9999px)
 */

export const COLORS = {
  // Primary (Blue Series)
  primaryLight: '#3882F6',
  primary: '#0A5EDD',
  primaryDark: '#08225C',
  primaryTint: '#E6F0FF',

  // Secondary (Purple Series)
  secondaryLight: '#8B5CF6',
  secondary: '#6D28D9',
  secondaryDark: '#3B0764',
  secondaryTint: '#F3E8FF',

  // Tertiary (Warm Series)
  tertiaryLight: '#D16900',
  tertiary: '#B45309',
  tertiaryDark: '#7C2D12',
  tertiaryTint: '#FFF3E0',

  // Neutral Series
  textDark: '#1F2937',
  text: '#1F2937',
  textBody: '#4B5563',
  textMuted: '#9CA3AF',
  bgGray: '#F1F5F9',
  bg: '#FFFFFF',
  border: '#E2E8F0',
  borderMuted: '#9CA3AF',

  // Backward compatibility alias
  primaryHover: '#08225C',
  secondaryHover: '#3B0764',
} as const;

export const SHADOWS = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 8px rgba(0, 0, 0, 0.08)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
  xl: '0 12px 24px rgba(0, 0, 0, 0.16)',
} as const;

export const RADIUS = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

export const BRAND_PHILOSOPHY = {
  title: 'AI로 혁신과 변화를 선도하여 비즈니스의 성장을 지속적으로 지원합니다.',
  slogan: 'AI FOR Innovation & Transformation',
  sloganKo: 'AI로 혁신과 전환을 만드는 실무형 파트너',
  pillars: [
    {
      en: 'INNOVATION',
      ko: '혁신',
      description: '새로운 아이디어와 기술로 미래를 선도합니다.',
      color: '#0A5EDD',
      tint: '#E6F0FF',
    },
    {
      en: 'TRANSFORMATION',
      ko: '변화',
      description: '변화를 통해 더 나은 가치를 창출합니다.',
      color: '#6D28D9',
      tint: '#F3E8FF',
    },
    {
      en: 'PARTNERSHIP',
      ko: '동반성장',
      description: '신뢰와 협력을 통해 함께 성장합니다.',
      color: '#0A5EDD',
      tint: '#E6F0FF',
    },
  ],
} as const;

export const COMPANY_INFO = {
  name: 'AIFORIX',
  nameKo: '에이포릭스',
  tagline: 'AI FOR Innovation & Transformation',
  representative: '좌성훈',
  email: 'junsan12@gmail.com',
  phone: '010-7400-3791',
  slogan: 'AI로 혁신과 변화를 선도하여 비즈니스의 성장을 지속적으로 지원합니다.',
  subSlogan: 'AI 교육 · AI 컨설팅 · AI 자동화 · AI 솔루션',
  description: 'AI로 혁신과 변화를 선도하여 기업의 실질적 디지털 전환과 지속 가능한 성장을 지원하는 B2B AI 전문 파트너',
} as const;
