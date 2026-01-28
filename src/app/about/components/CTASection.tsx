'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const ctaCards = [
    {
      id: 1,
      icon: 'ShieldCheckIcon',
      title: 'View Certifications',
      description: 'Explore our complete compliance documentation and regulatory certifications',
      link: '/certifications',
      color: 'bg-success/10 text-success'
    },
    {
      id: 2,
      icon: 'VideoCameraIcon',
      title: 'Production Transparency',
      description: 'Watch our manufacturing processes through cinematic production series',
      link: '/production-movie-series',
      color: 'bg-primary/10 text-primary'
    },
    {
      id: 3,
      icon: 'BeakerIcon',
      title: 'Technology Innovation',
      description: 'Discover our R&D capabilities and emission control technologies',
      link: '/technologies',
      color: 'bg-trust/10 text-trust'
    },
    {
      id: 4,
      icon: 'PhoneIcon',
      title: 'Partner With Us',
      description: 'Start a conversation about OEM partnerships and custom manufacturing',
      link: '/contact',
      color: 'bg-action/10 text-action'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-secondary text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
            Ready to Partner with Certified Excellence?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our capabilities, certifications, and manufacturing transparency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaCards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${card.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={card.icon as any} size={28} />
              </div>
              
              <h3 className="text-lg font-headline font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-sm text-gray-300 mb-4">
                {card.description}
              </p>
              
              <div className="flex items-center space-x-2 text-primary group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm font-semibold">Learn More</span>
                <Icon name="ArrowRightIcon" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;