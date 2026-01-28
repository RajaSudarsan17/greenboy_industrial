import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FacilityLocationProps {
  className?: string;
}

const FacilityLocation: React.FC<FacilityLocationProps> = ({ className = '' }) => {
  const facilityInfo = {
    name: 'Green Boy India Private Limited',
    address: 'Plot No. 45, SIPCOT Industrial Park, Phase II, Sriperumbudur, Chennai - 602105, Tamil Nadu, India',
    coordinates: { lat: 12.9716, lng: 80.2595 },
    phone: '+91 99528 23148',
    email: 'support@greenboy.co.in',
    businessHours: [
      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
      { day: 'Saturday', hours: '9:00 AM - 2:00 PM IST' },
      { day: 'Sunday', hours: 'Closed' }
    ],
    emergencySupport: '24/7 Technical Support: +91 99528 23148'
  };

  const timeZones = [
    { zone: 'IST (India)', time: 'UTC +5:30' },
    { zone: 'EST (USA)', time: 'UTC -5:00' },
    { zone: 'GMT (UK)', time: 'UTC +0:00' },
    { zone: 'JST (Japan)', time: 'UTC +9:00' }
  ];

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-secondary mb-4">
            Manufacturing Facility Location
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Visit our ISO 9001:2015 certified manufacturing facility in Chennai, India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
            <div className="h-96 w-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Green Boy India Manufacturing Facility"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${facilityInfo.coordinates.lat},${facilityInfo.coordinates.lng}&z=14&output=embed`}
                className="border-0"
              />
            </div>
          </div>

          {/* Facility Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-headline font-semibold text-secondary mb-2">
                    {facilityInfo.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {facilityInfo.address}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`https://www.google.com/maps?q=${facilityInfo.coordinates.lat},${facilityInfo.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary text-sm rounded-md hover:bg-primary/20 transition-colors"
                    >
                      <Icon name="MapIcon" size={16} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-headline font-semibold text-secondary mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="PhoneIcon" size={20} className="text-primary" />
                  <a href={`tel:${facilityInfo.phone.replace(/\s/g, '')}`} className="text-text-primary hover:text-primary transition-colors">
                    {facilityInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="EnvelopeIcon" size={20} className="text-primary" />
                  <a href={`mailto:${facilityInfo.email}`} className="text-text-primary hover:text-primary transition-colors">
                    {facilityInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 pt-3 border-t border-border">
                  <Icon name="ExclamationTriangleIcon" size={20} className="text-urgent flex-shrink-0" />
                  <div>
                    <p className="text-sm font-body-semibold text-urgent mb-1">Emergency Support</p>
                    <p className="text-sm text-text-secondary">{facilityInfo.emergencySupport}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-headline font-semibold text-secondary mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                {facilityInfo.businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm font-body-semibold text-text-primary">{schedule.day}</span>
                    <span className="text-sm text-text-secondary">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Zones */}
            <div className="bg-muted border border-border rounded-lg p-6">
              <h3 className="text-sm font-headline font-semibold text-secondary mb-3">
                International Time Zones
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {timeZones.map((tz, index) => (
                  <div key={index} className="text-xs">
                    <p className="font-body-semibold text-text-primary">{tz.zone}</p>
                    <p className="text-muted-foreground">{tz.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facility Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: 'ShieldCheckIcon', label: 'ISO 9001:2015', desc: 'Certified Facility' },
            { icon: 'BuildingOffice2Icon', label: '50,000 sq ft', desc: 'Manufacturing Area' },
            { icon: 'TruckIcon', label: 'Easy Access', desc: 'Highway Connected' },
            { icon: 'ClockIcon', label: 'Visitor Hours', desc: 'By Appointment' }
          ].map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={feature.icon as any} size={24} className="text-primary" />
              </div>
              <p className="text-sm font-body-semibold text-secondary mb-1">{feature.label}</p>
              <p className="text-xs text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityLocation;