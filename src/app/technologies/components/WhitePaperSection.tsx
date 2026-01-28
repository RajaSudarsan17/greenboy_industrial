'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WhitePaper {
  title: string;
  description: string;
  category: string;
  pages: number;
  publishDate: string;
  fileSize: string;
}

interface WhitePaperSectionProps {
  papers: WhitePaper[];
}

const WhitePaperSection: React.FC<WhitePaperSectionProps> = ({ papers }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-secondary mb-4">
              Technical White Papers
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              In-depth technical documentation and research publications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                <div className="h-32 bg-muted rounded mb-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const categories = ['All', ...Array.from(new Set(papers.map(p => p.category)))];
  const filteredPapers = selectedCategory === 'All' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory);

  const handleDownload = (title: string) => {
    console.log(`Downloading: ${title}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="DocumentTextIcon" size={32} className="text-primary" />
            <h2 className="text-4xl font-headline font-bold text-secondary">
              Technical White Papers
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            In-depth technical documentation and research publications
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-body font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-muted text-text-secondary hover:bg-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-md border border-border hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-primary/10 to-success/10 p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full">
                    {paper.category}
                  </span>
                  <Icon name="DocumentTextIcon" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-headline font-bold text-secondary mb-2">
                  {paper.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {paper.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-text-secondary mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="DocumentIcon" size={16} />
                    <span>{paper.pages} pages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="ArrowDownTrayIcon" size={16} />
                    <span>{paper.fileSize}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">
                    Published: {paper.publishDate}
                  </span>
                  <button
                    onClick={() => handleDownload(paper.title)}
                    className="px-4 py-2 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Icon name="ArrowDownTrayIcon" size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhitePaperSection;