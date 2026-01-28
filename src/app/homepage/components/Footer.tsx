import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Production Series', href: '/production-movie-series' },
      { label: 'Contact', href: '/contact' },
    ],
    products: [
      { label: 'Diesel Engines', href: '/products' },
      { label: 'Generator Sets', href: '/products' },
      { label: 'RECD Solutions', href: '/products' },
      { label: 'Custom Manufacturing', href: '/services' },
    ],
    resources: [
      { label: 'Technologies', href: '/technologies' },
      { label: 'Services', href: '/services' },
      { label: 'Documentation', href: '/certifications' },
      { label: 'Compliance Hub', href: '/certifications' },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <AppImage
                src="/assets/images/ChatGPT_Image_Dec_21__2025__01_54_30_PM-removebg-preview-1769177051122.png"
                alt="Green Boy Industrial Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-headline font-bold leading-none">
                  GreenBoy
                </span>
                <span className="text-xs opacity-80 leading-none mt-0.5">
                  Industrial
                </span>
              </div>
            </div>
            
            <p className="text-sm opacity-80 font-body leading-relaxed mb-4">
              Certified excellence in power generation. Government-approved, OEM-trusted manufacturing with complete regulatory compliance.
            </p>
            
            <div className="flex items-center gap-2 px-3 py-2 bg-success/20 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-success-foreground">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-headline font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks?.company?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-body"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-headline font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks?.products?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-body"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-headline font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks?.resources?.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300 font-body"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm opacity-80 font-body">
              <span>Chennai, Tamil Nadu, India</span>
              <span className="hidden md:inline">|</span>
              <span>+91 99528 23148</span>
              <span className="hidden md:inline">|</span>
              <span>support@greenboy.co.in</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Icon name="EnvelopeIcon" size={18} />
              </button>
              <button className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Icon name="PhoneIcon" size={18} />
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm opacity-60 font-body">
            <p>&copy; {currentYear} Green Boy India Private Limited. All rights reserved.</p>
            <p className="mt-1">Registered under Companies Act, 2013 | CIN: U29100TN2009PTC071234</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;