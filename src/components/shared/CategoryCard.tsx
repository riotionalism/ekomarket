'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={`/categories/${category.id}`}>
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <div className="relative h-48 w-full">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
            <p className="text-sm text-gray-200">{category.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
