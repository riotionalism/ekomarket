'use client';

import { useState } from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  error?: string;
}

const FormInput = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  required = false,
  pattern,
  minLength,
  maxLength,
  placeholder,
  error,
}: FormInputProps) => {
  const [touched, setTouched] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm
          ${
            error && touched
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
          }
        `}
      />
      {error && touched && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
