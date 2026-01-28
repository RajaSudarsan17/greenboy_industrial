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
  technicalDetails: {
    section: string;
    items: { label: string; value: string }[];
  }[];
}

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailsModal = ({ product, onClose }: ProductDetailsModalProps) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <span className="text-xs font-body text-text-secondary uppercase tracking-wider">
              {product.category}
            </span>
            <h2 className="text-2xl font-headline text-text-primary mt-1">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="Close details"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden bg-muted mb-6">
                <AppImage
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-body font-body-semibold text-text-primary mb-2">
                    Description
                  </h3>
                  <p className="text-sm font-body text-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-body font-body-semibold text-text-primary mb-3">
                    Compliance & Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-primary text-primary-foreground text-sm font-mono rounded-md">
                      {product.emissionNorm}
                    </span>
                    {product.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-success/10 text-success text-sm font-mono rounded-md"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <h3 className="text-lg font-headline text-text-primary mb-4">
                  Key Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="font-body text-text-secondary">Power Output:</span>
                    <span className="font-mono text-text-primary font-body-semibold">
                      {product.power}
                    </span>
                  </div>
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between pb-3 border-b border-border"
                    >
                      <span className="font-body text-text-secondary">{spec.label}:</span>
                      <span className="font-mono text-text-primary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {product.technicalDetails.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6">
                  <h3 className="text-lg font-headline text-text-primary mb-4">
                    {section.section}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start justify-between text-sm"
                      >
                        <span className="font-body text-text-secondary">{item.label}:</span>
                        <span className="font-mono text-text-primary text-right max-w-[60%]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border bg-muted">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-text-secondary">
              Need custom specifications? Contact our engineering team
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-card text-text-primary border border-border font-cta text-sm rounded-md hover:bg-muted transition-colors duration-300"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-action text-action-foreground font-cta text-sm rounded-md hover:bg-action/90 transition-colors duration-300 flex items-center gap-2">
                <Icon name="DocumentArrowDownIcon" size={16} />
                Download Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;