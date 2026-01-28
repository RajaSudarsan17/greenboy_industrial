import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterPanelProps {
  selectedCategory: string;
  selectedEmissionNorm: string;
  selectedPowerRange: string;
  onCategoryChange: (category: string) => void;
  onEmissionNormChange: (norm: string) => void;
  onPowerRangeChange: (range: string) => void;
  onClearFilters: () => void;
}

const FilterPanel = ({
  selectedCategory,
  selectedEmissionNorm,
  selectedPowerRange,
  onCategoryChange,
  onEmissionNormChange,
  onPowerRangeChange,
  onClearFilters,
}: FilterPanelProps) => {
  const categories = ['All Products', 'Engines', 'Gensets', 'RECD', 'Custom Solutions'];
  const emissionNorms = ['All Norms', 'BS-VI', 'CPCB-IV+', 'Euro-V', 'Tier-4'];
  const powerRanges = ['All Ranges', '0-50 kW', '51-100 kW', '101-250 kW', '250+ kW'];

  const hasActiveFilters =
    selectedCategory !== 'All Products' ||
    selectedEmissionNorm !== 'All Norms' ||
    selectedPowerRange !== 'All Ranges';

  return (
    <div className="bg-card rounded-lg shadow-md p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-headline text-text-primary flex items-center gap-2">
          <Icon name="FunnelIcon" size={20} className="text-primary" />
          Filter Products
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm font-body text-primary hover:text-primary/80 transition-colors duration-300"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-body font-body-semibold text-text-primary mb-3">
            Product Category
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-muted cursor-pointer transition-colors duration-300"
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-body text-text-primary">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <label className="block text-sm font-body font-body-semibold text-text-primary mb-3">
            Emission Compliance
          </label>
          <div className="space-y-2">
            {emissionNorms.map((norm) => (
              <label
                key={norm}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-muted cursor-pointer transition-colors duration-300"
              >
                <input
                  type="radio"
                  name="emission"
                  value={norm}
                  checked={selectedEmissionNorm === norm}
                  onChange={(e) => onEmissionNormChange(e.target.value)}
                  className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-body text-text-primary">{norm}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <label className="block text-sm font-body font-body-semibold text-text-primary mb-3">
            Power Output Range
          </label>
          <div className="space-y-2">
            {powerRanges.map((range) => (
              <label
                key={range}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-muted cursor-pointer transition-colors duration-300"
              >
                <input
                  type="radio"
                  name="power"
                  value={range}
                  checked={selectedPowerRange === range}
                  onChange={(e) => onPowerRangeChange(e.target.value)}
                  className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
                />
                <span className="text-sm font-body text-text-primary">{range}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;