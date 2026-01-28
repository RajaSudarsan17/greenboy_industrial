'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Leader {
  id: number;
  name: string;
  position: string;
  credentials: string;
  image: string;
  alt: string;
  bio: string;
  linkedin?: string;
}

interface LeadershipSectionProps {
  className?: string;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const leaders: Leader[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Managing Director & CEO',
    credentials: 'B.Tech (Mechanical), MBA (Operations), 30+ years in power generation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a891c21d-1763296710025.png",
    alt: 'Professional Indian businessman in navy blue suit with grey hair standing confidently in modern office',
    bio: 'Led the company through ISO certification and CPCB compliance transformation. Pioneer in emission control technology adoption for Indian manufacturing sector.',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    position: 'Chief Technology Officer',
    credentials: 'Ph.D. (Mechanical Engineering), 25+ years in R&D',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1264471ed-1763294281853.png",
    alt: 'Professional Indian woman engineer in white lab coat with safety glasses holding technical documents in research facility',
    bio: 'Spearheaded development of hybrid power systems and AI-based emission monitoring. Holds 12 patents in clean energy technology.',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Arun Patel',
    position: 'VP - Manufacturing & Quality',
    credentials: 'B.E. (Production), Six Sigma Black Belt, 28+ years',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1878f7440-1768308735796.png",
    alt: 'Senior Indian manufacturing professional in industrial safety gear with hard hat inspecting production line equipment',
    bio: 'Established quality management systems achieving ICAT and ARAI certifications. Expert in lean manufacturing and production optimization.',
    linkedin: '#'
  },
  {
    id: 4,
    name: 'Meera Reddy',
    position: 'VP - Compliance & Regulatory Affairs',
    credentials: 'LLB, MBA (Finance), Certified Compliance Professional',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_186ad5494-1763295120239.png",
    alt: 'Professional Indian woman in formal business attire reviewing compliance documents at executive desk',
    bio: 'Manages all regulatory certifications and government liaison. Expert in emission norms and industrial compliance frameworks.',
    linkedin: '#'
  }];


  return (
    <section className={`py-16 lg:py-24 bg-card ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Leadership Credibility
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Decades of combined expertise in manufacturing, compliance, and technical innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) =>
          <div
            key={leader.id}
            className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={leader.image}
                alt={leader.alt}
                fill
                className="object-cover" />

              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-headline font-bold text-secondary mb-1">
                  {leader.name}
                </h3>
                
                <p className="text-sm font-semibold text-primary mb-2">
                  {leader.position}
                </p>
                
                <p className="text-xs text-text-secondary mb-4 font-mono">
                  {leader.credentials}
                </p>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {leader.bio}
                </p>
                
                {isHydrated && leader.linkedin &&
              <button
                onClick={() => window.open(leader.linkedin, '_blank')}
                className="inline-flex items-center space-x-2 text-sm text-trust hover:text-trust/80 transition-colors duration-300">

                    <Icon name="UserCircleIcon" size={20} />
                    <span>View Profile</span>
                  </button>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default LeadershipSection;