import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Order Successful!
        </h1>
        <p className="mt-4 text-gray-600">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <div className="mt-8">
          <Link
            href="/products"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
