/**
 * Feature: portfolio-website, Property 10: Contact form validation
 * Validates: Requirements 8.3
 *
 * Property: For any contact form submission with missing required fields
 * (name, email, or message), the form should display validation errors
 * and prevent submission
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { getValidationErrors } from "@/lib/validation";

// Generator for whitespace strings (empty or only whitespace)
const whitespaceStringArb = fc.oneof(
  fc.constant(""),
  fc.constant("   "),
  fc.constant("\t"),
  fc.constant("\n"),
  fc.constant("  \t  \n  ")
);

// Generator for non-empty strings
const nonEmptyStringArb = fc.string({ minLength: 1, maxLength: 100 });

// Generator for invalid email strings (no @ symbol)
const invalidEmailArb = fc
  .string({ minLength: 1, maxLength: 50 })
  .filter((s) => !s.includes("@") && s.trim().length > 0);

describe("Contact Form Validation Property Tests", () => {
  it("should return validation error when name field is empty or whitespace", () => {
    fc.assert(
      fc.property(
        whitespaceStringArb,
        fc.emailAddress(),
        nonEmptyStringArb,
        (name, email, message) => {
          const errors = getValidationErrors({ name, email, message });

          // Should have at least one error (for name)
          expect(errors.length).toBeGreaterThan(0);

          // Should have a name error
          const nameError = errors.find((e) => e.field === "name");
          expect(nameError).toBeDefined();
          expect(nameError?.message).toContain("required");
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should return validation error when email field is empty or whitespace", () => {
    fc.assert(
      fc.property(
        nonEmptyStringArb,
        whitespaceStringArb,
        nonEmptyStringArb,
        (name, email, message) => {
          const errors = getValidationErrors({ name, email, message });

          // Should have at least one error (for email)
          expect(errors.length).toBeGreaterThan(0);

          // Should have an email error
          const emailError = errors.find((e) => e.field === "email");
          expect(emailError).toBeDefined();
          expect(emailError?.message).toContain("required");
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should return validation error when email format is invalid", () => {
    fc.assert(
      fc.property(
        nonEmptyStringArb,
        invalidEmailArb,
        nonEmptyStringArb,
        (name, email, message) => {
          const errors = getValidationErrors({ name, email, message });

          // Should have at least one error (for invalid email)
          expect(errors.length).toBeGreaterThan(0);

          // Should have an email error
          const emailError = errors.find((e) => e.field === "email");
          expect(emailError).toBeDefined();
          expect(emailError?.message).toContain("valid email");
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should return validation error when message field is empty or whitespace", () => {
    fc.assert(
      fc.property(
        nonEmptyStringArb,
        fc.emailAddress(),
        whitespaceStringArb,
        (name, email, message) => {
          const errors = getValidationErrors({ name, email, message });

          // Should have at least one error (for message)
          expect(errors.length).toBeGreaterThan(0);

          // Should have a message error
          const messageError = errors.find((e) => e.field === "message");
          expect(messageError).toBeDefined();
          expect(messageError?.message).toContain("required");
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should return multiple validation errors when all fields are empty", () => {
    fc.assert(
      fc.property(
        whitespaceStringArb,
        whitespaceStringArb,
        whitespaceStringArb,
        (name, email, message) => {
          const errors = getValidationErrors({ name, email, message });

          // Should have exactly 3 errors (one for each field)
          expect(errors.length).toBe(3);

          // Should have errors for all three fields
          const fieldNames = errors.map((e) => e.field).sort();
          expect(fieldNames).toEqual(["email", "message", "name"]);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should return no errors when all fields are valid", () => {
    fc.assert(
      fc.property(
        nonEmptyStringArb,
        fc.emailAddress(),
        nonEmptyStringArb,
        (name, email, message) => {
          const errors = getValidationErrors({ name, email, message });

          // Should have no errors
          expect(errors.length).toBe(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should validate that all errors have required properties", () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string(),
          email: fc.string(),
          message: fc.string(),
        }),
        (formData) => {
          const errors = getValidationErrors(formData);

          // Each error should have field and message properties
          errors.forEach((error) => {
            expect(error).toHaveProperty("field");
            expect(error).toHaveProperty("message");
            expect(typeof error.field).toBe("string");
            expect(typeof error.message).toBe("string");
            expect(error.field.length).toBeGreaterThan(0);
            expect(error.message.length).toBeGreaterThan(0);
          });

          // Field names should be valid
          const validFields = ["name", "email", "message"];
          errors.forEach((error) => {
            expect(validFields).toContain(error.field);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should prevent submission when validation errors exist (integration test)", () => {
    fc.assert(
      fc.property(
        fc.record({
          name: whitespaceStringArb,
          email: whitespaceStringArb,
          message: whitespaceStringArb,
        }),
        (formData) => {
          const errors = getValidationErrors(formData);

          // When there are validation errors, submission should be prevented
          // This is verified by checking that errors array is not empty
          const shouldPreventSubmission = errors.length > 0;
          expect(shouldPreventSubmission).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});
