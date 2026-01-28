import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection = () => {
  const contactChannels = [
    {
      icon: 'PhoneIcon',
      title: 'Sales Inquiry',
      description: 'Product specifications and pricing',
      contact: '+91 99528 23148',
      action: 'Call Now',
    },
    {
      icon: 'EnvelopeIcon',
      title: 'Technical Support',
      description: 'Engineering consultation and compliance',
      contact: 'support@greenboy.co.in',
      action: 'Email Us',
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Business Inquiry',
      description: 'Partnerships and procurement',
      contact: 'support@greenboy.co.in',
      action: 'Send Message',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-accent to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-lg text-secondary-foreground/80 font-body max-w-3xl mx-auto">
            Connect with our technical team for detailed specifications, compliance documentation, and custom engineering solutions. Professional inquiry routing ensures you reach the right department.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactChannels.map((channel) => (
            <div
              key={channel.id}
              className="bg-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name={channel.icon as any} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-headline font-bold text-secondary mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-body">
                    {channel.description}
                  </p>
                </div>
              </div>
              
              <div className="mb-4 p-3 bg-surface rounded-lg">
                <p className="text-sm font-mono text-secondary text-center">
                  {channel.contact}
                </p>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300">
                {channel.action}
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-action text-action-foreground font-cta text-lg rounded-lg hover:bg-action/90 transition-colors duration-300 shadow-xl"
            >
              Submit Formal Business Inquiry
              <Icon name="DocumentTextIcon" size={24} />
            </Link>
            
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-10 py-5 bg-card text-secondary border-2 border-card font-cta text-lg rounded-lg hover:bg-muted transition-colors duration-300"
            >
              Learn About Our Company
              <Icon name="BuildingOffice2Icon" size={24} />
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-secondary-foreground/60 font-body">
            Response time: Business inquiries within 24 hours | Technical queries within 48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;