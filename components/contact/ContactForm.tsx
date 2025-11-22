"use client";

import { useState, FormEvent } from "react";
import { getValidationErrors, ValidationError } from "@/lib/validation";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getFieldError = (field: string): string | undefined => {
    return errors.find((error) => error.field === field)?.message;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors.length > 0) {
      setErrors((prev) => prev.filter((error) => error.field !== name));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const validationErrors = getValidationErrors(formData);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear any previous errors
    setErrors([]);
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setIsSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg 
            focus:outline-none focus:ring-2 transition-all
            ${
              getFieldError("name")
                ? "border-red-500 focus:ring-red-500/50"
                : "border-gray-700 focus:ring-blue-500/50 focus:border-blue-500"
            }`}
          placeholder="Your name"
        />
        {getFieldError("name") && (
          <p className="mt-2 text-sm text-red-400">{getFieldError("name")}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg 
            focus:outline-none focus:ring-2 transition-all
            ${
              getFieldError("email")
                ? "border-red-500 focus:ring-red-500/50"
                : "border-gray-700 focus:ring-blue-500/50 focus:border-blue-500"
            }`}
          placeholder="your.email@example.com"
        />
        {getFieldError("email") && (
          <p className="mt-2 text-sm text-red-400">{getFieldError("email")}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg 
            focus:outline-none focus:ring-2 transition-all resize-none
            ${
              getFieldError("message")
                ? "border-red-500 focus:ring-red-500/50"
                : "border-gray-700 focus:ring-blue-500/50 focus:border-blue-500"
            }`}
          placeholder="Your message..."
        />
        {getFieldError("message") && (
          <p className="mt-2 text-sm text-red-400">
            {getFieldError("message")}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
          text-white font-medium rounded-lg
          hover:from-blue-700 hover:to-indigo-700
          focus:outline-none focus:ring-2 focus:ring-blue-500/50
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {/* Success Message */}
      {isSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
          <p className="text-green-400 text-center">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}
    </form>
  );
}
