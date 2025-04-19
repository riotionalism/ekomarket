import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/shared/ProductCard';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock next/link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
}));

describe('ProductCard', () => {
  const mockProduct = {
    id: '1',
    name: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    image: '/test-image.jpg',
    rating: 4.5,
    stock: 10,
    sustainabilityScore: 9,
    category: 'test',
    seller: 'Test Seller'
  };

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} index={0} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});
