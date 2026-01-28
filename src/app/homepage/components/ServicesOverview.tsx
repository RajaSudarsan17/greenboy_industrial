import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
  sla: string;
}

const ServicesOverview = () => {
  const services: Service[] = [
    {
      id: '1',
      icon: 'WrenchScrewdriverIcon',
      title: 'Custom Manufacturing',
      description: 'OEM-grade manufacturing services with complete design-to-delivery capabilities for specialized power generation requirements.',
      capabilities: [
        'Custom engine specifications',
        'Prototype development',
        'Volume production scaling',
        'Quality assurance protocols',
      ],
      sla: '45-60 days lead time',
    },
    {
      id: '2',
      icon: 'ClipboardDocumentCheckIcon',
      title: 'Compliance Testing',
      description: 'Comprehensive emission and performance testing services in our NABL-accredited laboratory facilities.',
      capabilities: [
        'CPCB emission testing',
        'Performance validation',
        'Durability testing',
        'Certification support',
      ],
      sla: '7-10 days turnaround',
    },
    {
      id: '3',
      icon: 'ArrowPathIcon',
      title: 'Retrofit Solutions',
      description: 'Upgrade existing engines to meet current emission norms with our certified retrofit emission control devices.',
      capabilities: [
        'Compatibility assessment',
        'RECD installation',
        'Post-installation testing',
        'Compliance certification',
      ],
      sla: '48-72 hours installation',
    },
    {
      id: '4',
      icon: 'CogIcon',
      title: 'Engineering Consultation',
      description: 'Technical advisory services for emission control strategies, regulatory compliance, and manufacturing optimization.',
      capabilities: [
        'Regulatory guidance',
        'Technical feasibility studies',
        'Process optimization',
        'Documentation support',
      ],
      sla: 'Flexible engagement',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="BriefcaseIcon" size={20} className="text-primary" />
            <span className="text-sm font-mono text-primary">Professional Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Comprehensive Engineering & Manufacturing Services
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Beyond products, we offer complete engineering services backed by certified facilities, experienced technical teams, and documented quality systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-headline font-bold text-secondary mb-2">
                    {service.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
                    <Icon name="ClockIcon" size={14} className="text-text-secondary" />
                    <span className="text-xs font-mono text-text-secondary">{service.sla}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-text-secondary font-body leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-body">{capability}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-surface text-secondary border border-border font-body font-semibold text-sm rounded-lg hover:bg-muted hover:border-primary transition-all duration-300">
                Request Service Details
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-headline font-bold text-secondary mb-4">
              Need Custom Engineering Solutions?
            </h3>
            
            <p className="text-base text-text-secondary font-body mb-6">
              Our technical team can design, develop, and deliver specialized power generation solutions tailored to your specific requirements. From concept to certification, we handle the complete engineering lifecycle.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-cta text-base rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-md"
              >
                View All Services
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-action text-action-foreground font-cta text-base rounded-lg hover:bg-action/90 transition-colors duration-300 shadow-md"
              >
                Request Engineering Consultation
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;