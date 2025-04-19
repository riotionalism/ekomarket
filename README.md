# 🌱 EcoMarket - Sustainable Community Market Platform

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://ekomarket-nu.vercel.app/)
[![GitHub](https://img.shields.io/github/stars/riotionalism/ekomarket?style=social)](https://github.com/riotionalism/ekomarket)

## 🌐 Live Demo
Check out our live demo at [ekomarket-nu.vercel.app](https://ekomarket-nu.vercel.app/)

## 📋 Overview

EcoMarket is a modern e-commerce platform built with Next.js 14, focusing on sustainable and eco-friendly products. The platform connects local producers with environmentally conscious consumers, promoting sustainable practices and supporting local communities.

## ✨ Features

### 🛍️ For Shoppers
- **Product Browsing**: Explore sustainable products with detailed information
- **Category Navigation**: Filter products by eco-friendly categories
- **Shopping Cart**: Real-time cart management with quantity controls
- **User Authentication**: Secure login and registration system
- **Order Management**: Track orders and view order history
- **Profile Management**: Personalize your shopping experience

### 🌿 Sustainability Focus
- **Sustainability Scoring**: Products rated on eco-friendliness (1-10)
- **Eco-friendly Categories**: Including:
  - Kitchen & Dining
  - Fashion
  - Home & Living
  - Beauty & Personal Care
  - Garden & Outdoor
  - Zero Waste

## 🔄 User Flow Diagram

![EcoMarket User Flow](./public/user-flow-diagram.png)

### Flow Description

#### 1. Authentication Flow
- Users start at Landing Page
- Check User Status
  - If Not Logged In → Login/Register options
  - If Logged In → Direct to User Dashboard
- Login/Register Process:
  - Login Form or Registration Form
  - Authentication verification
  - Success → User Dashboard
  - Fail → Back to Login/Register

#### 2. Main Dashboard Features
User Dashboard provides access to:
- Browse Products
- Search Products
- View Categories
- View Profile
- View Cart

#### 3. Product Discovery
- Browse Products → Product List
- Search Products → Product List
- View Categories → Category List → Category Products
- All paths lead to Product Details

#### 4. Profile Management
View Profile branches into:
- Personal Info
- Order History
- Settings

#### 5. Shopping Flow
- Product Details → Add to Cart
- View Cart → Shopping Cart
- Cart Operations:
  - Remove Item
  - Checkout Process
- Checkout Flow:
  1. Shipping Details
  2. Payment Information
  3. Process Payment
  4. Order Confirmation
  5. Order Success

### Color Legend
- 🔷 Blue: Authentication related flows
- 🟩 Green: Product and success related flows
- 🟧 Orange: Cart and checkout related flows
- ⬜ White: General navigation and user profile

This flow diagram illustrates the complete user journey through the EcoMarket platform, from initial access to order completion. Each step is designed to provide a seamless and intuitive experience while maintaining security and functionality.

## 🛠️ Technical Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI/UX**: 
  - Framer Motion for animations
  - Headless UI for accessible components
  - Heroicons for icons
- **State Management**: React Context API
- **Testing**: Jest & React Testing Library

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/riotionalism/ekomarket.git

# Install dependencies
cd ekomarket
npm install

# Run development server
npm run dev

# Run tests
npm run test
```

## 📁 Project Structure
src/
├── app/ # Next.js app router pages
├── components/
│ ├── ui/ # Reusable UI components
│ ├── shared/ # Shared components
│ ├── layout/ # Layout components
│ └── providers/ # Context providers
├── context/ # Application state management
├── hooks/ # Custom React hooks
├── types/ # TypeScript definitions
└── utils/ # Utility functions

## 🔐 Authentication

Demo accounts available for testing:

Regular User:
Email: user@example.com
Password: password123

Admin User:
Email: admin@example.com
Password: admin123

## 🌟 Key Features Implementation

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Cart Management**: Real-time updates with Context API
- **Authentication**: Secure user sessions with middleware protection
- **Product Categories**: Easy navigation with filtered views
- **Checkout Process**: Streamlined purchase flow
- **Profile Management**: User dashboard with order history

## 🚀 Deployment

This project is deployed on [Vercel](https://ekomarket-nu.vercel.app/), offering:
- Automatic deployments
- Edge functions
- Image optimization
- API routes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- [@riotionalism](https://github.com/riotionalism)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Vercel](https://vercel.com/) for hosting
- All contributors and supporters of the project

---
⭐️ If you like this project, please give it a star on [GitHub](https://github.com/riotionalism/ekomarket)!

