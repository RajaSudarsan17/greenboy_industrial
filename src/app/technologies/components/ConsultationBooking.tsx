'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import { formService } from '@/lib/services/formService';

interface ConsultationBookingProps {
  expertiseAreas: string[];
}

const ConsultationBooking: React.FC<ConsultationBookingProps> = ({ expertiseAreas }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    expertise: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card rounded-lg shadow-lg p-8 animate-pulse">
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await formService.submitConsultationBooking(formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          expertise: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error: any) {
      setIsSubmitting(false);
      setErrorMessage(error?.message || 'Failed to submit consultation request. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-success p-8 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="CalendarDaysIcon" size={32} />
              <h2 className="text-3xl font-headline font-bold">
                Schedule Technical Consultation
              </h2>
            </div>
            <p className="text-lg text-gray-100">
              Connect with our engineering experts for custom solutions and technical guidance
            </p>
          </div>
          
          {submitSuccess ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircleIcon" size={32} className="text-success" variant="solid" />
              </div>
              <h3 className="text-2xl font-headline text-secondary mb-2">
                Request Submitted Successfully
              </h3>
              <p className="text-text-secondary">
                Our technical team will contact you within 24 hours
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-body font-semibold text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-body font-semibold text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-body font-semibold text-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-body font-semibold text-text-primary mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="expertise" className="block text-sm font-body font-semibold text-text-primary mb-2">
                  Area of Interest *
                </label>
                <select
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary"
                >
                  <option value="">Select an area</option>
                  {expertiseAreas.map((area, index) => (
                    <option key={index} value={area}>{area}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-body font-semibold text-text-primary mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary resize-none"
                  placeholder="Describe your technical requirements, project scope, and specific consultation needs..."
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3 mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-text-secondary">
                  I agree to the terms and conditions and authorize Green Boy India to contact me regarding my consultation request. I understand that technical consultations are subject to availability and may require NDA execution.
                </label>
              </div>
              
              {errorMessage && (
                <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md flex items-center space-x-2 mb-6">
                  <Icon name="ExclamationTriangleIcon" size={20} variant="solid" />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-action text-action-foreground font-cta text-lg rounded-lg hover:bg-action/90 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} />
                    <span>Submit Consultation Request</span>
                  </>
                )}
              </button>
              
              <p className="text-xs text-text-secondary text-center mt-4">
                Our technical team typically responds within 24 hours during business days
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationBooking;