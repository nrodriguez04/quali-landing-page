// pages/index.js
import React from 'react';
// import MailchimpForm from '../components/MailchimpForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Automate Pre-Approvals &amp; Close More Loans
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Collect borrower documents, generate pre-approval letters, and manage deals—without chasing paperwork.
        </p>
        {/*<MailchimpForm buttonText="Get Early Access" />*/}
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why Brokers Need You</h2>
          <ul className="text-left mx-auto max-w-lg space-y-3">
            <li>🛑 Tired of wasting hours on paperwork?</li>
            <li>🛑 Losing deals waiting on borrower docs?</li>
            <li>🛑 Manually writing pre-approval letters?</li>
          </ul>
          <p className="mt-6 text-lg">
            QualiFi automates the tedious work, so you can focus on closing more loans.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">➊ Pre-Qualify Borrowers</h3>
              <p>
                Send borrowers a customizable questionnaire—VA, Self-Employed, Conventional, and more.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">➋ Collect Documents Automatically</h3>
              <p>
                Get W2s, Tax Returns, Bank Statements, and VA Forms uploaded via their portal.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold mb-2">➌ Generate Pre-Approval Letters in Minutes</h3>
              <p>
                Generate branded letters in seconds, saving hours each week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why They’ll Love It</h2>
          <ul className="space-y-3">
            <li>✅ Close Loans Faster</li>
            <li>✅ Automate Borrower Follow-Up</li>
            <li>✅ Custom Pre-Approval Letter Templates</li>
            <li>✅ Secure Document Collection</li>
            <li>✅ Easy for Borrowers, Powerful for Brokers</li>
          </ul>
        </div>
      </section>

      {/* Early Access Offer */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Get Early Access</h2>
          <p className="mb-8">
            🚀 We’re opening QualiFi to a small group of brokers in early access.
            <br />
            ✔️ Founding Members Get Exclusive Pricing
            <br />
            ✔️ Priority Feature Input
            <br />
            ✔️ Dedicated Onboarding Support
          </p>
          {/*<MailchimpForm buttonText="Get Early Access Now" />*/}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="italic text-lg">
            &quot;QualiFi saves me hours every week—I can focus on closing loans, not chasing paperwork.&quot;
          </blockquote>
          <p className="mt-4 font-bold">— [First Beta Broker Name], Broker at [Company Name]</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} QualiFi. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 text-blue-500">About QualiFi</a>
          <a href="#" className="mx-2 text-blue-500">Contact</a>
          <a href="#" className="mx-2 text-blue-500">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
