'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';
import ComparisonModal from './ComparisonModal';
import ProductDetailsModal from './ProductDetailsModal';

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
    items: {label: string;value: string;}[];
  }[];
}

const ProductsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedEmissionNorm, setSelectedEmissionNorm] = useState('All Norms');
  const [selectedPowerRange, setSelectedPowerRange] = useState('All Ranges');
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProducts: Product[] = [
  {
    id: 'eng-001',
    name: 'GB-DG750 Diesel Engine',
    category: 'Engines',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffcc489c-1766472398367.png",
    alt: 'Industrial diesel engine with silver metallic finish showing pistons and mechanical components',
    power: '750 kW',
    emissionNorm: 'BS-VI',
    certifications: ['CPCB', 'ICAT', 'ISO 9001'],
    description: 'High-performance diesel engine designed for industrial applications with advanced emission control technology and superior fuel efficiency.',
    specifications: [
    { label: 'Displacement', value: '12.5 L' },
    { label: 'Cylinders', value: '6 Inline' },
    { label: 'Fuel System', value: 'Common Rail' },
    { label: 'Cooling', value: 'Liquid Cooled' }],

    technicalDetails: [
    {
      section: 'Performance Metrics',
      items: [
      { label: 'Max Torque', value: '3500 Nm @ 1400 rpm' },
      { label: 'Fuel Consumption', value: '195 g/kWh' },
      { label: 'Oil Capacity', value: '45 L' },
      { label: 'Operating Temp', value: '85-95°C' }]

    },
    {
      section: 'Dimensions & Weight',
      items: [
      { label: 'Length', value: '1850 mm' },
      { label: 'Width', value: '950 mm' },
      { label: 'Height', value: '1200 mm' },
      { label: 'Dry Weight', value: '1850 kg' }]

    }]

  },
  {
    id: 'gen-001',
    name: 'GB-GS500 Genset',
    category: 'Gensets',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5dddc0b-1767120189646.png",
    alt: 'Large industrial generator set with green housing and control panel in factory setting',
    power: '500 kVA',
    emissionNorm: 'CPCB-IV+',
    certifications: ['CPCB', 'ARAI', 'ISO 9001'],
    description: 'Reliable power generation solution with integrated emission control and advanced monitoring systems for continuous industrial operations.',
    specifications: [
    { label: 'Voltage', value: '415V 3-Phase' },
    { label: 'Frequency', value: '50 Hz' },
    { label: 'Power Factor', value: '0.8 Lagging' },
    { label: 'Fuel Tank', value: '1000 L' }],

    technicalDetails: [
    {
      section: 'Electrical Specifications',
      items: [
      { label: 'Prime Power', value: '500 kVA / 400 kW' },
      { label: 'Standby Power', value: '550 kVA / 440 kW' },
      { label: 'Current Rating', value: '695 A' },
      { label: 'Alternator Type', value: 'Brushless PMG' }]

    },
    {
      section: 'Control & Monitoring',
      items: [
      { label: 'Control Panel', value: 'Digital Auto Start' },
      { label: 'Protection', value: 'Over/Under Voltage & Frequency' },
      { label: 'Monitoring', value: 'Real-time Parameters Display' },
      { label: 'Communication', value: 'RS485 Modbus' }]

    }]

  },
  {
    id: 'recd-001',
    name: 'GB-RECD-300 Retrofit Kit',
    category: 'RECD',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c89268f4-1767097185182.png",
    alt: 'Stainless steel emission control device with cylindrical shape and mounting brackets',
    power: 'Up to 300 kW',
    emissionNorm: 'BS-VI',
    certifications: ['CPCB', 'ICAT'],
    description: 'Retrofit Emission Control Device for upgrading existing diesel engines to meet latest emission norms without engine replacement.',
    specifications: [
    { label: 'Filter Type', value: 'DPF + SCR' },
    { label: 'Regeneration', value: 'Passive/Active' },
    { label: 'Backpressure', value: '<50 mbar' },
    { label: 'Efficiency', value: '>95% PM Reduction' }],

    technicalDetails: [
    {
      section: 'Emission Reduction',
      items: [
      { label: 'Particulate Matter', value: '95-99% Reduction' },
      { label: 'NOx Reduction', value: '85-90% with SCR' },
      { label: 'CO Reduction', value: '70-80%' },
      { label: 'HC Reduction', value: '80-90%' }]

    },
    {
      section: 'Installation & Maintenance',
      items: [
      { label: 'Installation Time', value: '4-6 Hours' },
      { label: 'Service Interval', value: '500 Hours' },
      { label: 'Filter Life', value: '8000-10000 Hours' },
      { label: 'Warranty', value: '2 Years / 4000 Hours' }]

    }]

  },
  {
    id: 'eng-002',
    name: 'GB-DG1000 Heavy Duty Engine',
    category: 'Engines',
    image: "https://images.unsplash.com/photo-1655103955676-c9fbc4b65525",
    alt: 'Heavy duty industrial engine with black finish showing turbocharger and exhaust manifold',
    power: '1000 kW',
    emissionNorm: 'Euro-V',
    certifications: ['CPCB', 'ICAT', 'ISO 9001', 'CE'],
    description: 'Heavy-duty diesel engine for demanding industrial applications with enhanced durability and extended service intervals.',
    specifications: [
    { label: 'Displacement', value: '18.0 L' },
    { label: 'Cylinders', value: '8 V-Type' },
    { label: 'Fuel System', value: 'Electronic Control' },
    { label: 'Cooling', value: 'Liquid Cooled' }],

    technicalDetails: [
    {
      section: 'Performance Metrics',
      items: [
      { label: 'Max Torque', value: '5200 Nm @ 1300 rpm' },
      { label: 'Fuel Consumption', value: '185 g/kWh' },
      { label: 'Oil Capacity', value: '65 L' },
      { label: 'Operating Temp', value: '80-95°C' }]

    },
    {
      section: 'Dimensions & Weight',
      items: [
      { label: 'Length', value: '2200 mm' },
      { label: 'Width', value: '1100 mm' },
      { label: 'Height', value: '1400 mm' },
      { label: 'Dry Weight', value: '2650 kg' }]

    }]

  },
  {
    id: 'gen-002',
    name: 'GB-GS1250 Prime Genset',
    category: 'Gensets',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f096dab0-1764900225012.png",
    alt: 'Large industrial generator with yellow and black housing showing cooling vents and control panel',
    power: '1250 kVA',
    emissionNorm: 'Tier-4',
    certifications: ['CPCB', 'ARAI', 'ISO 9001', 'UL'],
    description: 'High-capacity prime power genset with advanced load management and remote monitoring capabilities for critical applications.',
    specifications: [
    { label: 'Voltage', value: '11 kV 3-Phase' },
    { label: 'Frequency', value: '50/60 Hz' },
    { label: 'Power Factor', value: '0.8 Lagging' },
    { label: 'Fuel Tank', value: '2500 L' }],

    technicalDetails: [
    {
      section: 'Electrical Specifications',
      items: [
      { label: 'Prime Power', value: '1250 kVA / 1000 kW' },
      { label: 'Standby Power', value: '1375 kVA / 1100 kW' },
      { label: 'Current Rating', value: '65.6 A' },
      { label: 'Alternator Type', value: 'Brushless Synchronous' }]

    },
    {
      section: 'Control & Monitoring',
      items: [
      { label: 'Control Panel', value: 'PLC Based Auto Control' },
      { label: 'Protection', value: 'Comprehensive Protection Suite' },
      { label: 'Monitoring', value: 'IoT Cloud Monitoring' },
      { label: 'Communication', value: 'Ethernet + 4G LTE' }]

    }]

  },
  {
    id: 'custom-001',
    name: 'GB-Custom Hybrid System',
    category: 'Custom Solutions',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1da356e10-1764701642630.png",
    alt: 'Modern hybrid power system with solar panels and battery storage units in industrial facility',
    power: '500 kW + 250 kWh',
    emissionNorm: 'BS-VI',
    certifications: ['CPCB', 'ICAT', 'ISO 9001'],
    description: 'Custom-engineered hybrid power solution combining diesel generation with renewable energy and battery storage for optimized efficiency.',
    specifications: [
    { label: 'Diesel Capacity', value: '500 kW' },
    { label: 'Battery Storage', value: '250 kWh' },
    { label: 'Solar Integration', value: 'Up to 200 kWp' },
    { label: 'Grid Sync', value: 'Bi-directional' }],

    technicalDetails: [
    {
      section: 'System Configuration',
      items: [
      { label: 'Operating Modes', value: 'Grid/Diesel/Battery/Hybrid' },
      { label: 'Load Management', value: 'Intelligent Auto-switching' },
      { label: 'Efficiency', value: '92% System Efficiency' },
      { label: 'Response Time', value: '<50ms Switchover' }]

    },
    {
      section: 'Smart Features',
      items: [
      { label: 'Energy Management', value: 'AI-based Optimization' },
      { label: 'Remote Control', value: 'Mobile App + Web Portal' },
      { label: 'Analytics', value: 'Real-time Energy Analytics' },
      { label: 'Integration', value: 'BMS/SCADA Compatible' }]

    }]

  }];


  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
    searchQuery === '' ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
    selectedCategory === 'All Products' || product.category === selectedCategory;

    const matchesEmission =
    selectedEmissionNorm === 'All Norms' || product.emissionNorm === selectedEmissionNorm;

    const matchesPower = (() => {
      if (selectedPowerRange === 'All Ranges') return true;
      const powerValue = parseInt(product.power);
      switch (selectedPowerRange) {
        case '0-50 kW':
          return powerValue <= 50;
        case '51-100 kW':
          return powerValue > 50 && powerValue <= 100;
        case '101-250 kW':
          return powerValue > 100 && powerValue <= 250;
        case '250+ kW':
          return powerValue > 250;
        default:
          return true;
      }
    })();

    return matchesSearch && matchesCategory && matchesEmission && matchesPower;
  });

  const handleCompare = (id: string) => {
    if (!isHydrated) return;

    setComparisonList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      }
      return prev;
    });
  };

  const handleViewDetails = (id: string) => {
    if (!isHydrated) return;
    const product = mockProducts.find((p) => p.id === id);
    setSelectedProduct(product || null);
  };

  const handleClearFilters = () => {
    if (!isHydrated) return;
    setSelectedCategory('All Products');
    setSelectedEmissionNorm('All Norms');
    setSelectedPowerRange('All Ranges');
    setSearchQuery('');
  };

  const comparisonProducts = mockProducts.filter((p) => comparisonList.includes(p.id));

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="h-96 bg-muted rounded"></div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <>
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-headline mb-3">Product Engineering Catalog</h1>
              <p className="text-lg font-body opacity-90">
                Technical specifications with compliance mapping and comparison tools
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-success/20 rounded-md">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-mono">All Products Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-2xl">
              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" />

              <input
                type="text"
                placeholder="Search products by name, specifications, or compliance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-md font-body text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary" />

            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-card border border-border rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-text-secondary hover:bg-muted'}`
                  }
                  aria-label="Grid view">

                  <Icon name="Squares2X2Icon" size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-text-secondary hover:bg-muted'}`
                  }
                  aria-label="List view">

                  <Icon name="ListBulletIcon" size={20} />
                </button>
              </div>

              {comparisonList.length > 0 &&
              <button
                onClick={() => setShowComparison(true)}
                className="px-6 py-2.5 bg-action text-action-foreground font-cta text-sm rounded-md hover:bg-action/90 transition-colors duration-300 flex items-center gap-2">

                  <Icon name="ScaleIcon" size={16} />
                  Compare ({comparisonList.length})
                </button>
              }
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterPanel
              selectedCategory={selectedCategory}
              selectedEmissionNorm={selectedEmissionNorm}
              selectedPowerRange={selectedPowerRange}
              onCategoryChange={setSelectedCategory}
              onEmissionNormChange={setSelectedEmissionNorm}
              onPowerRangeChange={setSelectedPowerRange}
              onClearFilters={handleClearFilters} />

          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-body text-text-secondary">
                Showing {filteredProducts.length} of {mockProducts.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ?
            <div className="bg-card rounded-lg shadow-md p-12 text-center">
                <Icon name="MagnifyingGlassIcon" size={48} className="mx-auto text-text-secondary mb-4" />
                <h3 className="text-xl font-headline text-text-primary mb-2">No Products Found</h3>
                <p className="text-sm font-body text-text-secondary mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                onClick={handleClearFilters}
                className="px-6 py-2.5 bg-primary text-primary-foreground font-cta text-sm rounded-md hover:bg-primary/90 transition-colors duration-300">

                  Clear All Filters
                </button>
              </div> :

            <div
              className={
              viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'
              }>

                {filteredProducts.map((product) =>
              <ProductCard
                key={product.id}
                product={product}
                onCompare={handleCompare}
                onViewDetails={handleViewDetails}
                isComparing={comparisonList.includes(product.id)} />

              )}
              </div>
            }
          </div>
        </div>
      </div>

      {showComparison &&
      <ComparisonModal
        products={comparisonProducts}
        onClose={() => setShowComparison(false)}
        onRemove={handleCompare} />

      }

      {selectedProduct &&
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)} />

      }
    </>);

};

export default ProductsInteractive;