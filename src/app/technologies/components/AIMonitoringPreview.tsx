'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MetricData {
  label: string;
  value: string;
  unit: string;
  status: 'optimal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface AIMonitoringPreviewProps {
  metrics: MetricData[];
}

const AIMonitoringPreview: React.FC<AIMonitoringPreviewProps> = ({ metrics }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeMetrics, setActiveMetrics] = useState<MetricData[]>([]);

  useEffect(() => {
    setIsHydrated(true);
    setActiveMetrics(metrics);
  }, [metrics]);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-gradient-to-br from-secondary to-accent text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold mb-4">
              AI-Powered Monitoring System
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real-time monitoring and predictive analytics for optimal performance
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 animate-pulse">
            <div className="h-64 bg-white/5 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'critical':
        return 'text-error';
      default:
        return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'ArrowTrendingUpIcon';
      case 'down':
        return 'ArrowTrendingDownIcon';
      default:
        return 'MinusIcon';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-secondary to-accent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="CpuChipIcon" size={32} className="text-primary" />
            <h2 className="text-4xl font-headline font-bold">
              AI-Powered Monitoring System
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-time monitoring and predictive analytics for optimal performance
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-mono">Live Monitoring Active</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-mono">
              <Icon name="ClockIcon" size={16} />
              <span>Updated: Just now</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <Icon
                    name={getTrendIcon(metric.trend) as any}
                    size={20}
                    className={getStatusColor(metric.status)}
                  />
                </div>
                
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-headline font-bold">
                    {metric.value}
                  </span>
                  <span className="text-lg text-gray-400">{metric.unit}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    metric.status === 'optimal' ? 'bg-success' :
                    metric.status === 'warning' ? 'bg-warning' : 'bg-error'
                  }`}></div>
                  <span className={`text-xs font-mono uppercase ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button className="px-6 py-3 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center space-x-2">
              <Icon name="ChartBarIcon" size={20} />
              <span>View Full Dashboard</span>
            </button>
            <button className="px-6 py-3 bg-white/10 text-white font-body font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center space-x-2">
              <Icon name="DocumentArrowDownIcon" size={20} />
              <span>Download Report</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMonitoringPreview;