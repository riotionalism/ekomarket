const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              EcoMarket
            </h3>
            <p className="text-gray-600 mb-4">
              Connecting local communities with sustainable products for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-600 hover:text-green-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/categories" className="text-gray-600 hover:text-green-600">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Email: contact@ecomarket.com
              </li>
              <li className="text-gray-600">
                Phone: (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} EcoMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
