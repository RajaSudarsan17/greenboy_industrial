import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface EpisodeCardProps {
  episode: {
    id: number;
    title: string;
    duration: string;
    thumbnail: string;
    alt: string;
    description: string;
    views: string;
    uploadDate: string;
  };
  onEpisodeClick: (episodeId: number) => void;
}

const EpisodeCard = ({ episode, onEpisodeClick }: EpisodeCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden cursor-pointer" onClick={() => onEpisodeClick(episode.id)}>
        <AppImage
          src={episode.thumbnail}
          alt={episode.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-secondary/90 text-white text-xs px-2 py-1 rounded">
          {episode.duration}
        </div>
        <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Icon name="PlayIcon" size={24} variant="solid" className="text-white ml-1" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-base font-headline text-text-primary mb-2 line-clamp-1">{episode.title}</h4>
        <p className="text-sm text-text-secondary mb-3 line-clamp-2">{episode.description}</p>
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="EyeIcon" size={14} />
            <span>{episode.views}</span>
          </div>
          <span>{episode.uploadDate}</span>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;