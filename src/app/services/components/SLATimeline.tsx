import Icon from '@/components/ui/AppIcon';

interface SLAPhase {
  phase: string;
  duration: string;
  description: string;
  icon: string;
}

interface SLATimelineProps {
  phases: SLAPhase[];
}

export default function SLATimeline({ phases }: SLATimelineProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-headline text-secondary mb-6">
        Service Level Agreement Timeline
      </h3>
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name={phase.icon as any} size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h4 className="text-base font-body-semibold text-secondary">
                  {phase.phase}
                </h4>
                <span className="px-2 py-1 bg-muted text-xs font-mono text-text-secondary rounded">
                  {phase.duration}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{phase.description}</p>
            </div>
            {index < phases.length - 1 && (
              <div className="absolute left-5 top-10 w-0.5 h-6 bg-border ml-5"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}