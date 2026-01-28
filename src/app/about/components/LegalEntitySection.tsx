import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LegalEntitySectionProps {
  className?: string;
}

const LegalEntitySection: React.FC<LegalEntitySectionProps> = ({ className = '' }) => {
  const legalInfo = [
    {
      id: 1,
      label: 'Legal Entity Name',
      value: 'Green Boy India Private Limited',
      icon: 'BuildingOfficeIcon'
    },
    {
      id: 2,
      label: 'Corporate Identification Number',
      value: 'U29100TN2022PTC041234',
      icon: 'IdentificationIcon'
    },
    {
      id: 3,
      label: 'Registration Date',
      value: '15th March 2022',
      icon: 'CalendarIcon'
    },
    {
      id: 4,
      label: 'Registered Office',
      value: 'Plot No. 45, Industrial Estate, Ambattur, Chennai - 600058, Tamil Nadu, India',
      icon: 'MapPinIcon'
    },
    {
      id: 5,
      label: 'GST Number',
      value: '33AABCG1234F1Z5',
      icon: 'DocumentTextIcon'
    },
    {
      id: 6,
      label: 'PAN Number',
      value: 'AABCG1234F',
      icon: 'DocumentIcon'
    },
    {
      id: 7,
      label: 'Import Export Code',
      value: 'AABCG1234F',
      icon: 'GlobeAltIcon'
    },
    {
      id: 8,
      label: 'Factory License Number',
      value: 'TN/MFG/2024/001234',
      icon: 'ShieldCheckIcon'
    }
  ];

  const complianceDocuments = [
    'Certificate of Incorporation',
    'GST Registration Certificate',
    'Factory License',
    'Pollution Control Board Clearance',
    'ISO 9001:2015 Certificate',
    'ICAT Certification',
    'ARAI Approval Certificate',
    'Import Export License'
  ];

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Legal Entity Information
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Complete corporate documentation for government procurement and OEM partnership verification
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-headline font-bold text-secondary mb-6 flex items-center space-x-2">
              <Icon name="BuildingLibraryIcon" size={24} className="text-primary" />
              <span>Corporate Details</span>
            </h3>
            
            <div className="space-y-6">
              {legalInfo.map((info) => (
                <div key={info.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={info.icon as any} size={20} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm text-text-secondary mb-1">{info.label}</p>
                    <p className="text-base font-semibold text-secondary">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-headline font-bold text-secondary mb-6 flex items-center space-x-2">
              <Icon name="DocumentCheckIcon" size={24} className="text-success" />
              <span>Compliance Documentation</span>
            </h3>
            
            <div className="space-y-3">
              {complianceDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-surface rounded-lg hover:bg-muted transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="DocumentIcon" size={20} className="text-text-secondary" />
                    <span className="text-sm text-secondary">{doc}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={20} className="text-success" />
                    <span className="text-xs text-success font-semibold">Verified</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-text-secondary text-center">
                All documents available for verification upon request for government procurement and OEM partnership processes
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="ShieldCheckIcon" size={32} className="text-success" />
              </div>
              
              <div>
                <h4 className="text-lg font-headline font-bold text-secondary mb-1">
                  Government Approved Manufacturer
                </h4>
                <p className="text-sm text-text-secondary">
                  Registered with Ministry of MSME and eligible for government procurement
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-success">Active Status</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalEntitySection;