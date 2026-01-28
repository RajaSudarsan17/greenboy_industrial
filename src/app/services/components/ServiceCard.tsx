import Icon from '@/components/ui/AppIcon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  slaTime: string;
  onInquire: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  slaTime,
  onInquire,
}: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevation-md transition-shadow duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-headline text-secondary mb-2">{title}</h3>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-2">
            <Icon
              name="CheckCircleIcon"
              size={16}
              className="text-success flex-shrink-0 mt-0.5"
              variant="solid"
            />
            <span className="text-sm text-text-primary">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <Icon name="ClockIcon" size={16} className="text-text-secondary" />
          <span className="text-xs font-mono text-text-secondary">
            SLA: {slaTime}
          </span>
        </div>
        <button
          onClick={onInquire}
          className="px-4 py-2 bg-action text-action-foreground text-sm font-cta rounded-md hover:bg-action/90 transition-colors duration-300"
        >
          Request Service
        </button>
      </div>
    </div>
  );
}