'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { formService } from '@/lib/services/formService';

interface FormData {
  department: string;
  inquiryType: string;
  organizationType: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  country: string;
  subject: string;
  message: string;
  attachments: File[];
  urgency: string;
  preferredContact: string;
}

interface ContactFormProps {
  selectedDepartment?: string;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedDepartment = '', className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    department: selectedDepartment,
    inquiryType: '',
    organizationType: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    country: 'India',
    subject: '',
    message: '',
    attachments: [],
    urgency: 'normal',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const departments = [
    { value: 'sales', label: 'Sales & Business Development' },
    { value: 'compliance', label: 'Compliance & Certifications' },
    { value: 'operations', label: 'Operations & Production' },
    { value: 'technical', label: 'Technical Engineering' },
    { value: 'support', label: 'After-Sales Support' },
    { value: 'export', label: 'Export & International' }
  ];

  const inquiryTypes = [
    { value: 'product_inquiry', label: 'Product Inquiry' },
    { value: 'quotation', label: 'Quotation Request' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'compliance', label: 'Compliance Documentation' },
    { value: 'technical', label: 'Technical Consultation' },
    { value: 'support', label: 'Product Support' },
    { value: 'export', label: 'Export Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  const organizationTypes = [
    { value: 'government', label: 'Government/Public Sector' },
    { value: 'oem', label: 'OEM/Manufacturing Partner' },
    { value: 'distributor', label: 'Distributor/Dealer' },
    { value: 'end_user', label: 'End User/Corporate' },
    { value: 'export', label: 'International Buyer' },
    { value: 'consultant', label: 'Consultant/Auditor' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, attachments: Array.from(e.target.files || []) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await formService.submitContactForm({
        department: formData.department,
        inquiryType: formData.inquiryType,
        organizationType: formData.organizationType,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        designation: formData.designation,
        country: formData.country,
        subject: formData.subject,
        message: formData.message,
        urgency: formData.urgency,
        preferredContact: formData.preferredContact,
      });

      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          department: '',
          inquiryType: '',
          organizationType: '',
          fullName: '',
          email: '',
          phone: '',
          company: '',
          designation: '',
          country: 'India',
          subject: '',
          message: '',
          attachments: [],
          urgency: 'normal',
          preferredContact: 'email'
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error: any) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(error?.message || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-headline font-bold text-secondary mb-2">
              Professional Inquiry Form
            </h2>
            <p className="text-text-secondary">
              Complete this form for proper routing and faster response. All fields marked with * are mandatory.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Department & Inquiry Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="department" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Department *
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>{dept.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select Inquiry Type</option>
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Organization Type */}
            <div>
              <label htmlFor="organizationType" className="block text-sm font-body-semibold text-text-primary mb-2">
                Organization Type *
              </label>
              <select
                id="organizationType"
                name="organizationType"
                value={formData.organizationType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Organization Type</option>
                {organizationTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Company name"
                />
              </div>
            </div>

            {/* Designation & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="designation" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your role/position"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="India"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-body-semibold text-text-primary mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Brief subject of your inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-body-semibold text-text-primary mb-2">
                Detailed Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Provide detailed information about your inquiry, including specific requirements, quantities, timelines, or technical specifications..."
              />
            </div>

            {/* Urgency & Preferred Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="urgency" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Urgency Level
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="low">Low - General Inquiry</option>
                  <option value="normal">Normal - Standard Response</option>
                  <option value="high">High - Priority Request</option>
                  <option value="urgent">Urgent - Immediate Attention</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-body-semibold text-text-primary mb-2">
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="both">Both Email & Phone</option>
                </select>
              </div>
            </div>

            {/* File Attachments */}
            <div>
              <label htmlFor="attachments" className="block text-sm font-body-semibold text-text-primary mb-2">
                Attachments (Optional)
              </label>
              <div className="border-2 border-dashed border-input rounded-md p-6 text-center">
                <input
                  type="file"
                  id="attachments"
                  name="attachments"
                  onChange={handleFileChange}
                  multiple
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                />
                <label htmlFor="attachments" className="cursor-pointer">
                  <Icon name="DocumentArrowUpIcon" size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-text-secondary mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, XLS, JPG, PNG (Max 10MB per file)
                  </p>
                </label>
                {formData.attachments.length > 0 && (
                  <div className="mt-4 text-left">
                    <p className="text-sm font-body-semibold text-text-primary mb-2">
                      Selected Files:
                    </p>
                    <ul className="space-y-1">
                      {formData.attachments.map((file, index) => (
                        <li key={index} className="text-sm text-text-secondary flex items-center space-x-2">
                          <Icon name="DocumentIcon" size={16} className="text-primary" />
                          <span>{file.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <p className="text-xs text-text-secondary">
                By submitting this form, you agree to our data processing terms
              </p>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-action text-action-foreground font-cta rounded-md hover:bg-action/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Icon name="PaperAirplaneIcon" size={20} />
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-md flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" />
                <span className="text-sm font-body">Form submitted successfully! We will contact you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md flex items-center space-x-2">
                <Icon name="ExclamationTriangleIcon" size={20} variant="solid" />
                <span className="text-sm font-body">{errorMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;