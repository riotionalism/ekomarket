import { useState, ChangeEvent } from 'react';

interface Validation {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  custom?: (value: string) => boolean;
}

interface ValidationRules {
  [key: string]: Validation;
}

interface Errors {
  [key: string]: string;
}

export const useForm = <T extends { [key: string]: string }>(
  initialState: T,
  validationRules: ValidationRules
) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (name: string, value: string): string => {
    const rules = validationRules[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return `${name} is required`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return `${name} is invalid`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${name} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${name} must be less than ${rules.maxLength} characters`;
    }

    if (rules.custom && !rules.custom(value)) {
      return `${name} is invalid`;
    }

    return '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validateAll = (): boolean => {
    const newErrors: Errors = {};
    let isValid = true;

    Object.keys(values).forEach((key) => {
      const error = validate(key, values[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    handleChange,
    validateAll,
  };
};
