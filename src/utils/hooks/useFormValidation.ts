import { reactive } from 'vue';
import { ErrorFields } from '../types';

const errors: ErrorFields = reactive({});

function useValidators() {
  const isEmpty = (fieldName: string, fieldValue: string): string => {
    return !fieldValue ? `${fieldName} field is required` : '';
  };

  const minLength = (fieldName: string, fieldValue: string, min: number): string => {
    return fieldValue.length < min
      ? `${fieldName} field must be atleast ${min} characters long`
      : '';
  };

  const isEmail = (fieldName: string, fieldValue: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(fieldValue) ? `is not a valid ${fieldName} address` : '';
  };
  return { isEmail, isEmpty, minLength };
}

export default function useFormValidation(): {
  errors: ErrorFields;
  validateEmailField: (x: string, y: string) => void;
  validatePasswordField: (x: string, y: string, z: number) => void;
} {
  const { isEmail, isEmpty, minLength } = useValidators();

  const validateEmailField = (fieldName: string, fieldValue: string) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : isEmail(fieldName, fieldValue);
  };

  const validatePasswordField = (fieldName: string, fieldValue: string, min: number) => {
    errors[fieldName] = !fieldValue
      ? isEmpty(fieldName, fieldValue)
      : minLength(fieldName, fieldValue, min);
  };

  return { errors, validateEmailField, validatePasswordField };
}
