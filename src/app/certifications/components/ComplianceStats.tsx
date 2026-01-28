import Icon from '@/components/ui/AppIcon';

interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
}

function StatCard({ icon, label, value, trend, trendDirection }: StatCardProps) {
  const getTrendColor = () => {
    if (!trendDirection) return '';
    switch (trendDirection) {
      case 'up':
        return 'text-success';
      case 'down':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>
        {trend && (
          <span className={`text-xs font-mono ${getTrendColor()}`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-3xl font-headline font-bold text-secondary mb-1">
        {value}
      </p>
      <p className="text-sm font-body text-text-secondary">
        {label}
      </p>
    </div>
  );
}

interface ComplianceStatsProps {
  stats: {
    activeCertifications: string;
    complianceRate: string;
    auditsCompleted: string;
    regulatoryUpdates: string;
  };
}

export default function ComplianceStats({ stats }: ComplianceStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon="CheckBadgeIcon"
        label="Active Certifications"
        value={stats.activeCertifications}
        trend="+2 this year"
        trendDirection="up"
      />
      <StatCard
        icon="ChartBarIcon"
        label="Compliance Rate"
        value={stats.complianceRate}
        trend="100% maintained"
        trendDirection="neutral"
      />
      <StatCard
        icon="ClipboardDocumentCheckIcon"
        label="Audits Completed"
        value={stats.auditsCompleted}
        trend="+5 vs last year"
        trendDirection="up"
      />
      <StatCard
        icon="BellAlertIcon"
        label="Regulatory Updates"
        value={stats.regulatoryUpdates}
        trend="Last 12 months"
        trendDirection="neutral"
      />
    </div>
  );
}