import Icon from '@/components/ui/AppIcon';

interface TimelineItemProps {
  item: {
    id: string;
    date: string;
    title: string;
    description: string;
    type: 'certification' | 'renewal' | 'audit' | 'update';
  };
  isLast: boolean;
}

export default function TimelineItem({ item, isLast }: TimelineItemProps) {
  const getIconName = (type: string) => {
    switch (type) {
      case 'certification':
        return 'CheckBadgeIcon';
      case 'renewal':
        return 'ArrowPathIcon';
      case 'audit':
        return 'ClipboardDocumentCheckIcon';
      case 'update':
        return 'BellAlertIcon';
      default:
        return 'DocumentTextIcon';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'bg-success text-success-foreground';
      case 'renewal':
        return 'bg-primary text-primary-foreground';
      case 'audit':
        return 'bg-trust text-trust-foreground';
      case 'update':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="relative flex items-start space-x-4 pb-8">
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border"></div>
      )}
      
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getIconColor(item.type)} shadow-md z-10`}>
        <Icon name={getIconName(item.type)} size={20} variant="solid" />
      </div>

      <div className="flex-1 pt-1">
        <p className="text-xs font-mono text-text-secondary mb-1">{item.date}</p>
        <h4 className="text-base font-headline font-semibold text-secondary mb-1">
          {item.title}
        </h4>
        <p className="text-sm font-body text-text-secondary leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}