interface Capability {
  category: string;
  capabilities: string[];
}

interface ServiceCapabilityMatrixProps {
  capabilities: Capability[];
}

export default function ServiceCapabilityMatrix({
  capabilities,
}: ServiceCapabilityMatrixProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-secondary px-6 py-4">
        <h3 className="text-lg font-headline text-white">
          Service Capability Matrix
        </h3>
      </div>
      <div className="divide-y divide-border">
        {capabilities.map((item, index) => (
          <div key={index} className="px-6 py-4">
            <h4 className="text-sm font-body-semibold text-secondary mb-3">
              {item.category}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {item.capabilities.map((capability, capIndex) => (
                <div
                  key={capIndex}
                  className="flex items-center space-x-2 text-sm text-text-primary"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}