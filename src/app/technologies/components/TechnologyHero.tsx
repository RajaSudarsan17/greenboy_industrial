import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TechnologyHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const TechnologyHero: React.FC<TechnologyHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-accent to-secondary text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-success rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="BeakerIcon" size={28} className="text-primary" />
          </div>
          <span className="text-sm font-mono text-primary uppercase tracking-wider">{subtitle}</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon name="CheckBadgeIcon" size={20} className="text-success" />
            <span className="text-sm font-body">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon name="ShieldCheckIcon" size={20} className="text-success" />
            <span className="text-sm font-body">CPCB Approved</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon name="CpuChipIcon" size={20} className="text-success" />
            <span className="text-sm font-body">AI-Powered Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;