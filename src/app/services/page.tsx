import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
  title: 'Professional Services - GreenBoy Industrial',
  description:
  'Comprehensive manufacturing, testing, retrofitting, and custom engineering services with defined SLA commitments, transparent workflows, and multi-channel contact routing for government procurement, OEM partnerships, and export clients.'
};

export default function ServicesPage() {
  const services = [
  {
    icon: 'CogIcon',
    title: 'Manufacturing Services',
    description:
    'End-to-end manufacturing solutions with ISO 9001:2015 certified processes, quality control systems, and scalable production capabilities',
    features: [
    'Contract manufacturing with quality assurance',
    'Batch production with traceability systems',
    'Assembly line optimization and automation',
    'Supply chain integration and vendor management',
    'Quality documentation and compliance reporting'],

    slaTime: '4-8 weeks'
  },
  {
    icon: 'BeakerIcon',
    title: 'Testing & Certification',
    description:
    'Comprehensive testing procedures with CPCB, ICAT, and ARAI approved facilities ensuring regulatory compliance and performance validation',
    features: [
    'Emission testing per BS-VI and CPCB norms',
    'Performance testing and load analysis',
    'Durability and reliability testing',
    'Certification support and documentation',
    'Third-party audit facilitation'],

    slaTime: '2-4 weeks'
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Retrofitting Solutions',
    description:
    'Upgrade existing equipment to meet current emission standards with minimal downtime and comprehensive compliance documentation',
    features: [
    'BS-VI emission control retrofitting',
    'Engine upgrade and optimization',
    'Control system modernization',
    'Performance enhancement packages',
    'Post-retrofit certification support'],

    slaTime: '3-6 weeks'
  },
  {
    icon: 'LightBulbIcon',
    title: 'Custom Engineering',
    description:
    'Bespoke engineering solutions designed to specific requirements with full documentation, testing, and certification support',
    features: [
    'Custom engine design and development',
    'Specialized genset configurations',
    'Hybrid system integration',
    'Prototype development and testing',
    'Technical documentation and training'],

    slaTime: '8-16 weeks'
  }];


  const capabilities = [
  {
    category: 'Manufacturing Capabilities',
    capabilities: [
    'Engine assembly and testing',
    'Genset integration and commissioning',
    'RECD system manufacturing',
    'Control panel fabrication',
    'Custom enclosure design',
    'Wiring harness production']

  },
  {
    category: 'Testing Infrastructure',
    capabilities: [
    'Emission testing chambers',
    'Load bank testing facilities',
    'Endurance testing rigs',
    'Acoustic testing rooms',
    'Vibration analysis equipment',
    'Data acquisition systems']

  },
  {
    category: 'Engineering Services',
    capabilities: [
    'CAD/CAM design services',
    'Finite element analysis',
    'Thermal management design',
    'Electrical system design',
    'Control system programming',
    'Technical documentation']

  }];


  const slaPhases = [
  {
    phase: 'Initial Consultation',
    duration: '1-2 days',
    description:
    'Requirement analysis, feasibility assessment, and preliminary quotation with technical recommendations',
    icon: 'ChatBubbleLeftRightIcon'
  },
  {
    phase: 'Detailed Proposal',
    duration: '3-5 days',
    description:
    'Comprehensive technical proposal with specifications, timeline, cost breakdown, and compliance roadmap',
    icon: 'DocumentTextIcon'
  },
  {
    phase: 'Project Execution',
    duration: 'As per service',
    description:
    'Structured execution with milestone tracking, quality checkpoints, and regular progress reporting',
    icon: 'RocketLaunchIcon'
  },
  {
    phase: 'Quality Validation',
    duration: '1-2 weeks',
    description:
    'Comprehensive testing, certification support, and documentation delivery with training if required',
    icon: 'CheckBadgeIcon'
  },
  {
    phase: 'Post-Service Support',
    duration: 'Ongoing',
    description:
    'Technical support, warranty management, and maintenance guidance with documentation access',
    icon: 'LifebuoyIcon'
  }];


  const workflowSteps = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description:
    'Detailed discussion of technical requirements, compliance needs, timeline expectations, and budget parameters',
    deliverables: [
    'Requirement specification document',
    'Feasibility assessment report',
    'Preliminary cost estimate']

  },
  {
    step: 2,
    title: 'Design & Engineering',
    description:
    'Custom design development with CAD modeling, technical calculations, and compliance verification',
    deliverables: [
    'Detailed engineering drawings',
    'Bill of materials',
    'Compliance mapping document']

  },
  {
    step: 3,
    title: 'Prototype Development',
    description:
    'Prototype fabrication with iterative testing and design refinement based on performance data',
    deliverables: [
    'Working prototype',
    'Test reports and data analysis',
    'Design optimization recommendations']

  },
  {
    step: 4,
    title: 'Production & Testing',
    description:
    'Full-scale production with quality control, comprehensive testing, and certification support',
    deliverables: [
    'Production units',
    'Quality assurance documentation',
    'Certification support package']

  },
  {
    step: 5,
    title: 'Delivery & Support',
    description:
    'Installation support, operator training, technical documentation, and ongoing maintenance guidance',
    deliverables: [
    'Installation manual',
    'Operator training materials',
    'Maintenance schedule and support plan']

  }];


  const facilities = [
  {
    name: 'Emission Testing Laboratory',
    description:
    'CPCB approved emission testing facility with advanced gas analyzers and data acquisition systems for BS-VI compliance verification',
    equipment: [
    'Five Gas Analyzer',
    'Smoke Meter',
    'Opacity Meter',
    'Data Logger'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb63d6e1-1766488665776.png",
    alt: 'Modern industrial emission testing laboratory with advanced gas analyzers and computer monitoring systems'
  },
  {
    name: 'Performance Testing Bay',
    description:
    'Load bank testing facility with variable load simulation, power quality analysis, and endurance testing capabilities',
    equipment: [
    'Load Banks (500 kVA)',
    'Power Analyzer',
    'Oscilloscope',
    'Temperature Sensors'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8b829ff-1769176507481.png",
    alt: 'Industrial performance testing bay with large load banks and electronic monitoring equipment'
  },
  {
    name: 'Acoustic Testing Chamber',
    description:
    'Sound-insulated testing chamber for noise level measurement and acoustic performance validation per regulatory standards',
    equipment: [
    'Sound Level Meter',
    'Frequency Analyzer',
    'Acoustic Camera',
    'Calibration Equipment'],

    image: "https://images.unsplash.com/photo-1700257908436-058738972cd9",
    alt: 'Soundproof acoustic testing chamber with foam-lined walls and precision measurement instruments'
  }];


  const departments = [
  {
    name: 'Sales & Business Development',
    icon: 'BriefcaseIcon',
    email: 'sales@greenboy.co.in',
    phone: '+91 99528 23148',
    description:
    'New business inquiries, quotation requests, and partnership opportunities',
    availability: 'Mon-Sat, 9:00 AM - 6:00 PM IST'
  },
  {
    name: 'Compliance & Certification',
    icon: 'ShieldCheckIcon',
    email: 'compliance@greenboy.co.in',
    phone: '+91 99528 23148',
    description:
    'Certification support, regulatory queries, and compliance documentation',
    availability: 'Mon-Fri, 9:00 AM - 5:00 PM IST'
  },
  {
    name: 'Technical Operations',
    icon: 'WrenchIcon',
    email: 'operations@greenboy.co.in',
    phone: '+91 99528 23148',
    description:
    'Technical support, service requests, and engineering consultations',
    availability: 'Mon-Sat, 8:00 AM - 7:00 PM IST'
  }];


  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-16">
        <section className="bg-gradient-to-br from-secondary to-accent py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-white">
                ISO 9001:2015 Certified Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline text-white mb-6">
              Professional Engineering Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Comprehensive manufacturing, testing, retrofitting, and custom
              engineering solutions with transparent SLA commitments and
              dedicated support for government procurement, OEM partnerships, and
              export clients
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-body-semibold">4</span>
                </div>
                <span className="text-sm">Service Categories</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-body-semibold">15+</span>
                </div>
                <span className="text-sm">Capabilities</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-body-semibold">24/7</span>
                </div>
                <span className="text-sm">Support Available</span>
              </div>
            </div>
          </div>
        </section>

        <ServicesInteractive
          services={services}
          capabilities={capabilities}
          slaPhases={slaPhases}
          workflowSteps={workflowSteps}
          facilities={facilities}
          departments={departments} />


        <section className="bg-muted py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-headline text-secondary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Contact our technical team for detailed consultation and customized
              service proposals
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-action text-action-foreground font-cta rounded-md hover:bg-action/90 transition-colors duration-300 shadow-sm">

                Request Consultation
              </a>
              <a
                href="tel:+919952823148"
                className="px-8 py-3 border border-border text-text-primary rounded-md hover:bg-card transition-colors duration-300">

                Call: +91 99528 23148
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-secondary text-white py-8 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Green Boy India Private Limited. All
              rights reserved. | ISO 9001:2015 Certified
            </p>
          </div>
        </footer>
      </div>
    </main>);

}