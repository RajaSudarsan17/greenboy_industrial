'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
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
}

interface ComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

const ComparisonModal = ({ products, onClose, onRemove }: ComparisonModalProps) => {
  if (products.length === 0) return null;

  const allSpecLabels = Array.from(
    new Set(products.flatMap((p) => p.specifications.map((s) => s.label)))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-headline text-text-primary">
            Product Comparison ({products.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="Close comparison"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border border-border rounded-lg overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <AppImage
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => onRemove(product.id)}
                    className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors duration-300"
                    aria-label="Remove from comparison"
                  >
                    <Icon name="XMarkIcon" size={16} />
                  </button>
                </div>

                <div className="p-4">
                  <span className="text-xs font-body text-text-secondary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-headline text-text-primary mt-1 mb-3">
                    {product.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm pb-3 border-b border-border">
                      <span className="font-body text-text-secondary">Power Output:</span>
                      <span className="font-mono text-text-primary font-body-semibold">
                        {product.power}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm pb-3 border-b border-border">
                      <span className="font-body text-text-secondary">Emission Norm:</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">
                        {product.emissionNorm}
                      </span>
                    </div>

                    {allSpecLabels.map((label) => {
                      const spec = product.specifications.find((s) => s.label === label);
                      return (
                        <div
                          key={label}
                          className="flex items-center justify-between text-sm pb-3 border-b border-border"
                        >
                          <span className="font-body text-text-secondary">{label}:</span>
                          <span className="font-mono text-text-primary">
                            {spec?.value || 'N/A'}
                          </span>
                        </div>
                      );
                    })}

                    <div className="pt-2">
                      <span className="text-xs font-body text-text-secondary block mb-2">
                        Certifications:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-success/10 text-success text-xs font-mono rounded"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-border bg-muted">
          <div className="flex items-center justify-between">
            <p className="text-sm font-body text-text-secondary">
              Compare up to 3 products side-by-side
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-secondary text-secondary-foreground font-cta text-sm rounded-md hover:bg-secondary/90 transition-colors duration-300"
            >
              Close Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;