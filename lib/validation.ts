/**
 * Form validation utilities for contact form
 */

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validates email format using a standard email regex pattern
 * @param email - The email string to validate
 * @returns true if email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== "string") {
    return false;
  }

  // Standard email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates that a required field is not empty
 * @param value - The value to validate
 * @returns true if value is not empty, false otherwise
 */
export function validateRequired(value: string): boolean {
  if (typeof value !== "string") {
    return false;
  }

  return value.trim().length > 0;
}

/**
 * Gets validation errors for contact form data
 * @param data - Form data containing name, email, and message
 * @returns Array of validation errors, empty if all valid
 */
export function getValidationErrors(data: {
  name: string;
  email: string;
  message: string;
}): ValidationError[] {
  const errors: ValidationError[] = [];

  // Validate name
  if (!validateRequired(data.name)) {
    errors.push({
      field: "name",
      message: "Name is required",
    });
  }

  // Validate email
  if (!validateRequired(data.email)) {
    errors.push({
      field: "email",
      message: "Email is required",
    });
  } else if (!validateEmail(data.email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  }

  // Validate message
  if (!validateRequired(data.message)) {
    errors.push({
      field: "message",
      message: "Message is required",
    });
  }

  return errors;
}
