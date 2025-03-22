// components/MailchimpForm.js
import React from 'react';

export default function MailchimpForm({ buttonText = "Get Early Access" }) {
  return (
    <form
      action="https://YOUR_DC.usXX.list-manage.com/subscribe/post?u=YOUR_U&amp;id=YOUR_ID"
      method="post"
      target="_blank"
      noValidate
      className="flex flex-col sm:flex-row justify-center items-center"
    >
      <input
        type="email"
        name="EMAIL"
        placeholder="Enter your email"
        required
        className="w-full sm:w-auto px-4 py-2 border rounded mb-4 sm:mb-0"
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
