import Icon from '@/components/ui/AppIcon';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-md font-body text-sm transition-all duration-300 flex items-center space-x-2 ${
            activeCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-muted text-text-primary hover:bg-muted/80'
          }`}
        >
          <Icon name={category.icon as any} size={16} variant={activeCategory === category.id ? 'solid' : 'outline'} />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;