import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  specifications: {
    label: string;
    value: string;
  }[];
  certifications: string[];
}

const ProductShowcase = () => {
  const products: Product[] = [
  {
    id: '1',
    category: 'Diesel Engines',
    name: 'CPCB IV+ Compliant Engine Series',
    description: 'High-performance diesel engines meeting latest emission norms with advanced fuel injection technology and optimized combustion systems.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c20823ba-1767354682797.png",
    alt: 'Modern CPCB compliant diesel engine with green components and advanced fuel injection system',
    specifications: [
    { label: 'Power Range', value: '10-100 HP' },
    { label: 'Emission Norm', value: 'CPCB IV+' },
    { label: 'Fuel Efficiency', value: '35% improved' }],

    certifications: ['CPCB', 'ICAT', 'ARAI']
  },
  {
    id: '2',
    category: 'Generator Sets',
    name: 'Industrial Genset Solutions',
    description: 'Reliable power generation systems with integrated emission control, remote monitoring, and automatic load management capabilities.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f130338-1765517574985.png",
    alt: 'Industrial generator set with digital control panel and emission monitoring system in factory setting',
    specifications: [
    { label: 'Power Output', value: '25-500 KVA' },
    { label: 'Runtime', value: '24/7 continuous' },
    { label: 'Noise Level', value: '&lt;75 dB' }],

    certifications: ['CPCB', 'ISO 9001']
  },
  {
    id: '3',
    category: 'Retrofit Solutions',
    name: 'RECD Emission Control Devices',
    description: 'Retrofit emission control devices for existing engines, enabling compliance with current norms without complete engine replacement.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17d56a47d-1769176508016.png",
    alt: 'Retrofit emission control device with catalytic converter and digital monitoring sensors',
    specifications: [
    { label: 'Emission Reduction', value: 'Up to 90%' },
    { label: 'Compatibility', value: 'Universal fit' },
    { label: 'Installation', value: '4-6 hours' }],

    certifications: ['CPCB', 'ARAI']
  }];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Icon name="CubeIcon" size={20} className="text-primary" />
            <span className="text-sm font-mono text-primary">Product Engineering</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-secondary mb-4">
            Compliance-First Power Generation Solutions
          </h2>
          
          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Every product is designed, tested, and certified to meet or exceed regulatory requirements. Technical specifications and compliance documentation available for all solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product) =>
          <div
            key={product.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">

              <div className="relative h-64 bg-surface overflow-hidden">
                <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-mono rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
                  {product.certifications.map((cert, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-success/90 text-success-foreground text-xs font-mono rounded">

                      {cert}
                    </span>
                )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-headline font-bold text-secondary mb-3">
                  {product.name}
                </h3>
                
                <p className="text-sm text-text-secondary font-body leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.specifications.map((spec, index) =>
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0">

                      <span className="text-xs text-text-secondary font-body">{spec.label}</span>
                      <span className="text-xs font-mono text-secondary font-semibold">{spec.value}</span>
                    </div>
                )}
                </div>
                
                <div className="flex gap-3">
                  <Link
                  href="/products"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300">

                    View Details
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                  <button className="px-4 py-2.5 bg-surface text-secondary border border-border font-body font-semibold text-sm rounded-lg hover:bg-muted transition-colors duration-300">
                    <Icon name="DocumentArrowDownIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-cta text-base rounded-lg hover:bg-secondary/90 transition-colors duration-300 shadow-md">

            Explore Complete Product Catalog
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>);

};

export default ProductShowcase;