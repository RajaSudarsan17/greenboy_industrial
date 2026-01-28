'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';


interface FooterSectionProps {
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Milestones', href: '/about#milestones' },
      { label: 'Global Presence', href: '/about#global' }
    ],
    products: [
      { label: 'Diesel Engines', href: '/products' },
      { label: 'Generator Sets', href: '/products' },
      { label: 'RECD Systems', href: '/products' },
      { label: 'Custom Solutions', href: '/products' }
    ],
    compliance: [
      { label: 'Certifications', href: '/certifications' },
      { label: 'ISO 9001:2015', href: '/certifications' },
      { label: 'CPCB Certified', href: '/certifications' },
      { label: 'ICAT & ARAI', href: '/certifications' }
    ],
    resources: [
      { label: 'Technologies', href: '/technologies' },
      { label: 'Production Series', href: '/production-movie-series' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' }
    ]
  };

  return (
    <footer className={`bg-secondary text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <rect width="40" height="40" rx="8" fill="currentColor" />
                <path
                  d="M20 10L12 18H16V28H24V18H28L20 10Z"
                  fill="white"
                />
                <circle cx="20" cy="32" r="2" fill="white" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-headline font-bold leading-none">
                  GreenBoy
                </span>
                <span className="text-xs text-gray-400 leading-none mt-0.5">
                  Industrial
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4">
              Certified Excellence in Power Generation
            </p>
            
            <div className="flex items-center space-x-2 px-3 py-2 bg-success/20 rounded-md">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-success">ISO 9001:2015</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-headline font-bold mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-headline font-bold mb-4 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-headline font-bold mb-4 uppercase tracking-wider">
              Compliance
            </h3>
            <ul className="space-y-2">
              {footerLinks.compliance.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-headline font-bold mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {isHydrated ? `© ${currentYear}` : '© 2026'} Green Boy India Private Limited. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;