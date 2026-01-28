import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  impact: string;
}

const TechnologyHighlights = () => {
  const technologies: Technology[] = [
    {
      id: '1',
      icon: 'BeakerIcon',
      title: 'Advanced Emission Control',
      description: 'Proprietary emission reduction technology achieving 90% reduction in particulate matter and NOx emissions.',
      features: [
        'Multi-stage catalytic conversion',
        'Real-time emission monitoring',
        'Adaptive fuel injection mapping',
      ],
      impact: '90% emission reduction',
    },
    {
      id: '2',
      icon: 'CpuChipIcon',
      title: 'AI-Powered Quality Monitoring',
      description: 'Machine learning algorithms continuously monitor production quality, predicting potential defects before they occur.',
      features: [
        'Computer vision inspection',
        'Predictive maintenance alerts',
        'Automated quality reporting',
      ],
      impact: '99.8% quality pass rate',
    },
    {
      id: '3',
      icon: 'BoltIcon',
      title: 'Hybrid Power Systems',
      description: 'Integrated diesel-electric hybrid solutions reducing fuel consumption and emissions while maintaining power output.',
      features: [
        'Intelligent load management',
        'Battery storage integration',
        'Grid synchronization capability',
      ],
      impact: '35% fuel savings',
    },
    {
      id: '4',
      icon: 'ChartBarIcon',
      title: 'IoT Production Analytics',
      description: 'Real-time production monitoring and analytics platform providing complete visibility into manufacturing operations.',
      features: [
        'Live production dashboards',
        'Predictive analytics',
        'Remote diagnostics',
      ],
      impact: '24/7 transparency',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="LightBulbIcon" size={20} className="text-primary" />
            <span className="text-sm font-mono text-primary">Innovation & R&D</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Engineering Excellence Through Technology Innovation
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Continuous investment in research and development ensures our solutions remain at the forefront of emission control technology and manufacturing efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={tech.icon as any} size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-headline font-bold text-secondary mb-2">
                    {tech.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full">
                    <Icon name="CheckCircleIcon" size={14} className="text-success" />
                    <span className="text-xs font-mono text-success">{tech.impact}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary font-body leading-relaxed mb-6">
                {tech.description}
              </p>
              
              <div className="space-y-3">
                <div className="text-xs font-body font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Key Features
                </div>
                {tech.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckIcon" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-card border-2 border-primary/20 rounded-xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="AcademicCapIcon" size={20} className="text-primary" />
              <span className="text-sm font-mono text-primary">R&D Facility</span>
            </div>
            
            <h3 className="text-2xl font-headline font-bold text-secondary mb-4">
              State-of-the-Art Research & Development Center
            </h3>
            
            <p className="text-base text-text-secondary font-body mb-6">
              Our 15,000 sq ft R&D facility houses advanced testing equipment, emission analysis laboratories, and prototype development workshops. Staffed by 24 engineers and researchers dedicated to innovation.
            </p>
            
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-action text-action-foreground font-cta text-base rounded-lg hover:bg-action/90 transition-colors duration-300 shadow-md"
            >
              Explore Our Technologies
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHighlights;