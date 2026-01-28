import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CertificationCardProps {
  certification: {
    id: string;
    name: string;
    issuedBy: string;
    certificateNumber: string;
    issueDate: string;
    validUntil: string;
    status: 'active' | 'expiring' | 'expired';
    image: string;
    alt: string;
    pdfUrl: string;
    verificationUrl?: string;
  };
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success/10 text-success';
      case 'expiring':
        return 'bg-warning/10 text-warning';
      case 'expired':
        return 'bg-error/10 text-error';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'expiring':
        return 'Expiring Soon';
      case 'expired':
        return 'Expired';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-muted overflow-hidden">
        <AppImage
          src={certification.image}
          alt={certification.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${getStatusColor(certification.status)}`}>
            {getStatusText(certification.status)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-headline font-bold text-secondary mb-2">
          {certification.name}
        </h3>
        <p className="text-sm font-body text-text-secondary mb-4">
          Issued by {certification.issuedBy}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start space-x-3">
            <Icon name="DocumentTextIcon" size={20} className="text-primary mt-0.5" />
            <div>
              <p className="text-xs font-body text-text-secondary">Certificate Number</p>
              <p className="text-sm font-mono text-text-primary">{certification.certificateNumber}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Icon name="CalendarIcon" size={20} className="text-primary mt-0.5" />
            <div>
              <p className="text-xs font-body text-text-secondary">Issue Date</p>
              <p className="text-sm font-body text-text-primary">{certification.issueDate}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Icon name="ClockIcon" size={20} className="text-primary mt-0.5" />
            <div>
              <p className="text-xs font-body text-text-secondary">Valid Until</p>
              <p className="text-sm font-body text-text-primary">{certification.validUntil}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300">
            <Icon name="ArrowDownTrayIcon" size={18} />
            <span className="text-sm font-cta">Download PDF</span>
          </button>
          
          {certification.verificationUrl && (
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors duration-300">
              <Icon name="ShieldCheckIcon" size={18} />
              <span className="text-sm font-cta">Verify</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}