import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  id: string;
  name: string;
  authority: string;
  certificateNumber: string;
  validUntil: string;
  status: 'active' | 'expiring-soon';
  icon: string;
  image: string;
  alt: string;
}

const CertificationStatus = () => {
  const certifications: Certification[] = [
  {
    id: '1',
    name: 'CPCB Type Approval',
    authority: 'Central Pollution Control Board',
    certificateNumber: 'CPCB/TA/2024/1847',
    validUntil: '2027-03-15',
    status: 'active',
    icon: 'ShieldCheckIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1778e6054-1767923841535.png",
    alt: 'Official CPCB certification document with green seal and government emblem on white paper'
  },
  {
    id: '2',
    name: 'ICAT Certification',
    authority: 'International Centre for Automotive Technology',
    certificateNumber: 'ICAT/ENG/2024/5629',
    validUntil: '2026-08-22',
    status: 'active',
    icon: 'DocumentCheckIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c78a337-1769176507032.png",
    alt: 'ICAT automotive certification certificate with blue border and technical specifications'
  },
  {
    id: '3',
    name: 'ARAI Homologation',
    authority: 'Automotive Research Association of India',
    certificateNumber: 'ARAI/HOM/2024/3421',
    validUntil: '2026-11-30',
    status: 'active',
    icon: 'CheckBadgeIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3c3dab3-1767702798705.png",
    alt: 'ARAI homologation certificate with red stamp and automotive testing authority logo'
  },
  {
    id: '4',
    name: 'ISO 9001:2015',
    authority: 'International Organization for Standardization',
    certificateNumber: 'ISO/QMS/2023/7845',
    validUntil: '2026-12-31',
    status: 'active',
    icon: 'StarIcon',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_102b0d314-1767799476487.png",
    alt: 'ISO 9001:2015 quality management system certificate with international accreditation seal'
  }];


  const getStatusColor = (status: string) => {
    return status === 'active' ? 'text-success' : 'text-warning';
  };

  const getStatusBg = (status: string) => {
    return status === 'active' ? 'bg-success/10' : 'bg-warning/10';
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
            <span className="text-sm font-mono text-primary">Regulatory Compliance</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Active Certifications & Compliance Status
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            All certifications are current and independently verifiable. Download official certificates and verification documents for procurement and audit purposes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {certifications.map((cert) =>
          <div
            key={cert.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">

              <div className="relative h-48 bg-surface overflow-hidden">
                <AppImage
                src={cert.image}
                alt={cert.alt}
                className="w-full h-full object-cover" />

                <div className="absolute top-4 right-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 ${getStatusBg(cert.status)} rounded-full`}>
                    <div className={`w-2 h-2 ${getStatusColor(cert.status)} rounded-full animate-pulse`}></div>
                    <span className={`text-xs font-mono ${getStatusColor(cert.status)}`}>
                      {cert.status === 'active' ? 'Active' : 'Expiring Soon'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon name={cert.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-headline font-bold text-secondary mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-text-secondary font-body">
                      {cert.authority}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between py-2 border-b border-border">
                    <span className="text-sm text-text-secondary font-body">Certificate Number</span>
                    <span className="text-sm font-mono text-secondary">{cert.certificateNumber}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-text-secondary font-body">Valid Until</span>
                    <span className="text-sm font-mono text-secondary">{cert.validUntil}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300">
                    <Icon name="ArrowDownTrayIcon" size={16} />
                    Download Certificate
                  </button>
                  <button className="px-4 py-2.5 bg-surface text-secondary border border-border font-body font-semibold text-sm rounded-lg hover:bg-muted transition-colors duration-300">
                    <Icon name="EyeIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-cta text-base rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-md">

            View All Certifications & Compliance Documentation
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default CertificationStatus;