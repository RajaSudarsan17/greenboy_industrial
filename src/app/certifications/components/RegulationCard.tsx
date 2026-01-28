import Icon from '@/components/ui/AppIcon';

interface RegulationCardProps {
  regulation: {
    id: string;
    title: string;
    authority: string;
    description: string;
    effectiveDate: string;
    category: string;
    icon: string;
  };
}

export default function RegulationCard({ regulation }: RegulationCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={regulation.icon as any} size={24} className="text-primary" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-headline font-semibold text-secondary">
              {regulation.title}
            </h3>
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs font-mono rounded">
              {regulation.category}
            </span>
          </div>

          <p className="text-sm font-body text-primary mb-2">
            {regulation.authority}
          </p>

          <p className="text-sm font-body text-text-secondary leading-relaxed mb-4">
            {regulation.description}
          </p>

          <div className="flex items-center space-x-2 text-xs font-body text-text-secondary">
            <Icon name="CalendarIcon" size={16} />
            <span>Effective from {regulation.effectiveDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}