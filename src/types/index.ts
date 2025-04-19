export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  rating: number;
  stock: number;
  sustainabilityScore: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}
