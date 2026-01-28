import Icon from '@/components/ui/AppIcon';

interface Department {
  name: string;
  icon: string;
  email: string;
  phone: string;
  description: string;
  availability: string;
}

interface ContactRoutingProps {
  departments: Department[];
}

export default function ContactRouting({ departments }: ContactRoutingProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-secondary px-6 py-4">
        <h3 className="text-lg font-headline text-white">
          Department Contact Routing
        </h3>
      </div>
      <div className="divide-y divide-border">
        {departments.map((dept, index) => (
          <div key={index} className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={dept.icon as any} size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-body-semibold text-secondary mb-2">
                  {dept.name}
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon
                      name="EnvelopeIcon"
                      size={16}
                      className="text-text-secondary"
                    />
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-primary hover:underline"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon
                      name="PhoneIcon"
                      size={16}
                      className="text-text-secondary"
                    />
                    <a
                      href={`tel:${dept.phone}`}
                      className="text-primary hover:underline"
                    >
                      {dept.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon
                      name="ClockIcon"
                      size={16}
                      className="text-text-secondary"
                    />
                    <span className="text-text-primary">{dept.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}