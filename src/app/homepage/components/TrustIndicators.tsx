import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Indicator {
  id: string;
  icon: string;
  value: string;
  label: string;
  description: string;
}

const TrustIndicators = () => {
  const indicators: Indicator[] = [
    {
      id: '1',
      icon: 'BuildingOffice2Icon',
      value: '15+',
      label: 'Years in Manufacturing',
      description: 'Established track record in power generation equipment manufacturing',
    },
    {
      id: '2',
      icon: 'UserGroupIcon',
      value: '200+',
      label: 'Government Clients',
      description: 'Trusted supplier for central and state government departments',
    },
    {
      id: '3',
      icon: 'GlobeAltIcon',
      value: '12',
      label: 'Export Countries',
      description: 'International presence across Asia, Africa, and Middle East',
    },
    {
      id: '4',
      icon: 'ShieldCheckIcon',
      value: '100%',
      label: 'Compliance Rate',
      description: 'Perfect regulatory compliance record with zero violations',
    },
    {
      id: '5',
      icon: 'ChartBarSquareIcon',
      value: '50,000+',
      label: 'Units Manufactured',
      description: 'Cumulative production volume demonstrating scale and reliability',
    },
    {
      id: '6',
      icon: 'AcademicCapIcon',
      value: '24',
      label: 'R&D Engineers',
      description: 'Dedicated research team driving continuous innovation',
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="TrophyIcon" size={20} className="text-primary" />
            <span className="text-sm font-mono text-primary">Trust & Credibility</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Proven Track Record in Industrial Manufacturing
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Numbers that demonstrate our commitment to quality, compliance, and customer satisfaction. Every metric is independently verifiable and backed by documentation.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((indicator) => (
            <div
              key={indicator.id}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Icon name={indicator.icon as any} size={32} className="text-primary" />
              </div>
              
              <div className="text-4xl font-headline font-bold text-secondary mb-2">
                {indicator.value}
              </div>
              
              <div className="text-base font-headline font-semibold text-secondary mb-3">
                {indicator.label}
              </div>
              
              <p className="text-sm text-text-secondary font-body leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-card border-2 border-primary/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-success/10 rounded-xl">
                <Icon name="DocumentCheckIcon" size={32} className="text-success" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-secondary mb-1">
                  All Claims Independently Verified
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  Supporting documentation available for audit and procurement processes
                </p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap">
              Download Company Profile
              <Icon name="ArrowDownTrayIcon" size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;