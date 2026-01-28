'use client';

import { createClient } from '@/lib/supabase/client';

export interface ContactFormData {
  department: string;
  inquiryType: string;
  organizationType: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  designation?: string;
  country: string;
  subject: string;
  message: string;
  urgency: string;
  preferredContact: string;
  attachmentUrls?: string[];
}

export interface ServiceRequestData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  serviceCategory: string;
  projectDetails: string;
  timeline?: string;
  budget?: string;
}

export interface ConsultationBookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  expertise: string;
  message: string;
}

export interface NewsletterSubscriptionData {
  email: string;
}

function isSchemaError(error: any): boolean {
  if (!error) return false;
  
  if (error.code && typeof error.code === 'string') {
    const errorClass = error.code.substring(0, 2);
    if (errorClass === '42' || errorClass === '08') {
      return true;
    }
    if (errorClass === '23') {
      return false;
    }
  }
  
  if (error.message) {
    const schemaErrorPatterns = [
      /relation.*does not exist/i,
      /column.*does not exist/i,
      /function.*does not exist/i,
      /syntax error/i,
    ];
    return schemaErrorPatterns.some(pattern => pattern.test(error.message));
  }
  
  return false;
}

export const formService = {
  async submitContactForm(data: ContactFormData) {
    const supabase = createClient();
    
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert({
        department: data.department,
        inquiry_type: data.inquiryType,
        organization_type: data.organizationType,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        designation: data.designation,
        country: data.country,
        subject: data.subject,
        message: data.message,
        urgency: data.urgency,
        preferred_contact: data.preferredContact,
        attachment_urls: data.attachmentUrls || [],
      })
      .select()
      .single();
    
    if (error) {
      if (isSchemaError(error)) {
        console.error('Schema error:', error.message);
        throw error;
      }
      console.error('Contact form submission error:', error.message);
      throw new Error('Failed to submit contact form. Please try again.');
    }
    
    return result;
  },

  async submitServiceRequest(data: ServiceRequestData) {
    const supabase = createClient();
    
    const { data: result, error } = await supabase
      .from('service_requests')
      .insert({
        company_name: data.companyName,
        contact_person: data.contactPerson,
        email: data.email,
        phone: data.phone,
        service_category: data.serviceCategory.toLowerCase().replace(/ /g, '_'),
        project_details: data.projectDetails,
        timeline: data.timeline,
        budget: data.budget,
      })
      .select()
      .single();
    
    if (error) {
      if (isSchemaError(error)) {
        console.error('Schema error:', error.message);
        throw error;
      }
      console.error('Service request submission error:', error.message);
      throw new Error('Failed to submit service request. Please try again.');
    }
    
    return result;
  },

  async submitConsultationBooking(data: ConsultationBookingData) {
    const supabase = createClient();
    
    const { data: result, error } = await supabase
      .from('consultation_bookings')
      .insert({
        full_name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        expertise_area: data.expertise,
        project_details: data.message,
      })
      .select()
      .single();
    
    if (error) {
      if (isSchemaError(error)) {
        console.error('Schema error:', error.message);
        throw error;
      }
      console.error('Consultation booking submission error:', error.message);
      throw new Error('Failed to submit consultation booking. Please try again.');
    }
    
    return result;
  },

  async subscribeNewsletter(data: NewsletterSubscriptionData) {
    const supabase = createClient();
    
    const { data: result, error } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email: data.email,
      })
      .select()
      .single();
    
    if (error) {
      if (isSchemaError(error)) {
        console.error('Schema error:', error.message);
        throw error;
      }
      
      // Handle duplicate email gracefully
      if (error.code === '23505') {
        throw new Error('This email is already subscribed.');
      }
      
      console.error('Newsletter subscription error:', error.message);
      throw new Error('Failed to subscribe. Please try again.');
    }
    
    return result;
  },
};
