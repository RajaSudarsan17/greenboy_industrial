import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`relative bg-secondary text-white overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1b3af06b7-1767945942748.png"
          alt="Modern industrial manufacturing facility with automated machinery and clean production floor"
          fill
          className="object-cover"
          priority />

      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-primary">ISO 9001:2015 Certified</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-headline font-bold mb-6 leading-tight">
            Precision Engineering with Environmental Consciousness
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            Green Boy India Private Limited represents the intersection of traditional Indian manufacturing excellence and modern compliance standards, positioning itself as the reliable partner for critical power generation needs.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-headline font-bold text-primary">25+</div>
              <div className="text-sm text-gray-300">Years of\nExcellence</div>
            </div>
            
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-headline font-bold text-primary">500+</div>
              <div className="text-sm text-gray-300">OEM\nPartnerships</div>
            </div>
            
            <div className="flex items-center space-x-3 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-headline font-bold text-primary">15+</div>
              <div className="text-sm text-gray-300">Export\nMarkets</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;