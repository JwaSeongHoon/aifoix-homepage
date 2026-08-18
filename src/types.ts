import React from 'react';

export type AppRoute =
  | '/'
  | '/about'
  | '/services'
  | '/services/education'
  | '/services/consulting'
  | '/services/automation'
  | '/services/solution'
  | '/portfolio'
  | '/insight'
  | '/contact'
  | '/privacy'
  | '/admin';

export interface NavItem {
  label: string;
  path: AppRoute;
  subItems?: { label: string; path: AppRoute; description?: string }[];
}

export interface SectionTitleProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export interface StatBadgeProps {
  id?: string;
  value: string | number;
  unit?: string;
  label: string;
  description?: string;
  variant?: 'primary' | 'secondary' | 'success';
  className?: string;
}

export interface CTASectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonTarget?: AppRoute;
  className?: string;
}
