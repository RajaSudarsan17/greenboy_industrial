-- Form Submissions and CMS Management Migration
-- Created: 2026-01-23
-- Purpose: Handle contact forms, service requests, consultations, newsletters, and CMS data

-- ============================================================================
-- ENUMS
-- ============================================================================

CREATE TYPE public.department_type AS ENUM (
  'sales',
  'compliance',
  'operations',
  'technical',
  'support',
  'export'
);

CREATE TYPE public.inquiry_type AS ENUM (
  'product_inquiry',
  'quotation',
  'partnership',
  'compliance',
  'technical',
  'support',
  'export',
  'other'
);

CREATE TYPE public.organization_type AS ENUM (
  'government',
  'oem',
  'distributor',
  'end_user',
  'export',
  'consultant',
  'other'
);

CREATE TYPE public.urgency_level AS ENUM (
  'low',
  'normal',
  'high',
  'urgent'
);

CREATE TYPE public.submission_status AS ENUM (
  'pending',
  'in_review',
  'assigned',
  'resolved',
  'closed'
);

CREATE TYPE public.service_category AS ENUM (
  'manufacturing_services',
  'testing_certification',
  'retrofitting_solutions',
  'custom_engineering'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Contact Form Submissions
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department public.department_type NOT NULL,
  inquiry_type public.inquiry_type NOT NULL,
  organization_type public.organization_type NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  designation TEXT,
  country TEXT DEFAULT 'India',
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  urgency public.urgency_level DEFAULT 'normal'::public.urgency_level,
  preferred_contact TEXT DEFAULT 'email',
  status public.submission_status DEFAULT 'pending'::public.submission_status,
  attachment_urls TEXT[],
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Service Request Submissions
CREATE TABLE public.service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_category public.service_category NOT NULL,
  project_details TEXT NOT NULL,
  timeline TEXT,
  budget TEXT,
  status public.submission_status DEFAULT 'pending'::public.submission_status,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Technical Consultation Bookings
CREATE TABLE public.consultation_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  expertise_area TEXT NOT NULL,
  project_details TEXT NOT NULL,
  status public.submission_status DEFAULT 'pending'::public.submission_status,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter Subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMPTZ
);

-- Inquiry Routing Rules
CREATE TABLE public.inquiry_routing (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department public.department_type NOT NULL,
  inquiry_type public.inquiry_type NOT NULL,
  assigned_email TEXT NOT NULL,
  priority INTEGER DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- CMS Content Management
CREATE TABLE public.cms_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_type TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL,
  metadata JSONB,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- INDEXES
-- ============================================================================

CREATE INDEX idx_contact_submissions_department ON public.contact_submissions(department);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

CREATE INDEX idx_service_requests_status ON public.service_requests(status);
CREATE INDEX idx_service_requests_created_at ON public.service_requests(created_at DESC);
CREATE INDEX idx_service_requests_email ON public.service_requests(email);

CREATE INDEX idx_consultation_bookings_status ON public.consultation_bookings(status);
CREATE INDEX idx_consultation_bookings_created_at ON public.consultation_bookings(created_at DESC);

CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_subscriptions_is_active ON public.newsletter_subscriptions(is_active);

CREATE INDEX idx_inquiry_routing_department ON public.inquiry_routing(department);
CREATE INDEX idx_inquiry_routing_inquiry_type ON public.inquiry_routing(inquiry_type);

CREATE INDEX idx_cms_content_slug ON public.cms_content(slug);
CREATE INDEX idx_cms_content_content_type ON public.cms_content(content_type);
CREATE INDEX idx_cms_content_is_published ON public.cms_content(is_published);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$;

-- ============================================================================
-- ENABLE RLS
-- ============================================================================

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiry_routing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_content ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- RLS POLICIES
-- ============================================================================

-- Contact Submissions: Public can insert, no read access (privacy)
CREATE POLICY "public_can_submit_contact_forms"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Service Requests: Public can insert, no read access (privacy)
CREATE POLICY "public_can_submit_service_requests"
ON public.service_requests
FOR INSERT
TO public
WITH CHECK (true);

-- Consultation Bookings: Public can insert, no read access (privacy)
CREATE POLICY "public_can_submit_consultation_bookings"
ON public.consultation_bookings
FOR INSERT
TO public
WITH CHECK (true);

-- Newsletter Subscriptions: Public can insert and read their own
CREATE POLICY "public_can_subscribe_newsletter"
ON public.newsletter_subscriptions
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "public_can_read_own_newsletter_subscription"
ON public.newsletter_subscriptions
FOR SELECT
TO public
USING (true);

-- Inquiry Routing: Public read access for active routes
CREATE POLICY "public_can_read_active_inquiry_routing"
ON public.inquiry_routing
FOR SELECT
TO public
USING (is_active = true);

-- CMS Content: Public can read published content
CREATE POLICY "public_can_read_published_cms_content"
ON public.cms_content
FOR SELECT
TO public
USING (is_published = true);

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_service_requests_updated_at
    BEFORE UPDATE ON public.service_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_consultation_bookings_updated_at
    BEFORE UPDATE ON public.consultation_bookings
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cms_content_updated_at
    BEFORE UPDATE ON public.cms_content
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================================
-- MOCK DATA
-- ============================================================================

DO $$
DECLARE
    contact_id UUID := gen_random_uuid();
    service_id UUID := gen_random_uuid();
    consultation_id UUID := gen_random_uuid();
    routing_id UUID := gen_random_uuid();
    cms_id UUID := gen_random_uuid();
BEGIN
    -- Sample Contact Submission
    INSERT INTO public.contact_submissions (
        id, department, inquiry_type, organization_type,
        full_name, email, phone, company, designation, country,
        subject, message, urgency, preferred_contact, status
    ) VALUES (
        contact_id,
        'sales'::public.department_type,
        'product_inquiry'::public.inquiry_type,
        'oem'::public.organization_type,
        'Rajesh Kumar',
        'rajesh.kumar@example.com',
        '+91 98765 43210',
        'ABC Manufacturing Ltd',
        'Purchase Manager',
        'India',
        'Inquiry about LED Bulb Manufacturing',
        'We are interested in your LED bulb manufacturing services for a government tender. Please provide detailed specifications and pricing.',
        'high'::public.urgency_level,
        'email',
        'pending'::public.submission_status
    );

    -- Sample Service Request
    INSERT INTO public.service_requests (
        id, company_name, contact_person, email, phone,
        service_category, project_details, timeline, budget, status
    ) VALUES (
        service_id,
        'XYZ Electronics Pvt Ltd',
        'Priya Sharma',
        'priya.sharma@xyzelectronics.com',
        '+91 98765 12345',
        'testing_certification'::public.service_category,
        'We need BIS certification for our new LED product line. The products include 9W, 12W, and 15W LED bulbs with various color temperatures.',
        '2-3 months',
        '5,00,000 - 10,00,000',
        'pending'::public.submission_status
    );

    -- Sample Consultation Booking
    INSERT INTO public.consultation_bookings (
        id, full_name, email, phone, company,
        expertise_area, project_details, status
    ) VALUES (
        consultation_id,
        'Amit Patel',
        'amit.patel@techsolutions.com',
        '+91 98765 67890',
        'Tech Solutions India',
        'IoT Integration',
        'We want to integrate IoT capabilities into our existing LED products for smart home applications. Need technical consultation on feasibility and implementation.',
        'pending'::public.submission_status
    );

    -- Sample Newsletter Subscriptions
    INSERT INTO public.newsletter_subscriptions (email, is_active) VALUES
        ('subscriber1@example.com', true),
        ('subscriber2@example.com', true),
        ('subscriber3@example.com', true);

    -- Sample Inquiry Routing Rules
    INSERT INTO public.inquiry_routing (
        department, inquiry_type, assigned_email, priority, is_active
    ) VALUES
        ('sales'::public.department_type, 'product_inquiry'::public.inquiry_type, 'sales@greenboy.co.in', 1, true),
        ('sales'::public.department_type, 'quotation'::public.inquiry_type, 'sales@greenboy.co.in', 1, true),
        ('compliance'::public.department_type, 'compliance'::public.inquiry_type, 'compliance@greenboy.co.in', 1, true),
        ('technical'::public.department_type, 'technical'::public.inquiry_type, 'technical@greenboy.co.in', 1, true),
        ('support'::public.department_type, 'support'::public.inquiry_type, 'support@greenboy.co.in', 1, true),
        ('export'::public.department_type, 'export'::public.inquiry_type, 'export@greenboy.co.in', 1, true);

    -- Sample CMS Content
    INSERT INTO public.cms_content (
        id, content_type, title, slug, content, metadata, is_published, published_at
    ) VALUES (
        cms_id,
        'announcement',
        'New BIS Standards Update',
        'new-bis-standards-update-2026',
        '{"body": "Green Boy India is now compliant with the latest BIS standards for LED manufacturing. All our products meet the new energy efficiency requirements.", "author": "Green Boy Team", "category": "compliance"}'::jsonb,
        '{"featured": true, "tags": ["BIS", "compliance", "standards"]}'::jsonb,
        true,
        CURRENT_TIMESTAMP
    );

    RAISE NOTICE 'Mock data created successfully for form submissions and CMS';
END $$;
