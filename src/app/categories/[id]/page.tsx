'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/shared/ProductCard';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '@/utils/constants';

export default function CategoryDetailPage({ params }: { params: { id: string } }) {
  const [sortBy, setSortBy] = useState<string>('featured');
  
  const category = MOCK_CATEGORIES.find(cat => cat.id === params.id);
  const products = MOCK_PRODUCTS.filter(product => product.category === category?.id.toLowerCase());

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* Sort Options */}
      <div className="mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-4 py-2"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
