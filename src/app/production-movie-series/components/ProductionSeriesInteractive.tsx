'use client';

import { useState, useEffect } from 'react';
import SeasonCard from './SeasonCard';
import EpisodeCard from './EpisodeCard';
import CategoryFilter from './CategoryFilter';
import VideoPlayer from './VideoPlayer';
import ProductionStats from './ProductionStats';
import NewsletterSubscription from './NewsletterSubscription';
import Icon from '@/components/ui/AppIcon';

interface Chapter {
  id: number;
  title: string;
  timestamp: string;
}

interface Episode {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  alt: string;
  description: string;
  views: string;
  uploadDate: string;
  videoUrl: string;
  category: string;
  chapters: Chapter[];
}

interface Season {
  id: number;
  title: string;
  description: string;
  episodeCount: number;
  thumbnail: string;
  alt: string;
  episodes: Episode[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

const ProductionSeriesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeView, setActiveView] = useState<'seasons' | 'episodes'>('seasons');
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
  { id: 'all', name: 'All Episodes', icon: 'Squares2X2Icon' },
  { id: 'machining', name: 'Machining', icon: 'CogIcon' },
  { id: 'assembly', name: 'Assembly', icon: 'WrenchScrewdriverIcon' },
  { id: 'testing', name: 'Testing', icon: 'BeakerIcon' },
  { id: 'quality', name: 'Quality Control', icon: 'ShieldCheckIcon' }];


  const stats: Stat[] = [
  { label: 'Total Episodes', value: '48', icon: 'FilmIcon', color: 'bg-primary' },
  { label: 'Total Views', value: '125K', icon: 'EyeIcon', color: 'bg-trust' },
  { label: 'Production Hours', value: '320+', icon: 'ClockIcon', color: 'bg-success' },
  { label: 'Seasons', value: '4', icon: 'RectangleStackIcon', color: 'bg-accent' }];


  const seasons: Season[] = [
  {
    id: 1,
    title: 'Season 1: Foundation',
    description: 'Explore the fundamentals of our manufacturing process, from raw material inspection to initial machining operations.',
    episodeCount: 12,
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4a121fd-1766488793474.png",
    alt: 'Industrial factory floor with CNC machines and workers in safety gear operating equipment',
    episodes: [
    {
      id: 101,
      title: 'Raw Material Inspection',
      duration: '12:45',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1de252f10-1768666799865.png",
      alt: 'Quality inspector examining metal sheets with measuring instruments in warehouse',
      description: 'Comprehensive overview of our raw material quality control process, including material certification verification and dimensional inspection.',
      views: '12.5K',
      uploadDate: '15 Jan 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'quality',
      chapters: [
      { id: 1, title: 'Material Receiving', timestamp: '00:00' },
      { id: 2, title: 'Certificate Verification', timestamp: '03:20' },
      { id: 3, title: 'Dimensional Inspection', timestamp: '07:15' },
      { id: 4, title: 'Material Storage', timestamp: '10:30' }]

    },
    {
      id: 102,
      title: 'CNC Machining Setup',
      duration: '15:30',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1bd9c38-1767590721111.png",
      alt: 'CNC machine operator programming computer-controlled milling machine with metal workpiece',
      description: 'Step-by-step guide to setting up CNC machines for precision component manufacturing, including tool selection and program verification.',
      views: '18.2K',
      uploadDate: '18 Jan 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'machining',
      chapters: [
      { id: 1, title: 'Machine Preparation', timestamp: '00:00' },
      { id: 2, title: 'Tool Selection', timestamp: '04:15' },
      { id: 3, title: 'Program Loading', timestamp: '08:45' },
      { id: 4, title: 'First Article Inspection', timestamp: '12:20' }]

    },
    {
      id: 103,
      title: 'Precision Turning Operations',
      duration: '14:20',
      thumbnail: "https://images.unsplash.com/photo-1651713394050-9e09ee5753f6",
      alt: 'Lathe machine creating metal shavings while turning cylindrical component with coolant spray',
      description: 'Detailed demonstration of precision turning operations for engine components, showcasing our advanced lathe capabilities.',
      views: '15.8K',
      uploadDate: '22 Jan 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'machining',
      chapters: [
      { id: 1, title: 'Workpiece Setup', timestamp: '00:00' },
      { id: 2, title: 'Roughing Operations', timestamp: '03:30' },
      { id: 3, title: 'Finishing Cuts', timestamp: '08:10' },
      { id: 4, title: 'Quality Verification', timestamp: '11:45' }]

    }]

  },
  {
    id: 2,
    title: 'Season 2: Assembly Excellence',
    description: 'Witness the meticulous assembly process where precision-machined components come together to form complete engine systems.',
    episodeCount: 14,
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1cababd86-1766737350413.png",
    alt: 'Assembly line workers in clean room suits assembling engine components on modern production line',
    episodes: [
    {
      id: 201,
      title: 'Engine Block Assembly',
      duration: '18:45',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae6d2c5e-1766506474805.png",
      alt: 'Technician assembling engine block with torque wrench in clean assembly area',
      description: 'Complete walkthrough of engine block assembly, including torque specifications and assembly sequence verification.',
      views: '22.3K',
      uploadDate: '25 Jan 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'assembly',
      chapters: [
      { id: 1, title: 'Component Preparation', timestamp: '00:00' },
      { id: 2, title: 'Main Bearing Installation', timestamp: '05:20' },
      { id: 3, title: 'Crankshaft Assembly', timestamp: '10:15' },
      { id: 4, title: 'Torque Verification', timestamp: '15:30' }]

    },
    {
      id: 202,
      title: 'Cylinder Head Installation',
      duration: '16:30',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2a7b0c8-1769176508157.png",
      alt: 'Close-up of cylinder head being lowered onto engine block with precision alignment tools',
      description: 'Precision installation of cylinder heads with proper gasket placement and torque sequence demonstration.',
      views: '19.7K',
      uploadDate: '28 Jan 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'assembly',
      chapters: [
      { id: 1, title: 'Gasket Preparation', timestamp: '00:00' },
      { id: 2, title: 'Head Positioning', timestamp: '04:45' },
      { id: 3, title: 'Bolt Torquing Sequence', timestamp: '09:20' },
      { id: 4, title: 'Final Inspection', timestamp: '13:50' }]

    }]

  },
  {
    id: 3,
    title: 'Season 3: Testing & Validation',
    description: 'Experience our rigorous testing protocols that ensure every engine meets or exceeds CPCB and ICAT certification standards.',
    episodeCount: 10,
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1bde46e48-1768403865086.png",
    alt: 'Engine on dynamometer test stand with multiple sensors and monitoring equipment attached',
    episodes: [
    {
      id: 301,
      title: 'Dynamometer Testing',
      duration: '20:15',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8444baf-1766520712952.png",
      alt: 'Engine running on dynamometer with computer screens showing performance graphs and data',
      description: 'Comprehensive dynamometer testing procedures including power output verification and emission measurement protocols.',
      views: '28.5K',
      uploadDate: '01 Feb 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'testing',
      chapters: [
      { id: 1, title: 'Test Setup', timestamp: '00:00' },
      { id: 2, title: 'Power Measurement', timestamp: '06:30' },
      { id: 3, title: 'Emission Testing', timestamp: '12:45' },
      { id: 4, title: 'Data Analysis', timestamp: '17:20' }]

    },
    {
      id: 302,
      title: 'Emission Compliance Testing',
      duration: '17:40',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_19de6ccda-1766520711922.png",
      alt: 'Emission testing equipment connected to engine exhaust with technician monitoring readings',
      description: 'Detailed emission testing process demonstrating compliance with CPCB norms and certification requirements.',
      views: '24.1K',
      uploadDate: '05 Feb 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'testing',
      chapters: [
      { id: 1, title: 'Equipment Calibration', timestamp: '00:00' },
      { id: 2, title: 'Test Cycle Execution', timestamp: '05:15' },
      { id: 3, title: 'Data Collection', timestamp: '11:30' },
      { id: 4, title: 'Compliance Verification', timestamp: '14:50' }]

    }]

  },
  {
    id: 4,
    title: 'Season 4: Quality Assurance',
    description: 'Discover our ISO 9001:2015 certified quality management system and the rigorous inspection processes that guarantee excellence.',
    episodeCount: 12,
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_11aba98ac-1766506477520.png",
    alt: 'Quality inspector using coordinate measuring machine to verify component dimensions',
    episodes: [
    {
      id: 401,
      title: 'CMM Inspection Process',
      duration: '14:55',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1de00dc14-1766506473827.png",
      alt: 'Coordinate measuring machine probe touching engine component for dimensional verification',
      description: 'Advanced coordinate measuring machine inspection demonstrating our precision quality control capabilities.',
      views: '16.8K',
      uploadDate: '08 Feb 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'quality',
      chapters: [
      { id: 1, title: 'Component Preparation', timestamp: '00:00' },
      { id: 2, title: 'Measurement Program', timestamp: '04:20' },
      { id: 3, title: 'Data Collection', timestamp: '09:10' },
      { id: 4, title: 'Report Generation', timestamp: '12:30' }]

    },
    {
      id: 402,
      title: 'Final Quality Audit',
      duration: '13:25',
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_17e3f5a91-1769176507134.png",
      alt: 'Quality auditor reviewing checklist while inspecting completed engine assembly',
      description: 'Complete final quality audit process before engine shipment, ensuring all specifications are met.',
      views: '14.2K',
      uploadDate: '12 Feb 2026',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      category: 'quality',
      chapters: [
      { id: 1, title: 'Visual Inspection', timestamp: '00:00' },
      { id: 2, title: 'Documentation Review', timestamp: '04:15' },
      { id: 3, title: 'Functional Testing', timestamp: '08:30' },
      { id: 4, title: 'Final Approval', timestamp: '11:20' }]

    }]

  }];


  const handleSeasonClick = (seasonId: number) => {
    const season = seasons.find((s) => s.id === seasonId);
    if (season) {
      setSelectedSeason(season);
      setActiveView('episodes');
    }
  };

  const handleBackToSeasons = () => {
    setActiveView('seasons');
    setSelectedSeason(null);
    setActiveCategory('all');
  };

  const handleEpisodeClick = (episodeId: number) => {
    if (selectedSeason) {
      const episode = selectedSeason.episodes.find((e) => e.id === episodeId);
      if (episode) {
        setSelectedEpisode(episode);
      }
    }
  };

  const handleClosePlayer = () => {
    setSelectedEpisode(null);
  };

  const filteredEpisodes = selectedSeason ?
  activeCategory === 'all' ?
  selectedSeason.episodes :
  selectedSeason.episodes.filter((ep) => ep.category === activeCategory) :
  [];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16 bg-muted animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-64 bg-muted animate-pulse rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-80 bg-muted animate-pulse rounded-lg"></div>
            )}
          </div>
        </div>
      </div>);

  }

  return (
    <>
      <div className="bg-gradient-to-br from-primary/10 via-background to-trust/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="FilmIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-mono text-primary">Production Transparency Series</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline text-text-primary mb-4">
              Manufacturing Excellence Documented
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experience unprecedented transparency in industrial manufacturing. Watch our complete production process from raw materials to certified engines through cinematic documentation.
            </p>
          </div>

          <ProductionStats stats={stats} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeView === 'seasons' ?
        <>
            <div className="mb-8">
              <h2 className="text-2xl font-headline text-text-primary mb-2">All Seasons</h2>
              <p className="text-text-secondary">
                Explore our complete production documentation organized by manufacturing phases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {seasons.map((season) =>
            <SeasonCard key={season.id} season={season} onSeasonClick={handleSeasonClick} />
            )}
            </div>

            <NewsletterSubscription />
          </> :

        <>
            <div className="mb-8">
              <button
              onClick={handleBackToSeasons}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-4">

                <Icon name="ArrowLeftIcon" size={20} />
                <span className="font-body">Back to Seasons</span>
              </button>
              <h2 className="text-2xl font-headline text-text-primary mb-2">{selectedSeason?.title}</h2>
              <p className="text-text-secondary mb-6">{selectedSeason?.description}</p>

              <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory} />

            </div>

            {filteredEpisodes.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEpisodes.map((episode) =>
            <EpisodeCard key={episode.id} episode={episode} onEpisodeClick={handleEpisodeClick} />
            )}
              </div> :

          <div className="text-center py-16">
                <Icon name="FilmIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-text-secondary">No episodes found in this category</p>
              </div>
          }
          </>
        }
      </div>

      {selectedEpisode && <VideoPlayer episode={selectedEpisode} onClose={handleClosePlayer} />}
    </>);

};

export default ProductionSeriesInteractive;