export const SITE_TITLE = 'EcoMarket';
export const SITE_DESCRIPTION = 'Sustainable Community Market Platform';

export const MOCK_CATEGORIES = [
  {
    id: 'kitchen',
    name: 'Kitchen & Dining',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f',
    description: 'Eco-friendly kitchen and dining products'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
    description: 'Sustainable fashion and accessories'
  },
  {
    id: 'home',
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    description: 'Sustainable home products'
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    description: 'Natural and organic beauty products'
  },
  {
    id: 'garden',
    name: 'Garden & Outdoor',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    description: 'Eco-friendly gardening and outdoor products'
  },
  {
    id: 'zero-waste',
    name: 'Zero Waste',
    image: 'https://images.unsplash.com/photo-1584684367555-aadf8d4c4f9c',
    description: 'Products for a zero-waste lifestyle'
  }
];

export const NAV_LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
];

export const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Organic Bamboo Utensil Set',
    description: 'Eco-friendly bamboo utensil set including fork, knife, spoon, and chopsticks. Perfect for sustainable dining on-the-go.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1584346133934-a3bd1c5de257',
    rating: 4.5,
    stock: 15,
    sustainabilityScore: 9,
    category: 'kitchen',
    features: [
      'Made from 100% organic bamboo',
      'Biodegradable and compostable',
      'Durable and long-lasting',
      'Naturally antibacterial',
      'Includes carrying case'
    ],
    seller: 'EcoLife Essentials'
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Perfect for everyday wear.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    rating: 4.8,
    stock: 25,
    sustainabilityScore: 8,
    category: 'fashion',
    features: [
      '100% organic cotton',
      'Fair trade certified',
      'No harmful chemicals',
      'Biodegradable materials',
      'Water-saving production'
    ],
    seller: 'Green Fashion Co.'
  }
];

export const SUSTAINABILITY_CRITERIA = [
  'Eco-friendly Materials',
  'Sustainable Production',
  'Fair Trade',
  'Local Sourcing',
  'Recyclable Packaging',
];
