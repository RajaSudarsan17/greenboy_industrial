
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Episode {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  alt: string;
}

interface SeasonCardProps {
  season: {
    id: number;
    title: string;
    description: string;
    episodeCount: number;
    thumbnail: string;
    alt: string;
    episodes: Episode[];
  };
  onSeasonClick: (seasonId: number) => void;
}

const SeasonCard = ({ season, onSeasonClick }: SeasonCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => onSeasonClick(season.id)}>
        <AppImage
          src={season.thumbnail}
          alt={season.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-lg font-headline text-white mb-1">{season.title}</h3>
            <div className="flex items-center space-x-2 text-white/90 text-sm">
              <Icon name="PlayCircleIcon" size={16} variant="solid" />
              <span>{season.episodeCount} Episodes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">{season.description}</p>
        <button
          onClick={() => onSeasonClick(season.id)}
          className="w-full px-4 py-2 bg-primary text-primary-foreground font-cta text-sm rounded-md hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <Icon name="PlayIcon" size={16} variant="solid" />
          <span>Watch Season</span>
        </button>
      </div>
    </div>
  );
};

export default SeasonCard;