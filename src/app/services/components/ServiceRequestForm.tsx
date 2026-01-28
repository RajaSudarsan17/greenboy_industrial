'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { formService } from '@/lib/services/formService';

interface ServiceRequestFormProps {
  serviceType: string;
  onClose: () => void;
}

export default function ServiceRequestForm({
  serviceType,
  onClose,
}: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceCategory: serviceType,
    projectDetails: '',
    timeline: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await formService.submitServiceRequest(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error: any) {
      setIsSubmitting(false);
      setErrorMessage(error?.message || 'Failed to submit request. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-secondary px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-headline text-white">
            Service Request Form
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        {submitSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon
                name="CheckCircleIcon"
                size={32}
                className="text-success"
                variant="solid"
              />
            </div>
            <h4 className="text-xl font-headline text-secondary mb-2">
              Request Submitted Successfully
            </h4>
            <p className="text-sm text-text-secondary">
              Our team will contact you within 24 hours
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body-semibold text-secondary mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-body-semibold text-secondary mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  placeholder="Enter contact person name"
                />
              </div>

              <div>
                <label className="block text-sm font-body-semibold text-secondary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  placeholder="email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-body-semibold text-secondary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-body-semibold text-secondary mb-2">
                Service Category *
              </label>
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              >
                <option value="Manufacturing Services">
                  Manufacturing Services
                </option>
                <option value="Testing & Certification">
                  Testing & Certification
                </option>
                <option value="Retrofitting Solutions">
                  Retrofitting Solutions
                </option>
                <option value="Custom Engineering">Custom Engineering</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-body-semibold text-secondary mb-2">
                Project Details *
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                placeholder="Describe your project requirements, specifications, and any specific compliance needs..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body-semibold text-secondary mb-2">
                  Expected Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  placeholder="e.g., 3-6 months"
                />
              </div>

              <div>
                <label className="block text-sm font-body-semibold text-secondary mb-2">
                  Budget Range (₹)
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  placeholder="e.g., 10,00,000 - 50,00,000"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md flex items-center space-x-2">
                <Icon name="ExclamationTriangleIcon" size={16} variant="solid" />
                <span className="text-xs">{errorMessage}</span>
              </div>
            )}

            <div className="flex items-center justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-border text-text-primary rounded-md hover:bg-muted transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-action text-action-foreground font-cta rounded-md hover:bg-action/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Request</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}