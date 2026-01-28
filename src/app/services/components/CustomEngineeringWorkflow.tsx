interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

interface CustomEngineeringWorkflowProps {
  steps: WorkflowStep[];
}

export default function CustomEngineeringWorkflow({
  steps,
}: CustomEngineeringWorkflowProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-headline text-secondary mb-6">
        Custom Engineering Project Workflow
      </h3>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-body-semibold text-sm">
                {step.step}
              </div>
              <div className="flex-1">
                <h4 className="text-base font-body-semibold text-secondary mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary mb-3">
                  {step.description}
                </p>
                <div className="bg-muted rounded-md p-3">
                  <p className="text-xs font-body-semibold text-text-secondary mb-2">
                    Deliverables:
                  </p>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, delIndex) => (
                      <li
                        key={delIndex}
                        className="text-xs text-text-primary flex items-start space-x-2"
                      >
                        <span className="text-primary">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-4 top-8 w-0.5 h-full bg-border"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}