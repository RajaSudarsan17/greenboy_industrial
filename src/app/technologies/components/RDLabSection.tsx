import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Lab {
  name: string;
  description: string;
  image: string;
  alt: string;
  capabilities: string[];
  equipment: string[];
}

interface RDLabSectionProps {
  labs: Lab[];
}

const RDLabSection: React.FC<RDLabSectionProps> = ({ labs }) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="BuildingOffice2Icon" size={32} className="text-primary" />
            <h2 className="text-4xl font-headline font-bold text-secondary">
              R&amp;D Laboratory Facilities
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            State-of-the-art research and development infrastructure for innovation and quality assurance
          </p>
        </div>
        
        <div className="space-y-12">
          {labs.map((lab, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <AppImage
                    src={lab.image}
                    alt={lab.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-headline font-bold text-secondary mb-4">
                  {lab.name}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {lab.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-body font-semibold text-text-primary uppercase tracking-wider mb-3 flex items-center space-x-2">
                    <Icon name="CogIcon" size={18} className="text-primary" />
                    <span>Core Capabilities</span>
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {lab.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-body font-semibold text-text-primary uppercase tracking-wider mb-3 flex items-center space-x-2">
                    <Icon name="WrenchScrewdriverIcon" size={18} className="text-primary" />
                    <span>Key Equipment</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.equipment.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-body rounded-md border border-accent/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RDLabSection;