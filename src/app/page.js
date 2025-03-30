// pages/index.js
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UploadCloud, BadgeCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import MailchimpForm from './components/MailchimpForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-cover bg-center text-center text-white py-60 px-4 relative"
        style={{ backgroundImage: "url('/darkBlueAbstract.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Automate Pre-Approvals &amp; Close More Loans
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Collect borrower documents, generate pre-approval letters, and manage deals—without chasing paperwork.
          </p>
          <MailchimpForm buttonText="Get Early Access" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#f3f4f6" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-gray-100">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-6">Why Brokers Need You</h2>
          <ul className="text-left mx-auto max-w-lg space-y-3">
            <li>🛑 Tired of wasting hours on paperwork?</li>
            <li>🛑 Losing deals waiting on borrower docs?</li>
            <li>🛑 Manually writing pre-approval letters?</li>
          </ul>
          <p className="mt-6 text-lg">
            QualiFi automates the tedious work, so you can focus on closing more loans.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="p-6 bg-white rounded shadow" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.4 }}>
              <div className="flex items-center mb-2 space-x-2">
                <FileText className="text-blue-600" />
                <h3 className="text-xl font-bold">Pre-Qualify Borrowers</h3>
              </div>
              <p>
                Send borrowers a customizable questionnaire—VA, Self-Employed, Conventional, and more.
              </p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded shadow" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center mb-2 space-x-2">
                <UploadCloud className="text-blue-600" />
                <h3 className="text-xl font-bold">Collect Documents Automatically</h3>
              </div>
              <p>
                Get W2s, Tax Returns, Bank Statements, and VA Forms uploaded via their portal.
              </p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded shadow" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center mb-2 space-x-2">
                <BadgeCheck className="text-blue-600" />
                <h3 className="text-xl font-bold">Generate Pre-Approval Letters</h3>
              </div>
              <p>
                Generate branded letters in seconds, saving hours each week.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-bold mb-6">Why They&apos;ll Love It</h2>
          <ul className="space-y-3">
            <li>✅ Close Loans Faster</li>
            <li>✅ Automate Borrower Follow-Up</li>
            <li>✅ Custom Pre-Approval Letter Templates</li>
            <li>✅ Secure Document Collection</li>
            <li>✅ Easy for Borrowers, Powerful for Brokers</li>
          </ul>
        </motion.div>
      </section>

      {/* Early Access Offer */}
      <section className="py-16">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-6">Get Early Access</h2>
          <p className="mb-8">
            🚀 We&apos;re opening QualiFi to a small group of brokers in early access.
            <br />
            ✔️ Founding Members Get Exclusive Pricing
            <br />
            ✔️ Priority Feature Input
            <br />
            ✔️ Dedicated Onboarding Support
          </p>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-100">
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <blockquote className="italic text-lg">
            &quot;QualiFi saves me hours every week—I can focus on closing loans, not chasing paperwork.&quot;
          </blockquote>
          <p className="mt-4 font-bold">— [First Beta Broker Name], Broker at [Company Name]</p>
        </motion.div>
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