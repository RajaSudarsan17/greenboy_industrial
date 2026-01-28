import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    image: string;
    alt: string;
    power: string;
    emissionNorm: string;
    certifications: string[];
    description: string;
    specifications: {
      label: string;
      value: string;
    }[];
  };
  onCompare: (id: string) => void;
  onViewDetails: (id: string) => void;
  isComparing: boolean;
}

const ProductCard = ({ product, onCompare, onViewDetails, isComparing }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden bg-muted">
        <AppImage
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded-md">
            {product.emissionNorm}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-body text-text-secondary uppercase tracking-wider">
              {product.category}
            </span>
            <h3 className="text-lg font-headline text-text-primary mt-1">
              {product.name}
            </h3>
          </div>
          <button
            onClick={() => onCompare(product.id)}
            className={`p-2 rounded-md transition-colors duration-300 ${
              isComparing
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
            aria-label={isComparing ? 'Remove from comparison' : 'Add to comparison'}
          >
            <Icon name="ScaleIcon" size={20} />
          </button>
        </div>

        <p className="text-sm font-body text-text-secondary mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-body text-text-secondary">Power Output:</span>
            <span className="font-mono text-text-primary">{product.power}</span>
          </div>
          {product.specifications.slice(0, 2).map((spec, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="font-body text-text-secondary">{spec.label}:</span>
              <span className="font-mono text-text-primary">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.certifications.map((cert, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-success/10 text-success text-xs font-mono rounded"
            >
              {cert}
            </span>
          ))}
        </div>

        <button
          onClick={() => onViewDetails(product.id)}
          className="w-full px-4 py-2.5 bg-secondary text-secondary-foreground font-cta text-sm rounded-md hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <span>View Technical Specs</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;