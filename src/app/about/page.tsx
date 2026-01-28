import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import VisionMissionSection from './components/VisionMissionSection';
import LeadershipSection from './components/LeadershipSection';
import MilestonesSection from './components/MilestonesSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';
import LegalEntitySection from './components/LegalEntitySection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

export const metadata: Metadata = {
  title: 'About - GreenBoy Industrial',
  description: 'Green Boy India Private Limited represents precision engineering with environmental consciousness, combining traditional Indian manufacturing excellence with modern compliance standards for critical power generation needs.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <VisionMissionSection />
        <LeadershipSection />
        <MilestonesSection />
        <GlobalPresenceSection />
        <LegalEntitySection />
        <CTASection />
      </main>
      
      <FooterSection />
    </div>
  );
}