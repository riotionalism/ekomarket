export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          About Sustainable Community Market
        </h1>
        
        <div className="prose prose-green">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to EcoMarket, your platform for sustainable and eco-friendly products from local communities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-6">
            We aim to connect local producers with conscious consumers, promoting sustainable practices and supporting local communities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Direct connection with local producers</li>
            <li>Verified sustainable products</li>
            <li>Transparent supply chain</li>
            <li>Support for local communities</li>
            <li>Eco-friendly packaging options</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Sustainability Commitment
          </h2>
          <p className="text-gray-600 mb-6">
            Every product on our platform is evaluated for its environmental impact and sustainability practices. We ensure that all sellers follow our strict environmental guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
