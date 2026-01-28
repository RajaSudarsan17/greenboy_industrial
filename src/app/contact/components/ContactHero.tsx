import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-br from-primary/5 via-background to-muted py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-success">Available 24/7 for Technical Support</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-secondary mb-6">
            Connect with Green Boy India
          </h1>
          
          <p className="text-lg text-text-secondary leading-relaxed mb-4">
            Professional inquiry routing for Government Procurement, OEM Partnerships, Export Relations, and Technical Consultations. Our multi-channel communication hub ensures your inquiry reaches the right department with appropriate workflow management.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>CPCB Approved Facility</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              <span>Export Ready Documentation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;