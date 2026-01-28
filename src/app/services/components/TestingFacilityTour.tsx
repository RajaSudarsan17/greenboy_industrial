import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FacilityArea {
  name: string;
  description: string;
  equipment: string[];
  image: string;
  alt: string;
}

interface TestingFacilityTourProps {
  facilities: FacilityArea[];
}

export default function TestingFacilityTour({
  facilities,
}: TestingFacilityTourProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="bg-secondary px-6 py-4">
        <h3 className="text-lg font-headline text-white">
          Testing Facility Virtual Tour
        </h3>
      </div>
      <div className="p-6 space-y-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <AppImage
                src={facility.image}
                alt={facility.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-body-semibold text-secondary mb-2">
                {facility.name}
              </h4>
              <p className="text-sm text-text-secondary mb-3">
                {facility.description}
              </p>
              <div className="bg-muted rounded-md p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="WrenchScrewdriverIcon"
                    size={16}
                    className="text-primary"
                  />
                  <span className="text-xs font-body-semibold text-text-secondary">
                    Equipment Available:
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {facility.equipment.map((item, eqIndex) => (
                    <span
                      key={eqIndex}
                      className="px-2 py-1 bg-card text-xs text-text-primary rounded border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}