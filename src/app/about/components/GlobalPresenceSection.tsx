'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Market {
  id: number;
  region: string;
  countries: string[];
  icon: string;
  stats: string;
}

interface GlobalPresenceSectionProps {
  className?: string;
}

const GlobalPresenceSection: React.FC<GlobalPresenceSectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const markets: Market[] = [
    {
      id: 1,
      region: 'South Asia',
      countries: ['India', 'Bangladesh', 'Sri Lanka', 'Nepal'],
      icon: 'GlobeAsiaAustraliaIcon',
      stats: '60% of operations'
    },
    {
      id: 2,
      region: 'Southeast Asia',
      countries: ['Thailand', 'Vietnam', 'Indonesia', 'Malaysia'],
      icon: 'MapIcon',
      stats: '25% of exports'
    },
    {
      id: 3,
      region: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Qatar'],
      icon: 'BuildingOffice2Icon',
      stats: '10% of exports'
    },
    {
      id: 4,
      region: 'Africa',
      countries: ['Kenya', 'Nigeria', 'South Africa'],
      icon: 'GlobeAltIcon',
      stats: '5% of exports'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', status: 'Active', validity: '2027' },
    { name: 'CPCB Certified', status: 'Active', validity: '2026' },
    { name: 'ICAT Approved', status: 'Active', validity: '2027' },
    { name: 'ARAI Certified', status: 'Active', validity: '2026' }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Global Presence
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Serving international markets with Indian manufacturing excellence and global compliance standards
          </p>
        </div>
        
        <div className="mb-16">
          <div className="bg-surface rounded-lg p-8 mb-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Green Boy India Global Operations"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=13.0827,80.2707&z=4&output=embed"
                className="border-0"
              ></iframe>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market) => (
              <div
                key={market.id}
                className="bg-surface p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={market.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-headline font-bold text-secondary">
                    {market.region}
                  </h3>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {market.countries.map((country, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                      <span>{country}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-mono text-primary font-semibold">
                    {market.stats}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-surface rounded-lg p-8">
          <h3 className="text-2xl font-headline font-bold text-secondary mb-6 text-center">
            International Compliance Standards
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border-2 border-success/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon name="ShieldCheckIcon" size={32} className="text-success" />
                  <span className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
                    {cert.status}
                  </span>
                </div>
                
                <h4 className="text-lg font-headline font-bold text-secondary mb-2">
                  {cert.name}
                </h4>
                
                <p className="text-sm text-text-secondary">
                  Valid until: <span className="font-mono text-primary">{cert.validity}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;