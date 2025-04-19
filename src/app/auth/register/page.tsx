'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FormInput from '@/components/ui/FormInput';
import { useForm } from '@/hooks/useForm';

const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  },
  confirmPassword: {
    required: true,
    custom: (value: string) => value === password,
  },
};

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [serverError, setServerError] = useState('');

  const { values, errors, handleChange, validateAll } = useForm(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationRules
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!validateAll()) {
      return;
    }

    try {
      await register(values.email, values.password, values.name);
      router.push('/profile');
    } catch (err) {
      setServerError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href="/auth/login"
              className="font-medium text-green-600 hover:text-green-500"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {serverError && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{serverError}</div>
            </div>
          )}

          <div className="space-y-4">
            <FormInput
              id="name"
              name="name"
              type="text"
              label="Full Name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <FormInput
              id="email"
              name="email"
              type="email"
              label="Email address"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <FormInput
              id="password"
              name="password"
              type="password"
              label="Password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
