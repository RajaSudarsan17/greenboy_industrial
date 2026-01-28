import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface MetricCardProps {
  value: string;
  label: string;
  icon: string;
  trend?: string;
}

const MetricCard = ({ value, label, icon, trend }: MetricCardProps) => (
  <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-primary/10 rounded-lg">
        <Icon name={icon as any} size={24} className="text-primary" />
      </div>
      {trend && (
        <span className="text-xs font-mono text-success flex items-center gap-1">
          <Icon name="ArrowTrendingUpIcon" size={14} />
          {trend}
        </span>
      )}
    </div>
    <div className="space-y-1">
      <div className="text-3xl font-headline font-bold text-secondary">{value}</div>
      <div className="text-sm font-body text-text-secondary">{label}</div>
    </div>
  </div>
);

const HeroSection = () => {
  const metrics = [
    {
      value: '2,847',
      label: 'Units Produced This Month',
      icon: 'CogIcon',
      trend: '+12.5%',
    },
    {
      value: '99.8%',
      label: 'Quality Pass Rate',
      icon: 'CheckBadgeIcon',
      trend: '+0.3%',
    },
    {
      value: '48hrs',
      label: 'Average Lead Time',
      icon: 'ClockIcon',
      trend: '-8hrs',
    },
    {
      value: '100%',
      label: 'Compliance Status',
      icon: 'ShieldCheckIcon',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-background via-surface to-muted py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-success">ISO 9001:2015 Certified Manufacturing</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-secondary leading-tight">
              Certified Excellence in Power Generation
            </h1>
            
            <p className="text-lg text-text-secondary font-body leading-relaxed">
              Transparent manufacturing with verified quality systems. Government-approved, OEM-trusted, and export-ready power generation solutions backed by comprehensive regulatory compliance.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-action text-action-foreground font-cta text-base rounded-lg hover:bg-action/90 transition-colors duration-300 shadow-md"
              >
                Request Formal Quote
                <Icon name="ArrowRightIcon" size={20} />
              </Link>
              
              <Link
                href="/certifications"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card text-secondary border-2 border-border font-body font-semibold text-base rounded-lg hover:bg-muted transition-colors duration-300"
              >
                View Certifications
                <Icon name="DocumentCheckIcon" size={20} />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="ChartBarIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-bold text-secondary">Live Production Metrics</h3>
                  <p className="text-sm text-text-secondary font-body">Real-time manufacturing transparency</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Active Production Lines', value: '4/4', status: 'operational' },
                  { label: 'Current Shift Output', value: '127 units', status: 'on-target' },
                  { label: 'Quality Inspections Today', value: '89 passed', status: 'excellent' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-lg">
                    <span className="text-sm font-body text-text-secondary">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-mono font-semibold text-secondary">{item.value}</span>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;