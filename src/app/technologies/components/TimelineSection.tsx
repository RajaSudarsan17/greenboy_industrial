import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ events }) => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-secondary mb-4">
            Innovation Timeline
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our journey of technological advancement and manufacturing excellence
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden lg:block"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:pr-12 lg:text-right">
                  <div className={`bg-card p-6 rounded-lg shadow-md border border-border ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className="flex items-center space-x-2 mb-3 lg:justify-end">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                        {event.category}
                      </span>
                      <span className="text-2xl font-headline font-bold text-primary">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-secondary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white hidden lg:flex">
                  <Icon name={event.icon as any} size={28} className="text-white" />
                </div>
                
                <div className="flex-1 lg:pl-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;