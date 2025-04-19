'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { MOCK_PRODUCTS } from '@/utils/constants';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { showToast } = useToast();

  // Find product from mock data
  const product = MOCK_PRODUCTS.find(p => p.id === params.id) || MOCK_PRODUCTS[0];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image
    });
    showToast('Product added to cart!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} (120 reviews)
              </span>
            </div>
            <div className="ml-4 px-2 py-1 bg-green-100 rounded-full">
              <span className="text-sm text-green-800">
                Sustainability Score: {product.sustainabilityScore}/10
              </span>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-900 mb-4">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">
              Seller: {product.seller}
            </p>
            <p className="text-sm text-gray-500">
              Stock: {product.stock} units available
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 border-r hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="px-3 py-2 border-l hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">Sustainability Impact:</h3>
            <p className="text-gray-600">
              By choosing this product, you're supporting sustainable manufacturing
              practices and reducing plastic waste. This product is made from
              renewable resources and is fully biodegradable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
