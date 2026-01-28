import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CertificationStatus from './components/CertificationStatus';
import ProductionTransparency from './components/ProductionTransparency';
import ProductShowcase from './components/ProductShowcase';
import TechnologyHighlights from './components/TechnologyHighlights';
import ServicesOverview from './components/ServicesOverview';
import TrustIndicators from './components/TrustIndicators';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - GreenBoy Industrial',
  description: 'Certified excellence in power generation. Government-approved, OEM-trusted manufacturing with complete regulatory compliance. Live production metrics, certification transparency, and comprehensive engineering solutions.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <CertificationStatus />
        <ProductionTransparency />
        <ProductShowcase />
        <TechnologyHighlights />
        <ServicesOverview />
        <TrustIndicators />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}