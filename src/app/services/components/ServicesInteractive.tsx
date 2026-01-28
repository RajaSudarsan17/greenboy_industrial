'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceCapabilityMatrix from './ServiceCapabilityMatrix';
import SLATimeline from './SLATimeline';
import CustomEngineeringWorkflow from './CustomEngineeringWorkflow';
import TestingFacilityTour from './TestingFacilityTour';
import ContactRouting from './ContactRouting';
import ServiceRequestForm from './ServiceRequestForm';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  slaTime: string;
}

interface Capability {
  category: string;
  capabilities: string[];
}

interface SLAPhase {
  phase: string;
  duration: string;
  description: string;
  icon: string;
}

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

interface FacilityArea {
  name: string;
  description: string;
  equipment: string[];
  image: string;
  alt: string;
}

interface Department {
  name: string;
  icon: string;
  email: string;
  phone: string;
  description: string;
  availability: string;
}

interface ServicesInteractiveProps {
  services: Service[];
  capabilities: Capability[];
  slaPhases: SLAPhase[];
  workflowSteps: WorkflowStep[];
  facilities: FacilityArea[];
  departments: Department[];
}

export default function ServicesInteractive({
  services,
  capabilities,
  slaPhases,
  workflowSteps,
  facilities,
  departments,
}: ServicesInteractiveProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setShowRequestForm(true);
  };

  const handleCloseForm = () => {
    setShowRequestForm(false);
    setSelectedService(null);
  };

  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline text-secondary mb-4">
              Professional Services Suite
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive manufacturing, testing, retrofitting, and custom
              engineering solutions with defined SLA commitments and transparent
              workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onInquire={() => handleInquire(service.title)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ServiceCapabilityMatrix capabilities={capabilities} />
            <SLATimeline phases={slaPhases} />
          </div>

          <div className="mb-16">
            <CustomEngineeringWorkflow steps={workflowSteps} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestingFacilityTour facilities={facilities} />
            <ContactRouting departments={departments} />
          </div>
        </div>
      </section>

      {showRequestForm && selectedService && (
        <ServiceRequestForm
          serviceType={selectedService}
          onClose={handleCloseForm}
        />
      )}
    </>
  );
}