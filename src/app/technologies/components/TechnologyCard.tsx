import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface TechnologyCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  features: string[];
  compliance: string[];
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  description,
  image,
  alt,
  icon,
  features,
  compliance
}) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-border">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
          <Icon name={icon as any} size={24} className="text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-headline font-bold text-secondary mb-3">{title}</h3>
        <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-body font-semibold text-text-primary uppercase tracking-wider mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="CheckCircleIcon" size={18} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-border">
          <h4 className="text-xs font-body font-semibold text-text-primary uppercase tracking-wider mb-2">
            Compliance Standards
          </h4>
          <div className="flex flex-wrap gap-2">
            {compliance.map((standard, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-success/10 text-success text-xs font-mono rounded-full"
              >
                {standard}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;