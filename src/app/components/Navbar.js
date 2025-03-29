// components/Navbar.js
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/QualiFiLogo.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <Image src={Logo} alt="QualiFi Logo" width={60} height={20} priority />
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
          <a href="#benefits" className="hover:text-blue-600">Benefits</a>
          <a href="#early-access" className="hover:text-blue-600">Early Access</a>
        </div>
        <div>
          <a
            href="https://calendly.com/YOUR-CALENDLY-LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
