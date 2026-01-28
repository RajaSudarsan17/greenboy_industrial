'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';


interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'About', href: '/about' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
  ];

  const moreMenuItems = [
    { label: 'Technologies', href: '/technologies' },
    { label: 'Production Series', href: '/production-movie-series' },
    { label: 'Contact', href: '/contact' },
  ];

  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-md ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          <Link href="/homepage" className="flex items-center">
            <div className="flex items-center space-x-3">
              <AppImage
                src="/assets/images/ChatGPT_Image_Dec_21__2025__01_54_30_PM-removebg-preview-1769177051122.png"
                alt="Green Boy Industrial Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-headline font-headline text-secondary leading-none">
                  GreenBoy
                </span>
                <span className="text-xs font-body text-text-secondary leading-none mt-0.5">
                  Industrial
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-body font-body-semibold text-text-primary hover:text-primary hover:bg-muted rounded-md transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-body font-body-semibold text-text-primary hover:text-primary hover:bg-muted rounded-md transition-colors duration-300"
              >
                <span>More</span>
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`transform transition-transform duration-300 ${
                    isMoreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-popover shadow-elevation-md rounded-md overflow-hidden">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm font-body text-text-primary hover:bg-muted hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMoreMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-success/10 rounded-md">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs font-mono font-mono text-success">
                ISO 9001:2015
              </span>
            </div>
            
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-action text-action-foreground font-cta font-cta text-sm rounded-md hover:bg-action/90 transition-colors duration-300 shadow-sm"
            >
              Request Quote
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-primary hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="px-4 py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-body font-body-semibold text-text-primary hover:bg-muted hover:text-primary rounded-md transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-2 border-t border-border">
                <div className="px-4 py-2 text-xs font-body font-body-semibold text-text-secondary uppercase tracking-wider">
                  More
                </div>
                {moreMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-body text-text-primary hover:bg-muted hover:text-primary rounded-md transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-center space-x-2 px-3 py-2 bg-success/10 rounded-md">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono font-mono text-success">
                    ISO 9001:2015 Certified
                  </span>
                </div>
                
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-action text-action-foreground font-cta font-cta text-sm text-center rounded-md hover:bg-action/90 transition-colors duration-300 shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;