'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import CertificationCard from './CertificationCard';
import TimelineItem from './TimelineItem';
import RegulationCard from './RegulationCard';
import ComplianceStats from './ComplianceStats';

interface Certification {
  id: string;
  name: string;
  issuedBy: string;
  certificateNumber: string;
  issueDate: string;
  validUntil: string;
  status: 'active' | 'expiring' | 'expired';
  image: string;
  alt: string;
  pdfUrl: string;
  verificationUrl?: string;
  category: string;
}

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'certification' | 'renewal' | 'audit' | 'update';
}

interface Regulation {
  id: string;
  title: string;
  authority: string;
  description: string;
  effectiveDate: string;
  category: string;
  icon: string;
}

export default function CertificationsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTimeline, setShowTimeline] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const stats = {
    activeCertifications: '12',
    complianceRate: '100%',
    auditsCompleted: '24',
    regulatoryUpdates: '18'
  };

  const certifications: Certification[] = [
  {
    id: '1',
    name: 'CPCB Type Approval',
    issuedBy: 'Central Pollution Control Board',
    certificateNumber: 'CPCB/TA/2024/GB/001',
    issueDate: '15/01/2024',
    validUntil: '14/01/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1778e6054-1767923841535.png",
    alt: 'Official CPCB certification document with green seal and government emblem on white paper',
    pdfUrl: '/certificates/cpcb-approval.pdf',
    verificationUrl: 'https://cpcb.nic.in/verify',
    category: 'emission'
  },
  {
    id: '2',
    name: 'ICAT Certification',
    issuedBy: 'International Centre for Automotive Technology',
    certificateNumber: 'ICAT/ENG/2024/0456',
    issueDate: '22/02/2024',
    validUntil: '21/02/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_132605906-1769176506287.png",
    alt: 'ICAT certification badge with blue and silver design showing automotive testing approval',
    pdfUrl: '/certificates/icat-cert.pdf',
    verificationUrl: 'https://icat.in/verify',
    category: 'automotive'
  },
  {
    id: '3',
    name: 'ARAI Homologation',
    issuedBy: 'Automotive Research Association of India',
    certificateNumber: 'ARAI/HOM/2024/GB/789',
    issueDate: '10/03/2024',
    validUntil: '09/03/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b2af3c4-1767778039361.png",
    alt: 'ARAI homologation certificate with red border and official stamp on cream paper',
    pdfUrl: '/certificates/arai-homologation.pdf',
    verificationUrl: 'https://araiindia.com/verify',
    category: 'automotive'
  },
  {
    id: '4',
    name: 'ISO 9001:2015',
    issuedBy: 'Bureau Veritas Certification',
    certificateNumber: 'IN/BVC/QMS/2024/001234',
    issueDate: '05/01/2024',
    validUntil: '04/01/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15316b97b-1764664880203.png",
    alt: 'ISO 9001:2015 quality management certificate with blue Bureau Veritas logo',
    pdfUrl: '/certificates/iso-9001.pdf',
    category: 'quality'
  },
  {
    id: '5',
    name: 'ISO 14001:2015',
    issuedBy: 'Bureau Veritas Certification',
    certificateNumber: 'IN/BVC/EMS/2024/001235',
    issueDate: '05/01/2024',
    validUntil: '04/01/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1deaa3e8a-1764657834137.png",
    alt: 'ISO 14001:2015 environmental management certificate with green leaf symbol',
    pdfUrl: '/certificates/iso-14001.pdf',
    category: 'environmental'
  },
  {
    id: '6',
    name: 'CE Marking',
    issuedBy: 'TÜV SÜD',
    certificateNumber: 'CE/TUV/2024/GB/567',
    issueDate: '18/04/2024',
    validUntil: '17/04/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1779e0b44-1767532439529.png",
    alt: 'CE marking certificate with European Union flag and TÜV SÜD certification seal',
    pdfUrl: '/certificates/ce-marking.pdf',
    category: 'export'
  },
  {
    id: '7',
    name: 'BS VI Compliance',
    issuedBy: 'Ministry of Road Transport & Highways',
    certificateNumber: 'MORTH/BSVI/2024/GB/123',
    issueDate: '12/05/2024',
    validUntil: '11/05/2027',
    status: 'active',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b19cf8a1-1766573063668.png",
    alt: 'BS VI emission compliance certificate with Indian government emblem and green checkmark',
    pdfUrl: '/certificates/bs6-compliance.pdf',
    category: 'emission'
  },
  {
    id: '8',
    name: 'Factory License',
    issuedBy: 'Tamil Nadu Factories Department',
    certificateNumber: 'TN/FAC/2024/CHN/456',
    issueDate: '01/01/2024',
    validUntil: '31/12/2024',
    status: 'expiring',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_16c60a7c1-1764783911969.png",
    alt: 'Factory license document with Tamil Nadu state seal and manufacturing authorization',
    pdfUrl: '/certificates/factory-license.pdf',
    category: 'regulatory'
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '15/01/2024',
    title: 'CPCB Type Approval Granted',
    description: 'Successfully obtained CPCB Type Approval for our latest emission control technology, valid for 3 years.',
    type: 'certification'
  },
  {
    id: '2',
    date: '22/02/2024',
    title: 'ICAT Certification Renewed',
    description: 'ICAT certification renewed after comprehensive testing and validation of our engine systems.',
    type: 'renewal'
  },
  {
    id: '3',
    date: '10/03/2024',
    title: 'ARAI Homologation Completed',
    description: 'Received ARAI homologation for new product line, enabling market entry for automotive applications.',
    type: 'certification'
  },
  {
    id: '4',
    date: '25/03/2024',
    title: 'ISO Surveillance Audit',
    description: 'Successfully completed annual surveillance audit for ISO 9001:2015 and ISO 14001:2015 certifications.',
    type: 'audit'
  },
  {
    id: '5',
    date: '18/04/2024',
    title: 'CE Marking Obtained',
    description: 'Achieved CE marking certification for European market compliance, expanding export capabilities.',
    type: 'certification'
  },
  {
    id: '6',
    date: '12/05/2024',
    title: 'BS VI Standards Met',
    description: 'All products now comply with BS VI emission standards as mandated by Indian government regulations.',
    type: 'update'
  }];


  const regulations: Regulation[] = [
  {
    id: '1',
    title: 'BS VI Emission Norms',
    authority: 'Ministry of Road Transport & Highways',
    description: 'Bharat Stage VI emission standards mandate stringent limits on pollutants from internal combustion engines. All new vehicles must comply with NOx, PM, and HC emission limits.',
    effectiveDate: '01/04/2020',
    category: 'Emission',
    icon: 'CloudIcon'
  },
  {
    id: '2',
    title: 'CPCB Noise Standards',
    authority: 'Central Pollution Control Board',
    description: 'Noise emission standards for diesel generator sets specify maximum permissible sound levels at various distances. Compliance requires acoustic testing and certification.',
    effectiveDate: '01/01/2023',
    category: 'Noise',
    icon: 'SpeakerWaveIcon'
  },
  {
    id: '3',
    title: 'Factory Act Compliance',
    authority: 'State Labour Department',
    description: 'Manufacturing facilities must maintain valid factory licenses, ensure worker safety standards, and comply with environmental regulations for industrial operations.',
    effectiveDate: '01/01/2024',
    category: 'Safety',
    icon: 'ShieldCheckIcon'
  },
  {
    id: '4',
    title: 'ISO 9001:2015 Requirements',
    authority: 'International Organization for Standardization',
    description: 'Quality management system standards requiring documented processes, continuous improvement, and customer satisfaction focus for manufacturing operations.',
    effectiveDate: '15/09/2015',
    category: 'Quality',
    icon: 'CheckBadgeIcon'
  },
  {
    id: '5',
    title: 'CE Marking Directives',
    authority: 'European Commission',
    description: 'Products sold in European Economic Area must meet safety, health, and environmental protection standards. Requires conformity assessment and technical documentation.',
    effectiveDate: '01/01/2023',
    category: 'Export',
    icon: 'GlobeAltIcon'
  },
  {
    id: '6',
    title: 'Environmental Clearance',
    authority: 'Ministry of Environment, Forest and Climate Change',
    description: 'Industrial projects require environmental impact assessment and clearance. Ongoing monitoring and compliance reporting mandatory for manufacturing operations.',
    effectiveDate: '01/06/2023',
    category: 'Environment',
    icon: 'SparklesIcon'
  }];


  const categories = [
  { id: 'all', label: 'All Certifications' },
  { id: 'emission', label: 'Emission Control' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'quality', label: 'Quality Management' },
  { id: 'environmental', label: 'Environmental' },
  { id: 'export', label: 'Export Compliance' },
  { id: 'regulatory', label: 'Regulatory' }];


  const filteredCertifications = certifications.filter((cert) => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesSearch = cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeSuccess(true);
      setEmail('');
      setTimeout(() => setSubscribeSuccess(false), 5000);
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="h-8 bg-muted rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-secondary via-accent to-secondary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                <Icon name="ShieldCheckIcon" size={28} className="text-success-foreground" variant="solid" />
              </div>
              <span className="px-4 py-1.5 bg-success/20 text-success-foreground text-sm font-mono rounded-full">
                100% Compliance Rate
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-white mb-6 leading-tight">
              Certifications &<br />Compliance Authority
            </h1>
            
            <p className="text-xl font-body text-white/90 leading-relaxed mb-8">
              Comprehensive regulatory compliance documentation with verified certifications from CPCB, ICAT, ARAI, and international standards bodies. Transparent proof of quality systems and manufacturing excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-cta rounded-md hover:bg-primary/90 transition-colors duration-300 shadow-lg">
                Download All Certificates
              </button>
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className="px-8 py-3 bg-white/10 text-white font-cta rounded-md hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm border border-white/20">

                View Compliance Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <ComplianceStats stats={stats} />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-headline font-bold text-secondary mb-2">
                Active Certifications
              </h2>
              <p className="text-base font-body text-text-secondary">
                Verified compliance documentation with downloadable certificates
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search certifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm font-body" />

              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) =>
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-body font-semibold transition-colors duration-300 ${
              selectedCategory === category.id ?
              'bg-primary text-primary-foreground' :
              'bg-card text-text-primary border border-border hover:bg-muted'}`
              }>

                {category.label}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) =>
            <CertificationCard key={cert.id} certification={cert} />
            )}
          </div>

          {filteredCertifications.length === 0 &&
          <div className="text-center py-16">
              <Icon name="DocumentMagnifyingGlassIcon" size={64} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-body text-text-secondary">
                No certifications found matching your criteria
              </p>
            </div>
          }
        </div>
      </section>

      {showTimeline &&
      <section className="py-16 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-headline font-bold text-secondary mb-2">
                  Compliance Timeline
                </h2>
                <p className="text-base font-body text-text-secondary">
                  Historical record of certifications, renewals, and audits
                </p>
              </div>
              <button
              onClick={() => setShowTimeline(false)}
              className="p-2 hover:bg-muted rounded-md transition-colors duration-300">

                <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
              </button>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              {timelineEvents.map((event, index) =>
            <TimelineItem
              key={event.id}
              item={event}
              isLast={index === timelineEvents.length - 1} />

            )}
            </div>
          </div>
        </section>
      }

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-headline font-bold text-secondary mb-2">
              Regulatory Standards & Education
            </h2>
            <p className="text-base font-body text-text-secondary">
              Understanding emission norms, manufacturing standards, and compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {regulations.map((regulation) =>
            <RegulationCard key={regulation.id} regulation={regulation} />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-success/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="BellAlertIcon" size={32} className="text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-headline font-bold text-secondary mb-2">
                  Subscribe to Regulatory Updates
                </h3>
                <p className="text-base font-body text-text-secondary mb-6">
                  Stay informed about emission norms, compliance changes, and certification renewals
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm font-body" />

                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-primary-foreground font-cta rounded-md hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap">

                    Subscribe Now
                  </button>
                </form>

                {subscribeSuccess &&
                <div className="mt-4 flex items-center space-x-2 text-success">
                    <Icon name="CheckCircleIcon" size={20} variant="solid" />
                    <span className="text-sm font-body">Successfully subscribed to regulatory updates!</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentCheckIcon" size={32} className="text-success-foreground" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-white mb-2">
                Verified Compliance
              </h3>
              <p className="text-sm font-body text-white/80">
                All certificates independently verifiable through issuing authority portals
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="ClockIcon" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-white mb-2">
                Real-Time Status
              </h3>
              <p className="text-sm font-body text-white/80">
                Live certification status with validity tracking and renewal alerts
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-trust/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="AcademicCapIcon" size={32} className="text-trust-foreground" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-white mb-2">
                Educational Resources
              </h3>
              <p className="text-sm font-body text-white/80">
                Comprehensive guides on emission norms and compliance requirements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>);

}