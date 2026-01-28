import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface VisionMissionSectionProps {
  className?: string;
}

const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ className = '' }) => {
  const visionMission = [
    {
      id: 1,
      icon: 'EyeIcon',
      title: 'Our Vision',
      description: 'To be the most trusted name in power generation solutions across India and global markets, recognized for uncompromising quality, regulatory compliance, and manufacturing transparency. We envision a future where every engine we produce contributes to cleaner air and sustainable industrial growth.',
      color: 'text-primary'
    },
    {
      id: 2,
      icon: 'RocketLaunchIcon',
      title: 'Our Mission',
      description: 'To manufacture emission-compliant power generation equipment that meets the highest international standards while maintaining radical transparency in our production processes. We are committed to building long-term partnerships with OEMs and government entities through certified excellence and technical innovation.',
      color: 'text-trust'
    },
    {
      id: 3,
      icon: 'ShieldCheckIcon',
      title: 'Our Values',
      description: 'Compliance-first engineering, transparent manufacturing practices, technical precision, environmental responsibility, and unwavering commitment to quality. We believe in factual communication, measurable results, and building trust through documentation rather than marketing claims.',
      color: 'text-success'
    }
  ];

  return (
    <section className={`py-16 lg:py-24 bg-surface ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Manufacturing Philosophy
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Building trust through radical transparency and compliance-first engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {visionMission.map((item) => (
            <div
              key={item.id}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} bg-current/10 rounded-lg mb-6`}>
                <Icon name={item.icon as any} size={32} className={item.color} />
              </div>
              
              <h3 className="text-xl font-headline font-bold text-secondary mb-4">
                {item.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;