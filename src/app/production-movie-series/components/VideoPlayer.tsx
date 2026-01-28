'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Chapter {
  id: number;
  title: string;
  timestamp: string;
}

interface VideoPlayerProps {
  episode: {
    id: number;
    title: string;
    videoUrl: string;
    description: string;
    chapters: Chapter[];
  };
  onClose: () => void;
}

const VideoPlayer = ({ episode, onClose }: VideoPlayerProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="fixed inset-0 bg-secondary/95 z-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-secondary/95 z-50 overflow-y-auto">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-headline text-white">{episode.title}</h2>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              aria-label="Close video player"
            >
              <Icon name="XMarkIcon" size={24} className="text-white" />
            </button>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
            <div className="relative aspect-video bg-secondary">
              <iframe
                src={episode.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={episode.title}
              ></iframe>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-headline text-text-primary mb-2">About This Episode</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{episode.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-headline text-text-primary mb-4">Chapters</h3>
                <div className="space-y-2">
                  {episode.chapters.map((chapter, index) => (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(index)}
                      className={`w-full text-left p-3 rounded-md transition-colors duration-300 flex items-center justify-between ${
                        activeChapter === index
                          ? 'bg-primary/10 border border-primary' :'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activeChapter === index ? 'bg-primary text-white' : 'bg-secondary/20 text-text-secondary'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-sm font-body text-text-primary">{chapter.title}</span>
                      </div>
                      <span className="text-xs font-mono text-text-secondary">{chapter.timestamp}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;