import React from 'react';
import { useRouter } from './RouterContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter();

  const isActive = exact
    ? currentPath === to
    : to === '/'
    ? currentPath === '/'
    : currentPath.startsWith(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle external links, cmd/ctrl clicks, middle clicks
    if (
      to.startsWith('http://') ||
      to.startsWith('https://') ||
      to.startsWith('mailto:') ||
      to.startsWith('tel:') ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.button !== 0
    ) {
      onClick?.(e);
      return;
    }

    e.preventDefault();
    onClick?.(e);
    navigate(to);
  };

  const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a href={to} onClick={handleClick} className={combinedClassName} {...rest}>
      {children}
    </a>
  );
};
