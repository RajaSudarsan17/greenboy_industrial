'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
  category: 'certification' | 'expansion' | 'innovation' | 'partnership';
}

interface MilestonesSectionProps {
  className?: string;
}

const MilestonesSection: React.FC<MilestonesSectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const milestones: Milestone[] = [
    {
      id: 1,
      year: '2022',
      title: 'Company Establishment',
      description: 'Green Boy India Private Limited founded in Chennai with focus on diesel engine manufacturing',
      icon: 'BuildingOfficeIcon',
      category: 'expansion'
    },
    {
      id: 2,
      year: '2005',
      title: 'ISO 9001 Certification',
      description: 'Achieved ISO 9001:2000 certification for quality management systems',
      icon: 'ShieldCheckIcon',
      category: 'certification'
    },
    {
      id: 3,
      year: '2010',
      title: 'Export Market Entry',
      description: 'Expanded operations to international markets with first export to Southeast Asia',
      icon: 'GlobeAltIcon',
      category: 'expansion'
    },
    {
      id: 4,
      year: '2013',
      title: 'CPCB Compliance',
      description: 'Obtained CPCB certification for emission control standards compliance',
      icon: 'CheckBadgeIcon',
      category: 'certification'
    },
    {
      id: 5,
      year: '2016',
      title: 'R&D Center Launch',
      description: 'Established dedicated research facility for emission control technology development',
      icon: 'BeakerIcon',
      category: 'innovation'
    },
    {
      id: 6,
      year: '2018',
      title: 'ICAT & ARAI Certification',
      description: 'Achieved ICAT and ARAI certifications for automotive emission standards',
      icon: 'DocumentCheckIcon',
      category: 'certification'
    },
    {
      id: 7,
      year: '2020',
      title: 'Hybrid Systems Launch',
      description: 'Introduced hybrid power generation systems with AI-based monitoring',
      icon: 'BoltIcon',
      category: 'innovation'
    },
    {
      id: 8,
      year: '2022',
      title: 'Government Partnership',
      description: 'Secured major government contracts for emission-compliant power generation equipment',
      icon: 'HandshakeIcon',
      category: 'partnership'
    },
    {
      id: 9,
      year: '2024',
      title: 'Production Transparency',
      description: 'Launched production movie series showcasing manufacturing transparency',
      icon: 'VideoCameraIcon',
      category: 'innovation'
    },
    {
      id: 10,
      year: '2026',
      title: 'Global Expansion',
      description: 'Operating in 15+ countries with 500+ OEM partnerships and continued innovation',
      icon: 'RocketLaunchIcon',
      category: 'expansion'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'certification':
        return 'bg-success/10 text-success';
      case 'expansion':
        return 'bg-trust/10 text-trust';
      case 'innovation':
        return 'bg-primary/10 text-primary';
      case 'partnership':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Corporate Milestones
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Three decades of continuous growth, innovation, and compliance excellence
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="relative flex flex-col lg:flex-row lg:items-center gap-6"
              >
                <div className="lg:absolute lg:left-0 flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-md border-4 border-surface z-10">
                    <Icon name={milestone.icon as any} size={28} className="text-primary" />
                  </div>
                  
                  <div className="lg:hidden">
                    <div className="text-2xl font-headline font-bold text-primary">
                      {milestone.year}
                    </div>
                  </div>
                </div>
                
                <div className="lg:ml-32 flex-1">
                  <div className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="hidden lg:block text-2xl font-headline font-bold text-primary">
                        {milestone.year}
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(milestone.category)}`}>
                        {milestone.category.charAt(0).toUpperCase() + milestone.category.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-headline font-bold text-secondary mb-2">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;