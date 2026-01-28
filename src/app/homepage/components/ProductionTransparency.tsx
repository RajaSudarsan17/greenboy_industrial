import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Episode {
  id: string;
  season: number;
  episode: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  alt: string;
  views: string;
  releaseDate: string;
}

const ProductionTransparency = () => {
  const featuredEpisode: Episode = {
    id: '1',
    season: 2,
    episode: 5,
    title: 'Quality Control: 100-Point Inspection Process',
    description: 'Follow our comprehensive quality assurance protocol as each engine undergoes rigorous testing across 100 checkpoints. From initial component verification to final performance validation, witness the precision that ensures 99.8% quality pass rates.',
    duration: '18:42',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1829aaf01-1766998682855.png",
    alt: 'Factory quality control inspector in white coat examining engine components with digital testing equipment in modern industrial facility',
    views: '12,847',
    releaseDate: '2026-01-15'
  };

  const recentEpisodes: Episode[] = [
  {
    id: '2',
    season: 2,
    episode: 4,
    title: 'Assembly Line: From Components to Complete Engine',
    description: 'Watch the complete assembly process of our CPCB-certified engines.',
    duration: '22:15',
    thumbnail: "https://images.unsplash.com/photo-1627308345262-0c66da5d071c",
    alt: 'Skilled technician assembling engine parts on automated production line with robotic assistance',
    views: '15,234',
    releaseDate: '2026-01-08'
  },
  {
    id: '3',
    season: 2,
    episode: 3,
    title: 'Emission Testing: Meeting CPCB Standards',
    description: 'Inside our state-of-the-art emission testing laboratory.',
    duration: '16:30',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1479f639e-1768676789734.png",
    alt: 'Engineer monitoring emission testing equipment with digital displays showing compliance data',
    views: '18,921',
    releaseDate: '2026-01-01'
  }];


  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="VideoCameraIcon" size={20} className="text-primary" />
            <span className="text-sm font-mono text-primary">Production Movie Series</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Manufacturing Transparency Through Cinematic Documentation
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Unprecedented access to our production facilities. Watch real manufacturing processes, quality control procedures, and testing protocols that demonstrate our commitment to transparent operations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-video bg-secondary/5 overflow-hidden group cursor-pointer">
                <AppImage
                  src={featuredEpisode.thumbnail}
                  alt={featuredEpisode.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110 shadow-xl">
                    <Icon name="PlayIcon" size={32} className="ml-1" />
                  </button>
                </div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 bg-secondary/90 text-secondary-foreground text-xs font-mono rounded-full">
                    Season {featuredEpisode.season}
                  </span>
                  <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-xs font-mono rounded-full">
                    Episode {featuredEpisode.episode}
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 bg-secondary/90 text-secondary-foreground text-sm font-mono rounded-lg">
                    {featuredEpisode.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-headline font-bold text-secondary mb-3">
                  {featuredEpisode.title}
                </h3>
                
                <p className="text-base text-text-secondary font-body leading-relaxed mb-4">
                  {featuredEpisode.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Icon name="EyeIcon" size={16} />
                      {featuredEpisode.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="CalendarIcon" size={16} />
                      {featuredEpisode.releaseDate}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300">
                    Watch Now
                    <Icon name="ArrowRightIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-headline font-bold text-secondary mb-4">Recent Episodes</h3>
            
            {recentEpisodes.map((episode) =>
            <div
              key={episode.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group">

                <div className="relative aspect-video bg-surface overflow-hidden">
                  <AppImage
                  src={episode.thumbnail}
                  alt={episode.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <Icon name="PlayIcon" size={20} className="ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <span className="px-2 py-1 bg-secondary/90 text-secondary-foreground text-xs font-mono rounded">
                      {episode.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-text-secondary">
                      S{episode.season}E{episode.episode}
                    </span>
                  </div>
                  <h4 className="text-sm font-headline font-bold text-secondary mb-2 line-clamp-2">
                    {episode.title}
                  </h4>
                  <p className="text-xs text-text-secondary font-body line-clamp-2 mb-3">
                    {episode.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Icon name="EyeIcon" size={12} />
                      {episode.views}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/production-movie-series"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-cta text-base rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-md">

            Browse Complete Production Series
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default ProductionTransparency;