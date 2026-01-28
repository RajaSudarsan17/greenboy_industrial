import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
  email: string;
  phone: string;
  availability: string;
  responseTime: string;
}

interface DepartmentCardsProps {
  onSelectDepartment: (departmentId: string) => void;
  className?: string;
}

const DepartmentCards: React.FC<DepartmentCardsProps> = ({ onSelectDepartment, className = '' }) => {
  const departments: Department[] = [
    {
      id: 'sales',
      name: 'Sales & Business Development',
      icon: 'BriefcaseIcon',
      description: 'New business inquiries, product quotations, OEM partnerships, and export relations',
      email: 'sales@greenboy.co.in',
      phone: '+91 99528 23148',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM IST',
      responseTime: '4-6 business hours'
    },
    {
      id: 'compliance',
      name: 'Compliance & Certifications',
      icon: 'ShieldCheckIcon',
      description: 'Regulatory documentation, certification verification, audit coordination, and compliance queries',
      email: 'compliance@greenboy.co.in',
      phone: '+91 99528 23148',
      availability: 'Mon-Fri: 9:00 AM - 5:30 PM IST',
      responseTime: '24-48 business hours'
    },
    {
      id: 'operations',
      name: 'Operations & Production',
      icon: 'CogIcon',
      description: 'Manufacturing capacity, production scheduling, quality control, and facility tours',
      email: 'operations@greenboy.co.in',
      phone: '+91 99528 23148',
      availability: 'Mon-Sat: 8:00 AM - 7:00 PM IST',
      responseTime: '6-8 business hours'
    },
    {
      id: 'technical',
      name: 'Technical Engineering',
      icon: 'WrenchScrewdriverIcon',
      description: 'Product specifications, custom engineering, testing procedures, and technical consultations',
      email: 'technical@greenboy.co.in',
      phone: '+91 99528 23148',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM IST',
      responseTime: '4-6 business hours'
    },
    {
      id: 'support',
      name: 'Customer Support',
      icon: 'LifebuoyIcon',
      description: 'Product support, warranty claims, maintenance services, and spare parts inquiries',
      email: 'support@greenboy.co.in',
      phone: '+91 99528 23148',
      availability: '24/7 Emergency Support',
      responseTime: '2-4 hours (urgent)'
    },
    {
      id: 'export',
      name: 'Export & International',
      icon: 'GlobeAltIcon',
      description: 'International orders, export documentation, shipping coordination, and global partnerships',
      email: 'export@greenboy.co.in',
      phone: '+91 99528 23148',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM IST',
      responseTime: '6-12 business hours'
    }
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-secondary mb-4">
            Department-Specific Contact Channels
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Select the appropriate department for your inquiry to ensure proper routing and faster response times
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={dept.icon as any} size={24} className="text-primary" />
                </div>
                <button
                  onClick={() => onSelectDepartment(dept.id)}
                  className="px-4 py-2 bg-primary text-primary-foreground text-sm font-cta rounded-md hover:bg-primary/90 transition-colors"
                >
                  Contact
                </button>
              </div>

              <h3 className="text-lg font-headline font-semibold text-secondary mb-2">
                {dept.name}
              </h3>
              
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {dept.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="EnvelopeIcon" size={16} className="text-primary" />
                  <a href={`mailto:${dept.email}`} className="text-text-primary hover:text-primary transition-colors">
                    {dept.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="PhoneIcon" size={16} className="text-primary" />
                  <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="text-text-primary hover:text-primary transition-colors">
                    {dept.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
                  <span>{dept.availability}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-xs text-success">
                  <Icon name="BoltIcon" size={14} className="text-success" />
                  <span>Response: {dept.responseTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentCards;