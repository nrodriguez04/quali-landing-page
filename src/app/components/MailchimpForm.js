// components/MailchimpForm.js
import React from 'react';

export default function MailchimpForm({ buttonText = "Get Early Access" }) {
  return (
    <form
    action="https://YOUR_MAILCHIMP_URL"
    method="post"
    target="_blank"
    noValidate
    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2"
  >
    <input
      type="email"
      name="EMAIL"
      placeholder="Enter your email"
      required
      className="w-full sm:w-auto px-4 py-2 border rounded"
    />
    <button
      type="submit"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      {buttonText}
    </button>
  </form>
  );
}
