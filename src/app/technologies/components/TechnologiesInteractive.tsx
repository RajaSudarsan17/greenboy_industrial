'use client';

import React from 'react';
import TechnologyHero from './TechnologyHero';
import TechnologyCard from './TechnologyCard';
import TimelineSection from './TimelineSection';
import RDLabSection from './RDLabSection';
import AIMonitoringPreview from './AIMonitoringPreview';
import WhitePaperSection from './WhitePaperSection';
import ConsultationBooking from './ConsultationBooking';

interface Technology {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  features: string[];
  compliance: string[];
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface Lab {
  name: string;
  description: string;
  image: string;
  alt: string;
  capabilities: string[];
  equipment: string[];
}

interface MetricData {
  label: string;
  value: string;
  unit: string;
  status: 'optimal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface WhitePaper {
  title: string;
  description: string;
  category: string;
  pages: number;
  publishDate: string;
  fileSize: string;
}

const TechnologiesInteractive: React.FC = () => {
  const heroData = {
    title: "Engineering Innovation & R&D Excellence",
    subtitle: "Technology Leadership",
    description: "Advanced emission control systems, hybrid power solutions, and AI-powered monitoring technologies developed through rigorous research and certified manufacturing processes. Our R&D facilities drive continuous innovation in sustainable power generation."
  };

  const technologies: Technology[] = [
  {
    title: "Advanced Emission Control Systems",
    description: "Proprietary emission reduction technology achieving BS-VI compliance through multi-stage filtration, catalytic conversion, and real-time monitoring systems. Certified by CPCB and ICAT for industrial and automotive applications.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ca42259-1768404767489.png",
    alt: "Close-up of industrial emission control system with metallic pipes and sensors in modern manufacturing facility",
    icon: "CloudIcon",
    features: [
    "Multi-stage particulate filtration system",
    "Catalytic converter with precious metal coating",
    "Real-time NOx and CO monitoring",
    "Automated regeneration cycles",
    "CPCB-approved emission levels"],

    compliance: ["BS-VI", "CPCB", "ICAT", "ISO 14001"]
  },
  {
    title: "Hybrid Power Generation Systems",
    description: "Integrated diesel-electric hybrid systems optimizing fuel efficiency and reducing emissions through intelligent load management and battery storage integration. Suitable for industrial and commercial applications.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1da356e10-1764701642630.png",
    alt: "Modern hybrid power generation unit with solar panels and battery storage system in industrial setting",
    icon: "BoltIcon",
    features: [
    "Seamless diesel-electric switching",
    "Lithium-ion battery integration",
    "Smart load distribution algorithms",
    "30-40% fuel consumption reduction",
    "Grid synchronization capability"],

    compliance: ["CEA", "BIS", "ISO 50001"]
  },
  {
    title: "Industrial Automation & Control",
    description: "PLC-based automation systems with SCADA integration for comprehensive monitoring and control of power generation equipment. Enables predictive maintenance and operational efficiency optimization.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_188781ca2-1765292778598.png",
    alt: "Industrial control room with multiple monitors displaying real-time data and automation systems",
    icon: "CpuChipIcon",
    features: [
    "Siemens S7-1500 PLC integration",
    "SCADA visualization systems",
    "Remote monitoring capabilities",
    "Predictive maintenance algorithms",
    "Data logging and analytics"],

    compliance: ["IEC 61131", "ISO 9001"]
  },
  {
    title: "AI-Powered Predictive Monitoring",
    description: "Machine learning algorithms analyzing operational data to predict equipment failures, optimize maintenance schedules, and maximize uptime. Reduces unplanned downtime by up to 60%.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c2d1099-1766856637004.png",
    alt: "Digital dashboard showing AI analytics with graphs and predictive maintenance alerts on computer screens",
    icon: "ChartBarIcon",
    features: [
    "Vibration analysis and pattern recognition",
    "Temperature anomaly detection",
    "Oil analysis and degradation prediction",
    "Automated alert generation",
    "Historical trend analysis"],

    compliance: ["ISO 55001", "Industry 4.0"]
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "R&D Center Establishment",
    description: "Established state-of-the-art R&D facility in Chennai with emission testing laboratories and prototype development capabilities. Initial focus on BS-IV compliance research.",
    icon: "BuildingOffice2Icon",
    category: "Infrastructure"
  },
  {
    year: "2019",
    title: "BS-VI Emission Technology",
    description: "Developed proprietary emission control system achieving BS-VI norms ahead of regulatory deadlines. Received CPCB certification for industrial genset applications.",
    icon: "CloudIcon",
    category: "Innovation"
  },
  {
    year: "2020",
    title: "Hybrid System Integration",
    description: "Successfully integrated diesel-electric hybrid technology with 35% fuel efficiency improvement. Deployed first commercial installation for manufacturing client.",
    icon: "BoltIcon",
    category: "Product Launch"
  },
  {
    year: "2021",
    title: "AI Monitoring Platform",
    description: "Launched AI-powered predictive maintenance platform using machine learning algorithms. Achieved 60% reduction in unplanned downtime for pilot customers.",
    icon: "CpuChipIcon",
    category: "Digital Innovation"
  },
  {
    year: "2022",
    title: "ICAT Certification Achievement",
    description: "Obtained ICAT certification for complete product range. Expanded testing capabilities with advanced emission measurement equipment.",
    icon: "ShieldCheckIcon",
    category: "Compliance"
  },
  {
    year: "2023",
    title: "Export Market Expansion",
    description: "Received international certifications enabling export to Southeast Asian markets. Established technical partnerships with OEM manufacturers.",
    icon: "GlobeAltIcon",
    category: "Growth"
  }];


  const labs: Lab[] = [
  {
    name: "Emission Testing Laboratory",
    description: "NABL-accredited emission testing facility equipped with advanced gas analyzers, particulate measurement systems, and environmental chambers. Capable of testing engines from 5 kVA to 500 kVA capacity under various load conditions and ambient temperatures.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c690231-1768279670922.png",
    alt: "Modern emission testing laboratory with sophisticated gas analyzers and measurement equipment",
    capabilities: [
    "BS-VI emission measurement",
    "Particulate matter analysis",
    "NOx and CO quantification",
    "Smoke opacity testing",
    "Temperature-controlled testing"],

    equipment: [
    "AVL DiGas 4000",
    "Horiba MEXA-7100",
    "TSI DustTrak",
    "Environmental Chamber"]

  },
  {
    name: "Performance Testing Facility",
    description: "Comprehensive dynamometer testing facility for engine performance validation, fuel consumption measurement, and load testing. Equipped with data acquisition systems for detailed performance mapping and efficiency optimization.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11166b009-1768404767834.png",
    alt: "Industrial performance testing facility with large dynamometer and monitoring equipment",
    capabilities: [
    "Full-load performance testing",
    "Fuel consumption mapping",
    "Thermal efficiency analysis",
    "Vibration and noise measurement",
    "Endurance testing protocols"],

    equipment: [
    "Eddy Current Dynamometer",
    "Fuel Flow Meters",
    "Data Acquisition Systems",
    "Vibration Analyzers"]

  }];


  const metrics: MetricData[] = [
  {
    label: "Emission Levels",
    value: "0.15",
    unit: "g/kWh",
    status: "optimal",
    trend: "down"
  },
  {
    label: "Fuel Efficiency",
    value: "92.5",
    unit: "%",
    status: "optimal",
    trend: "up"
  },
  {
    label: "System Uptime",
    value: "99.7",
    unit: "%",
    status: "optimal",
    trend: "stable"
  },
  {
    label: "Maintenance Alerts",
    value: "3",
    unit: "Active",
    status: "warning",
    trend: "stable"
  }];


  const whitePapers: WhitePaper[] = [
  {
    title: "BS-VI Emission Control: Technical Implementation Guide",
    description: "Comprehensive analysis of BS-VI emission standards implementation in industrial gensets, covering catalytic converter design, filtration systems, and compliance testing procedures.",
    category: "Emission Control",
    pages: 45,
    publishDate: "December 2023",
    fileSize: "3.2 MB"
  },
  {
    title: "Hybrid Power Systems: Efficiency Optimization Strategies",
    description: "Technical documentation on diesel-electric hybrid system design, battery integration methodologies, and load management algorithms for industrial applications.",
    category: "Hybrid Systems",
    pages: 38,
    publishDate: "October 2023",
    fileSize: "2.8 MB"
  },
  {
    title: "Predictive Maintenance Using Machine Learning",
    description: "Research paper on AI-powered predictive maintenance algorithms, vibration analysis techniques, and failure prediction models for power generation equipment.",
    category: "AI & Automation",
    pages: 52,
    publishDate: "August 2023",
    fileSize: "4.1 MB"
  },
  {
    title: "Industrial Automation: PLC Integration Best Practices",
    description: "Technical guide for implementing PLC-based automation systems in power generation facilities, including SCADA integration and remote monitoring setup.",
    category: "Automation",
    pages: 41,
    publishDate: "June 2023",
    fileSize: "3.5 MB"
  },
  {
    title: "Fuel Efficiency Optimization in Diesel Engines",
    description: "Engineering analysis of fuel injection timing, combustion optimization, and thermal efficiency improvement techniques for industrial diesel engines.",
    category: "Performance",
    pages: 36,
    publishDate: "April 2023",
    fileSize: "2.6 MB"
  },
  {
    title: "Regulatory Compliance Framework for Power Generation",
    description: "Comprehensive guide to CPCB, ICAT, and ARAI certification requirements, testing procedures, and documentation standards for industrial power equipment.",
    category: "Compliance",
    pages: 48,
    publishDate: "February 2023",
    fileSize: "3.8 MB"
  }];


  const expertiseAreas = [
  "Emission Control Systems",
  "Hybrid Power Solutions",
  "Industrial Automation",
  "AI Monitoring & Analytics",
  "Custom Engine Development",
  "Retrofitting & Upgrades",
  "Compliance Consulting",
  "Performance Optimization"];


  return (
    <>
      <TechnologyHero
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description} />

      
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-secondary mb-4">
              Core Technology Platforms
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Certified engineering solutions backed by rigorous testing and regulatory compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) =>
            <TechnologyCard
              key={index}
              title={tech.title}
              description={tech.description}
              image={tech.image}
              alt={tech.alt}
              icon={tech.icon}
              features={tech.features}
              compliance={tech.compliance} />

            )}
          </div>
        </div>
      </section>
      
      <TimelineSection events={timelineEvents} />
      
      <RDLabSection labs={labs} />
      
      <AIMonitoringPreview metrics={metrics} />
      
      <WhitePaperSection papers={whitePapers} />
      
      <ConsultationBooking expertiseAreas={expertiseAreas} />
    </>);

};

export default TechnologiesInteractive;